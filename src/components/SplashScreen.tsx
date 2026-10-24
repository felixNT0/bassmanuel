"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const { resolvedTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Create audio element
    audioRef.current = new Audio(
      "/chrysalyn-cinematic-intro-whoosh-with-deep-bass-drop.mp3",
    );
    audioRef.current.volume = 0.7;

    // Try to play audio automatically
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented by browser:", error);
          // If autoplay is blocked, we'll just show the splash without audio
        });
      }
    };

    // Attempt to play audio immediately
    playAudio();

    // Also try on first user interaction as fallback
    const handleUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
        document.removeEventListener("click", handleUserInteraction);
        document.removeEventListener("touchstart", handleUserInteraction);
      }
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    // Auto-dismiss splash screen after audio ends or after 3 seconds
    const dismissTimer = setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = "unset";
    }, 3000);

    return () => {
      clearTimeout(dismissTimer);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.body.style.overflow = "unset";
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
