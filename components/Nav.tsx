"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/lib/site";
import { CactiMark } from "@/components/ui/Logo";

export function Nav() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // IntersectionObserver sentinel avoids a scroll listener on every frame.
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting)
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Tall sentinel: nav stays transparent while it overlaps the hero,
          and solidifies once you scroll past it. */}
      <div
        id="top-sentinel"
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-[85vh] w-px"
      />
      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-colors duration-500 ${
            scrolled
              ? "border-b border-line/70 bg-sand/80 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <nav className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
            <a
              href="#top"
              aria-label="Cacti Café — home"
              className={`flex items-center gap-2.5 transition-colors ${
                scrolled ? "text-ink" : "text-paper"
              }`}
            >
              <CactiMark
                className={`h-6 w-auto ${scrolled ? "text-teal" : "text-teal-bright"}`}
              />
              <span className="text-display text-[1.3rem] leading-none">
                Cacti
              </span>
            </a>

            <div
              className={`hidden items-center gap-9 md:flex ${
                scrolled ? "text-ink-soft" : "text-paper/85"
              }`}
            >
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-[0.95rem] transition-colors hover:text-teal"
                >
                  {n.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={site.location.directions}
                target="_blank"
                rel="noreferrer"
                className={`hidden rounded-full px-5 py-2.5 text-[0.9rem] font-medium transition-all duration-300 active:scale-[0.97] sm:inline-block ${
                  scrolled
                    ? "bg-teal-deep text-paper hover:-translate-y-0.5"
                    : "bg-paper/95 text-ink hover:bg-paper"
                }`}
              >
                Get directions
              </a>

              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                aria-expanded={open}
                className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden ${
                  scrolled ? "text-ink" : "text-paper"
                }`}
              >
                <span
                  className={`h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                    open ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-6 bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden border-b border-line bg-sand/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 text-lg text-ink"
              >
                {n.label}
              </a>
            ))}
            <a
              href={site.location.directions}
              target="_blank"
              rel="noreferrer"
              className="mt-3 rounded-full bg-teal px-5 py-3 text-center font-medium text-paper"
            >
              Get directions
            </a>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
