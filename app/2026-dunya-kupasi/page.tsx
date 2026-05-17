"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Shield,
  Target,
  Heart,
  School,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const accent = "#0F766E";

const pillars = [
  {
    title: "Sustainable Sports Culture",
    desc:
      "The 2026 America World Cup Children's Tribune Project is not just a tournament-focused initiative; it is a strategic social model targeting long-term sports culture transformation.",
    icon: Target,
  },
  {
    title: "Child Safety",
    desc:
      "By ensuring children are present in safe areas at stadiums, a violence-free, controlled, and healthy stands environment is created.",
    icon: Shield,
  },
  {
    title: "Community Participation",
    desc:
      "A more inclusive sports ecosystem is built by involving families, schools, and sports institutions in the process.",
    icon: Users,
  },
  {
    title: "International Vision",
    desc:
      "Within the scope of the 2026 America World Cup, the project aims to bring Turkey's child-focused sports approach to international platforms and establish an exemplary model.",
    icon: Globe,
  },
];

const activities = [
  "Planning and implementation of children's tribune organizations",
  "In-stadium education and behavioral awareness programs",
  "International media and documentary content",
  "Interaction programs between footballers and children",
  "Joint events with schools and sports clubs",
  "On-field experience and off-field learning areas",
  "Safe stands infrastructure development initiatives",
];

export default function Qatar2026Page() {
  return (
    <main className="w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/time.jpg"
          alt="2026 America World Cup"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55 dark:bg-black/70" />

        <div className="absolute top-140 right-37 z-20">
          <img src="/fifa.png" className="w-40 h-40" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            2026 America World Cup{" "}
            <span className="font-light">
              Children's Tribune Project
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-sm md:text-lg text-white/80 leading-relaxed"
          >
            A comprehensive transformation project within the scope of the 2026
            America World Cup that introduces children to sport at an early age,
            develops a safe stands culture, and creates social impact at
            international sports events.
          </motion.p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium">
          Redefining the Future of Sport
        </h2>

        <p className="mt-6 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          The 2026 America World Cup project is not just an organization; it is
          a long-term social transformation program that reshapes children's
          relationship with sport.
        </p>
      </section>

      {/* ================= PILLARS ================= */}
      <section className="px-6 pb-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {pillars.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6"
            >
              <div className="mb-4" style={{ color: accent }}>
                <Icon className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-medium mb-2">{item.title}</h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-medium text-center mb-14">
            Project Scope and Activity Areas
          </h2>

          <div className="space-y-5">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <div
                  className="w-1.5 h-1.5 mt-2"
                  style={{ backgroundColor: accent }}
                />
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOCIAL IMPACT ================= */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium">
          Social Impact and Long-Term Goals
        </h2>

        <p className="mt-6 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          The 2026 America World Cup project is an infrastructure model that
          transforms sports culture across society.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 text-center">
        <h2 className="text-3xl font-light">
          Be Part of This Transformation
        </h2>

        <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          The 2026 America World Cup Children's Tribune Project is open to collaboration.
        </p>

        <Link href="/iletisim">
          <button
            className="mt-8 px-8 py-3 text-white"
            style={{ backgroundColor: accent }}
          >
            Get in Touch
          </button>
        </Link>
      </section>
    </main>
  );
}