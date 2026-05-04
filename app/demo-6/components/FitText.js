"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from 'react';

const FitText = ({ children, className, style, as: Tag = 'div' }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const handleResize = () => {
      const containerWidth = container.offsetWidth;
      const textWidth = text.scrollWidth;

      if (containerWidth === 0 || textWidth === 0) return;

      const currentFontSize = parseFloat(window.getComputedStyle(text).fontSize);
      const scaleFactor = containerWidth / textWidth;
      const newFontSize = currentFontSize * scaleFactor;

      setFontSize(newFontSize);
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(container);
    observer.observe(text);
    handleResize();

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={containerRef}
      className={className}
      style={{
        ...style,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <motion.span
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.3
        }}
        ref={textRef}
        style={{
          fontSize: `${fontSize}px`,
          whiteSpace: 'nowrap',
          display: 'inline-block',
          transition: 'font-size 0.1s ease',
        }}
      >
        {children}
      </motion.span>
    </Tag>
  );
};

export default FitText;