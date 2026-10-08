"use client";

import { motion } from "framer-motion";
import { Mic2, MonitorPlay, Music, Users } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "LIVE BAND MINISTRATION",
    description: "Church • Crusade • Concert",
    context:
      "Delivering powerful, Spirit-led live bass performance for large congregations, intimate worship, and major concert events.",
  },
  {
    icon: Mic2,
    title: "STUDIO SESSION RECORDING",
    description:
      "Professional bass recording for artists, producers and music projects.",
    context:
      "Clean, precise, and creative bass lines that serve the song, available remotely or in-person.",
  },
  {
    icon: MonitorPlay,
    title: "1-ON-1 BASS LESSONS",
    description: "Physical lessons in Minna + Online lessons.",
    context:
      "Equipping the next generation of bassists with technique, theory, and the heart of worship.",
  },
  {
    icon: Music,
    title: "MUSIC DIRECTION / BAND COORDINATION",
    description:
      "Helping bands and musicians achieve musical cohesion and stronger live performance.",
    context:
      "Structuring arrangements, improving band dynamics, and leading teams to musical excellence.",
  },
  {
    icon: Music,
    title: "WORSHIP & PRAISE LEADERSHIP",
    description: "Bass Ministry",
    context:
      "I lead Worship and Praise sections with the bass guitar, guided by a deep understanding of spiritual flow and musical dynamics.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-background text-foreground overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(143,188,139,0.3),transparent)] blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(143,188,139,0.2),transparent)] blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <span className="text-brand font-bold tracking-[0.2em] uppercase text-sm">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-serif">
            WHAT I DO
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:justify-items-center">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative w-full"
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
              <div className="relative h-full flex flex-col gap-6 glass rounded-3xl p-8 lg:p-10 hover:border-brand/30 transition-colors duration-500 overflow-hidden">
                {/* Number Watermark */}
                <span className="absolute -right-4 -bottom-10 text-[12rem] font-black text-foreground/3 select-none pointer-events-none leading-none">
                  0{idx + 1}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/5 text-brand shadow-inner backdrop-blur-md border border-foreground/5">
                  <service.icon className="h-6 w-6" />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-brand font-medium text-sm tracking-wide uppercase">
                    {service.description}
                  </p>
                </div>

                <p className="text-foreground/70 leading-relaxed text-base md:text-lg mt-auto">
                  {service.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
