"use client";

import { Akshar, Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
const akshar = Akshar({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

import { motion } from "motion/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import CountdownTimer from "./components/CountdownTimer";

import "@/styles/demo/demo4.scss";

const Demo4 = () => {
  return (
    <main className={`main-content-4 ${bricolageGrotesque.className} min-h-screen flex flex-col items-center justify-center overflow-hidden py-16 px-3`}>
      <header className="mb-auto md:mb-0">
        <Link href="/" aria-label="Lulu Money Business" className="mb-16 inline-flex items-center justify-center">
          <img src="/logo.png" alt="Lulu Money Business" className="h-9 sm:h-11 w-auto" />
        </Link>
      </header>

      <section className="text-center w-full">
        <div className={`${akshar.className} uppercase text-[clamp(5.5rem,12vw,9rem)] leading-[0.8] mb-16 [&_span]:relative relative`}>
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.05 }} className="inline-block z-1 top-4 drop-shadow-[0_35px_35px_#1cb1e8]">C</motion.span>
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.1 }} className="inline-block z-0 top-2">O</motion.span>
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3 }} className="inline-block z-0">M</motion.span>
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.1 }} className="inline-block z-1">I</motion.span>
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.07 }} className="inline-block z-0 -top-2">N</motion.span>
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.05 }} className="inline-block z-1 sm:-top-4">G</motion.span>
          <br />
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.2 }} className="inline-block z-1 top-2">S</motion.span>
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.1 }} className="inline-block z-0">O</motion.span>
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.1 }} className="inline-block z-1 top-2">O</motion.span>
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.1 }} className="inline-block z-0 -top-4">N</motion.span>

          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.45 }}
            className={`${bricolageGrotesque.className} capitalize absolute text-[clamp(0.5rem,2vw,0.8rem)] w-full left-0 top-1/2 -mt-3 sm:-mt-6 -rotate-5`}
          >
            <Marquee direction="right" className="py-2 md:py-[14px] bg-[var(--primary)] text-white scale-110">
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className="mx-2.5 md:mx-3">Stay Tuned</div>
              ))}
            </Marquee>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, translateY: 2 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "spring", visualDuration: 0.3, bounce: 0.1, delay: 0.3 }}
        >
          <p className="mb-6 text-black/50 text-[15px]">Launch in</p>
          <div className="text-xl sm:text-4xl flex gap-8 md:gap-6 mb-12 justify-center min-h-[56px] md:min-h-[90px] lg:min-h-24">
            <CountdownTimer />
          </div>

          <div className="w-full max-w-[480px] mx-auto">
            <hr className="w-8 block mb-8 mx-auto" />
            <p className="mb-6 text-black/50 text-[15px] inline-block">About Lulu Money Business</p>
            <p className="text-[15px] sm:text-base leading-relaxed sm:leading-loose">A new way for ambitious businesses to manage money — multi-currency accounts, cross-border payments, and team controls in one place.</p>

            <ul className="flex items-center justify-center flex-wrap gap-2 my-6">
              <li>
                <Link className="hover:scale-110 transition duration-200 inline-block p-3" href="#">
                  <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </Link>
              </li>
              <li>
                <Link className="hover:scale-110 transition duration-200 inline-block p-3" href="#">
                  <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                </Link>
              </li>
              <li>
                <Link className="hover:scale-110 transition duration-200 inline-block p-3" href="#">
                  <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      <footer className="mt-auto md:mt-0">
        <div className="text-center">
          <span className="text-sm text-balance inline-block">&copy; {new Date().getFullYear()} Lulu Money Business</span>
        </div>
      </footer>
    </main>
  );
};

export default Demo4;
