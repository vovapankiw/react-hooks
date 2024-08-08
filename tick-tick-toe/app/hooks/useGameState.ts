import { useCallback, useMemo, useState } from "react";
import { CellValue } from "../types/cellValue";
import { Player } from "../types/player";
import { calculateGameResult } from "../utils/calculateWinner";
import { isGameOver } from "../utils/isGameOver";
import { GameState } from "../types/gameResult";

type GameStateHook = {
  handlePlay: (index: number) => void;
  moves: CellValue[];
  currPlayer: Player;
  gameState: GameState;
  restartGame: () => void;
};

const DEFAULT_STATE = Array(9).fill(null);

export const useGameState = (): GameStateHook => {
  const [moves, setMoves] = useState<CellValue[]>(DEFAULT_STATE);
  const [currPlayer, setCurrPlayer] = useState<Player>(Player.X);

  const gameState = useMemo(() => calculateGameResult(moves), [moves]);

  const handlePlay = useCallback(
    (cellIndex: number) => {
      const isCellAlreadySelected = moves[cellIndex];

      if (isGameOver(gameState) || isCellAlreadySelected) return;

      setMoves((prevMoves) => {
        return prevMoves.map((move, i) =>
          i === cellIndex ? currPlayer : move
        );
      });

      setCurrPlayer((prevPlayer) =>
        prevPlayer === Player.X ? Player.O : Player.X
      );
    },
    [currPlayer, moves, gameState]
  );

  const restartGame = useCallback(() => {
    setMoves(DEFAULT_STATE);
  }, []);

  return {
    handlePlay,
    moves,
    currPlayer,
    gameState,
    restartGame,
  };
};
