import { describe, it, expect } from "vitest";
import { checkForWinner } from "../utils/checkForWinner";

const emptyBoard = () =>
  Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => [0, 0, 0]));

const place = (cells, player) => {
  const board = emptyBoard();
  for (const [x, y, z] of cells) board[x][y][z] = player;
  return board;
};

// Every straight line of three in a 3x3x3 cube: 49 in total.
const allWinningLines = () => {
  const directions = [];
  for (const dx of [-1, 0, 1])
    for (const dy of [-1, 0, 1])
      for (const dz of [-1, 0, 1]) if (dx || dy || dz) directions.push([dx, dy, dz]);

  const lines = new Map();
  const inBounds = (n) => n >= 0 && n < 3;
  for (let x = 0; x < 3; x++)
    for (let y = 0; y < 3; y++)
      for (let z = 0; z < 3; z++)
        for (const [dx, dy, dz] of directions) {
          const line = [0, 1, 2].map((i) => [x + dx * i, y + dy * i, z + dz * i]);
          if (line.every((cell) => cell.every(inBounds))) {
            const key = JSON.stringify([...line].map(String).sort());
            lines.set(key, line);
          }
        }
  return [...lines.values()];
};

describe("checkForWinner", () => {
  it("returns no winner for an empty board", () => {
    expect(checkForWinner(emptyBoard())).toBeFalsy();
  });

  const lines = allWinningLines();

  it("knows about all 49 winning lines", () => {
    expect(lines).toHaveLength(49);
  });

  it.each(lines.map((line) => [JSON.stringify(line), line]))(
    "detects a win along %s",
    (_, line) => {
      expect(checkForWinner(place(line, 1))).toBe(1);
      expect(checkForWinner(place(line, 2))).toBe(2);
    }
  );

  it.each(lines.map((line) => [JSON.stringify(line.slice(0, 2)), line.slice(0, 2)]))(
    "does not declare a winner for just two in a row: %s",
    (_, cells) => {
      expect(checkForWinner(place(cells, 1))).toBeFalsy();
    }
  );

  it("does not declare a winner for a mixed line", () => {
    const board = place([[0, 0, 0], [0, 0, 1]], 1);
    board[0][0][2] = 2;
    expect(checkForWinner(board)).toBeFalsy();
  });
});
