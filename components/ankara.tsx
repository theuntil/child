"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

export default function AnkaraUniversitesiDestekci() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="w-full px-4 md:px-10 py-6 md:py-12">
      <Link href="/destekcilerimiz/ankara-universitesi" className="group block">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative overflow-hidden
            max-w-6xl mx-auto
            bg-white dark:bg-zinc-950
            border border-neutral-200 dark:border-white/[0.08]
            rounded-2xl
            shadow-sm group-hover:shadow-lg
            transition-shadow duration-500
          "
        >
          {/* decorative circle */}
          <div className="pointer-events-none absolute -right-16 -top-16 w-48 h-48 rounded-full bg-neutral-100 dark:bg-white/[0.03]" />
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-neutral-200 dark:via-white/10 to-transparent" />

          {/* ── HORIZONTAL LAYOUT ON ALL SCREENS ── */}
          <div className="relative z-10 flex flex-row items-center gap-0">

            {/* LEFT — logo */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="
                flex-shrink-0
                flex items-center justify-center
                w-16 h-16
                sm:w-20 sm:h-20
                md:w-28 md:h-28
                mx-3 sm:mx-4 md:mx-6
              "
            >
              <div className="
                w-full h-full
                rounded-xl md:rounded-2xl
                flex items-center justify-center
                overflow-hidden
                group-hover:scale-105 transition-transform duration-500
              ">
                <img
                  src="https://www.ankara.edu.tr/assets/images/logo.png"
                  alt="Ankara University"
                  className="w-full h-full object-contain pl-2"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                    const p = t.parentElement;
                    if (p && !p.querySelector(".fi")) {
                      const s = document.createElement("span");
                      s.className = "fi text-sm font-bold text-neutral-400";
                      s.textContent = "AU";
                      p.appendChild(s);
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* MIDDLE — text, flex-1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="
                flex-1 min-w-0
                py-4 sm:py-5 md:py-8
                pr-2 md:pr-6
              "
            >
              {/* badge — md and above only */}
              <div className="hidden md:inline-flex items-center gap-1.5 mb-2.5 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10">
                <Award size={10} className="text-neutral-500 dark:text-neutral-400" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                  Supporting University
                </span>
              </div>

              {/* title */}
              <h2 className="
                text-sm sm:text-base md:text-2xl lg:text-3xl
                font-bold leading-tight tracking-tight
                text-black dark:text-white
                truncate
              ">
                Ankara University
              </h2>

              {/* subtitle */}
              <p className="
                mt-0.5 md:mt-1
                text-xs md:text-sm
                font-medium
                text-neutral-500 dark:text-neutral-400
                truncate
              ">
                Children's Stand Supporter
              </p>

              {/* description — md and above only */}
              <p className="
                hidden md:block
                mt-3
                text-sm leading-relaxed
                text-neutral-600 dark:text-neutral-400
                max-w-md
              ">
                Ankara University supports the Children's Stand project with its belief in the
                transformative power of sports in society, contributing to children's introduction
                to sports culture.
              </p>

              {/* CTA */}
              <div className="
                mt-2 md:mt-5
                flex items-center gap-1.5
                text-xs md:text-sm font-semibold
                text-black dark:text-white
                group-hover:gap-2.5 transition-all duration-300
              ">
                <span className="hidden sm:inline">View support document</span>
                <span className="sm:hidden">View</span>
                <ArrowUpRight
                  size={13}
                  className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* RIGHT — document image */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="
                flex-shrink-0
                flex items-center justify-center
                self-stretch
                border-l border-neutral-100 dark:border-white/[0.06]
                bg-neutral-50/70 dark:bg-white/[0.02]
                px-3 sm:px-4 md:px-6
                rounded-r-2xl
              "
            >
              {/* document card */}
              <div className="
                relative
                w-10 sm:w-14 md:w-24 lg:w-28
                rounded md:rounded-lg overflow-hidden
                border border-neutral-200 dark:border-white/10
                shadow-md
                group-hover:shadow-xl group-hover:scale-[1.04]
                transition-all duration-500
              ">
                <div className="relative w-full" style={{ paddingBottom: "141.42%" }}>
                  <img
                    src="/documents/ankara-universitesi.jpg"
                    alt="Ankara University support document"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.display = "none";
                      const p = t.parentElement;
                      if (p && !p.querySelector(".dp")) {
                        const d = document.createElement("div");
                        d.className = "dp absolute inset-0 flex flex-col items-center justify-center gap-1 bg-neutral-100 dark:bg-zinc-800";
                        d.innerHTML = `<svg width="16" height="16" fill="none" stroke="#9ca3af" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>`;
                        p.appendChild(d);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* bottom band — md and above only */}
                <div className="hidden md:block absolute bottom-0 left-0 right-0 px-1.5 py-1 bg-black/55 backdrop-blur-sm">
                  <p className="text-[8px] text-white/75 font-medium text-center">Document</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* hover ring */}
          <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 ring-neutral-300 dark:ring-white/10 transition-all duration-500 pointer-events-none" />
        </motion.div>
      </Link>
    </section>
  );
}