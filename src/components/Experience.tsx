"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const experiences = [
  {
    role: "Lead Bassist",
    event: "Kingdom of God Embassy International",
    location: "Abuja / Minna",
    detail:
      "Primary church bassist — weekly ministration, crusades & special services",
  },
  {
    role: "Bassist",
    event: "Gratitude Concert",
    location: "Niger State",
    detail: "Live concert performance alongside top gospel acts",
  },
  {
    role: "Bassist",
    event: "House on the Rock — Quantum Leap Program",
    location: "Minna",
    detail: "Featured bassist at the flagship annual program",
  },
  {
    role: "Bassist",
    event: "Baptist Church",
    location: "Abuja",
    detail: "Special ministration and band collaboration",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-surface overflow-hidden"
    >
      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground font-serif">
            16 YEARS OF EXPERIENCE
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-brand/0 via-brand/40 to-brand/0" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative flex justify-center"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-brand shadow-[0_0_12px_var(--color-brand)] z-10" />

                {/* Card — alternates left/right on desktop */}
                <div
                  className={`w-full md:w-[46%] ${idx % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="liquid-glass rounded-2xl p-6 group hover:shadow-[0_8px_32px_rgba(143,188,139,0.15)] transition-shadow duration-500"
                  >
                    {/* Index number */}
                    <span className="text-brand font-black text-xs tracking-[0.3em] uppercase mb-3 block opacity-60">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {exp.event}
                    </h3>
                    <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-3">
                      {exp.role}
                    </p>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-3">
                      {exp.detail}
                    </p>
                    <div className="flex items-center gap-2 text-foreground/50 text-xs font-medium uppercase tracking-wider">
                      <MapPin className="w-3 h-3 text-brand" />
                      {exp.location}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
