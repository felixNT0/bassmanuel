"use client";

import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-32 bg-background overflow-hidden flex items-center justify-center text-center"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-brand/10 blur-[150px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col gap-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight font-serif italic">
            &ldquo;Playing to lift men to God.&rdquo;
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto rounded-full" />
          <p className="text-lg md:text-2xl text-foreground/60 font-light leading-relaxed max-w-2xl mx-auto">
            For{" "}
            <strong className="font-bold">
              BASS
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #8FBC8B" }}
              >
                MANUEL
              </span>
            </strong>
            , the bass is more than an instrument. It is a tool for expression,
            connection, excellence and worship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
