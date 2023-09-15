"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
interface Props {
  data: Skill_data;
  index: number;
}

function SkillDataProvider({ data, index }: Props) {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <div
        className={`z-0 1300:w-[${data.width}] h-auto rounded-[5px] z-20 relative mx-[15px] my-[10px]`}
      >
        <img
          alt={data.skill_name}
          width={data.width}
          height={data.height}
          src={data.Image}
          className=""
        />
      </div>
    </motion.div>
  );
}

export default SkillDataProvider;
