import { describe, it, expect } from "vitest";
import reducer, {
  setPlayerTurn,
  setGameState,
  setWinner,
  resetGame,
  setRoomName,
} from "../redux/gameSlice";

describe("gameSlice", () => {
  it("marks squares for the current player and alternates turns", () => {
    let state = reducer(undefined, setPlayerTurn(true));
    state = reducer(state, setGameState({ x: 0, y: 1, z: 2 }));
    expect(state.gameState[0][1][2]).toBe(1);
    expect(state.playerOneTurn).toBe(false);

    state = reducer(state, setGameState({ x: 2, y: 2, z: 2 }));
    expect(state.gameState[2][2][2]).toBe(2);
    expect(state.playerOneTurn).toBe(true);
  });

  it("resets the board and winner but keeps the room", () => {
    let state = reducer(undefined, setRoomName("ABCDE"));
    state = reducer(state, setPlayerTurn(true));
    state = reducer(state, setGameState({ x: 1, y: 1, z: 1 }));
    state = reducer(state, setWinner(1));

    state = reducer(state, resetGame());
    expect(state.winner).toBe(0);
    expect(state.playerOneTurn).toBeNull();
    expect(state.gameState.flat(2).every((cell) => cell === 0)).toBe(true);
    expect(state.roomName).toBe("ABCDE");
  });
});
