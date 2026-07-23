"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Media } from "@/components/ui/Media";
import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Gentle parallax: the image drifts up and the words settle as you scroll in.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const overlayO = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-night"
    >
      {/* Cinematic still — a one-line swap to a clip later (see Media.tsx). */}
      <motion.div
        style={reduce ? undefined : { y: imgY }}
        className="absolute inset-0"
      >
        <motion.div
          initial={reduce ? { scale: 1 } : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
          className="h-[118%] w-full"
        >
          <Media
            src="/images/hero-staircase.jpg"
            alt="The sculptural white spiral staircase at Cacti Café, wrapping a living cactus garden beneath a glass wall etched with cactus line-art."
            priority
            sizes="100vw"
            className="h-full w-full"
          />
        </motion.div>
      </motion.div>

      {/* Legibility scrims (top for nav, bottom for headline). */}
      <motion.div
        style={reduce ? undefined : { opacity: overlayO }}
        className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/25 to-night/55"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night/50 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={reduce ? undefined : { y: textY }}
        className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20"
      >
        <div className="max-w-4xl">
          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
            className="text-display fluid-hero text-paper"
          >
            Where the desert
            <br />
            comes indoors.
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: EASE, delay: 0.6 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-paper/85"
          >
            A living cactus garden, warm stone and slow coffee, open around the
            clock in the heart of Riyadh.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={site.location.directions}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-paper px-7 py-3.5 text-[0.95rem] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white active:scale-[0.98]"
            >
              Get directions
            </a>
            <a
              href="#coffee"
              className="rounded-full border border-paper/40 bg-paper/5 px-7 py-3.5 text-[0.95rem] font-medium text-paper backdrop-blur-md transition-all duration-300 hover:border-paper/70 hover:bg-paper/15"
            >
              See the coffee
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
