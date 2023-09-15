import React from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import Link from "next/link";

import StarMode from "./StarMode";

function Navbar() {
  return (
    <div className="w-full h-[65px] fixed shadow-lg shadow-[#2A0E61]/50 bg-slate-3 bg-[#03001417] backdrop-blur-md z-50">
      <div className="w-full 1300:w-[1232px] h-full flex flex-row items-center justify-between m-auto px-[10px] 400:px-[20px] 500:px-[40px]">

        {/* Nav Left */}
        <NavLeft />

        {/* Nav Center */}
        <div className="w-[500px] h-full hidden 860:flex flex-row items-center justify-between">
          <div className="w-full h-auto flex flex-row items-center justify-between bg-[#0300145e] border border-[#7042f861] px-[20px] py-[10px] rounded-full">
            <Link href={"/AboutMe"} className="Nav_text">
              About Me
            </Link>
            <Link href={"/#skills"} className="Nav_text">
              Skills
            </Link>
            <Link href={"/#projects"} className="Nav_text">
              Projects
            </Link>
            <Link href={"/AboutMe/#contact"} className="Nav_text">
              Contact Me
            </Link>
          </div>
        </div>

        {/* Nav Right */}
        <NavRight />
      </div>
    </div>
  );
}

export default Navbar;
