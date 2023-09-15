"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import SectionWrapper from "../(hoc)/SectionWrapper";

function Security() {
  return (
    <section className="w-full flex flex-row relative items-center justify-center overflow-hidden">
      <div className="absolute w-auto h-auto top-[0px] 500:top-[70px] ">
        <motion.div
          variants={textVariant(1)}
          className="text-[40px] 500:text-[45px] font-medium 500:font-semibold text-center text-gray-200 mb-[10px]"
        >
          Performent{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          security
        </motion.div>
      </div>
      <div className="w-auto h-auto absolute translate-y-[-50px] flex flex-col items-center justify-center">
        <div className="w-auto h-auto flex flex-col group items-center ">
          <Image
            className="w-[50px]  translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            src="/arch.png"
            width={1920}
            height={1080}
            alt="Securty"
          />
          <Image
            className="w-[70px] z-10"
            src="/locked.png"
            width={1920}
            height={1080}
            alt="Securty"
          />
        </div>
        <motion.div
          variants={textVariant(2)}
          id="Wecom-box"
          className="px-[15px] py-[4px] border my-[20px] border-[#7042f88b]  opacity-[0.9]"
        >
          <div
            id="Wecom-text"
            className="text-[12px] 310:text-[15px] 370:text-auto"
          >
            Encryption
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-[80px] 500:bottom-[150px] px-[5px]">
        <motion.div
          id="cursive"
          variants={textVariant(3)}
          className=" text-[17px] font-medium text-center text-gray-300 flex flex-col"
        >
          <span>The blockchain security that's changing the game.</span>
        </motion.div>
      </div>
      <div className="w-[1500px]  h-full z-[-10] absolute    flex flex-row items-start justify-center">
        <video
          className="w-full h-auto"
          preload="false"
          playsInline
          loop
          muted
          // @ts-ignore
          autoPlay="autoplay"
          src="/security.webm"
        ></video>
      </div>
    </section>
  );
}

export default SectionWrapper(Security, "Security");
