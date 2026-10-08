"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Footer() {
  const { resolvedTheme } = useTheme();
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-background text-foreground pt-24 pb-8 border-t border-foreground/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              {resolvedTheme ? (
                <Image
                  src={
                    resolvedTheme === "light"
                      ? "/black-logo-transparent.png"
                      : "/logo-transparent.png"
                  }
                  alt="BASSMANUEL Logo"
                  width={200}
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              ) : (
                <div className="h-16 md:h-20 w-40" />
              )}
            </div>
            <p className="text-foreground/70 font-serif italic">
              &ldquo;Playing to lift men to God.&rdquo;
            </p>
            <p className="text-brand font-bold text-sm uppercase tracking-wider">
              The Groove Master
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-wider mb-2 text-sm text-foreground/60">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#about"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#media"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-wider mb-2 text-sm text-foreground/60">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-foreground/80">
                <MapPin className="w-5 h-5 text-brand shrink-0" />
                <span>Abuja / Minna, Niger State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <Mail className="w-5 h-5 text-brand shrink-0" />
                <a
                  href="mailto:ariseemmanuel23@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  ariseemmanuel23@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <Phone className="w-5 h-5 text-brand shrink-0" />
                <a
                  href="https://wa.me/2347037405371"
                  className="hover:text-foreground transition-colors"
                >
                  07037405371
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold uppercase tracking-wider mb-2 text-sm text-foreground/60">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1FDZvEq1N6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-full hover:bg-brand hover:text-black transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Bassmanuel23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-full hover:bg-brand hover:text-black transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M21.582 6.186a2.66 2.66 0 0 0-1.871-1.884C17.962 3.82 12 3.82 12 3.82s-5.962 0-7.711.482a2.66 2.66 0 0 0-1.871 1.884C2 7.946 2 12 2 12s0 4.054.418 5.814a2.66 2.66 0 0 0 1.871 1.884c1.749.482 7.711.482 7.711.482s5.962 0 7.711-.482a2.66 2.66 0 0 0 1.871-1.884C22 16.054 22 12 22 12s0-4.054-.418-5.814zm-11.69 9.38v-7.13L15.352 12l-5.46 3.566z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/bazzmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-full hover:bg-brand hover:text-black transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@bassmanuel23"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-full hover:bg-brand hover:text-black transition-colors flex items-center justify-center"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://wa.me/2347037405371"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-foreground/5 rounded-full hover:bg-brand hover:text-black transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.027 6.988 2.895a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.888-9.885 9.888m8.53-18.414A12.012 12.012 0 0 0 12.052 0C5.419 0 .019 5.4 0 12.034a12.05 12.05 0 0 0 1.606 6.012L.034 24l6.096-1.597a12.064 12.064 0 0 0 5.922 1.53h.005c6.632 0 12.033-5.4 12.035-12.033a12.043 12.043 0 0 0-3.51-8.527" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-foreground/10 text-sm text-foreground/60">
          <p>
            &copy; {currentYear}{" "}
            <strong className="font-bold">
              BASS
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px var(--color-brand)" }}
              >
                MANUEL
              </span>
            </strong>
            . All rights reserved.
          </p>
          <p>
            Made by{" "}
            <a
              href="https://fkt-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors underline underline-offset-4 decoration-foreground/20 hover:decoration-brand"
            >
              Felix
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
