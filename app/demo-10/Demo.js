"use client";

import { Akshar } from "next/font/google";
const akshar = Akshar({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

import { motion } from "motion/react";
import Link from "next/link";
import AnimatedPathText from "./components/AnimatedPathText";

import "@/styles/demo/demo10.scss";
import useCountdownTarget from "@/lib/useCountdownTarget";

const pad = (n) => String(n).padStart(2, "0");

const TimerRow = () => {
  const { days, hh, mm, ss } = useCountdownTarget();
  const cells = [
    { v: days, l: "Days" },
    { v: hh, l: "Hours" },
    { v: mm, l: "Mins" },
    { v: ss, l: "Secs" },
  ];
  return (
    <div className="flex justify-center gap-2 sm:gap-4 mt-4">
      {cells.map((c) => (
        <div
          key={c.l}
          className="flex flex-col items-center min-w-[58px] sm:min-w-[72px] rounded-2xl border border-[#1cb1e8]/40 bg-white px-3 py-2 shadow-sm"
        >
          <span className="text-2xl sm:text-3xl tabular-nums leading-none text-[#0a2756]">{pad(c.v)}</span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#0a2756]/60 mt-1">{c.l}</span>
        </div>
      ))}
    </div>
  );
};

const Demo10 = () => {
  const rectPath =
    "M 20,20 L 180,20 A 20,20 0 0,1 200,40 L 200,160 A 20,20 0 0,1 180,180 L 20,180 A 20,20 0 0,1 0,160 L 0,40 A 20,20 0 0,1 20,20";

  const repeatedText = "LAUNCHING SOON • ".repeat(12) + "";
  const scaleClasses = [
    "scale-[1]",
    "scale-[1.15] sm:scale-[1.15]",
    "scale-[1.32] sm:scale-[1.3]",
    "scale-[1.5] sm:scale-[1.45]",
    "scale-[1.7] sm:scale-[1.6]",
  ];

  return (
    <main className={`main-content-10 ${akshar.className} overflow-clip`}>
      <div className="w-dvw h-dvh flex justify-center items-center relative bg-white">
        {Array.from({ length: 5 }, (_, index) => (
          <motion.div
            key={`text-${index + 1}`}
            className={`${scaleClasses[index]} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full`}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: index * 0.05 + 0.2, scale: 1 }}
          >
            <AnimatedPathText
              path={rectPath}
              svgClassName="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              viewBox="-20 10 240 180"
              text={repeatedText}
              textClassName="text-[7.6px] lowercase uppercase"
              duration={index + 1 * 50}
              textAnchor="start"
            />
          </motion.div>
        ))}

        <motion.div
          transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 text-center"
        >
          <div className="mb-6 max-w-[420px]">
            <Link
              href="/"
              aria-label="Lulu Money Business"
              className="transition-all duration-300 hover:opacity-60 mb-4 inline-flex items-center justify-center"
            >
              <img src="/logo.png" alt="Lulu Money Business" className="h-16 sm:h-20 w-auto" />
            </Link>
            <p className="text-5xl sm:text-6xl leading-[1.1] uppercase text-[#0a2756]">
              Coming Soon
            </p>
            <p className="text-balance text-[#0a2756]/70 mt-3">Banking built for ambitious businesses.</p>
          </div>

          <TimerRow />
        </motion.div>
      </div>
    </main>
  );
};

export default Demo10;
