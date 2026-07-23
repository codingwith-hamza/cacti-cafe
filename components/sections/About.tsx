"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Kicker } from "@/components/ui/Kicker";

/*
  About — a scroll-scrubbed "coffee spill" beat.

  The Cacti latte video is NOT played like a normal browser video. Its
  currentTime is driven frame-by-frame by scroll position: scroll down and the
  coffee erupts out of the cup, scroll up and it pours back in. A rAF loop eases
  currentTime toward the scroll target so seeking stays smooth (the clip is
  re-encoded all-keyframe for exactly this). The white background is knocked out
  with mix-blend-multiply so the cup floats on the sand. The centered story text
  fades in only once the coffee has started to spill.

  Reduced motion: the whole scrub collapses to a static poster + visible text.
*/

const POSTER = "/media/cacti-spill-poster.jpg";
const CLIP = "/media/cacti-spill.mp4";

/*
  Timing knobs for the coffee beat — tune these to taste:
    SECTION_VH  total scroll length of the pinned beat (shorter = quicker/tighter)
    SCRUB_END   scroll progress at which the spill has fully played (0–1).
                The cup erupts over [0 → SCRUB_END], leaving the rest for text.
    TEXT_IN     [start, end] scroll progress over which the story fades in —
                set AFTER SCRUB_END so the coffee lands first, then the words.
    SCALE_IN    [start, end] progress over which the cup grows to full size.
    SCALE_FROM / SCALE_TO   cup size at entry → settled (1 = its natural size).
*/
const SECTION_VH = 240;
const SCRUB_END = 0.6;
const TEXT_IN: [number, number] = [0.66, 0.9];
const SCALE_IN: [number, number] = [0, 0.4];
const SCALE_FROM = 1.0;
const SCALE_TO = 1.12;

const STORY =
  "Cacti began with a simple idea: bring the stillness of the desert into the middle of the city. Nothing here is loud. The coffee is considered, the light is soft, and the room quietly asks you to stay a while.";

export function About() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Scrub the video's currentTime from scroll progress, eased for smoothness.
  useEffect(() => {
    if (reduce) return;
    const v = videoRef.current;
    if (!v) return;

    // Prime the decoder (muted autoplay is allowed) so seeking is permitted,
    // then immediately pause — we never actually play it.
    v.play().then(() => v.pause()).catch(() => {});

    let raf = 0;
    let cur = 0;
    const loop = () => {
      const dur = v.duration && !Number.isNaN(v.duration) ? v.duration : 5;
      // Play the whole clip over just the first SCRUB_END of the scroll so the
      // coffee erupts promptly, leaving the tail of the pin for the text.
      const p = Math.min(Math.max(scrollYProgress.get() / SCRUB_END, 0), 1);
      const target = p * dur;
      cur += (target - cur) * 0.12;
      if (Math.abs(target - cur) < 0.004) cur = target;
      if (v.readyState >= 1 && !Number.isNaN(cur)) {
        try {
          v.currentTime = cur;
        } catch {
          /* seeking not ready yet */
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduce, scrollYProgress]);

  // Text reveal — held back until the coffee has fully landed (TEXT_IN), so the
  // sequence reads as two clean beats: coffee first, then the story.
  const textOpacity = useTransform(scrollYProgress, TEXT_IN, [0, 1]);
  const textYv = useTransform(scrollYProgress, TEXT_IN, [26, 0]);
  const textBlurN = useTransform(scrollYProgress, TEXT_IN, [12, 0]);
  const textFilter = useMotionTemplate`blur(${textBlurN}px)`;

  // Video intro — enters at full size and grows a touch, so the cup reads as
  // "present and large" the instant the section pins (no empty-sand gap).
  const vidScale = useTransform(scrollYProgress, SCALE_IN, [SCALE_FROM, SCALE_TO]);

  // Reduced-motion static fallback.
  if (reduce) {
    return (
      <section id="about" className="bg-sand">
        <div className="mx-auto max-w-3xl px-5 py-28 text-center sm:py-36">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={POSTER}
            alt="An iced Cacti latte, condensed milk beneath cold espresso, in a clear cup with the teal cactus mark."
            className="mx-auto mb-10 w-[300px] max-w-full mix-blend-multiply"
          />
          <div className="flex justify-center">
            <Kicker>Our story</Kicker>
          </div>
          <h2 className="text-display fluid-h2 mt-6 text-ink">
            Built like an oasis, run like a ritual.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {STORY}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ height: `${SECTION_VH}vh` }}
      className="relative bg-sand"
    >
      <div className="sticky top-0 flex h-[100dvh] items-center justify-center overflow-hidden px-5">
        {/* Scrubbed video — white knocked out via multiply so it melts into sand */}
        <motion.div
          style={{ scale: vidScale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <video
            ref={videoRef}
            className="h-[94vh] max-h-[94vw] w-auto mix-blend-multiply"
            poster={POSTER}
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={CLIP} type="video/mp4" />
          </video>
        </motion.div>

        {/* Centered story — fades in as the coffee spills */}
        <motion.div
          style={{ opacity: textOpacity, y: textYv, filter: textFilter }}
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <div className="flex justify-center">
            <Kicker>Our story</Kicker>
          </div>
          <h2 className="text-display fluid-h2 mt-6 text-ink [text-shadow:0_2px_24px_var(--color-sand)]">
            Built like an oasis, run like a ritual.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft [text-shadow:0_1px_16px_var(--color-sand)]">
            {STORY}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
