import { CellValue } from "./cellValue";

export enum GameResult {
  Win = "Win",
  Draw = "Draw",
  Play = "Play",
}

export type GameState = { result: GameResult; winner: CellValue };
