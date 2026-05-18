"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 transition-colors duration-300">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden">
        <Image
          src="/kapak3.png"
          alt="About Us Cover"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="absolute bottom-14 left-0 w-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-xl"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/80 max-w-2xl mx-auto mt-4 text-sm md:text-lg"
          >
            We are creating a safe, fun and inspiring tribune culture for children.
          </motion.p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* ══════════════════════════════════════
            EXECUTIVE — Hakan Coşkun
        ══════════════════════════════════════ */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/hakan-coskun" className="group block">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-7 md:p-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm group-hover:shadow-xl dark:group-hover:shadow-black/40 group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-all duration-400">

                {/* Photo */}
                <div className="relative flex-shrink-0 w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-neutral-100 dark:border-neutral-800 shadow-md">
                  <Image
                    src="/HakanCoskun.png"
                    alt="Hakan Coşkun"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center text-center sm:text-left gap-3 flex-1">
                  {/* Name + arrow */}
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                      Hakan Coşkun
                    </h3>
                    <span className="text-neutral-400 dark:text-neutral-500 group-hover:translate-x-1 transition-transform duration-300 text-xl leading-none mt-0.5">
                      →
                    </span>
                  </div>

                  {/* Titles */}
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[#006039] dark:text-[#4D96FF]">
                      Kuzeybatı International Media — Chairman of the Board
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      Children&apos;s Tribune Project Leader
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-10 h-px bg-neutral-200 dark:bg-neutral-700 mx-auto sm:mx-0" />

                  {/* Social + mail */}
                  <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
                    <a
                      href="https://www.instagram.com/hakncskn78"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Instagram"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-medium transition-colors"
                    >
                      <InstagramIcon />
                      hakncskn78
                    </a>

                    <a
                      href="https://twitter.com/hakancoskun_78"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="X (Twitter)"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-medium transition-colors"
                    >
                      <XIcon />
                      hakancoskun_78
                    </a>

                    <a
                      href="mailto:hakancoskun@cocuktribunu.org"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-medium transition-colors"
                    >
                      <Mail size={13} />
                      hakancoskun@cocuktribunu.org
                    </a>
                  </div>

                </div>
              </div>
            </Link>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════
            WHO WE ARE
        ══════════════════════════════════════ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Who Are We?</h2>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            The Children&apos;s Tribune Project in Sports is an independent social
            responsibility initiative founded to instil a sporting culture in children
            at the right age. Our goal is to create dedicated tribune sections where
            children can watch matches in a safe environment, thereby deepening their
            love of and commitment to sport.
          </p>
        </section>

        {/* ══════════════════════════════════════
            HOW IT STARTED
        ══════════════════════════════════════ */}
        <section>
          <h2 className="text-3xl font-bold mb-6">How Did This Project Come About?</h2>
          <div className="prose dark:prose-invert prose-neutral text-lg leading-relaxed">
            <p>
              The conceptual foundation of the project was laid following extensive
              research into the growing incidence of violence at sporting events and
              the increasing distance between children and the stadium experience.
              The research revealed that when a safe, positive space dedicated to
              children is created, clubs, society and children all benefit in the
              long term.
            </p>
            <p>
              Our founder, <strong>Hakan Coşkun</strong>, championed the idea that
              children need to learn a healthy sporting culture from an early age and
              pioneered the active planning and implementation of the project.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            MISSION & VISION
        ══════════════════════════════════════ */}
        <section>
          <h2 className="text-3xl font-bold mb-10">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl shadow-sm border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                To instil a love of sport from an early age by providing children with
                a safe, informed and enjoyable tribune environment, and to contribute
                to the development of a broader sporting culture in society.
              </p>
            </div>
            <div className="p-8 rounded-2xl shadow-sm border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                To establish dedicated children&apos;s tribune sections in every stadium
                across Turkey and to raise the next generation of conscious, respectful
                supporters with a genuine sporting culture.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            TIMELINE
        ══════════════════════════════════════ */}
        <section>
          <h2 className="text-3xl font-bold mb-10">The Project&apos;s Journey</h2>
          <div className="relative border-l border-neutral-300 dark:border-neutral-700 pl-8 space-y-12">
            {[
              {
                year: "2021",
                title: "Initial Research",
                desc: "Fieldwork and surveys focused on children's stadium experiences were launched.",
              },
              {
                year: "2022",
                title: "Project Design Phase",
                desc: "The children's tribune model was developed and consultations were held with clubs and experts.",
              },
              {
                year: "2023",
                title: "Pilot Programmes",
                desc: "The first prototype tribunes were set up and feedback was gathered from children and parents.",
              },
              {
                year: "2024 →",
                title: "Expansion Period",
                desc: "The project evolved into a model that can be applied to all clubs nationwide.",
              },
              {
                year: "2026 →",
                title: "2026 FIFA World Cup",
                desc: "We have begun our preparations to implement the Children's Tribune Project at the 2026 World Cup.",
              },
            ].map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[2.6rem] top-1 w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-600 border-2 border-neutral-50 dark:border-neutral-950" />
                <span className="text-sm text-neutral-500">{item.year}</span>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            VALUES
        ══════════════════════════════════════ */}
        <section>
          <h2 className="text-3xl font-bold mb-10">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Safety & Protection",
              "Respect & Tolerance",
              "Education & Awareness",
              "Social Benefit",
              "The Unifying Power of Sport",
              "Child-Centred Approach",
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-neutral-900 dark:text-neutral-100 text-center">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
