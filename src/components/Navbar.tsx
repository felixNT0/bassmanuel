"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Media", href: "#media" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { resolvedTheme } = useTheme();

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver — whichever section is most in-view wins
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const ratios: Record<string, number> = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Map gallery to media for nav highlighting
          const targetId =
            entry.target.id === "gallery" ? "media" : entry.target.id;
          ratios[targetId] = entry.intersectionRatio;
        });
        // Pick the section with the highest visibility ratio
        const best = Object.entries(ratios).sort((a, b) => b[1] - a[1])[0];
        if (best && best[1] > 0) setActiveSection(best[0]);
      },
      {
        // Fire as soon as 20% of a section enters the viewport
        threshold: [0, 0.2, 0.5, 0.8, 1],
        // Pull the top boundary down so the navbar doesn't interfere
        rootMargin: "-80px 0px -20% 0px",
      },
    );

    // Observe all sections including gallery
    const allSectionIds = [...sectionIds, "gallery"];
    allSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const logoSrc =
    resolvedTheme === "light"
      ? "/black-logo-transparent.png"
      : "/logo-transparent.png";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-3",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 bg-background/80 backdrop-blur-md border border-foreground/10",
            scrolled
              ? "shadow-lg shadow-black/5 dark:shadow-black/20"
              : "shadow-md",
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2"
          >
            {resolvedTheme ? (
              <Image
                src={logoSrc}
                alt="BASSMANUEL Logo"
                width={160}
                height={64}
                className="h-12 md:h-16 w-auto object-contain"
                priority
              />
            ) : (
              <div className="h-12 md:h-16 w-32" />
            )}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "relative flex items-center px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full",
                        isActive
                          ? "text-foreground"
                          : "text-foreground/60 hover:text-foreground/90",
                      )}
                    >
                      {/* Sliding pill background */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-foreground/8 border border-foreground/10"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                      {/* Green dot indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-dot"
                          className="relative z-10 ml-1.5 h-1 w-1 rounded-full bg-brand"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 border-l border-foreground/15 pl-4">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand/20"
              >
                Book Me
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors text-foreground"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scaleY: 0, y: -8 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute inset-x-0 top-full mt-2 mx-4 rounded-2xl overflow-hidden md:hidden liquid-glass shadow-2xl border border-foreground/10"
          >
            <ul className="flex flex-col p-3">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                        isActive
                          ? "bg-foreground/8 text-foreground"
                          : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground",
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                      )}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 mt-1 border-t border-foreground/10">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="block w-full rounded-xl bg-brand px-4 py-3 text-center text-base font-bold text-black hover:bg-[#7ba378] transition-colors active:scale-[0.98]"
                >
                  Book Me Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
