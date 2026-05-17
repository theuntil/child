"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const QATAR_IMG = "/katar_pankart.jpeg";
const USA_IMG = "/time.jpg";

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

type CardProps = {
  image: string;
  year: string;
  title: string;
  desc: string;
  side: "left" | "right";
  visible: boolean;
};

function TimelineCard({ image, year, title, desc, side, visible }: CardProps) {
  const isLeft = side === "left";

  return (
    <div
      className={[
        "relative w-full flex items-center",
        isLeft ? "justify-start" : "justify-end",
      ].join(" ")}
    >
      {/* timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-4 border-black z-10" />

      {/* card */}
      <div
        className={[
          "w-full md:w-[46%]",
          "bg-neutral-950 border border-neutral-800",
          "overflow-hidden",
          "transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        ].join(" ")}
      >
        {/* image */}
        <div className="relative aspect-[16/9]">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          <div className="absolute bottom-3 left-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              {year}
            </span>
          </div>
        </div>

        {/* content */}
        <div className="p-6">
          <h3 className="text-white text-xl font-serif leading-snug">
            {title}
          </h3>

          <div className="h-px bg-neutral-800 my-4" />

          <p className="text-sm text-neutral-400 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WorldCupBanner() {
  const { ref, visible } = useInView();

  return (
    <section ref={ref} className="bg-black py-24 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.35em] uppercase text-neutral-500">
            International Representation
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-white">
            World Cup Journey
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-neutral-400 text-sm leading-relaxed">
            The Children&apos;s Tribune&apos;s international representation and on-the-ground
            experiences across FIFA World Cup events.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800" />

          <div className="space-y-16">

            <TimelineCard
              image={QATAR_IMG}
              year="Qatar 2022"
              title="We Represented Turkey in Qatar"
              desc="We took part in Qatar during the FIFA World Cup and represented Turkey on international platforms."
              side="left"
              visible={visible}
            />

            <TimelineCard
              image={USA_IMG}
              year="USA 2026"
              title="Preparations Are Underway for 2026"
              desc="The preparation process is ongoing for the World Cup to be held in the United States, Canada and Mexico."
              side="right"
              visible={visible}
            />

          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 flex items-center gap-4">
          <div className="flex-1 h-px bg-neutral-800" />

          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-500">
            Children&apos;s Tribune · FIFA Process
          </span>

          <div className="flex-1 h-px bg-neutral-800" />
        </div>

      </div>
    </section>
  );
}