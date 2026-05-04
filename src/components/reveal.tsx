"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.8,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; duration?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: easeOutQuint }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutQuint } },
};

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

export function CharReveal({
  text,
  className,
  delay = 0,
  duration = 0.7,
  stagger: staggerMs = 22,
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}) {
  const chars = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {chars.map((c, i) => (
        <motion.span
          key={`${c}-${i}`}
          aria-hidden
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + (i * staggerMs) / 1000,
            duration,
            ease: easeOutQuint,
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}
