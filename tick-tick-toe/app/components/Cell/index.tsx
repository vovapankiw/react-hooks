import { CellValue } from "@/app/types/cellValue";

type Props = {
  value: CellValue;
  onClick: () => void;
};

export default function Cell({ value, onClick }: Props) {
  return (
    <button
      className="size-10 border border-black hover:bg-cyan-500 active:bg-cyan-700 group-disable:hover:bg-transparent group-disable:cursor-default"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
