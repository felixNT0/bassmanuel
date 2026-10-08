import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Genres } from "@/components/Genres";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { VideoGallery } from "@/components/VideoGallery";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

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
