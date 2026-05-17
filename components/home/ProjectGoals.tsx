"use client";

import { useEffect, useRef, useState } from "react";
import {
  Shield,
  HeartHandshake,
  Users,
  Smile,
  Dumbbell,
  Lightbulb,
} from "lucide-react";

const goals = [
  {
    title: "Reducing Violence in Stadiums",
    desc: "Creating a safe sports environment through a child-focused stadium culture.",
    icon: Shield,
  },
  {
    title: "Healthy Lifestyle Culture",
    desc: "Instilling sustainable healthy habits in children from an early age.",
    icon: HeartHandshake,
  },
  {
    title: "Increasing Family Participation",
    desc: "Encouraging women and children to take a more active role in the stands.",
    icon: Users,
  },
  {
    title: "Developing Sports Culture",
    desc: "Passing on the unifying power of sports to the next generation.",
    icon: Smile,
  },
  {
    title: "Raising Conscious Supporters",
    desc: "Building a culture of respectful and responsible fan behavior.",
    icon: Lightbulb,
  },
  {
    title: "Promoting Physical Activity",
    desc: "Making sports an integral part of everyday life for children.",
    icon: Dumbbell,
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

export default function ProjectGoals() {
  const { ref, visible } = useInView();

  return (
    <section
      ref={ref}
      className="w-full bg-white dark:bg-black py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div
          className={[
            "text-center mb-14 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Project Goals
          </h2>

          <div className="w-14 h-px bg-neutral-300 dark:bg-neutral-700 mx-auto mt-4" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {goals.map((goal, index) => {
            const Icon = goal.icon;

            return (
              <div
                key={index}
                className={[
                  "relative border p-5 sm:p-6",
                  "bg-gradient-to-br from-red-50 via-white to-white",
                  "dark:from-red-950/20 dark:via-neutral-950 dark:to-neutral-950",
                  "border-neutral-200 dark:border-neutral-800",

                  "transition-all duration-700 ease-out",
                  "hover:border-neutral-300 dark:hover:border-neutral-700",
                  "hover:-translate-y-[2px]",

                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6",

                  `delay-[${index * 70}ms]`,
                ].join(" ")}
              >
                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                {/* TITLE */}
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white mb-2 leading-snug">
                  {goal.title}
                </h3>

                {/* DESC */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}