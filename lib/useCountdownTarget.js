"use client";

import { useEffect, useState } from "react";

// Single source of truth for the launch date if /countdown.txt cannot be loaded.
export const FALLBACK_TARGET = new Date("2026-05-15T00:00:00");

const parseConfig = (text) => {
  const cfg = {};
  text.split(/\r?\n/).forEach((raw) => {
    const line = raw.trim();
    if (!line || line.startsWith("#")) return;
    const idx = line.indexOf("=");
    if (idx === -1) return;
    cfg[line.slice(0, idx).trim().toLowerCase()] = line.slice(idx + 1).trim();
  });
  return cfg;
};

const calcDiffMs = (target) => Math.max(0, target.getTime() - Date.now());

// Shared countdown hook used by every demo.
// Returns the same { days, hh, mm, ss, ms, target } shape regardless of demo.
// Starts at zeros to avoid SSR/CSR hydration mismatch; populated on mount.
const useCountdownTarget = () => {
  const [target, setTarget] = useState(FALLBACK_TARGET);
  const [seconds, setSeconds] = useState(0);
  const [ms, setMs] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetch("/countdown.txt", { cache: "no-store" })
      .then((res) => (res.ok ? res.text() : Promise.reject(res.status)))
      .then((text) => {
        if (cancelled) return;
        const cfg = parseConfig(text);
        const parsed = cfg.target ? new Date(cfg.target) : null;
        if (parsed && !isNaN(parsed.getTime())) setTarget(parsed);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const tick = () => {
      const diff = calcDiffMs(target);
      const newSeconds = Math.floor(diff / 1000);
      setMs(diff % 1000);
      setSeconds((prev) => (prev !== newSeconds ? newSeconds : prev));
    };
    tick();
    const id = setInterval(tick, 50);
    return () => clearInterval(id);
  }, [target]);

  const days = Math.floor(seconds / 86400);
  const hh = Math.floor((seconds % 86400) / 3600);
  const mm = Math.floor((seconds % 3600) / 60);
  const ss = seconds % 60;

  return { days, hh, mm, ss, ms, target };
};

export default useCountdownTarget;
