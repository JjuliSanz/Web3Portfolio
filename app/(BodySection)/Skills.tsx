"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "../(hoc)/SectionWrapper";
import { SkillData } from "@/utils/constants";
import SectionText from "./SectionText";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import SkillDataProvider from "./SkillDataProvider";

function Skills() {
  const third = Math.ceil(SkillData.length / 3);

  return (
    <section className="1300:w-[1250px] h-full relative overflow-hidden flex flex-col items-center justify-center m-auto">
      <SectionText />

      <div className="w-full 800:w-[900px] h-auto flex flex-row items-center justify-around mt-[30px] ">
        {SkillData.slice(0, third).map((data: Skill_data, index: number) => (
          <SkillDataProvider
            key={data.skill_name + index}           
            data={data}
            index={index}
          />
        ))}
      </div>

      <div className="w-full 800:w-[800px] h-auto flex flex-row items-center justify-around mt-[30px] ">
        {SkillData.slice(third, 2 * third).map((data: Skill_data, index: number) => (
          <SkillDataProvider
            key={data.skill_name + index}           
            data={data}
            index={index}
          />
        ))}
      </div>

      <div className="w-full 800:w-[700px] h-auto flex flex-row items-center justify-around mt-[30px] ">
        {SkillData.slice(2 * third, 3 * third).map((data: Skill_data, index: number) => (
          <SkillDataProvider
            key={data.skill_name + index}           
            data={data}
            index={index}
          />
        ))}
      </div>
 
      <div className="w-full h-full absolute flex flex-col justify-center items-center">
        <div className="w-[1000px] 1000:w-full h-full z-[-10] opacity-[0.5] absolute flex flex-col bg-cover items-center justify-center ">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            // @ts-ignore
            autoPlay="autoplay"
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(Skills, "skills");
