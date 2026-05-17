"use client";

import { motion } from "framer-motion";

const reasons = [
  "Contributes to reducing violence and foul language culture in stadiums.",
  "Promotes healthy social development by helping children build an early connection with sports.",
  "Creates a safer and more enjoyable stadium atmosphere by increasing family and child participation.",
  "Supports the growth of a more conscious and educated fan base for clubs in the future.",
  "Directly contributes to the spread of sports culture in society and to constitutional sports goals.",
];

export default function ReasonsSection() {
  return (
    <section className="
      relative w-full py-20 sm:py-28
      bg-white dark:bg-black
      dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950
      transition-colors duration-300
    ">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-2xl sm:text-4xl md:text-5xl font-semibold
            text-neutral-900 dark:text-white
            leading-tight
          "
        >
          Why Does This Project Matter?
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            max-w-2xl mx-auto mt-5 sm:mt-6
            text-sm sm:text-base md:text-lg
            text-neutral-600 dark:text-neutral-300
            leading-relaxed
          "
        >
          The Children's Stand Project is not just a stadium arrangement —
          it is a social responsibility movement that touches children's futures
          and drives meaningful change in society.
        </motion.p>

        {/* LIST */}
        <div className="mt-12 sm:mt-16 space-y-5 sm:space-y-6">

          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="
                group relative
                max-w-3xl mx-auto
                text-left
                px-5 sm:px-6 py-4 sm:py-5

                border border-neutral-200/60 dark:border-neutral-800
                bg-white/80 dark:bg-neutral-900/60
                backdrop-blur-md

                shadow-sm hover:shadow-md
                transition-all duration-300

                hover:-translate-y-1
              "
            >
              {/* left accent line */}
              <div className="
                absolute left-0 top-0 h-full w-[3px]
                bg-emerald-600 dark:bg-emerald-400
              " />

              <p className="
                text-sm sm:text-base
                text-neutral-800 dark:text-neutral-100
                leading-relaxed
              ">
                {item}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}