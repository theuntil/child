"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, BadgeCheck } from "lucide-react";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Certificate {
  id: number;
  title: string;
  authority: string;
  region: string;
  image: string | null;   // Document image — if null, placeholder is shown
  flagUrl: string | null; // Flag image URL — only for placeholder cards
  tag: string;
}

/* ─────────────────────────────────────────────
   DATA — 3 certificates
   Fill in the flagUrl fields with your own URLs
───────────────────────────────────────────── */
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Turkish Patent and Trademark Office",
    authority: "Turkish Patent Institute",
    region: "Turkey",
    image: "/tescil.png",
    flagUrl: null,
    tag: "2020",
  },
  {
    id: 2,
    title: "European Union Intellectual Property Office",
    authority: "EUIPO",
    region: "European Union",
    image: null,
    flagUrl: "https://www.ab.gov.tr/files/_images/images/euablem.gif",
    tag: "EUIPO",
  },
  {
    id: 3,
    title: "United States Patent and Trademark Office",
    authority: "USPTO",
    region: "United States of America",
    image: null,
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/3840px-Flag_of_the_United_States.svg.png",
    tag: "USPTO",
  },
];

/* ─────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────── */
function Lightbox({
  cert,
  onClose,
}: {
  cert: Certificate;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 backdrop-blur-md p-4 md:p-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-4 -right-4 md:-right-14 md:top-0 z-10 w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-2xl hover:bg-neutral-100 dark:hover:bg-zinc-700 transition-colors"
        >
          <X size={15} className="text-black dark:text-white" />
        </button>

        {/* Document image */}
        <img
          src={cert.image!}
          alt={cert.title}
          className="max-w-2xl w-full max-h-[calc(100vh-110px)] object-contain rounded-2xl shadow-2xl border border-white/10"
        />

        {/* Bottom info */}
        <div className="mt-5 text-center">
          <p className="text-sm font-semibold text-white/85">{cert.title}</p>
          <p className="text-xs text-white/40 mt-1 tracking-widest uppercase">
            {cert.authority}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DOCUMENT CARD — with image (TPE)
───────────────────────────────────────────── */
function ActiveCard({
  cert,
  index,
  onOpen,
}: {
  cert: Certificate;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-500 cursor-zoom-in"
      onClick={onOpen}
    >
      {/* A4 image area — 210:297 ratio */}
      <div
        className="relative w-full overflow-hidden bg-neutral-50 dark:bg-zinc-900"
        style={{ paddingBottom: "141.42%" }}
      >
        <img
          src={cert.image!}
          alt={cert.title}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors duration-400">
          <span className="flex items-center gap-2 bg-white/95 dark:bg-black/80 text-black dark:text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-xl opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
            <ZoomIn size={13} />
            View Full Screen
          </span>
        </div>

        {/* Registered badge — top left */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold tracking-wider uppercase text-emerald-700 dark:text-emerald-400">
            <BadgeCheck size={10} />
            Registered
          </span>
        </div>

        {/* Authority tag — top right */}
        <div className="absolute top-3 right-3">
          <span className="inline-block px-2.5 py-1 rounded-lg bg-black/55 dark:bg-white/10 text-white text-[10px] font-bold tracking-widest backdrop-blur-sm">
            {cert.tag}
          </span>
        </div>
      </div>

      {/* Bottom title */}
      <div className="px-5 py-4 border-t border-neutral-100 dark:border-white/[0.06]">
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-neutral-400 dark:text-neutral-500">
          {cert.region}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white leading-snug">
          {cert.title}
        </h3>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   PLACEHOLDER CARD — image not yet available
   Shows a flag image in the centre.
   Looks institutional, not incomplete.
───────────────────────────────────────────── */
function PlaceholderCard({
  cert,
  index,
}: {
  cert: Certificate;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm"
    >
      {/* A4 vertical placeholder — 210:297 ratio */}
      <div
        className="relative w-full bg-neutral-50 dark:bg-zinc-900/60"
        style={{ paddingBottom: "141.42%" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 p-8 select-none">

          {/* Background — subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* Flag image */}
          <div className="relative flex flex-col items-center gap-6">
            <div className="w-36 h-24 rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-lg flex-shrink-0">
              <img
                src={cert.flagUrl!}
                alt={`${cert.region} flag`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Authority info */}
            <div className="text-center">
              <p className="text-base font-bold text-neutral-800 dark:text-white tracking-wide">
                {cert.tag}
              </p>
              <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[180px]">
                {cert.authority}
              </p>
            </div>

            {/* Divider line + region */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-neutral-300 dark:bg-white/20" />
              <span className="text-[9px] tracking-[0.3em] uppercase font-semibold text-neutral-400 dark:text-neutral-500">
                {cert.region}
              </span>
              <span className="w-6 h-px bg-neutral-300 dark:bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom title */}
      <div className="px-5 py-4 border-t border-neutral-100 dark:border-white/[0.06]">
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-neutral-400 dark:text-neutral-500">
          {cert.region}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-neutral-900 dark:text-white leading-snug">
          {cert.title}
        </h3>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function TescilBelgelerimizPage() {
  const [lightbox, setLightbox] = useState<Certificate | null>(null);

  const activeCount = 3;

  return (
    <>
      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && lightbox.image && (
          <Lightbox cert={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen w-full bg-white dark:bg-black py-24 px-4 md:px-10">

        {/* ── HEADER ── */}
        <div className="max-w-5xl mx-auto mb-16 mt-4 text-center">

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <span className="w-6 h-px bg-neutral-300 dark:bg-white/20 inline-block" />
            <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-neutral-400 dark:text-neutral-500">
              Intellectual Property
            </span>
            <span className="w-6 h-px bg-neutral-300 dark:bg-white/20 inline-block" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white"
          >
            Our Registration Certificates
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.13 }}
            className="mt-6 max-w-xl mx-auto text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed"
          >
            Official documents confirming the registration of our brand by
            national and international authorities.
          </motion.p>

          {/* Counter strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 inline-flex items-center divide-x divide-neutral-200 dark:divide-white/10 rounded-2xl border border-neutral-200 dark:border-white/10 overflow-hidden bg-neutral-50 dark:bg-zinc-950"
          >
            <div className="px-7 py-4 text-center">
              <p className="text-2xl font-bold text-black dark:text-white">
                {activeCount}
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold">
                Active Registrations
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto mb-12 border-t border-neutral-100 dark:border-white/[0.06]" />

        {/* ── GRID ──
            Mobile  : 1 column
            Desktop : 3 columns
        ── */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) =>
            cert.image !== null ? (
              <ActiveCard
                key={cert.id}
                cert={cert}
                index={index}
                onOpen={() => setLightbox(cert)}
              />
            ) : (
              <PlaceholderCard key={cert.id} cert={cert} index={index} />
            )
          )}
        </div>

        {/* Footer note */}
        <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-neutral-100 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-neutral-400 dark:text-neutral-600">
            Children&apos;s Tribune © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}