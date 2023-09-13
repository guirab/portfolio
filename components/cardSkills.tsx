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
  // useEffect(() => {
  //   document.addEventListener("mousemove", (e) => {
  //     const card = e.currentTarget as HTMLElement;
  //     if (!card) return console.log("no card");
  //     const cardHeight = card.offsetHeight;
  //     const cardWidth = card.offsetWidth;
  //     const centerX = card.offsetLeft + cardWidth / 2;
  //     const centerY = card.offsetTop + cardHeight / 2;
  //     const mouseX = e.clientX - centerX;
  //     const mouseY = e.clientY - centerY;
  //     const rotateX = ((1 * 25 * mouseX) / (cardHeight / 2)).toFixed(2);
  //     const rotateY = ((-1 * 25 * mouseY) / (cardWidth / 2)).toFixed(2);

  //     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  //   });
  // }, []);
  return (
    <div
      className={twMerge(
        "card w-1/3 medium:w-full rounded-3xl hover:scale-110 transition duration-300",
        className
      )}
    >
      <div className="px-8 py-4 w-full h-80">
        <div className="w-full h-full flex justify-start flex-col text-center">
          <h2 className="font-bold text-2xl">{title}</h2>
          <div className="w-full flex flex-col gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
