"use client";

import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { MenuToggle } from "./menuToggle";
import { useCycle, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDimensions } from "@/hooks";

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<any>();
  const [height, setHeight] = useState(0);
  const { width } = useDimensions();

  const sidebar = {
    open: {
      clipPath: `circle(${width}px at 40px 40px)`,
      transition: {
        when: "beforeChildren",
        duration: 0.5,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    if (containerRef.current) setHeight(containerRef.current.offsetHeight);
  }, [containerRef]);

  return (
    <motion.header
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={width < 965 ? "w-full pt-8 fixed backdrop-blur-sm z-50" : ""}
    >
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-full h-20 bg-white"
        variants={sidebar}
      >
        {/* <div className="flex w-11/12 text-center justify-end gap-16 "> */}
        {/* <Link href="#home">
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
        </Link> */}
        <MenuToggle toggle={() => toggleOpen()} />
        {/* </div> */}
      </motion.div>
    </motion.header>
  );
};
