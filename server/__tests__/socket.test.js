const { createServer } = require('http');
const { Server } = require('socket.io');
const Client = require('socket.io-client');
const registerSocketHandlers = require('../socket');

describe('tic-tac-toe socket server', () => {
  let io;
  let url;
  const clients = [];

  const connect = () =>
    new Promise((resolve) => {
      const client = Client(url, { forceNew: true, transports: ['websocket'] });
      clients.push(client);
      client.on('connect', () => resolve(client));
    });

  const once = (client, event) => new Promise((resolve) => client.once(event, resolve));

  const createRoom = async (host) => {
    host.emit('newGame');
    return once(host, 'issueRoomName');
  };

  beforeAll((done) => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    const httpServer = createServer();
    io = new Server(httpServer);
    registerSocketHandlers(io);
    httpServer.listen(() => {
      url = `http://localhost:${httpServer.address().port}`;
      done();
    });
  });

  afterEach(() => {
    while (clients.length) clients.pop().close();
  });

  afterAll(() => {
    io.close();
    console.log.mockRestore();
  });

  it('issues a five-character room code for a new game', async () => {
    const host = await connect();
    const roomName = await createRoom(host);
    expect(roomName).toMatch(/^[A-Z0-9]{5}$/);
  });

  it('lets a second player join and tells both players who starts', async () => {
    const host = await connect();
    const guest = await connect();
    const roomName = await createRoom(host);

    const hostConfirm = once(host, 'confirmJoin');
    const guestConfirm = once(guest, 'confirmJoin');
    guest.emit('joinRoomName', roomName);

    const [hostMsg, guestMsg] = await Promise.all([hostConfirm, guestConfirm]);
    expect(hostMsg).toEqual(guestMsg);
    expect(hostMsg.roomName).toBe(roomName);
    expect(typeof hostMsg.playerOneTurn).toBe('boolean');
  });

  it('rejects unknown room codes', async () => {
    const guest = await connect();
    guest.emit('joinRoomName', 'NOPE1');
    await expect(once(guest, 'noSuchRoom')).resolves.toBe('NOPE1');
  });

  it('rejects a third player', async () => {
    const [host, guest, extra] = await Promise.all([connect(), connect(), connect()]);
    const roomName = await createRoom(host);
    guest.emit('joinRoomName', roomName);
    await once(guest, 'confirmJoin');

    extra.emit('joinRoomName', roomName);
    await expect(once(extra, 'roomFull')).resolves.toBe(roomName);
  });

  it('relays moves and rematch requests to everyone in the room', async () => {
    const host = await connect();
    const guest = await connect();
    const roomName = await createRoom(host);
    guest.emit('joinRoomName', roomName);
    await once(guest, 'confirmJoin');

    const move = { x: 1, y: 1, z: 1 };
    const update = once(guest, 'gameUpdate');
    host.emit('squareClicked', { positionValues: move, roomName });
    await expect(update).resolves.toEqual(move);

    const proposal = once(host, 'proposeRematch');
    guest.emit('requestRematch', roomName);
    await proposal;

    const confirm = once(guest, 'confirmRematch');
    host.emit('acceptRematch', roomName);
    expect(typeof (await confirm)).toBe('boolean');
  });
});
