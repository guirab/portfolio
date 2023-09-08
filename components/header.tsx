import Link from "next/link";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

export const Header = () => {
  return (
    <div className="w-full pt-8">
      <div className="flex w-11/12 text-center justify-end gap-16">
        <Link href={"/"}>
          <button className="w-fit group overflow-hidden items-end">
            <span className="flex flex-row gap-2">
              <AiOutlineHome className="h-5 w-5" />
              Home
            </span>
            <div className="rounded-md h-1.5 bg-header group-hover:translate-x-0 w-full -translate-x-20 transition duration-300" />
          </button>
        </Link>
        <Link href={"/about"}>
          <button className="group overflow-hidden items-end">
            <span className="flex flex-row gap-2">
              <AiOutlineUser className="h-5 w-5" />
              About me
            </span>
            <div className="rounded-md h-1.5 bg-header group-hover:translate-x-0 w-full -translate-x-28 transition duration-300" />
          </button>
        </Link>
      </div>
    </div>
  );
};
