"use client";

import { motion } from "framer-motion";

const skills = [
  "Fingerstyle Grooving",
  "Slap",
  "Ghost Notes",
  "Fast Runs",
  "Slides",
  "Octave Fills",
  "Smooth Transitions",
  "Solid Pocket",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-surface overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="flex-1 w-full flex flex-col gap-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground font-serif">
              THE GROOVE
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-lg mx-auto md:mx-0">
              Mastery of the bass requires more than just playing notes—it
              requires creating the pocket, carrying the rhythm, and driving the
              song with dynamic precision.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="px-6 py-3 rounded-full bg-surface-hover border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md hover:border-brand/50 transition-all cursor-default group"
                >
                  <span className="font-medium text-foreground/80 group-hover:text-brand transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Waveform Lines */}
      <div className="absolute left-0 right-0 bottom-0 h-32 opacity-10 pointer-events-none flex items-end justify-center gap-1">
        {[...Array(40)].map((_, i) => {
          const targetHeight = 20 + ((i * 37) % 80);
          const animDuration = 2 + ((i * 13) % 2);
          const animDelay = ((i * 7) % 20) * 0.1;

          return (
            <motion.div
              key={i}
              initial={{ height: "20%" }}
              animate={{ height: ["20%", `${targetHeight}%`, "20%"] }}
              transition={{
                duration: animDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: animDelay,
              }}
              className="w-1 md:w-2 bg-brand rounded-t-full"
            />
          );
        })}
      </div>
    </section>
  );
}
