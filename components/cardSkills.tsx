"use client";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export const CardSkills = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) => {
  const tiltEffectSettings = {
    max: 25,
    perspective: 1000,
    scale: 1.1,
    speed: 500,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  function cardMouseEnter(card: any) {
    setTransition(card);
  }

  function cardMouseMove(event: any, card: any) {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY + window.innerHeight;
    const rotateXUncapped =
      (tiltEffectSettings.max * mouseY) / (cardHeight / 2);
    const rotateYUncapped =
      -1 * ((tiltEffectSettings.max * mouseX) / (cardWidth / 2));

    const rotateX =
      rotateXUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateXUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateXUncapped;
    const rotateY =
      rotateYUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateYUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateYUncapped;

    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  }

  function cardMouseLeave(card: any) {
    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(card);
  }

  function setTransition(card: any) {
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = "";
    }, tiltEffectSettings.speed);
  }

  useEffect(() => {
    const card = document.querySelectorAll(".card") as any;

    card.forEach((card: any) => {
      card.addEventListener("mouseenter", () => cardMouseEnter(card));
      card.addEventListener("mousemove", (event: any) =>
        cardMouseMove(event, card)
      );
      card.addEventListener("mouseleave", () => cardMouseLeave(card));
    });
  }, []);

  return (
    <div className={twMerge("card w-1/3 medium:w-full rounded-3xl", className)}>
      <div className="px-8 py-4 w-full h-80">
        <div className="w-full h-full flex justify-start flex-col text-center">
          <h2 className="font-bold text-2xl">{title}</h2>
          <div className="w-full flex flex-col gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
