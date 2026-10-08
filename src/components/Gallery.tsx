"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "/bassmanuel with bass two.jpeg",
    alt: "BASSMANUEL Performance",
    location: "Live Ministration",
  },
  {
    src: "/gratiude 24.jpeg",
    alt: "Gratitude Concert",
    location: "Lapai, Niger State",
  },
  {
    src: "/koge.jpeg",
    alt: "Kingdom of God Embassy",
    location: "Abuja / Minna",
  },
  {
    src: "/testimony of jesus (gass).jpeg",
    alt: "Testimony of Jesus",
    location: "Baptist Church",
  },
  { src: "/bassmanuel.jpeg", alt: "BASSMANUEL Portrait", location: "Studio" },
  {
    src: "/worshiper hangout.jpeg",
    alt: "Worshiper Hangout",
    location: "Minna",
  },
  {
    src: "/bassmanuel with bass.jpeg",
    alt: "BASSMANUEL with Bass",
    location: "Performance",
  },
  { src: "/lapai.jpeg", alt: "Concert in Lapai", location: "Niger State" },
];

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(
    null,
  );

  return (
    <section
      id="gallery"
      className="relative py-24 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-serif">
            VISUAL ARCHIVE
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid shadow-lg"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={800}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-base">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full glass text-white hover:bg-white/20 transition-colors z-101"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={1600}
                height={1200}
                className="w-full h-full object-contain"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-2xl">
                  {selectedPhoto.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
