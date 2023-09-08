import Link from "next/link";
import Image from "next/image";

import { MouseOver, Reveal } from "@/components";

export default function About() {
  return (
    <div className="h-page w-full overflow-y-scroll scrollbar-none">
      <div className="flex flex-col pt-24 mobile:pt-16 px-8 space-y-8">
        <div className="flex flex-row">
          <MouseOver />
          <div className="flex justify-end items-center w-5/12">
            <Image
              src="/assets/jpeg/taldo.jpeg"
              width={350}
              height={350}
              alt="Guilherme Rabelo"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center w-full items-center">
          <h1 className="text-4xl font-bold">Skills</h1>
          <Reveal>HTML5</Reveal>
          <Reveal>CSS3</Reveal>
          <Reveal>JavaScript</Reveal>
          <Reveal>Node Js</Reveal>
          <Reveal>React</Reveal>
          <Reveal>Next Js</Reveal>
          <Reveal>TypeScript</Reveal>
          <Reveal>MySql</Reveal>
          <Reveal>Redux</Reveal>
          <Reveal>Git</Reveal>
          <Reveal>Framer Motion</Reveal>
          <Reveal>TailwindCSS</Reveal>
        </div>
      </div>
    </div>
  );
}
