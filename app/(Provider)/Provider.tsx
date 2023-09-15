"use client";
import React from "react";

import { Provider as ReduxProvider } from "react-redux";

import { store } from "@/Redux-store/Redux-store";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";

function Provider({ children }: { children: React.ReactNode }) {
  // Define a Provider component that wraps the application with Redux state management and animations.
  return (
    <ReduxProvider store={store}>
      {/* Provide the Redux store to the entire application */}
      <motion.section
        // @ts-ignore
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {children}
      </motion.section>
    </ReduxProvider>
  );
}

export default Provider;
