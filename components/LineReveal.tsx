"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  className?: string;
};

export default function LineReveal({ className = "" }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.hr
      ref={ref}
      className={`border-gray-200 max-w-6xl mx-auto ${className}`}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left" }}
    />
  );
}
