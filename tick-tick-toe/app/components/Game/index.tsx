"use client";

import { useState } from "react";
import clsx from "clsx";
import { CellValue } from "@/app/types/cellValue";
import { Player } from "@/app/types/player";
import Board from "../Board";

export default function Game() {
  const [moves, setMoves] = useState<CellValue[]>(Array(9).fill(null));
  const [currPlayer, setCurrPlayer] = useState<Player>(Player.X);

  const handlePlay = (cellIndex: number) => {
    if (calculateWinner(moves) || moves[cellIndex]) return;

    setMoves((prev) => {
      return prev.map((el, i) => (i === cellIndex ? currPlayer : el));
    });
    setCurrPlayer((prev) => (prev === Player.X ? Player.O : Player.X));
  };

  const winner = calculateWinner(moves);

  return (
    <div>
      <div className="mb-4">
        {winner && <h2>Game winner {winner}</h2>}
        {!winner && <h2>Current player {currPlayer}</h2>}
      </div>
      <div className={clsx({ disable: winner }, "group")}>
        <Board cells={moves} onPlay={handlePlay} />
      </div>
    </div>
  );
}

function calculateWinner(squares: CellValue[]): CellValue {
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

    if (squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
