"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Users, ArrowRight, Play } from "lucide-react";
import etkinliklerData from "@/data/etkinlikler.json";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  caption?: string;
}

interface Etkinlik {
  id: string;
  slug: string;
  title: string;
  description: string;
  year: number;
  date: string;
  location: string;
  category: string;
  media: MediaItem[];
  coverImage: string;
  attendees: number;
  tags: string[];
}

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
const etkinlikler = (etkinliklerData as Etkinlik[]).sort(
  (a, b) => b.year - a.year
);

// Yıllara göre grupla
const grouped = etkinlikler.reduce<Record<number, Etkinlik[]>>((acc, e) => {
  if (!acc[e.year]) acc[e.year] = [];
  acc[e.year].push(e);
  return acc;
}, {});

const years = Object.keys(grouped)
  .map(Number)
  .sort((a, b) => b - a);

function hasVideo(media: MediaItem[]) {
  return media.some((m) => m.type === "video");
}

function getCover(e: Etkinlik): string {
  // Video varsa thumbnail'i, yoksa coverImage'ı döndür
  const vid = e.media.find((m) => m.type === "video");
  return vid?.thumbnail ?? e.coverImage;
}

/* ─────────────────────────────────────────────
   ETKİNLİK KARTI
───────────────────────────────────────────── */
function EtkinlikCard({
  etkinlik,
  index,
  isFirst,
}: {
  etkinlik: Etkinlik;
  index: number;
  isFirst: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/etkinlikler/${etkinlik.slug}`}>
        <article
          className={`group relative flex flex-col md:flex-row gap-0 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/40 transition-all duration-500 cursor-pointer ${
            isFirst ? "md:flex-row" : "md:flex-row"
          }`}
        >
          {/* Görsel */}
          <div
            className={`relative overflow-hidden flex-shrink-0 bg-neutral-100 dark:bg-zinc-900 ${
              isFirst
                ? "w-full md:w-[420px] h-60 md:h-auto"
                : "w-full md:w-64 h-48 md:h-auto"
            }`}
          >
            <img
              src={getCover(etkinlik)}
              alt={etkinlik.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* Video rozeti */}
            {hasVideo(etkinlik.media) && (
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                <Play size={10} className="text-white fill-white" />
                <span className="text-[10px] font-bold text-white tracking-wider uppercase">Video</span>
              </div>
            )}

            {/* Kategori rozeti */}
            <div className="absolute bottom-3 left-3">
              <span className="inline-block px-2.5 py-1 rounded-lg bg-white/90 dark:bg-black/70 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase text-neutral-700 dark:text-neutral-300">
                {etkinlik.category}
              </span>
            </div>
          </div>

          {/* İçerik */}
          <div className="flex flex-col justify-between flex-1 p-5 md:p-7">
            <div>
              {/* Tarih + yıl */}
              <div className="flex items-center gap-3 mb-3">
                <span className={`font-black text-neutral-200 dark:text-white/10 leading-none select-none ${isFirst ? "text-5xl" : "text-3xl"}`}>
                  {etkinlik.year}
                </span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                  {etkinlik.date}
                </span>
              </div>

              <h2
                className={`font-bold text-neutral-900 dark:text-white leading-snug tracking-tight ${
                  isFirst ? "text-xl md:text-2xl" : "text-base md:text-lg"
                }`}
              >
                {etkinlik.title}
              </h2>

              <p className="mt-2.5 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
                {etkinlik.description}
              </p>
            </div>

            {/* Alt bilgi + ok */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500">
                  <MapPin size={11} />
                  {etkinlik.location}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500">
                  <Users size={11} />
                  {etkinlik.attendees.toLocaleString("tr-TR")} Participant
                </span>
              </div>

              <span className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400 dark:text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
             
Review
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SAYFA
───────────────────────────────────────────── */
export default function EtkinliklerPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black py-24 px-4 md:px-10">

      {/* ── HEADER ── */}
      <div className="max-w-5xl mx-auto mb-16 mt-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 mb-5"
        >
          <span className="w-6 h-px bg-neutral-300 dark:bg-white/20 inline-block" />
          <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-neutral-400 dark:text-neutral-500">
            Child Tribune
          </span>
          <span className="w-6 h-px bg-neutral-300 dark:bg-white/20 inline-block" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white"
        >
        Events
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.13 }}
          className="mt-6 max-w-xl mx-auto text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed"
        >
       All the events, gatherings, and festivals we have organized from the past to the present.
        </motion.p>
      </div>

      {/* Ayırıcı */}
      <div className="max-w-5xl mx-auto mb-14 border-t border-neutral-100 dark:border-white/[0.06]" />

      {/* ── TİMELINE ── */}
      <div className="max-w-5xl mx-auto">
        {years.map((year) => (
          <div key={year} className="mb-16">

            {/* Yıl başlığı */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl md:text-7xl font-black text-neutral-900 dark:text-white leading-none">
                {year}
              </span>
              <div className="flex-1 h-px bg-neutral-200 dark:bg-white/10" />
              <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
                {grouped[year].length} Event
              </span>
            </div>

            {/* O yılın etkinlikleri */}
            <div className="flex flex-col gap-5">
              {grouped[year].map((e, i) => (
                <EtkinlikCard
                  key={e.id}
                  etkinlik={e}
                  index={i}
                  isFirst={i === 0 && grouped[year].length > 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Alt not */}
      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-neutral-100 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[11px] text-neutral-400 dark:text-neutral-600">
        All events were organized by the Children's Stand.
        </p>
        <p className="text-[11px] text-neutral-400 dark:text-neutral-600">
         Child Tribune © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}