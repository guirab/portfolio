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
    <div className="flex justify-start medium:text-left max-w-[60%] medium:max-w-[100%] w-full px-8 medium:px-0">
      <div className="text-4xl flex justify-center w-full flex-col items-start medium:items-center text-left text-white pl-16 small:px-8">
        <h1 className="pb-4 w-full">Hi There!</h1>
        <h2 className="pb-8 w-full">
          I'm <span className="text-pink-500">Guilherme Rabelo</span>
        </h2>
        <div className="text-pink-500 font-bold py-6 text-left w-full small:text-xl small:pt-0 small:font-normal">
          <span className="text-pink-500">{text}</span>
          <Cursor />
        </div>
      </div>
    </div>
  );
};