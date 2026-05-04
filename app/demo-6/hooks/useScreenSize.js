"use client";

import { useEffect, useState } from "react";

const breakpoints = {
  xs: 640,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536,
  "2xl": Infinity,
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures we are on the client

    const handleResize = () => {
      const width = window.innerWidth;

      if (width < breakpoints.xs) setScreenSize("xs");
      else if (width < breakpoints.sm) setScreenSize("sm");
      else if (width < breakpoints.md) setScreenSize("md");
      else if (width < breakpoints.lg) setScreenSize("lg");
      else if (width < breakpoints.xl) setScreenSize("xl");
      else setScreenSize("2xl");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lessThan = (size) => isClient && window.innerWidth < breakpoints[size];
  const greaterThan = (size) => isClient && window.innerWidth >= breakpoints[size];

  return { screenSize, lessThan, greaterThan };
};

export default useScreenSize;
