"use client";

import useCountdownTarget from "@/lib/useCountdownTarget";

const pad = (n) => String(n).padStart(2, "0");

const CountdownTimer = () => {
  const { days, hh, mm, ss } = useCountdownTarget();

  return (
    <>
      <span className="flex flex-col">
        <span className="md:w-[75px]">{pad(days)}</span>
        <span className="text-xs md:text-sm uppercase tracking-wider font-bold">
          <span>Days</span>
        </span>
      </span>
      <span className="flex flex-col">
        <span className="md:w-[90px]">{pad(hh)}</span>
        <span className="text-xs md:text-sm uppercase tracking-wider font-bold">
          <span>Hours</span>
        </span>
      </span>
      <span className="flex flex-col">
        <span className="md:w-[90px]">{pad(mm)}</span>
        <span className="text-xs md:text-sm uppercase tracking-wider font-bold">
          <span className="hidden sm:block">Minutes</span>
          <span className="block sm:hidden">Mins</span>
        </span>
      </span>
      <span className="flex flex-col">
        <span className="md:w-[90px]">{pad(ss)}</span>
        <span className="text-xs md:text-sm uppercase tracking-wider font-bold">
          <span className="hidden sm:block">Seconds</span>
          <span className="block sm:hidden">Secs</span>
        </span>
      </span>
    </>
  );
};

export default CountdownTimer;
