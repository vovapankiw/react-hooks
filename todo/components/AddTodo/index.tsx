import { useState, memo } from "react";

import PlusIcon from "@/icons/PlusIcon";

type Props = {
  createTodo: (text: string) => void;
};

export default memo(function AddTodo({ createTodo }: Props) {
  const [value, setValue] = useState("");
  const handleCahnge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const addTodo = () => {
    createTodo(value);
    setValue("");
  };

  return (
    <div className="flex gap-4">
      <div className="relative h-[2.75rem] w-[300px]">
        <div className="absolute left-3 top-2/4 grid size-5 -translate-y-2/4 place-items-center">
          <PlusIcon />
        </div>
        <label htmlFor="">
          <input
            className="peer size-full rounded-[7px] border border-t-transparent bg-white px-3 py-5 !pl-9 font-sans text-sm font-normal text-neutral-950 outline outline-0 transition-all placeholder-shown:border"
            placeholder="Enter your todo"
            value={value}
            onChange={handleCahnge}
          />
        </label>
      </div>
      <button
        disabled={value === ""}
        className="w-44 rounded bg-amber-950 px-6 py-3 text-sm text-white font-bold opacity-75 hover:opacity-100 disabled:bg-gray-400 disabled:hover:opacity-75"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
});
