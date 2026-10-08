import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Genres } from "@/components/Genres";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { VideoGallery } from "@/components/VideoGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to BASSMANUEL - The Groove Master. Professional Gospel Bass Guitarist from Nigeria with 16 years of experience in worship and praise leadership.",
  openGraph: {
    title: "BASSMANUEL | The Groove Master | Gospel Bass Guitarist",
    description:
      "Professional Gospel Bass Guitarist from Minna, Nigeria. 16 years of musical excellence, groove, pocket, power and praise.",
    images: [
      {
        url: "/bassmanuel.jpeg",
        width: 1200,
        height: 630,
        alt: "BASSMANUEL - Arise Emmanuel performing on bass guitar",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Philosophy />
      <About />
      <Services />
      <Skills />
      <Genres />
      <Experience />
      <Gallery />
      <VideoGallery />
      <Booking />
      <Footer />
    </main>
  );
}
