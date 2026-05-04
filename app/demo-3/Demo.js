"use client";

import { Bodoni_Moda, Gabarito } from "next/font/google";
const gabarito = Gabarito({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
const bodoniModa = Bodoni_Moda({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import TextCursorProximity from "./components/TextCursorProximity";

import "@/styles/demo/demo3.scss";

const Demo3 = () => {
  const backgroundRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundPositionY = `${-scrollY * 0.5}px`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subscribeRef = useRef(null);
  const handleSubscribeButton = (e) => {
    e.preventDefault();
    const target = subscribeRef.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      const input = target.querySelector("input");
      setTimeout(() => {
        if (input) input.focus();
      }, 450);
    }
  };

  const [about, setAbout] = useState(false);
  const handleAboutButton = (e) => {
    e.preventDefault();
    setAbout((prev) => !prev);
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (!about) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }
  };

  const [buttonState, setButtonState] = useState("idle");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const isValidEmail = (e) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e);

  const buttonCopy = {
    idle: "Subscribe",
    loading: (
      <motion.div className="h-2 w-2 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent mx-auto" />
    ),
    success: (
      <motion.div className="text-[var(--primary)] flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11" color="currentColor"/></svg>
        <span>Done</span>
      </motion.div>
    ),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonState === "success") return;
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setButtonState("loading");
    setTimeout(() => {
      setButtonState("success");
      console.log("Collected Email:", email);
    }, 1750);
    setTimeout(() => {
      setEmail("");
    }, 3500);
  };

  return (
    <main className={`main-content-3 ${gabarito.className} min-h-screen overflow-hidden`}>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="pt-6 px-5 sm:px-8 text-sm max-w-full w-[1200px] mx-auto"
      >
        <div className="flex gap-2 lg:gap-16 justify-between items-center">
          <div className="order-2 sm:order-1 sm:w-1/3 ms-auto sm:ms-0 me-3 sm:me-0">
            <button className="uppercase relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 opacity-100 sm:opacity-75 hover:opacity-100 transition-all duration-300 cursor-pointer" aria-label="About" onClick={handleAboutButton}>About</button>
          </div>

          <div className="order-1 sm:order-2 sm:w-1/3 text-center">
            <Link className={`block transition-all duration-300 hover:opacity-60 text-lg sm:text-2xl ${bodoniModa.className}`} href="/" aria-label="Logo">
              Lulu Money Business
            </Link>
          </div>

          <div className="order-3 sm:w-1/3 text-end">
            <a className="uppercase relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 opacity-100 sm:opacity-75 hover:opacity-100 transition-all duration-300" href="#subscribe" aria-label="Subscribe" onClick={handleSubscribeButton}>Subscribe</a>
          </div>
        </div>
      </motion.header>

      <section
        className="pt-[15dvh] px-3 sm:px-8 flex-1 transition-all duration-200"
        style={about ? { transform: "scale(1) translateY(20%)" } : {}}
      >
        <section className="text-center mb-8 w-fit mx-auto no-transform-mobile" ref={textContainerRef}>
          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TextCursorProximity
              label="Hey, Welcome!"
              className="text-sm sm:text-base mb-2 sm:mb-4"
              styles={{
                transform: { from: "translateY(0) scale(1) rotate(0deg)", to: "translateY(-10px) scale(1.2) rotate(10deg)" },
                color: { from: "#333333", to: "#d11313" },
              }}
              falloff="gaussian"
              radius={100}
              containerRef={textContainerRef}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TextCursorProximity
              label="Lulu Money Business Is"
              className="sm:text-xl md:text-3xl mb-3 sm:mb-6"
              styles={{
                transform: { from: "translateY(0) scaleX(1)", to: "translateY(-10px) scaleX(1.2)" },
                color: { from: "#333333", to: "#d11313" },
              }}
              falloff="gaussian"
              radius={100}
              containerRef={textContainerRef}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <TextCursorProximity
              label="Coming Soon"
              className={`text-[clamp(2.5rem,8vw,8rem)] uppercase font-bold leading-none tracking-tight`}
              styles={{
                transform: { from: "translateY(0) scaleX(1)", to: "translateY(-20px) scaleX(1.3)" },
                color: { from: "#000000", to: "#d11313" },
              }}
              falloff="gaussian"
              radius={100}
              containerRef={textContainerRef}
            />
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="max-w-full w-[1160px] mx-auto bg-[url('/demo-3/bg.jpg')] bg-cover bg-top text-white rounded-2xl"
          ref={backgroundRef}
        >
          <div className="pt-10 pb-6 px-6 sm:p-16 text-center bg-dark/20">
            <div className="text-4xl md:text-6xl flex gap-3 sm:gap-5 mb-6 sm:mb-12 justify-center min-h-[56px] md:min-h-[90px] lg:min-h-24">
              <CountdownTimer />
            </div>

            <div className="w-px mx-auto mb-10 sm:mb-12 h-10 overflow-hidden relative bg-[var(--primary)]">
              <div className="animate-scroll-down relative w-px h-full bg-white"></div>
            </div>

            <p className="sm:text-2xl mb-6 sm:mb-8 leading-snug max-w-[450px] mx-auto text-balance tracking-wide">Join our newsletter to be the first to know when Lulu Money Business launches.</p>

            <form ref={subscribeRef} onSubmit={handleSubmit} className="max-w-96 mx-auto border-2 border-transparent focus-within:border-[var(--primary)] rounded-[10px] group transition duration-200 shadow-2xl">
              <div className="flex items-center">
                <input
                  className="peer text-sm sm:text-base bg-white text-black block w-full h-12 ps-4 focus:outline-none focus:bg-white focus:text-black transition duration-200 focus:placeholder:text-black/50 rounded-s-lg"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="eg: alex@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  className="cursor-pointer text-sm sm:text-base bg-white text-black hover:text-[var(--primary)] peer-focus:text-[var(--primary)] px-3 sm:px-5 flex-1 h-12 w-full transition duration-200 focus:outline-none focus:shadow-none relative after:absolute after:content-[''] after:h-4 after:w-px after:left-0 after:top-[calc(50%-8px)] after:bg-black/25 rounded-e-lg overflow-clip"
                  type="submit"
                  aria-label="Submit notify email"
                  disabled={buttonState === "loading"}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      className="flex items-center gap-2"
                      transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                      initial={{ opacity: 0, y: -25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 25 }}
                      key={buttonState}
                    >
                      {buttonCopy[buttonState]}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
            </form>
            {error && <p className="text-white text-xs mt-2">{error}</p>}
          </div>
        </motion.div>

        <footer className="py-8">
          <div className="text-[15px] flex flex-wrap gap-x-4 md:gap-8 ms-auto justify-center items-center mb-4">
            <Link className="relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 opacity-50 hover:opacity-100 transition-all duration-300" href="#!" aria-label="X/Twitter">X/Twitter</Link>
            <Link className="relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 opacity-50 hover:opacity-100 transition-all duration-300" href="#!" aria-label="Facebook">Facebook</Link>
            <Link className="relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 opacity-50 hover:opacity-100 transition-all duration-300" href="#!" aria-label="Instagram">Instagram</Link>
            <Link className="relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 opacity-50 hover:opacity-100 transition-all duration-300" href="#!" aria-label="LinkedIn">LinkedIn</Link>
          </div>

          <div className="text-center">
            <span className="text-sm text-balance inline-block">&copy; {new Date().getFullYear()} Lulu Money Business</span>
          </div>
        </footer>
      </section>

      <svg height="0" className="hidden">
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

      <section className="fixed inset-0 h-screen w-screen overflow-y-scroll bg-white/90 backdrop-blur-xl z-[9999] opacity-0 invisible transition-all duration-200" style={about ? { opacity: 1, visibility: "visible" } : {}}>
        <button type="button" onClick={handleAboutButton} className="cursor-pointer block fixed top-6 right-4 transition duration-200 hover:opacity-40 p-3 bg-white z-50" aria-label="Close About">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 5L5 19M5 5l14 14" color="currentColor"/></svg>
        </button>

        <div className="relative mx-auto w-full max-w-[600px] py-16 sm:py-20 px-6 sm:px-8">
          <p className="text-black/50">Who are we?</p>
          <p className="text-4xl md:text-5xl font-bold -tracking-[0.01em] mt-6 leading-[1.2] mb-14">
            Banking built for ambitious businesses.
          </p>

          <p className="text-black/75 leading-7 md:leading-8">
            Lulu Money Business gives growing companies the financial tools they need to move faster — multi-currency accounts, instant cross-border payments, expense controls, and a single dashboard for the whole team. We are launching soon to bring simple, transparent business banking to the region.
            <br /><br />
            Built by the team behind Lulu Money, Lulu Money Business is designed for SMEs, startups, and finance teams who want to stop fighting their bank and start running their company.
          </p>

          <div className="mt-10">
            <p className={`${bodoniModa.className} text-black text-lg`}>Lulu Money Business</p>
            <p className="mt-1 text-black/50">Coming soon</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Demo3;
