"use client";

import useCountdownTarget from "@/lib/useCountdownTarget";

const pad = (n) => String(n).padStart(2, "0");

const CountdownTimer = () => {
  const { days, hh, mm, ss } = useCountdownTarget();

  return (
    <>
      <span className="flex flex-col">
        <span className="md:min-w-[90px] mb-3">{pad(days)}</span>
        <span className="text-xs uppercase tracking-wider">
          <span>Days</span>
        </span>
      </span>
      <div className="divider flex items-center -mt-7 lg:-mt-10 text-xs md:text-2xl">:</div>
      <span className="flex flex-col">
        <span className="md:w-[90px] mb-3">{pad(hh)}</span>
        <span className="text-xs uppercase tracking-wider">
          <span>Hours</span>
        </span>
      </span>
      <div className="divider flex items-center -mt-7 lg:-mt-10 text-xs md:text-2xl">:</div>
      <span className="flex flex-col">
        <span className="md:w-[90px] mb-3">{pad(mm)}</span>
        <span className="text-xs uppercase tracking-wider">
          <span className="hidden sm:block">Minutes</span>
          <span className="block sm:hidden">Mins</span>
        </span>
      </span>
      <div className="divider flex items-center -mt-7 lg:-mt-10 text-xs md:text-2xl">:</div>
      <span className="flex flex-col">
        <span className="md:w-[90px] mb-3">{pad(ss)}</span>
        <span className="text-xs uppercase tracking-wider">
          <span className="hidden sm:block">Seconds</span>
          <span className="block sm:hidden">Secs</span>
        </span>
      </span>
    </>
  );
};

export default CountdownTimer;
