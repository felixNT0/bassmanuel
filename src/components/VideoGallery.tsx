"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: "dpDANp8FgOg",
    title: "Sawa 🌴 groove for the King of Kings👑",
  },
  {
    id: "jgta8tYu8eM",
    title: "BASSMANUEL & AJLMUZIC ACCOMPANIED WOLI-AGBA",
  },
  {
    id: "FFSLPrvjLtg",
    title: "Bassmanuel took Leo chizaram groove to another level 🔥🔥🔥",
  },
];

export function VideoGallery() {
  return (
    <section id="media" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[#8FBC8B] font-bold tracking-[0.2em] uppercase text-sm">
            Performance
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground font-serif">
            WATCH ME PLAY
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mt-2">
            Experience the groove, pocket, and power of <strong className="font-bold">BASS<span className="text-transparent" style={{ WebkitTextStroke: "1px #8FBC8B" }}>MANUEL</span></strong> in performance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group">
                {video.id.startsWith("PLACEHOLDER") ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-surface-hover">
                    <p className="text-foreground/40 font-medium">Video Coming Soon</p>
                  </div>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-foreground px-2">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
