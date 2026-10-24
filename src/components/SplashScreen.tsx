"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const { resolvedTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const dismissTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Create audio element
    audioRef.current = new Audio(
      "/chrysalyn-cinematic-intro-whoosh-with-deep-bass-drop.mp3",
    );
    audioRef.current.volume = 0.7;

    return () => {
      document.body.style.overflow = "unset";
      if (dismissTimerRef.current) {
        clearTimeout(dismissTimerRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    }
    setHasEntered(true);

    // Dismiss splash screen after audio ends or after 3 seconds
    dismissTimerRef.current = setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = "unset";
    }, 3000);
  };

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

          {/* Tap to enter button */}
          {!hasEntered && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              onClick={handleEnter}
              className="mt-16 px-8 py-3 bg-brand text-background font-semibold rounded-full hover:bg-brand/90 transition-colors cursor-pointer"
            >
              Tap to Enter
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
