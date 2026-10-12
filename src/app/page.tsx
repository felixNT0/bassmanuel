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
  title: "Professional Gospel Bass Guitarist Nigeria | BASSMANUEL",
  description:
    "Meet Arise Emmanuel (BASSMANUEL) - Professional Gospel Bass Guitarist from Minna, Nigeria with 16+ years of experience. Book for church services, concerts, studio sessions, and music direction. Expert in worship leadership and praise music.",
  openGraph: {
    title: "BASSMANUEL | Professional Gospel Bass Guitarist Nigeria",
    description:
      "Book Arise Emmanuel - Professional Gospel Bass Guitarist with 16+ years of experience. Available for church services, concerts, studio sessions, and music direction across Nigeria.",
    images: [
      {
        url: "/bassmanuel.jpeg",
        width: 1200,
        height: 630,
        alt: "BASSMANUEL - Arise Emmanuel performing on bass guitar at a worship service",
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
