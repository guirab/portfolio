import Image from "next/image";

import { Typewriter, About, Reveal, Projects } from "@/components";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden scrollbar-none scroll-smooth">
      <div className="w-full h-full flex px-4 pt-36" id="home">
        <div className="flex flex-row mobile:flex-col items-center w-full mobile:justify-around">
          <Typewriter />
          <div className="w-full flex justify-center h-auto max-w-[40%] mobile:max-w-[100%] px-16 mobile:px-4">
            <Image
              className="object-contain"
              src="/assets/computing_guy.svg"
              height={450}
              width={450}
              alt="Computing Guy"
            />
          </div>
        </div>
      </div>
      <div className="h-full w-full pt-24 mobile:pt-16" id="about">
        <About />
      </div>
      <div className="h-full w-full pt-24 mobile:pt-16" id="projects">
        <Projects />
      </div>
    </div>
  );
}
