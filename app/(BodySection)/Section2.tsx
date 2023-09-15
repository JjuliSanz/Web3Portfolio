import { textVariant } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../(hoc)/SectionWrapper";

function Section2() {
  return (
    <div className="1300 1300:w-[1250px] h-full flex flex-row items-center justify-between z-[-10] mt-[80px] 500:mt-0">
      <div className="w-full 1140:w-[50%] h-full flex flex-col items-center 1140:items-start justify-center m-auto text-center 1140:text-start">
        <motion.div
          variants={textVariant(2)}
          id="Wecom-box"
          className="px-[15px] py-[6px] border border-[#7042f88b] opacity-[0.9] "
        >
          <SparklesIcon className="h-4 370:h-5 w-4 370:w-5 text-[#b49bff] mr-[10px]" />
          <div
            id="Wecom-text"
            className="text-[12px] 310:text-[14px] 370:text-auto"
          >
            Junior Full Stack Web Developer
          </div>
        </motion.div>

        <div className="w-auto h-auto animate-slideleftT2 mt-[24px] text-white">
          <span className="text-[40px] 400:text-[50px] 800:text-[57px] font-bold align-top ">
            Exploring the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              Web3 Universe:
            </span>{" "}
            <br />
          </span>
          <span className="translate-y-[-20px] animate-slideleftT2 text-[40px] 400:text-[50px] 800:text-[40px] font-bold align-top ">
            My Developer Portfolio
          </span>
        </div>
        <p className=" animate-slideleftT3 text-[16px] 400:text-[19px] text-slate-400 mb-[20px]  ">
          Discover live projects, explore my coding skills, and connect with me
          on various social platforms. Explore the latest web development
          resources and learn more about my work in one place.
        </p>        
      </div>
      
      <div className="w-[50%] h-full hidden 1140:flex flex-row select-none justify-center items-center">        
        <img
          src="/cool.png"
          alt="person"
          className="flex animate-slideright2 transition_ opacity-[0.7]"
        />
      </div>
    </div>
  );
}
export default SectionWrapper(Section2, "Section2");
