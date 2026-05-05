"use client";

import { Faculty_Glyphic } from "next/font/google";
const facultyGlyphic = Faculty_Glyphic({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

import { motion } from "motion/react";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

import "@/styles/demo/demo1.scss";
import useCountdownTarget from "@/lib/useCountdownTarget";

const DIGIT_BIG =
  "text-[4.5rem] sm:text-[8.5rem] leading-none font-bold tracking-tight text-white drop-shadow-[0_8px_40px_rgba(28,177,232,0.55)] tabular-nums";
const DIGIT_SMALL =
  "text-[2rem] sm:text-[4rem] leading-none font-bold tracking-tight text-white/85 drop-shadow-[0_8px_40px_rgba(28,177,232,0.55)] tabular-nums";
const SEP_BIG =
  "text-[4.5rem] sm:text-[8.5rem] leading-none font-bold text-white/25 select-none";
const SEP_SMALL =
  "text-[2rem] sm:text-[4rem] leading-none font-bold text-white/25 select-none";
const LABEL =
  "justify-self-center text-[10px] sm:text-xs uppercase tracking-[0.4em] text-white/55";

const Demo1 = () => {
  const { days, hh, mm, ss, ms } = useCountdownTarget();

  return (
    <main className={`${facultyGlyphic.className} main-content-1 min-h-screen flex flex-col relative overflow-hidden`}>
      <header className="relative z-20 flex justify-center pt-8 sm:pt-10">
        <img src="/logo-light.png" alt="Lulu Money Business" className="h-20 sm:h-28 w-auto opacity-95" />
      </header>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] h-[80vw] max-h-[900px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(28,177,232,0.45) 0%, rgba(28,177,232,0.12) 40%, transparent 70%)",
        }}
      />

      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-16 gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.85, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative filter-[url(#ripples)]"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(28,177,232,0.32),transparent_65%)] blur-2xl" />
          <svg
            className="relative w-44 sm:w-56 animate-spin-slow text-[#1cb1e8]"
            viewBox="0 0 460 460"
          >
            <defs>
              <path
                id="circle-button-text"
                d="M230,380 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
              />
            </defs>
            <text className="text-[2.1rem] uppercase">
              <textPath fill="currentColor" href="#circle-button-text">
                Launching Soon — Launching Soon —
              </textPath>
            </text>
          </svg>
        </motion.div>

        <svg height="0" className="hidden" aria-hidden="true">
          <filter id="ripples" x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="turbulence"
              id="ripple-turbulence"
              numOctaves="1"
              seed="0.1"
              baseFrequency="0.02 0.05"
            />
            <feDisplacementMap scale="10" in="SourceGraphic" />
            <animate
              href="#ripple-turbulence"
              attributeName="baseFrequency"
              dur="75s"
              keyTimes="0;0.5;1"
              values="0.02 0.03; 0.04 0.04; 0.02 0.03"
              repeatCount="indefinite"
            />
          </filter>
        </svg>

        <NumberFlowGroup>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="hero-timer grid items-baseline justify-center gap-x-3 sm:gap-x-6 gap-y-4 sm:gap-y-6 leading-none"
            style={{
              gridTemplateColumns: "repeat(9, auto)",
              "--number-flow-char-height": "1em",
            }}
          >
            <NumberFlow value={days} format={{ minimumIntegerDigits: 2 }} trend={-1} className={`${DIGIT_BIG} col-start-1 row-start-1 justify-self-center`} />
            <span className={`${SEP_BIG} col-start-2 row-start-1`}>:</span>
            <NumberFlow value={hh} format={{ minimumIntegerDigits: 2 }} trend={-1} className={`${DIGIT_BIG} col-start-3 row-start-1 justify-self-center`} />
            <span className={`${SEP_BIG} col-start-4 row-start-1`}>:</span>
            <NumberFlow value={mm} format={{ minimumIntegerDigits: 2 }} trend={-1} className={`${DIGIT_BIG} col-start-5 row-start-1 justify-self-center`} />
            <span className={`${SEP_BIG} col-start-6 row-start-1`}>:</span>
            <NumberFlow value={ss} format={{ minimumIntegerDigits: 2 }} trend={-1} className={`${DIGIT_BIG} col-start-7 row-start-1 justify-self-center`} />
            <span className={`${SEP_SMALL} col-start-8 row-start-1`}>.</span>
            <span className={`${DIGIT_SMALL} col-start-9 row-start-1 justify-self-center`}>{String(ms).padStart(3, "0")}</span>

            <span className={`${LABEL} col-start-1 row-start-2`}>Days</span>
            <span className={`${LABEL} col-start-3 row-start-2`}>Hours</span>
            <span className={`${LABEL} col-start-5 row-start-2`}>Minutes</span>
            <span className={`${LABEL} col-start-7 row-start-2`}>Seconds</span>
            <span className={`${LABEL} col-start-9 row-start-2`}>Ms</span>
          </motion.div>
        </NumberFlowGroup>
      </section>
    </main>
  );
};

export default Demo1;
