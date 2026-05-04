"use client";

import { Bodoni_Moda, Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
const bodoniModa = Bodoni_Moda({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import Floating, { FloatingElement } from "./components/Floating";

import "@/styles/demo/demo5.scss";
import Image from "next/image";
import useCountdownTarget from "@/lib/useCountdownTarget";

const pad = (n) => String(n).padStart(2, "0");

const TimerBlock = () => {
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
        <div key={c.l} className="flex flex-col items-center min-w-[56px] sm:min-w-[72px]">
          <span className="text-3xl sm:text-5xl font-medium tabular-nums leading-none">{pad(c.v)}</span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-black/60 mt-2">{c.l}</span>
        </div>
      ))}
    </div>
  );
};

const Demo5 = () => {
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

  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonState, setButtonState] = useState("idle");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const isValidEmail = (e) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e);

  const buttonCopy = {
    idle: "Subscribe",
    loading: <motion.div className="h-2 w-2 sm:h-4 sm:w-4 animate-spin rounded-full border-2 border-[var(--primary)] border-t-transparent mx-auto" />,
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
    setTimeout(() => setEmail(""), 3500);
  };

  return (
    <main className={`main-content-5 ${bricolageGrotesque.className} w-full overflow-hidden`}>
      <motion.header
        initial={{ opacity: 0, translateY: -60 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="fixed w-full top-0 z-[5000] py-3 sm:py-5 px-5 bg-linear-to-t from-[var(--bg)]/0 to-[var(--bg)]/90 backdrop-blur-[1px] origin-top"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap md:justify-between items-center">
            <div className="md:w-1/3">
              <Link className="inline-flex items-center" href="/" aria-label="Lulu Money Business">
                <img src="/logo.png" alt="Lulu Money Business" className="h-8 sm:h-10 w-auto" />
              </Link>
            </div>
            <div className={`${menuOpen ? "flex bg-white rounded-lg" : "hidden md:flex"} order-last md:order-none w-full mt-2 md:mt-0 py-6 md:py-0 flex flex-col md:flex-row md:w-1/3 text-center gap-4 md:gap-12 justify-center items-center transition-all duration-300`}>
              <Link href="#" className="cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none">Services</Link>
              <Link href="#" className="cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none">Resources</Link>
              <Link href="#" className="cursor-pointer relative after:absolute after:content-[''] after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full after:right-0 hover:after:right-auto hover:after:left-0 after:bottom-0 after:pointer-events-none">Support</Link>
            </div>

            <div className="md:w-1/3 text-end ml-auto md:ml-0" />

            <button className="cursor-pointer block md:hidden text-black ml-4 relative w-6 h-6" type="button" aria-label="Open Menu" title="Open Menu" onClick={() => setMenuOpen(!menuOpen)}>
              <AnimatePresence>
                {menuOpen ? (
                  <motion.svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} key="open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></motion.svg>
                ) : (
                  <motion.svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} key="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <section className="relative max-w-[1410px] mx-auto h-screen max-h-[1000px] flex items-center justify-center">
        <motion.div
          className="z-50 text-center space-y-4 items-center flex flex-col px-6"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.05 }}
        >
          <div className="text-4xl md:text-6xl leading-[1.2] mb-4 md:mb-6">
            <p className="text-[#0a2756]">Lulu Money Business</p>
            <p>
              <span className={`!italic uppercase text-3xl md:text-5xl text-[#1cb1e8] ${bodoniModa.className}`}>Launching</span> <span className="text-[#0a2756]">SOON</span>
            </p>
          </div>

          <TimerBlock />

          <p className="md:text-lg mb-6 md:mb-8 text-balance text-black/75">Banking built for ambitious businesses.</p>

          <button type="button" onClick={handleSubscribeButton} className="cursor-pointer bg-[var(--primary)] inline-block text-white px-7 py-3 rounded-lg hover:brightness-115 transition duration-300">
            Join the waitlist
          </button>
        </motion.div>

        <Floating sensitivity={-0.5} className="no-transform-mobile [&_img]:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          <FloatingElement depth={1.5} className="top-[12%] lg:top-[16%] start-3 lg:start-[10%]">
            <motion.div initial={{ scale: 0.5, y: -100, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.5 }}>
              <Image src="/demo-5/01.jpg" alt="01" className="d-block w-16 lg:w-36 aspect-square object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg" height={100} width={100} />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={2} className="top-20 lg:top-[-5%] end-[-5%] lg:end-[13%]">
            <motion.div initial={{ scale: 0.5, y: -100, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.3 }}>
              <Image src="/demo-5/06.jpg" alt="03" className="d-block w-26 lg:w-40 aspect-[4/5] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg" height={100} width={100} />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={1.75} className="bottom-10 sm:bottom-25 start-[8%]">
            <motion.div initial={{ scale: 0.5, y: 100, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.5 }}>
              <Image src="/demo-5/04.jpg" alt="04" className="d-block w-20 lg:w-36 aspect-[4/5] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg" height={100} width={100} />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={2.5} className="bottom-0 lg:bottom-[-5%] start-[15%] hidden sm:block">
            <motion.div initial={{ scale: 0.5, y: 100, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.65 }}>
              <Image src="/demo-5/03.jpg" alt="05" className="d-block w-26 lg:w-46 aspect-[8/10] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg" height={100} width={100} />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={1} className="bottom-[-7%] start-[40%] lg:start-[45%]">
            <motion.div initial={{ scale: 0.5, y: 100, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.5 }}>
              <Image src="/demo-5/07.jpg" alt="07" className="d-block w-20 lg:w-32 aspect-[8/10] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg" height={100} width={100} />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={1.75} className="bottom-[5%] end-[17%] hidden sm:block">
            <motion.div initial={{ scale: 0.5, y: 100, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.55 }}>
              <Image src="/demo-5/02.jpg" alt="08" className="d-block w-18 lg:w-28 aspect-square object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg" height={100} width={100} />
            </motion.div>
          </FloatingElement>
          <FloatingElement depth={2.5} className="bottom-10 md:bottom-[10%] end-[6%]">
            <motion.div initial={{ scale: 0.5, y: 100, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ type: "spring", visualDuration: 0.4, bounce: 0.3, delay: 0.4 }}>
              <Image src="/demo-5/05.jpg" alt="06" className="d-block w-24 lg:w-42 aspect-[8/12] object-cover hover:scale-110 duration-[1s] cursor-pointer transition-transform ease-[cubic-bezier(0.16,_1,_0.3,_1)] rounded-lg" height={100} width={100} />
            </motion.div>
          </FloatingElement>
        </Floating>
      </section>

      <section className="pt-30 pb-16 px-6" style={{ background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.05) 100%, rgba(255,255,255,0) 100%)" }}>
        <p className="text-xl sm:text-3xl mb-6 sm:mb-8 leading-snug max-w-[550px] mx-auto text-balance text-center">Join our newsletter to be the first to know when Lulu Money Business launches.</p>

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
              className="cursor-pointer text-sm sm:text-base bg-white text-black hover:text-[var(--primary)] peer-focus:text-[var(--primary)] px-5 flex-1 h-12 w-full transition duration-200 focus:outline-none focus:shadow-none relative after:absolute after:content-[''] after:h-4 after:w-px after:left-0 after:top-[calc(50%-8px)] after:bg-black/25 rounded-e-lg overflow-clip"
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
        {error && <p className="text-dark text-xs mt-2 text-center">{error}</p>}
      </section>

      <footer className="px-8 py-8 mt-1">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="md:w-1/2 text-center md:text-start order-2 md:order-1">
              <span className="text-sm text-balance inline-block">&copy; {new Date().getFullYear()} Lulu Money Business</span>
            </div>
            <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
              <ul className="flex items-center justify-center md:justify-end flex-wrap gap-4 [&_li]:leading-[0] [&_a]:bg-white [&_a]:rounded-lg">
                <li>
                  <Link className="hover:scale-105 transition duration-200 inline-block p-3" href="#">
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                  </Link>
                </li>
                <li>
                  <Link className="hover:scale-105 transition duration-200 inline-block p-3" href="#">
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
                  </Link>
                </li>
                <li>
                  <Link className="hover:scale-105 transition duration-200 inline-block p-3" href="#">
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Demo5;
