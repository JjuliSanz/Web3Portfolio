"use client";

import { staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";

const SectionWrapper = (Component: React.JSX.Element | any, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer("", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <span id={idName}>&nbsp;</span>

        <Component/>
      </motion.section>
    );
  };
export default SectionWrapper