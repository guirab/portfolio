/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect } from "react";

export const MouseOver = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById("anchor");
      const rekt = anchor?.getBoundingClientRect();
      if (!rekt) return console.log("no rekt");
      const anchorX = rekt?.left + rekt?.width / 2;
      const anchorY = rekt?.right + rekt?.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
      const rotate = document.getElementById("rotate");
      if (!rotate) return console.log("no rotate");
      rotate.style.transform = `rotate(${angleDeg}deg)`;
      if (!anchor) return console.log("no anchor");
      anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    });
  }, []);

  const angle = (cx: number, cy: number, ex: number, ey: number) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const theta = Math.atan2(dy, dx);
    const deg = (theta * 180) / Math.PI;
    return deg;
  };

  return (
    <div id="anchor" className="flex justify-center items-center flex-col px-8">
      <h1 className="text-4xl font-bold">About me</h1>
      <br />
      <button
        id="rotate"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download CV
      </button>
      <p className="text-2xl font-semibold text-left">
        I am a solution-oriented web developer with an eye for detail and
        effectiveness. I have 3-4 years of experience in programming web
        applications and I am eager to learn more about this field and becoming
        a better professional.
      </p>
    </div>
  );
};
