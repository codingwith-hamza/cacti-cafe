"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Media } from "@/components/ui/Media";

const EASE = [0.16, 1, 0.3, 1] as const;

/*
  The one deliberate dark moment on an otherwise light page — a full-bleed
  "step inside" beat. The image drifts under a fixed frame of text so it reads
  like walking into the room. This is the single sanctioned theme switch
  (Page Theme Lock), used once, with a strong transition.
*/
export function Interior() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);

  return (
    <section
      id="interior"
      ref={ref}
      className="relative min-h-[92dvh] w-full overflow-hidden bg-night"
    >
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <Media
          src="/images/staircase-neon.jpg"
          video={undefined}
          alt="Looking down the warmly-lit spiral staircase at Cacti Café, past a glass balustrade etched with glowing teal cactus line-art toward the city beyond."
          sizes="100vw"
          className="h-full w-full"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/35 to-night/60" />

      <div className="relative z-10 mx-auto flex min-h-[92dvh] max-w-[1400px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        <div className="max-w-2xl">
          <motion.h2
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: EASE }}
            className="text-display fluid-h2 text-paper"
          >
            The room does the talking.
          </motion.h2>
          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-paper/80"
          >
            Cool stone underfoot, neon cactus tracing the glass, and a stair
            that spirals past the garden. This is the part a photo can only
            hint at.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
