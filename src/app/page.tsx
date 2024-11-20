"use client";
import { useEffect, useState } from "react";
import stringCalculator from "./services";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const [result, setResult] = useState(0);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setResult(stringCalculator.add(inputValue))}>Calculate Sum</button>
      <div className="text-2xl">Result: {result}</div>
    </div>
  );
}
