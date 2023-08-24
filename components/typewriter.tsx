/* eslint-disable react/no-unescaped-entities */
"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Typewriter = () => {
  const { "0": text } = useTypewriter({
    words: ["Web Developer", "Full Stack", "Almost Graduated"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 60,
  });
  return (
    <div className="w-full flex justify-center">
      <div className="text-4xl flex justify-center w-full flex-col items-start text-white">
        <h1>Hi There!</h1>
        <h2 className="mb-2">
          I'm <span className="text-pink-500">Guilherme Rabelo</span>
        </h2>
        <div className="text-pink-500 font-bold py-6 text-left">
          <span className="text-pink-500">{text}</span>
          <Cursor />
        </div>
      </div>
    </div>
  );
};
