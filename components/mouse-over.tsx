"use client";
import { useEffect } from "react";

export const MouseOver = () => {
  useEffect(() => {
    const glass = document.querySelector(".magnifying-glass") as HTMLElement;
    const container = document.querySelector(".container");
    if (!container) return console.log("no container");

    const cInfo = container.getBoundingClientRect();
    if (!glass) return console.log("no glass");

    document.addEventListener("pointermove", (e) => {
      glass.style.opacity = "1";
      glass.style.transform = `translate(
            ${e.clientX - cInfo.x - glass.getBoundingClientRect().width / 2}px, 
            ${e.clientY - cInfo.y - glass.getBoundingClientRect().height / 2}px
        )`;
      const h1 = glass.querySelector("h1");
      if (!h1) return console.log("no h1");

      h1.style.transform = `translate(
            ${
              (e.clientX - glass.getBoundingClientRect().width / 2 - cInfo.x) *
              -1
            }px,
            ${
              (e.clientY - glass.getBoundingClientRect().height / 2 - cInfo.y) *
              -1
            }px)`;
    });
  }, []);

  return (
    <div className="flex justify-center items-center flex-col px-8">
      <h1 className="text-4xl font-bold">About me</h1>
      <div className="container">
        <h1 className="display">
          I am a solution-oriented web developer with an eye for detail and
          effectiveness. I have 3-4 years of experience in programming web
          applications and I am eager to learn more about this field and
          becoming a better professional.
        </h1>
        <div className="magnifying-glass">
          <h1 className="magnify-fx">
            I am a solution-oriented web developer with an eye for detail and
            effectiveness. I have 3-4 years of experience in programming web
            applications and I am eager to learn more about this field and
            becoming a better professional.
          </h1>
        </div>
      </div>
    </div>
  );
};
