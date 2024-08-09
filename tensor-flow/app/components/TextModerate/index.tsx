"use client";

import { ToxicityClassifier } from "@tensorflow-models/toxicity";
import { useEffect, useState } from "react";

type Props = {
  modelInstance: ToxicityClassifier | null;
};

type Prediction = {
  label: string;
  results: Array<{
    probabilities: Float32Array;
    match: boolean;
  }>;
};

export const TextModerate = ({ modelInstance }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [delayedValue, setDelayedValue] = useState<string>("");
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDelayedValue(inputValue);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  useEffect(() => {
    if (modelInstance && delayedValue) {
      modelInstance.classify([delayedValue]).then((predictions) => {
        console.log(predictions);
        setPredictions(predictions);
      });
    }
  }, [modelInstance, delayedValue]);

  const getModerationResult = () => {
    if (predictions.length === 0) return "";

    return predictions.map((prediction) => {
      const match = prediction.results[0].match;
      const probability = prediction.results[0].probabilities[1];
      const label = prediction.label;

      let emoji = "";
      let text = "";

      if (match === false || probability <= 0.5) {
        emoji = "🙂";
        text = `content is safe ${label}`;
      } else {
        if (probability > 0.9) {
          emoji = "😈";
          text = `toxic content ${label}`;
        } else if (probability > 0.7) {
          emoji = "💩";
          text = `moderate toxic content ${label}`;
        } else {
          emoji = "🤡";
          text = `slightly toxic content ${label}`;
        }
      }

      return (
        <p key={label}>
          {emoji} {text}
        </p>
      );
    });
  };

  return (
    <div className="mt-5">
      <div className="mb-3 flex flex-col gap-3">
        <label htmlFor="inputText" className="text">
          Type your sentences
        </label>
        <input
          type="text"
          id="inputText"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>{getModerationResult()}</div>
    </div>
  );
};
