"use client";

import { motion } from "motion/react";
import React from "react";

const CirclingElements = ({ children, radius = 100, duration = 30, className }) => {
  const childrenCount = React.Children.count(children);

  const getInitialPosition = (index) => {
    const angle = (index * 360) / childrenCount;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    return { x, y };
  };

  return (
    <div className={`relative w-full h-full ${className || ""}`}>
      {React.Children.map(children, (child, index) => {
        const offset = (index * 360) / childrenCount;
        const { x, y } = getInitialPosition(index);

        return (
          <motion.div
            key={index}
            id={`circle-child-${index}`}
            className="transform-gpu absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-circling"
            style={{
              "--circling-duration": duration,
              "--circling-radius": radius,
              "--circling-offset": offset,
              "--circling-delay": childrenCount * 0.09 + "s",
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{ x: x, y: y, opacity: 1, scale: 1 }}
            transition={{
              x: { duration: 0.15, delay: (childrenCount * 0.06) + index * 0.01 },
              y: { duration: 0.15, delay: (childrenCount * 0.06) + index * 0.01 },
              opacity: { duration: 0.2, delay: 0.4 + index * 0.05 },
              scale: { duration: 0.2, delay: 0.4 + index * 0.05 }
            }}
            onAnimationComplete={() => {
              const element = document.getElementById(`circle-child-${index}`);
              element ?? element.classList.add("animate-circling");
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CirclingElements;