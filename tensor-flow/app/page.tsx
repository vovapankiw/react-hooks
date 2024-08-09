"use client";

import { Suspense } from "react";
import { TextModerate } from "./components/TextModerate";
import { useModelLoader } from "./hooks/tf-toxic-hook";
import Loading from "./loading";

export default function Home() {
  const { isModelLoading, modelInstance } = useModelLoader();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isModelLoading && <Loading />}
      {!isModelLoading && <TextModerate modelInstance={modelInstance} />}
    </main>
  );
}
