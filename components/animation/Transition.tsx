"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

export default function Transition({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1.4 }}
      whileInView={{ opacity: 1.2 }}
      transition={{ duration: 2.5, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
}
