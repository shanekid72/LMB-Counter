"use client";

import { useEffect, useRef, useState } from "react";

const VIDEOS = ["/lmb-1.mp4", "/lmb-2.mp4", "/lmb-3.mp4"];

const VideoSplash = ({ children }) => {
  const [done, setDone] = useState(false);
  const [src, setSrc] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setSrc(VIDEOS[Math.floor(Math.random() * VIDEOS.length)]);
  }, []);

  useEffect(() => {
    if (!src || !videoRef.current) return;
    const v = videoRef.current;
    const play = v.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => setDone(true));
    }
  }, [src]);

  return (
    <>
      {!done && (
        <div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center px-6 py-10 sm:px-10 sm:py-14"
          style={{
            background:
              "radial-gradient(ellipse at center, #0a2756 0%, #06183a 55%, #02091c 100%)",
          }}
        >
          {/* subtle grain / glow ring behind the frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(28,177,232,0.18) 0%, transparent 55%)",
            }}
          />

          {/* brand mark */}
          <img
            src="/logo-light.png"
            alt="Lulu Money Business"
            className="relative z-10 h-7 sm:h-9 w-auto opacity-95 mb-6 sm:mb-8"
          />

          {/* framed video — sizes to its own intrinsic aspect, no pillarbox */}
          {src && (
            <video
              ref={videoRef}
              src={src}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={() => setDone(true)}
              onError={() => setDone(true)}
              className="relative z-10 max-w-[min(1200px,92vw)] max-h-[78vh] w-auto h-auto rounded-2xl ring-1 ring-white/15 shadow-[0_30px_120px_rgba(28,177,232,0.25)] bg-black"
            />
          )}

          {/* caption */}
          <p className="relative z-10 mt-5 sm:mt-6 text-[11px] sm:text-xs uppercase tracking-[0.4em] text-white/55">
            A glimpse of what&apos;s coming
          </p>

          <button
            type="button"
            onClick={() => setDone(true)}
            className="absolute bottom-6 right-6 z-20 text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white border border-white/30 hover:border-white/70 rounded-full px-4 py-2 backdrop-blur-sm bg-black/30 transition"
            aria-label="Skip intro"
          >
            Skip
          </button>
        </div>
      )}
      <div aria-hidden={!done} style={!done ? { visibility: "hidden" } : undefined}>
        {children}
      </div>
    </>
  );
};

export default VideoSplash;
