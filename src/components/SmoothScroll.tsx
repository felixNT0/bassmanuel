"use client";

import { useEffect } from "react";

/**
 * Intercepts ALL clicks on anchor links with hash hrefs (e.g. href="#contact")
 * across the entire app and applies smooth scrolling, accounting for the fixed navbar.
 */
export function SmoothScroll() {
  useEffect(() => {
    const NAVBAR_HEIGHT = 88;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const id = href.slice(1);
      const section = document.getElementById(id);
      if (!section) return;

      e.preventDefault();

      const top =
        section.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
