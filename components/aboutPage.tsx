import Link from "next/link";
import Image from "next/image";

import { MouseOver, Reveal, Card } from "@/components";

export const About = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col pt-24 mobile:pt-16 px-8 space-y-8">
        <div className="flex flex-row">
          <div className="flex justify-center items-center flex-col w-7/12">
            <h1 className="text-4xl font-bold">About me</h1>
            <h2 className="text-lg">
              I am Full-Stack Developer with great passion for programming and
              innovating.
              <br />
              Always looking for new challenges and opportunities to learn and
              grow.
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center w-full items-center">
          <h1 className="text-4xl font-bold">Skills</h1>
          <Reveal>
            <Card>HTML5</Card>
          </Reveal>
          <Reveal>
            <Card>CSS3</Card>
          </Reveal>
          <Reveal>
            <Card>JavaScript</Card>
          </Reveal>
          <Reveal>
            <Card>NodeJs</Card>
          </Reveal>
          <Reveal>
            <Card>React</Card>
          </Reveal>
          <Reveal>
            <Card>NextJs</Card>
          </Reveal>
          <Reveal>
            <Card>TypeScript</Card>
          </Reveal>
          <Reveal>
            <Card>MySql</Card>
          </Reveal>
          <Reveal>
            <Card>Redux</Card>
          </Reveal>
          <Reveal>
            <Card>Git</Card>
          </Reveal>
          <Reveal>
            <Card>Framer Motion</Card>
          </Reveal>
          <Reveal>
            <Card>TailwindCSS</Card>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
