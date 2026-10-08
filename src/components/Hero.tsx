"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronDown, Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background Stack ── */}
      <div className="absolute inset-0 z-0">
        {/* Photo */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src="/bassmanuel with bass.jpeg"
            alt="BASSMANUEL playing the bass guitar"
            fill
            priority
            className="object-cover object-[center_18%] scale-[1.02]"
            sizes="100vw"
          />
        </motion.div>
        {/* Dark vignette — stronger at edges, with a slight blur */}
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/60 to-background/30 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-background/30" />
        {/* Brand-color atmospheric glow */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8FBC8B]/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#8FBC8B]/8 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 z-20 relative pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-10 items-center min-h-[80vh]">
          {/* LEFT — Main copy */}
          <div className="flex flex-col gap-7">
            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 w-fit"
            >
              <span className="h-px w-10 bg-[#8FBC8B]" />
              <span className="text-[11px] md:text-xs font-bold tracking-[0.25em] text-[#8FBC8B] uppercase">
                Gospel Bassist · 16 Years of Experience
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col gap-1"
            >
              <h1 className="text-[clamp(3rem,13vw,9rem)] font-black tracking-tighter leading-[0.88] text-foreground uppercase">
                BASS
                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "2px #8FBC8B",
                  }}
                >
                  MANUEL
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl font-light tracking-widest text-foreground/70 uppercase mt-2 ml-1">
                Arise Emmanuel
              </p>
            </motion.div>

            {/* Tagline quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex items-start gap-3 max-w-md"
            >
              <span className="mt-1 h-10 w-0.5 shrink-0 rounded-full bg-[#8FBC8B]" />
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-foreground/85 leading-snug">
                &ldquo;Playing to lift men to God.&rdquo;
              </p>
            </motion.blockquote>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-sm md:text-base text-foreground/70 max-w-md leading-relaxed"
            >
              Professional Gospel Bass Guitarist from Minna, Niger State —
              delivering groove, pocket and power to churches, concerts, studio
              sessions and live productions across Nigeria.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2"
            >
              <a
                href="#contact"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#8FBC8B] px-6 sm:px-8 py-3 sm:py-4 text-sm font-bold tracking-widest text-black uppercase shadow-[0_0_50px_rgba(143,188,139,0.35)] transition-transform hover:scale-105 active:scale-95"
              >
                <span>Book Me</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>

              <a
                href="#media"
                className="group flex items-center gap-3 rounded-full border border-foreground/25 px-6 sm:px-8 py-3 sm:py-4 text-sm font-bold tracking-widest text-foreground uppercase backdrop-blur-[1px] transition-all hover:border-[#8FBC8B]/60 hover:bg-foreground/5"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground/15 pl-0.5 transition-colors group-hover:bg-[#8FBC8B] group-hover:text-black">
                  <Play className="h-3 w-3" />
                </span>
                <span>Watch Videos</span>
              </a>
            </motion.div>

            {/* Bottom label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-2 flex items-center gap-2 text-xs text-foreground/50 uppercase tracking-widest"
            >
              <span className="h-px w-6 bg-foreground/30" />
              Available for hire · Remote sessions worldwide
            </motion.div>
          </div>

          {/* RIGHT — Floating glass stat cards */}
          <div className="hidden lg:flex flex-col gap-5 items-end">
            {[
              { stat: "16+", label: "Years Active", delay: 0.3 },
              { stat: "8+", label: "Genres Played", delay: 0.4 },
              { stat: "Gospel", label: "Core Calling", delay: 0.5 },
            ].map(({ stat, label, delay }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 30 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.7, delay, ease: "easeOut" },
                  x: { duration: 0.7, delay, ease: "easeOut" },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + idx * 0.5,
                  },
                }}
                className="liquid-glass rounded-2xl px-7 py-5 w-[210px] hover:scale-[1.03] transition-transform duration-300"
              >
                <p className="text-3xl font-black text-foreground mb-0.5">
                  {stat}
                </p>
                <p className="text-[11px] font-bold text-[#8FBC8B] uppercase tracking-[0.2em]">
                  {label}
                </p>
              </motion.div>
            ))}

            {/* The Groove Master badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.7, delay: 0.65, ease: "easeOut" },
                x: { duration: 0.7, delay: 0.65, ease: "easeOut" },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                },
              }}
              className="liquid-glass rounded-2xl px-7 py-5 w-[210px] hover:scale-[1.03] transition-transform duration-300 border-t border-[#8FBC8B]/20"
            >
              <p className="text-base font-black text-[#8FBC8B] mb-0.5">
                The Groove Master
              </p>
              <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-[0.2em]">
                Abuja · Minna
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
