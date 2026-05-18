"use client";

import Image from "next/image";
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

/* ── Section title component ── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1 h-6 rounded-full bg-[#006039] dark:bg-[#4D96FF] flex-shrink-0" />
      <h2 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
        {children}
      </h2>
    </div>
  );
}

/* ── Card ── */
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`p-6 md:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

/* ── Animation settings ── */
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: EASE },
};

export default function HakanCoskunPage() {
  return (
    <div className="min-h-screen mt-20 bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 transition-colors duration-300">

      {/* ══════════════════════════════════════
          HERO — Profile Card
      ══════════════════════════════════════ */}
      <section className="w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={fadeUp.transition}
            className="flex flex-col md:flex-row items-center md:items-start gap-10"
          >
            {/* Photo */}
            <div className="relative flex-shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 shadow-lg">
              <Image
              src="/HakanCoskun.png"
                alt="Hakan Coşkun"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4 text-center md:text-left flex-1">
              {/* Name */}
              <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-tight">
                Hakan Coşkun
              </h1>

              {/* Titles */}
              <div className="flex flex-col gap-1.5">
                <p className="text-base md:text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                  Kuzeybatı International Media — Chairman of the Board
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  SSAUMDER President · Children&apos;s Tribune Project Leader · Entrepreneur · Journalist
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-px bg-neutral-200 dark:bg-neutral-700 mx-auto md:mx-0" />

              {/* Social + Mail */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <a
                  href="https://www.instagram.com/hakncskn78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium transition-colors"
                >
                  <InstagramIcon />
                  hakncskn78
                </a>
                <a
                  href="https://twitter.com/hakancoskun_78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium transition-colors"
                >
                  <XIcon />
                  hakancoskun_78
                </a>
                <a
                  href="mailto:hakancoskun@cocuktribunu.org"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium transition-colors"
                >
                  <Mail size={13} />
                  hakancoskun@cocuktribunu.org
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTENT
      ══════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-14">

        {/* ── Son of Karabük ── */}
        <motion.section
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
        >
          <SectionTitle>Son of Karabük</SectionTitle>
          <Card>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
              Hakan Coşkun was born in July 1980 in Karabük. Throughout every chapter
              of his life, this son of the steel city has kept his bond with Karabük
              alive, identifying each of his achievements with his hometown.
              In his own words, <em>&quot;We will transform this journey that began in Karabük
              into a powerful project at the world&apos;s greatest sporting event,&quot;</em> Coşkun
              expresses his sense of belonging to his city on every platform.
            </p>
          </Card>
        </motion.section>

        {/* ── Media & Journalism ── */}
        <motion.section
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
        >
          <SectionTitle>Media & Journalism</SectionTitle>
          <Card>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base mb-5">
              Hakan Coşkun began his journalism career in Karabük, charting a path
              from regional reporting to international media. The{" "}
              <strong>Kuzeybatı Haber International Media</strong> he founded has today
              evolved beyond a mere news outlet into a comprehensive media brand making
              an impact across sports, culture, and social responsibility.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Kuzeybatı Haber International Media",
                  description:
                    "As Founder and Chairman of the Board, he transformed the media organisation from a regional structure into an international platform.",
                },
                {
                  title: "International Media Representation",
                  description:
                    "Carried out media activities on behalf of Turkey at the 2022 Qatar World Cup and the 2026 USA–Canada–Mexico World Cup.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
                >
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.section>

        {/* ── Civil Society — SSAUMDER ── */}
        <motion.section
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.55, ease: EASE, delay: 0.12 }}
        >
          <SectionTitle>Civil Society & Association Presidency</SectionTitle>
          <Card>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base mb-5">
              Hakan Coşkun serves as President of{" "}
              <strong>SSAUMDER</strong> (Association for Combating Violence, Alcohol and
              Substance Abuse in Sports), an organisation founded to raise public
              awareness in the fight against violence, alcohol and drugs in sport.
            </p>
            <div className="p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                SSAUMDER — Association Mission
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                The association conducts awareness campaigns against violence, alcohol
                and drug use in sporting environments, developing joint projects with
                clubs, federations and public institutions. The Children&apos;s Tribune,
                the most established project within the association, has also gained
                recognition on the international stage.
              </p>
            </div>
          </Card>
        </motion.section>

        {/* ── Political Participation ── */}
        <motion.section
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.55, ease: EASE, delay: 0.14 }}
        >
          <SectionTitle>Political Participation</SectionTitle>
          <Card>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
              Hakan Coşkun extended his contributions to civil life into the political
              arena by standing as an <strong>independent parliamentary candidate</strong>{" "}
              from Karabük. Without affiliating himself with any political party, Coşkun
              demonstrated his commitment to serving his hometown of Karabük through
              this candidacy.
            </p>
          </Card>
        </motion.section>

        {/* ── Technology Ventures ── */}
        <motion.section
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.55, ease: EASE, delay: 0.16 }}
        >
          <SectionTitle>Technology & Business Ventures</SectionTitle>
          <Card>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
              Alongside his media and civil society work, Hakan Coşkun is also an
              active entrepreneur in the technology ecosystem. Closely following the
              digital transformation process, Coşkun has taken on executive and
              partnership roles in various technology ventures, developing national and
              international collaborations. This experience also makes a significant
              contribution to the technology and social media dimensions of the
              Children&apos;s Tribune project.
            </p>
          </Card>
        </motion.section>

        {/* ── Children's Tribune ── */}
        <motion.section
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.55, ease: EASE, delay: 0.18 }}
        >
          <SectionTitle>Children&apos;s Tribune Project</SectionTitle>
          <Card className="border-l-4 border-l-[#006039] dark:border-l-[#4D96FF]">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base mb-6">
              The <strong>Children&apos;s Tribune Project</strong>, Hakan Coşkun&apos;s most
              comprehensive and impactful initiative, came to life with its conceptual
              foundations laid in Karabük in 2011. Run in partnership with SSAUMDER and
              Kuzeybatı International Media, the project aims to create dedicated, safe
              tribune sections in stadiums for children — free from alcohol and violence.
            </p>

            {/* Milestones */}
            <div className="relative border-l border-neutral-200 dark:border-neutral-700 pl-6 space-y-8">
              {[
                {
                  year: "2011",
                  title: "Birth of the Idea",
                  content:
                    "Through research into violence in sport and fieldwork focused on children's stadium experiences, the project foundations were laid in Karabük.",
                },
                {
                  year: "2022",
                  title: "Qatar World Cup",
                  content:
                    "The project was implemented in Qatar at the 2022 FIFA World Cup. During a visit with Turkey's Ambassador to Doha, the work received high praise. The project attracted the attention of the international public.",
                },
                {
                  year: "2023–2024",
                  title: "Nationwide Rollout & Institutional Partnerships",
                  content:
                    "Coordinated efforts were carried out with the Turkish Football Federation and the Presidency of the Republic of Turkey. National and international brands showed interest in sponsoring the project.",
                },
                {
                  year: "2026 →",
                  title: "USA, Canada & Mexico",
                  content:
                    "Preparations are underway for a large-scale media operation in the United States, Canada and Mexico for the 2026 FIFA World Cup, in collaboration with a strong technical team and leading social media figures.",
                },
              ].map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute -left-[1.85rem] top-1 w-3 h-3 rounded-full bg-[#006039] dark:bg-[#4D96FF] border-2 border-neutral-50 dark:border-neutral-900 flex-shrink-0" />
                  <span className="text-xs font-bold text-[#006039] dark:text-[#4D96FF] tracking-wider uppercase">
                    {item.year}
                  </span>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.section>

        {/* ── Quote ── */}
        <motion.section
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
        >
          <blockquote className="relative px-8 py-8 md:px-12 rounded-2xl bg-[#006039]/5 dark:bg-[#4D96FF]/5 border border-[#006039]/20 dark:border-[#4D96FF]/20">
            <span className="absolute top-5 left-6 text-5xl leading-none text-[#006039]/20 dark:text-[#4D96FF]/20 font-serif select-none">
              &quot;
            </span>
            <p className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed italic pl-6">
              We will transform this journey that began in Karabük into a powerful
              project at the world&apos;s greatest sporting event.
            </p>
            <footer className="mt-4 pl-6 text-sm text-neutral-500 dark:text-neutral-400 font-medium not-italic">
              — Hakan Coşkun
            </footer>
          </blockquote>
        </motion.section>

        {/* ── Contact ── */}
        <motion.section
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ duration: 0.55, ease: EASE, delay: 0.22 }}
        >
          <Card>
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <a
                href="https://www.instagram.com/hakncskn78"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium transition-colors"
              >
                <InstagramIcon />
                @hakncskn78
              </a>
              <a
                href="https://twitter.com/hakancoskun_78"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium transition-colors"
              >
                <XIcon />
                @hakancoskun_78
              </a>
              <a
                href="mailto:hakancoskun@cocuktribunu.org"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-medium transition-colors"
              >
                <Mail size={14} />
                hakancoskun@cocuktribunu.org
              </a>
            </div>
          </Card>
        </motion.section>

      </div>
    </div>
  );
}
