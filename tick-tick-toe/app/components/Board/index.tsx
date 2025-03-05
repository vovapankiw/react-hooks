"use client";

import { CellValue } from "@/app/types/cellValue";
import Cell from "../Cell";

type Props = {
  cells: CellValue[];
  onPlay: (index: number) => void;
};

export default function Board({ cells, onPlay }: Props) {
  return (
    <div className="inline-grid grid-cols-3">
      {cells.map((cell, i) => {
        return <Cell key={i} value={cell} onClick={() => onPlay(i)} />;
      })}
    </div>
  );
}
