"use client";

import clsx from "clsx";
import { useGameState } from "@/app/hooks/useGameState";
import { isGameOver } from "@/app/utils/isGameOver";
import Board from "../Board";
import GameResults from "../GameResult";
import GameControls from "../GameControls";

export default function Game() {
  const { moves, handlePlay, restartGame, currPlayer, gameState } =
    useGameState();

  return (
    <div className="size-40 flex flex-col gap-5 justify-center items-center">
      <div>
        <GameResults state={gameState} currPlayer={currPlayer} />
      </div>
      <div className={clsx({ disable: isGameOver(gameState) }, "group")}>
        <Board cells={moves} onPlay={handlePlay} />
      </div>
      <div>
        <GameControls restartGame={restartGame} />
      </div>
    </div>
  );
}
