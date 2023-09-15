"use client";

import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { useCycle, motion } from "framer-motion";

import { MenuToggle } from "./menuToggle";
import { useDimensions } from "@/hooks";

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { width } = useDimensions();

  const navbar = {
    open: {
      clipPath: `circle(${width}px at 40px 40px)`,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
      },
      backgroundColor: "blue",
    },
    closed: {
      clipPath: `circle(30px at 40px 40px)`,
      zIndex: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
      backgroundColor: "rgb(173 65 210/var(0.5))",
    },
  };

  return (
    <motion.div className="w-full absolute top-0 left-0 z-50 pt-8 mobile:pt-0">
      {width < 965 ? (
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="flex h-16"
        >
          <motion.div
            className="h-full w-full relative flex items-center justify-center"
            variants={navbar}
          >
            <div className="flex text-center justify-end gap-16">
              <Link href="#home">
                <button
                  className={
                    isOpen ? "w-fit group overflow-hidden items-end" : "hidden"
                  }
                  onClick={() => toggleOpen()}
                >
                  <span className="flex flex-row gap-2 text-sm">
                    <AiOutlineHome className="h-4 w-4" />
                    Home
                  </span>
                </button>
              </Link>
              <Link href="#about">
                <button
                  className={
                    isOpen ? "w-fit group overflow-hidden items-end" : "hidden"
                  }
                  onClick={() => toggleOpen()}
                >
                  <span className="flex flex-row gap-2 text-sm">
                    <AiOutlineUser className="h-4 w-4" />
                    About me
                  </span>
                </button>
              </Link>
              <Link href="#projects">
                <button
                  className={
                    isOpen ? "w-fit group overflow-hidden items-end" : "hidden"
                  }
                  onClick={() => toggleOpen()}
                >
                  <span className="flex flex-row gap-2 text-sm">
                    <GrProjects className="h-4 w-4" />
                    Projects
                  </span>
                </button>
              </Link>
              <MenuToggle toggle={() => toggleOpen()} />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <div className="flex w-11/12 text-center justify-end gap-16">
          <Link href="#home">
            <button className="w-fit group overflow-hidden items-end">
              <span className="flex flex-row gap-2">
                <AiOutlineHome className="h-5 w-5" />
                Home
              </span>
              <div className="rounded-md h-1.5 bg-header group-hover:translate-x-0 w-full -translate-x-20 transition duration-300" />
            </button>
          </Link>
          <Link href="#about">
            <button className="group overflow-hidden items-end">
              <span className="flex flex-row gap-2">
                <AiOutlineUser className="h-5 w-5" />
                About me
              </span>
              <div className="rounded-md h-1.5 bg-header group-hover:translate-x-0 w-full -translate-x-28 transition duration-300" />
            </button>
          </Link>
          <Link href="#projects">
            <button className="group overflow-hidden items-end">
              <span className="flex flex-row gap-2">
                <GrProjects className="h-5 w-5" />
                Projects
              </span>
              <div className="rounded-md h-1.5 bg-header group-hover:translate-x-0 w-full -translate-x-28 transition duration-300" />
            </button>
          </Link>
        </div>
      )}
    </motion.div>
  );
};
