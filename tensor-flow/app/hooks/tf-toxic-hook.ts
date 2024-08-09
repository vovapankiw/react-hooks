import { useState, useEffect } from "react";
import * as tfToxicity from "@tensorflow-models/toxicity";
import { ToxicityClassifier } from "@tensorflow-models/toxicity";

export const useModelLoader = () => {
  const [modelInstance, setModelInstance] = useState<ToxicityClassifier | null>(
    null
  );
  const [isModelLoading, setIsModelLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await tfToxicity.load(0.9, []);
        setModelInstance(model);
      } catch (error) {
        console.error("Error loading model", error);
      } finally {
        setIsModelLoading(false);
      }
    };

    loadModel();
  }, []);

  return {
    isModelLoading,
    modelInstance,
  };
};
