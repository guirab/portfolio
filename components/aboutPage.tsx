import Link from "next/link";
import Image from "next/image";

import { MouseOver, Reveal, Card } from "@/components";

export const About = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col pt-24 mobile:pt-16 px-8 space-y-8 medium:items-center">
        <div className="flex flex-row">
          <div className="flex justify-center items-center flex-col w-full">
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
        <h1 className="text-4xl font-bold">Skills</h1>
        <div className="flex gap-8 justify-center w-full items-center medium:flex-col medium:w-full">
          <div className="bg-green-500 w-1/3 medium:w-full">
            <div className="p-8 w-full h-64 w-full">
              <div className="w-full h-full flex justify-center flex-col text-center">
                <h2>FrontEnd</h2>
                <div className="w-full flex flex-col gap-2">
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
                    <Card>TypeScript</Card>
                  </Reveal>
                  <Reveal>
                    <Card>Framer Motion</Card>
                  </Reveal>
                  <Reveal>
                    <Card>TailwindCSS</Card>
                  </Reveal>
                  <Reveal>
                    <Card>Redux</Card>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-500 w-1/3 medium:w-full">
            <div className="p-8 w-full h-64">
              <div className="w-full h-full flex justify-center flex-col text-center">
                <h2>FrameWorks and Tools</h2>
                <div className="w-full flex flex-col gap-2">
                  <Reveal>
                    <Card>Git</Card>
                  </Reveal>
                  <Reveal>
                    <Card>NextJs</Card>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-500 w-1/3 medium:w-full">
            <div className="p-8 w-full h-64">
              <div className="w-full h-full flex justify-center flex-col text-center">
                <h2>BackEnd</h2>
                <div className="w-full flex flex-col gap-2">
                  <Reveal>
                    <Card>NodeJs</Card>
                  </Reveal>
                  <Reveal>
                    <Card>MySql</Card>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          {/* <Reveal>
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
          </Reveal> */}
        </div>
      </div>
    </div>
  );
};
