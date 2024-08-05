"use client";

import { useRef, useState, useId } from "react";

export default function Home() {
  const [a, setA] = useState(new Date());
  const id = useId();
  return (
    <>
      {id}
      <button onClick={() => setA(new Date())}>Click</button>
    </>
  );
}
