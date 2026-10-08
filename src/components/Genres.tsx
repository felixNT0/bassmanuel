"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const genres = [
  "Contemporary Gospel",
  "Highlife",
  "Makosa",
  "Soukous",
  "Afro Gospel",
  "Reggae",
  "Traditional Worship",
  "Hip Hop",
  "Funk",
  "R&B",
];

export function Genres() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="genres"
      className="relative py-24 md:py-32 bg-background text-foreground overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
            Versatility
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-serif">
            GENRES & STYLES
          </h2>
        </div>

        <div className="flex flex-wrap justify-center max-w-5xl mx-auto">
          {genres.map((genre, idx) => (
            <div
              key={genre}
              className="relative px-6 py-4 md:px-8 md:py-6 cursor-pointer"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <motion.span
                className={cn(
                  "text-3xl md:text-5xl lg:text-6xl font-black font-serif uppercase tracking-tighter transition-colors duration-500",
                  hoveredIdx === null
                    ? "text-foreground/40"
                    : hoveredIdx === idx
                      ? "text-brand"
                      : "text-foreground/10",
                )}
              >
                {genre}
              </motion.span>

              {hoveredIdx === idx && (
                <motion.div
                  layoutId="genre-underline"
                  className="absolute bottom-2 md:bottom-4 left-8 right-8 h-1 bg-brand rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
