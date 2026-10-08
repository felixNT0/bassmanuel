"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

function playBassGroove() {
  try {
    const ctx = new AudioContext();
    ctx.resume();

    // Gospel funk bass riff — E groove
    // E1→E2→G#2→A2→B2→A2→G#2→E2→D2→E2
    const notes = [
      { freq: 41.2, start: 0.0, dur: 0.12 },
      { freq: 82.4, start: 0.14, dur: 0.1 },
      { freq: 103.8, start: 0.26, dur: 0.1 },
      { freq: 110.0, start: 0.38, dur: 0.14 },
      { freq: 123.5, start: 0.54, dur: 0.1 },
      { freq: 110.0, start: 0.66, dur: 0.08 },
      { freq: 103.8, start: 0.76, dur: 0.1 },
      { freq: 82.4, start: 0.88, dur: 0.08 },
      { freq: 73.4, start: 0.98, dur: 0.14 },
      { freq: 82.4, start: 1.14, dur: 0.3 },
    ];

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.75, ctx.currentTime);
    masterGain.connect(ctx.destination);

    notes.forEach(({ freq, start, dur }) => {
      const now = ctx.currentTime;

      // Sine — deep fundamental punch
      const sine = ctx.createOscillator();
      const sineGain = ctx.createGain();
      sine.type = "sine";
      sine.frequency.setValueAtTime(freq, now + start);
      sineGain.gain.setValueAtTime(0, now + start);
      sineGain.gain.linearRampToValueAtTime(0.55, now + start + 0.015);
      sineGain.gain.exponentialRampToValueAtTime(0.001, now + start + dur);
      sine.connect(sineGain);
      sineGain.connect(masterGain);
      sine.start(now + start);
      sine.stop(now + start + dur + 0.02);

      // Sawtooth — harmonic growl through low-pass filter
      const saw = ctx.createOscillator();
      const sawGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      saw.type = "sawtooth";
      saw.frequency.setValueAtTime(freq, now + start);
      saw.frequency.linearRampToValueAtTime(freq * 1.012, now + start + 0.03);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(600, now + start);
      filter.frequency.exponentialRampToValueAtTime(200, now + start + dur);
      filter.Q.value = 2;
      sawGain.gain.setValueAtTime(0, now + start);
      sawGain.gain.linearRampToValueAtTime(0.28, now + start + 0.02);
      sawGain.gain.exponentialRampToValueAtTime(0.001, now + start + dur * 0.8);
      saw.connect(filter);
      filter.connect(sawGain);
      sawGain.connect(masterGain);
      saw.start(now + start);
      saw.stop(now + start + dur + 0.02);
    });
  } catch (e) {
    console.log("Web Audio error:", e);
  }
}

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [logoReady, setLogoReady] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Logo finishes entering at ~1.2s — then show the "enter" prompt
    const logoTimer = setTimeout(() => setLogoReady(true), 1400);

    return () => {
      clearTimeout(logoTimer);
      document.body.style.overflow = "unset";
    };
  }, []);

  function handleEnter() {
    // User gesture → audio is guaranteed to play
    playBassGroove();

    // Close splash after groove starts (give ~300ms for the first note)
    setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = "unset";
    }, 300);
  }

  const logoSrc =
    resolvedTheme === "light"
      ? "/black-logo-transparent.png"
      : "/logo-transparent.png";

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 40, filter: "blur(20px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 1.2, ease: "easeOut" },
            }}
            className="relative flex items-center justify-center"
          >
            <Image
              src={logoSrc}
              alt="BASSMANUEL Logo"
              width={320}
              height={140}
              className="h-24 sm:h-32 md:h-40 w-auto object-contain"
              priority
            />
            {/* Brand glow */}
            <div className="absolute inset-0 bg-brand/20 blur-[80px] rounded-full scale-150 -z-10" />
          </motion.div>

          {/* Pulsing ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0, 0.25, 0],
              scale: [0.6, 1.8, 2.5],
              transition: { duration: 2, ease: "easeOut" },
            }}
            className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-brand/30 pointer-events-none"
          />

          {/* Enter CTA — appears after logo finishes animating in */}
          <AnimatePresence>
            {logoReady && (
              <motion.button
                key="enter-btn"
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                }}
                exit={{ opacity: 0 }}
                onClick={handleEnter}
                className="mt-12 sm:mt-16 flex flex-col items-center gap-2 group cursor-pointer"
                aria-label="Enter the site"
              >
                <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-foreground/50 group-hover:text-brand transition-colors duration-300">
                  tap to enter
                </span>
                {/* Animated chevron */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-px h-8 sm:h-10 bg-linear-to-b from-brand/60 to-transparent"
                />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
