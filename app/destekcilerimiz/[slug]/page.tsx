"use client";

import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  MapPin,
  Tag,
  Building2,
  ZoomIn,
  X,
} from "lucide-react";
import supporters from "@/data/destek.json";

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Supporter {
  id: string | number;
  slug: string;
  name: string;
  type: string;
  logoUrl: string;
  website?: string;
  location?: string;
  description?: string;
  supportDocumentImage: string;
  [key: string]: unknown;
}

/* ─────────────────────────────────────────────
   LIGHTBOX
   z-index: 9999 — üstüne hiçbir şey çıkmaz
───────────────────────────────────────────── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-2xl w-full h-auto max-h-[calc(100vh-80px)] object-contain rounded-xl shadow-2xl border border-white/10"
        />
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 md:-right-12 md:top-0 w-10 h-10 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center text-black dark:text-white shadow-xl hover:bg-neutral-100 dark:hover:bg-zinc-700 transition"
          aria-label="Kapat"
        >
          <X size={16} />
        </button>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   FADE-UP
───────────────────────────────────────────── */
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────────
   DETAIL ROW
───────────────────────────────────────────── */
function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 py-3.5 border-b border-neutral-100 dark:border-white/[0.07] last:border-0">
      <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center">
        <Icon size={15} className="text-neutral-500 dark:text-neutral-400" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-0.5">
          {label}
        </p>
        <div className="text-sm font-medium text-black dark:text-white break-words">
          {value}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function DestekcilerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const item = (supporters as Supporter[]).find((s) => s.slug === slug);
  if (!item) notFound();

  return (
    <>
      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            src={item.supportDocumentImage}
            alt={item.name}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] text-black dark:text-white">

       

        {/* ── HERO ── */}
        <div className="w-full border-b border-neutral-200 dark:border-white/[0.07] mt-20 bg-white dark:bg-zinc-950">
          <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
            <FadeUp className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

              {/* Logo */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  className="w-full h-full object-contain p-2"
                />
              </div>

              {/* Başlık */}
              <div className="flex-1 min-w-0">
                <span className="inline-block mb-1.5 text-[10px] tracking-[0.28em] uppercase font-semibold text-neutral-400 dark:text-neutral-500">
                  {item.type}
                </span>
                <h1 className="text-xl md:text-3xl font-bold leading-tight tracking-tight text-black dark:text-white">
                  {item.name}
                </h1>
                {item.location && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                    <MapPin size={12} />
                    {item.location}
                  </p>
                )}
              </div>

              {/* CTA — sadece sm ve üstü */}
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex flex-shrink-0 items-center gap-2 px-5 py-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200 shadow-sm"
                >
                  <Globe size={14} />
                 Visit Web Site
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              )}
            </FadeUp>
          </div>
        </div>

         {/* ── GERİ BUTONU — navbar'ın hemen altında, sayfanın bir parçası ── */}
        <div className="w-full bg-white dark:bg-zinc-950 border-b border-neutral-200 dark:border-white/[0.07]">
          <div className="max-w-7xl mx-auto px-4 md:px-10 h-12 flex items-center">
            <button
              onClick={() => router.push("/destekcilerimiz")}
              aria-label="Geri dön"
              className="group flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <span className="w-7 h-7 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center group-hover:border-neutral-400 dark:group-hover:border-white/30 transition-colors">
                <ArrowLeft size={13} />
              </span>
              <span className="font-medium">Our Supporters</span>
            </button>
          </div>
        </div>

        {/* ── ANA İÇERİK ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-8 md:gap-12 items-start">

            {/* BELGE — mobilde her zaman önce */}
            <FadeUp delay={0.1} className="order-1 lg:order-1">

              <div className="mb-4 flex items-center justify-between">
                
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors border border-neutral-200 dark:border-white/10 rounded-lg px-3 py-1.5 hover:border-neutral-400 dark:hover:border-white/30"
                >
                  <ZoomIn size={12} />
                 Full Screen
                </button>
              </div>

              {/* A4 kart — object-contain ile kesilme yok */}
              <div
                className="group relative w-full bg-white dark:bg-zinc-900 border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 cursor-zoom-in"
                onClick={() => setLightboxOpen(true)}
              >
                {/* A4 oranı: 210/297 → padding-bottom ~141.42% */}
                <div className="relative w-full" style={{ paddingBottom: "141.42%" }}>
                  <Image
                    src={item.supportDocumentImage}
                    alt={`${item.name} destek belgesi`}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 720px"
                    priority
                  />

                  {/* hafif vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.05] via-transparent to-transparent dark:from-black/20 pointer-events-none" />

                  {/* hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 bg-white/90 dark:bg-black/75 text-black dark:text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                      <ZoomIn size={13} />
                      Yakınlaştır
                    </span>
                  </div>
                </div>

                {/* kart alt satırı */}
                <div className="px-5 py-3.5 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between">
                  
                  <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300 truncate max-w-[55%] text-right">
                    {item.name}
                  </span>
                </div>
              </div>

             
            </FadeUp>

            {/* BİLGİ PANELİ — mobilde belgenin altında */}
            <FadeUp delay={0.15} className="order-2 lg:order-2 space-y-5">

              {/* Açıklama */}
              {item.description && (
                <div className="bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-white/[0.07] rounded-2xl p-5 shadow-sm">
                 
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              )}

              {/* Kurum bilgileri */}
              <div className="bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-white/[0.07] rounded-2xl p-5 shadow-sm">
                <h2 className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1">
               Institution Information
                </h2>
                <div className="mt-1">
                  <DetailRow icon={Building2} label=" Institution " value={item.name} />
                  <DetailRow icon={Tag} label=" Institution Type" value={item.type} />
                  {item.location && (
                    <DetailRow icon={MapPin} label="Location" value={item.location} />
                  )}
                  {item.website && (
                    <DetailRow
                      icon={Globe}
                      label="Web Site"
                      value={
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 break-all"
                        >
                          {item.website.replace(/^https?:\/\//, "")}
                          <ExternalLink size={11} className="flex-shrink-0 opacity-70" />
                        </a>
                      }
                    />
                  )}
                </div>
              </div>

            

              {/* Mobil ziyaret butonu (hero'daki gizli) */}
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm"
                >
                  <Globe size={14} />
                  Web Sitesini Ziyaret Et
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              )}


            </FadeUp>
          </div>
        </div>
      </div>
    </>
  );
}