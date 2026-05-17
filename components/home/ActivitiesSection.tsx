"use client";

import {
  Film,
  Bus,
  Flag,
  Gift,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
const activityData = [
  {
    title: "Arts & Cultural Events",
    desc: "Children's creativity is supported through cinema, theater, and photography workshops.",
    icon: Film,
  },
  {
    title: "Mobile Sports Simulation",
    desc: "Various sports branches are introduced experientially through specially equipped vehicles.",
    icon: Bus,
  },
  {
    title: "Awareness Programs",
    desc: "Child safety and stadium etiquette awareness is built through events held at stadiums.",
    icon: Flag,
  },
  {
    title: "Gifts & Sports Kits",
    desc: "Children are provided with materials that promote and support sports culture.",
    icon: Gift,
  },
  {
    title: "Chant Experience",
    desc: "Children's chants and cheers are broadcast live inside the stadium.",
    icon: Megaphone,
  },
  {
    title: "Safe Stadium Culture",
    desc: "The goal is to instill sports culture and stadium values from an early age.",
    icon: Sparkles,
  },
];
export default function ActivitiesSection() {
  return (
    <section className="relative w-full py-20 md:py-28 px-5 sm:px-10 max-w-6xl mx-auto">

      {/* BACKGROUND LINES */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.1]">
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-neutral-400 to-transparent -translate-x-1/2 hidden md:block" />
      </div>

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-xl md:text-3xl font-semibold text-center mb-14 text-neutral-900 dark:text-white"
      >
      Project
      </motion.h2>

      {/* FLOW */}
      <div className="space-y-10 md:space-y-14">

        {activityData.map((item, index) => {
          const Icon = item.icon;
          const isRight = index % 2 === 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isRight ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`
                flex items-start gap-4 md:gap-10
                ${isRight ? "md:flex-row-reverse" : ""}
              `}
            >

              {/* ICON (MOBILE SMALL / DESKTOP NORMAL) */}
              <div className="
                flex-shrink-0
                w-9 h-9 md:w-14 md:h-14
                flex items-center justify-center
                border border-neutral-300 dark:border-neutral-700
                bg-white dark:bg-black
              ">
                <Icon className="w-4 h-4 md:w-6 md:h-6 text-neutral-700 dark:text-neutral-300" />
              </div>

              {/* TEXT */}
              <div className={`
                max-w-[420px] w-full
                ${isRight ? "md:text-right" : "md:text-left"}
              `}>

                <h3 className="text-sm md:text-lg font-semibold text-neutral-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="
                  mt-1
                  text-[11px] md:text-sm
                  text-neutral-600 dark:text-neutral-400
                  leading-relaxed
                  break-words
                  max-w-[95%] md:max-w-full
                ">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}