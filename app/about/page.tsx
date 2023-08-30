import { useEffect } from "react";
import Link from "next/link";
import { MouseOver } from "@/components";

export default function About() {
  return (
    <div className="h-page w-full">
      <div className="grid grid-cols-2 h-full grid-rows-2 col-end-1 pt-36">
        <MouseOver />
        <div>
          <h1 className="text-4xl font-bold">Sobre mim</h1>
          <p className="text-2xl font-semibold">
            Meu nome é Guilherme, tenho 21 anos, sou desenvolvedor front-end e
            estudante de engenharia de software.
          </p>
        </div>
        <div className="">
          <h1 className="text-4xl font-bold">Sobre mim</h1>
          <p className="text-2xl font-semibold">
            Meu nome é Guilherme, tenho 21 anos, sou desenvolvedor front-end e
            estudante de engenharia de software.
          </p>
        </div>
      </div>
    </div>
  );
}
