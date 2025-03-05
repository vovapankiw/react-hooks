import { CellValue } from "../types/cellValue";
import { GameResult, GameState } from "../types/gameResult";

// This algorithm works only for 3X3 board
export const calculateGameResult = (squares: CellValue[]): GameState => {
  const winner = getWinner(squares);

  if (winner) return { result: GameResult.Win, winner };

  if (isDraw(squares)) return { result: GameResult.Draw, winner: null };

  return { result: GameResult.Play, winner: null };
};

const getWinner = (squares: CellValue[]): CellValue => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;

    if (
      squares[a] !== null &&
      squares[a] === squares[b] &&
      squares[b] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
};

const isDraw = (squares: CellValue[]): boolean => {
  return squares.every(Boolean);
};
