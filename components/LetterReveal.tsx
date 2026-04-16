"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  text: string;
  className?: string;
  tag?: "h2" | "p" | "span";
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function LetterReveal({ text, className, tag = "p" }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Tag = motion[tag];

  return (
    <Tag
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={letter}
          className="inline-block"
          style={char === " " ? { width: "0.25em" } : undefined}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}
