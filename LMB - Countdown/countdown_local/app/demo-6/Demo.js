"use client";

import { Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

import { motion } from "motion/react";
import Link from "next/link";
import CirclingElements from "./components/CirclingElements";
import FitText from "./components/FitText";
import VerticalCutReveal from "./components/VerticalCutReveal";
import useScreenSize from "./hooks/useScreenSize";

import "@/styles/demo/demo6.scss";
import Image from "next/image";
import useCountdownTarget from "@/lib/useCountdownTarget";

const pad = (n) => String(n).padStart(2, "0");

const TimerStrip = () => {
  const { days, hh, mm, ss } = useCountdownTarget();
  const cells = [
    { v: days, l: "Days" },
    { v: hh, l: "Hours" },
    { v: mm, l: "Minutes" },
    { v: ss, l: "Seconds" },
  ];
  return (
    <div className="flex justify-center gap-3 sm:gap-6 mb-6">
      {cells.map((c) => (
        <div key={c.l} className="flex flex-col items-center min-w-[64px] sm:min-w-[88px] bg-[#1cb1e8]/12 ring-1 ring-[#1cb1e8]/25 rounded-xl py-3 px-4">
          <span className="text-3xl sm:text-5xl font-medium tabular-nums leading-none">{pad(c.v)}</span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] opacity-70 mt-2">{c.l}</span>
        </div>
      ))}
    </div>
  );
};

const Demo6 = () => {
  const screenSize = useScreenSize();
  const communityImages = [
    "/demo-6/01.jpg",
    "/demo-6/02.jpg",
    "/demo-6/03.jpg",
    "/demo-6/04.jpg",
    "/demo-6/05.jpg",
    "/demo-6/06.jpg",
    "/demo-6/07.jpg",
    "/demo-6/08.jpg",
    "/demo-6/09.jpg",
    "/demo-6/10.jpg",
    "/demo-6/11.jpg",
    "/demo-6/12.jpg",
  ];
  const communityImageLength = communityImages.length;

  return (
    <main className={`main-content-6 ${bricolageGrotesque.className} w-full overflow-hidden`}>
      <section className="relative h-[70vh]">
        <Link href="/" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-2xl z-50">
          <motion.div
            initial={{ y: 150, scale: 1.75 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 21, duration: 0.3, delay: communityImageLength * 0.06 }}
          >
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.05}
              staggerFrom="center"
              transition={{ type: "spring", stiffness: 200, damping: 21 }}
            >
              {`Lulu Money Business`}
            </VerticalCutReveal>
          </motion.div>
        </Link>

        <CirclingElements radius={screenSize.lessThan(`sm`) ? 110 : 140}>
          {communityImages.map((image, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 absolute -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-clip"
            >
              <Image src={image} fill alt="image" className="object-cover rounded-clip" />
            </div>
          ))}
        </CirclingElements>
      </section>

      <section className="pb-20 pt-6 px-6">
        <div className="text-xl sm:text-3xl mb-6 sm:mb-8 leading-snug max-w-[360px] sm:max-w-[550px] mx-auto text-balance text-center">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.005}
            staggerFrom="random"
            transition={{ type: "spring", stiffness: 200, damping: 40, delay: 0.3 }}
            containerClassName="justify-center"
          >
            {`Lulu Money Business is launching soon.`}
          </VerticalCutReveal>
        </div>

        <TimerStrip />
      </section>

      <footer className="px-6 py-8">
        <div className="container mx-auto text-center">
          <motion.ul
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-4 [&_li]:leading-[0] [&_a]:bg-white/10 [&_a]:rounded-lg mb-5 text-[15px]"
          >
            <li>
              <Link className="hover:scale-105 transition duration-200 inline-block py-4 px-3" href="#">X .COM</Link>
            </li>
            <li>
              <Link className="hover:scale-105 transition duration-200 inline-block py-4 px-3" href="#">Facebook</Link>
            </li>
            <li>
              <Link className="hover:scale-105 transition duration-200 inline-block py-4 px-3" href="#">Instagram</Link>
            </li>
          </motion.ul>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-[15px] text-balance">&copy; {new Date().getFullYear()} Lulu Money Business</motion.p>
        </div>
      </footer>

      <div className="fixed -bottom-4 md:-bottom-6 w-full text-center pointer-events-none -z-50 text-white/3">
        <FitText className="leading-[1]" as="p">Lulu Money Business</FitText>
      </div>
    </main>
  );
};

export default Demo6;
