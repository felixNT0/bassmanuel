"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  const stats = [
    { value: "16+", label: "Years Active", icon: "🎸" },
    { value: "2", label: "Primary Locations", icon: "📍" },
    { value: "8+", label: "Genres", icon: "🎵" },
    { value: "1", label: "Purpose", icon: "✨" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-surface"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image/Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/bassmanuel.jpeg"
              alt="BASSMANUEL Portrait"
              fill
              className="object-cover object-[center_5%]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Glass Overlay on Image */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-strong rounded-2xl p-6 border border-white/20">
                <p className="text-foreground font-serif italic text-lg leading-snug">
                  &quot;My journey on bass spans 16 years, marked by dedication
                  to both musical excellence and spiritual ministry.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <span className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
                The Groove Master
              </span>
              <h2 className="text-[clamp(2.8rem,8vw,5.5rem)] font-black tracking-tighter leading-[0.88] text-foreground uppercase">
                BASS
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "2px var(--color-brand)" }}
                >
                  MANUEL
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                I am{" "}
                <strong className="font-bold">
                  BASS
                  <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: "1px var(--color-brand)" }}
                  >
                    MANUEL
                  </span>
                </strong>{" "}
                (Arise Emmanuel), a professional Gospel Bass Guitarist from
                Minna, Niger State, Nigeria.
              </p>
              <p>
                I currently serve at Kingdom of God Embassy International, Abuja
                / Minna, where I am recognized for my signature groove — a blend
                of pocket, power and praise.
              </p>
              <p>
                I am versatile across Contemporary Gospel, Highlife, Makosa,
                Soukous, Afro Gospel, Reggae, Traditional Worship, Hip Hop,
                Funk, and R&B.
              </p>
              <p>
                <strong className="font-bold">
                  Worship & Praise Leadership – Bass Ministry:
                </strong>{" "}
                I lead Worship and Praise sections with the bass guitar, guided
                by a deep understanding of spiritual flow and musical dynamics.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="liquid-glass rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300"
                >
                  <span className="text-3xl">{stat.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-black text-brand leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mt-1">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
