import { GameResult, GameState } from "../types/gameResult";

export const isGameOver = (gameState: GameState): boolean => {
  return (
    gameState.result === GameResult.Win || gameState.result === GameResult.Draw
  );
};
