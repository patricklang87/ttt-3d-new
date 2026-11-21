<h1 align="center">TicTacToe 3D Multiplayer</h1>

<p align="center">A webapp for two-player tictactoe. I wrote this application to practice socket.io and the creation and manipulation of 3-dimensional objects in CSS.</p>

## Links

- [Repo](https://github.com/patricklang87/ttt-3d-new/)
- [Deployment](https://ttt-3d.onrender.com/)

## Screenshots

### Desktop

<img src="https://user-images.githubusercontent.com/73432960/132587479-ee251be0-37b1-453a-882f-3d6076727159.JPG" alt="startscreen" width="600"/>
<img src="https://user-images.githubusercontent.com/73432960/132587469-56b6bea3-b0b6-4b26-acd7-df1629fb77e6.JPG" alt="awaiting" width="600"/>
<img src="https://user-images.githubusercontent.com/73432960/132587483-1c517234-8930-4729-8a36-de59d6169d4e.JPG" alt="gameplay" width="600"/>

### Mobile

![startscreen_mobile](https://user-images.githubusercontent.com/73432960/132587503-58c13b8f-40c7-453f-b337-882050064052.JPG)
![gameplay_mobile](https://user-images.githubusercontent.com/73432960/132587513-be7a7e7b-78d3-454d-a69f-fe1014f7d7e4.JPG)
![completed_game_mobile](https://user-images.githubusercontent.com/73432960/132587516-14d459ce-f08a-48f7-92a2-6f19abf4fce7.JPG)

## How to play

One player creates a game and shares the five-character room code. The second player joins with that code, and a coin flip decides who goes first. Players take turns placing marks on the three stacked boards. The first to get three in a row wins, on a single board or straight through the cube (49 possible lines). After a game, either player can request a rematch.

The game is deployed on Render's free tier, so the first page load can take about 40 seconds while the server wakes up.

## Project structure

```
├── client/   # Vite + React + Redux front end (3D board built with CSS transforms)
└── server/   # Express + Socket.io server: manages rooms and relays moves
    └── dist/ # Production build of the client, served by the Express server
```

## Run the project

```bash
# Build the client into the server's dist folder
cd client
npm install
npm run build
rm -rf ../server/dist && cp -R dist ../server/dist

# Start the server
cd ../server
npm install
npm start
```

Then open http://localhost:4000 in two browser windows to play against yourself.

## Run the tests

```bash
cd client && npm test   # Vitest: winner detection on all 49 lines, Redux game state
cd server && npm test   # Jest: socket.io room creation, joining, moves and rematches
```

Tests run on every push and pull request via GitHub Actions.

## Built with

- JavaScript
- Node
- NPM

### Frontend
- HTML
- CSS
- React
- Redux


### Backend
- Express
- Socket.io

### Testing
- Vitest
- Jest

## Possible Future Updates

- [ ] Recognize and alert users when their partner has disconnected.
 
## Author

**Patrick Lang**

- [Profile](https://github.com/patricklang87 "Patrick Lang")
- [Email](mailto:patricklang87@gmail.com?subject=3DtttMP "3D tictactoe")
