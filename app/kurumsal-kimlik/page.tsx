"use client";

import { useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   LOGO DATA
   → src = path to place in public/ folder
   e.g. move files under public/logos/
───────────────────────────────────────────── */
const logos = [
  {
    id: "ct-beyaz",
    label: "Children's Tribune — White",
    description: "For use on dark backgrounds",
    src: "/logos/Cocuk_Tribunu_Beyaz.png",
    filename: "Cocuk_Tribunu_Beyaz.png",
    previewBg: "bg-neutral-900",
  },
  {
    id: "ct-siyah",
    label: "Children's Tribune — Black",
    description: "For use on light backgrounds",
    src: "/logos/Cocuk_Tribunu_Siyah.png",
    filename: "Cocuk_Tribunu_Siyah.png",
    previewBg: "bg-neutral-100",
  },
  {
    id: "ct-arma",
    label: "Children's Tribune — Emblem",
    description: "Gold ÇT monogram for institutional use",
    src: "/logos/Cocuk_Tribunu_Arma.png",
    filename: "Cocuk_Tribunu_Arma.png",
    previewBg: "bg-neutral-900",
  },
  {
    id: "child-en",
    label: "Child Tribune — English",
    description: "English version for international use",
    src: "/logos/child_tribune_en.png",
    filename: "Child_Tribune_EN.png",
    previewBg: "bg-neutral-900",
  },
  {
    id: "kuzey-arma",
    label: "Kuzeybatı International — Emblem",
    description: "Kuzeybatı International Media corporate emblem",
    src: "/logos/Kuzeybati_Haber_Arma.png",
    filename: "Kuzeybati_Haber_Arma.png",
    previewBg: "bg-neutral-900",
  },
];

/* ─────────────────────────────────────────────
   DOWNLOAD HOOK
───────────────────────────────────────────── */
function useDownload() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  const download = async (id: string, src: string, filename: string) => {
    if (downloading) return;
    setDownloading(id);
    try {
      const res = await fetch(src);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      const a = document.createElement("a");
      a.href = src;
      a.download = filename;
      a.target = "_blank";
      a.click();
    } finally {
      setDownloading(null);
      setDone(id);
      setTimeout(() => setDone(null), 2400);
    }
  };

  return { download, downloading, done };
}

/* ─────────────────────────────────────────────
   LOGO CARD
───────────────────────────────────────────── */
function LogoCard({
  logo,
  index,
  onDownload,
  isDownloading,
  isDone,
}: {
  logo: (typeof logos)[0];
  index: number;
  onDownload: () => void;
  isDownloading: boolean;
  isDone: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-zinc-950 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-400 group"
    >
      {/* Preview */}
      <div
        className={`relative flex items-center justify-center w-full aspect-[4/3] overflow-hidden ${logo.previewBg} transition-colors duration-300`}
      >
        {/* grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 23px,currentColor 23px,currentColor 24px),repeating-linear-gradient(90deg,transparent,transparent 23px,currentColor 23px,currentColor 24px)",
          }}
        />
        <img
          src={logo.src}
          alt={logo.label}
          className="relative z-10 max-w-[60%] max-h-[56%] object-contain select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      </div>

      {/* Info + Button */}
      <div className="p-5 flex flex-col gap-3.5">
        <div>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white leading-tight">
            {logo.label}
          </h3>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {logo.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-neutral-400 dark:text-neutral-500">
          <span className="font-mono tracking-wide">PNG</span>
          <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-white/20 flex-shrink-0" />
          <span>High resolution</span>
        </div>

        <button
          onClick={onDownload}
          disabled={isDownloading || isDone}
          className={`relative w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-[0.97] overflow-hidden
            ${
              isDone
                ? "bg-emerald-500 text-white"
                : "bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100"
            }
          `}
        >
          <AnimatePresence mode="wait">
            {isDone ? (
              <motion.span
                key="done"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 size={15} />
                Downloaded
              </motion.span>
            ) : isDownloading ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2"
              >
                <svg className="animate-spin w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z" />
                </svg>
                Preparing...
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2"
              >
                <Download size={15} className="flex-shrink-0 group-hover:-translate-y-0.5 transition-transform duration-200" />
                Download
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function LogolarPage() {
  const { download, downloading, done } = useDownload();

  return (
    <div className="min-h-screen w-full mt-15 bg-white dark:bg-black py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="mb-4 text-xs tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400">
            Brand Assets
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
            Corporate Identity
          </h1>

          <p className="mt-5 max-w-xl text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Preview all official logo versions below and download them in
            high resolution.
          </p>
        </motion.div>

        {/* grid: mobile 1, sm 2, lg 3 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {logos.map((logo, i) => (
            <LogoCard
              key={logo.id}
              logo={logo}
              index={i}
              onDownload={() => download(logo.id, logo.src, logo.filename)}
              isDownloading={downloading === logo.id}
              isDone={done === logo.id}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 text-center text-[11px] text-neutral-400 dark:text-neutral-600"
        >
          For different formats or usage permissions,{" "}
          <a
            href="mailto:info@cocuktribunu.com"
            className="underline underline-offset-2 hover:text-black dark:hover:text-white transition-colors"
          >
            contact us
          </a>
          .
        </motion.p>
      </div>
    </div>
  );
}