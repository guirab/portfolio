import Image from "next/image";

import { Typewriter } from "@/components";

export default function Home() {
  return (
    <div className="w-full h-page">
      <div className="w-full h-full grid grid-rows-2 px-4 pt-36 small:pt-20">
        <div className="flex flex-row mobile:flex-col items-center w-full">
          <Typewriter />
          <div className="w-full flex justify-center h-auto max-w-[40%] mobile:max-w-[100%] mobile px-16 small:px-8">
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
    </div>
  );
}
