"use client";

import {
  StarColor_data,
  setMobileMenu,
  setStarColor,
} from "@/Redux-store/Redux-action";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import StarMode from "@/app/(Nav_components)/StarMode";
import ChooseColor from "@/app/(Nav_components)/ChooseColor";
import { useRouter } from "next/router";

function MobileMenu() {
  const dispatch = useDispatch();
  const color = useSelector(StarColor_data);

  const onColorChange = (e: string) => {
    dispatch(setStarColor(e));
    localStorage.setItem("color", e);
  };
  return (
    <div
      id="scroolbar-hidden"
      className={`flex flex-col gap-4 items-center cursor-pointer animate-slideleft overflow-y-scroll shadow-lg shadow-[#2A0E61]/50 fixed inset-x-0 bottom-0 z-[999] w-[80%] 500:w-[60%] h-full text-gray-300 bg-slate-950 pb-5 sm:hidden px-[15px] 860:hidden`}
    >
      <div className="w-full min-h-[60px] flex flex-row items-center justify-between">
        {/* Back button */}
        <div
          onClick={() => dispatch(setMobileMenu(false))}
          className="flex flex-row items-center justify-start text-slate-200 hover:text-sky-500 cursor-pointer"
        >
          <ArrowLeftIcon className="h-6 w-6 mr-[5px] " />
          <span className="text-[17px]">Back</span>
        </div>
        {/* Logo */}
        <Image
          src={"/j.png"}
          width={40}
          height={40}
          alt="Logo"
          className="cursor-pointer hover:animate-slowspin "
        />
      </div>

      {/* About Me */}
      <Link
        href={"/AboutMe"}
        className=" w-full min-h-[50px] rounded-[10px] border hover:border-sky-500 border-[#7042f861] mt-[15px] flex flex-row items-center font-semibold justify-center"
      >
        About Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-[10px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>

      {/* Projects */}
      <Link
        href={"/#projects"}
        className=" w-full min-h-[50px] rounded-[10px] border hover:border-sky-500 border-[#7042f861] mt-[15px] flex flex-row  items-center font-semibold justify-center  "
      >
        Projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-[10px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>

      {/* Contact Me */}
      <Link
        href={"/AboutMe/#contact"}
        className=" w-full min-h-[50px] rounded-[10px] border hover:border-sky-500 border-[#7042f861] mt-[15px] flex flex-row  items-center font-semibold justify-center  "
      >
        Contact Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-[10px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>

      {/* Stars */}
      <StarMode />
      {/* Stars color */}
      <ChooseColor
        color={color}
        onColorChange={onColorChange}
        text_tittle={true}
      />
    </div>
  );
}

export default MobileMenu;
