"use client";
import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { motion, useCycle } from "framer-motion";

import { useDimensions } from "@/hooks";
import { useState } from "react";
import { MenuToggle } from "./menuToggle";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const { width } = useDimensions();

  const pages = [
    {
      name: "Home",
      link: "#home",
      icon: <AiOutlineHome className="h-5 w-5" />,
    },
    {
      name: "About me",
      link: "#about",
      icon: <AiOutlineUser className="h-5 w-5" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <GrProjects className="h-5 w-5" />,
    },
  ];

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="w-full absolute top-0 left-0 z-50 pt-8 mobile:pt-0 backdrop-blur-md"
    >
      {width < 965 ? (
        <div className="flex items-center px-10">
          <MenuToggle
            toggle={() => {
              setOpen(!open);
              toggleOpen();
            }}
          />
          <ul
            className={`flex items-center absolute bg-cyan-500 z-auto left-0 w-full transition-all duration-300 ease-in tablet:justify-around tablet:pr-24 ${
              open ? "top-0" : "top-[-200px]"
            }`}
          >
            {pages.map((page) => (
              <li key={page.name} className="ml-8 my-7 font-semibold text-sm">
                <Link
                  onClick={() => {
                    setOpen(!open);
                    toggleOpen();
                  }}
                  href={page.link}
                  className="text-gray-800 duration-500"
                >
                  {page.icon}
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ul className="flex w-11/12 text-center justify-end gap-16">
          {pages.map((page) => (
            <li
              key={page.name}
              className="w-fit group overflow-hidden items-end"
            >
              <Link href={page.link} className="flex flex-row gap-2">
                {page.icon}
                {page.name}
              </Link>
              <div className="rounded-md h-1.5 bg-header group-hover:translate-x-0 w-full -translate-x-28 transition duration-300" />
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};
