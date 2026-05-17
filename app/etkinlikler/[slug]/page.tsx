"use client";

import { use, useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  MapPin,
  Users,
  Tag,
  Calendar,
  ArrowLeft,
} from "lucide-react";
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

const etkinlikler = etkinliklerData as Etkinlik[];

/* ─────────────────────────────────────────────
   VIDEO OYNATICI
───────────────────────────────────────────── */
function VideoPlayer({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCT] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const resetHide = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 2500);
  }, [playing]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
    resetHide();
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(pct || 0);
    setCT(videoRef.current.currentTime);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pct * videoRef.current.duration;
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      className="relative w-full bg-black rounded-2xl overflow-hidden group"
      onMouseMove={resetHide}
      onMouseLeave={() => playing && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full aspect-video object-contain"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
        onEnded={() => { setPlaying(false); setShowControls(true); }}
        onClick={togglePlay}
        playsInline
      />

      {/* Büyük oynat butonu — durduğunda ortada */}
      <AnimatePresence>
        {!playing && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Oynat"
          >
            <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
              <Play size={24} className="text-white fill-white ml-1" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Kontrol çubuğu */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-4 pt-10"
          >
            {/* Progress bar */}
            <div
              className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-3 hover:h-1.5 transition-all"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Alt kontroller */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label={playing ? "Duraklat" : "Oynat"}
                >
                  {playing ? <Pause size={18} /> : <Play size={18} className="fill-white" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label={muted ? "Sesi aç" : "Sesi kapat"}
                >
                  {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <span className="text-xs text-white/70 font-mono tabular-nums">
                  {fmt(currentTime)} / {fmt(duration)}
                </span>
              </div>

              <button
                onClick={handleFullscreen}
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Tam ekran"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GALERİ LIGHTBOX
───────────────────────────────────────────── */
function GalleryLightbox({
  media,
  startIndex,
  onClose,
}: {
  media: MediaItem[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % media.length);
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + media.length) % media.length);
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose, media.length]);

  const prev = () => setCurrent((c) => (c - 1 + media.length) % media.length);
  const next = () => setCurrent((c) => (c + 1) % media.length);
  const item = media[current];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black/96 backdrop-blur-md flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Üst bar */}
      <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
        <span className="text-sm font-semibold text-white/60">
          {current + 1} / {media.length}
        </span>
        {item.caption && (
          <span className="text-sm text-white/50 hidden md:block">{item.caption}</span>
        )}
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Kapat"
        >
          <X size={16} className="text-white" />
        </button>
      </div>

      {/* Ana medya */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-16 min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-4xl"
          >
            {item.type === "video" ? (
              <VideoPlayer src={item.url} poster={item.thumbnail} />
            ) : (
              <img
                src={item.url}
                alt={item.caption ?? ""}
                className="w-full max-h-[70vh] object-contain rounded-xl"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigasyon butonları */}
      {media.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Önceki"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Sonraki"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </>
      )}

      {/* Alt thumbnail strip */}
      <div className="flex-shrink-0 px-4 py-4 overflow-x-auto">
        <div className="flex gap-2 justify-center">
          {media.map((m, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === current
                  ? "border-white scale-105"
                  : "border-white/20 opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={m.type === "video" ? (m.thumbnail ?? m.url) : m.url}
                alt={m.caption ?? ""}
                className="w-full h-full object-cover"
              />
              {m.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play size={12} className="text-white fill-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DETAY SAYFASI
───────────────────────────────────────────── */
export default function EtkinlikDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const etkinlik = etkinlikler.find((e) => e.slug === slug);
  if (!etkinlik) notFound();

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryStart, setGalleryStart] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Diğer etkinlikler (bu etkinlik hariç, son 4 tane)
  const others = etkinlikler
    .filter((e) => e.slug !== slug)
    .sort((a, b) => b.year - a.year)
    .slice(0, 6);

  // Medyayı sırala: video önce
  const sortedMedia = [...etkinlik.media].sort((a, b) => {
    if (a.type === "video" && b.type !== "video") return -1;
    if (b.type === "video" && a.type !== "video") return 1;
    return 0;
  });

  const openGallery = (index: number) => {
    setGalleryStart(index);
    setGalleryOpen(true);
  };

  const scrollSlider = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
  };

  return (
    <>
      {/* LIGHTBOX */}
      <AnimatePresence>
        {galleryOpen && (
          <GalleryLightbox
            media={sortedMedia}
            startIndex={galleryStart}
            onClose={() => setGalleryOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen w-full bg-white dark:bg-black">

        

        {/* ── HERO ── */}
        <div className="w-full border-b mt-20 border-neutral-200 dark:border-white/[0.07] bg-white dark:bg-zinc-950">
          <div className="max-w-5xl mx-auto px-4 md:px-10 py-10 md:py-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Üst meta */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/10 text-xs font-bold tracking-wider uppercase text-neutral-600 dark:text-neutral-300">
                  {etkinlik.category}
                </span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">{etkinlik.date}</span>
              </div>

              {/* Yıl + başlık */}
              <div className="flex items-start gap-4 md:gap-6">
                <span className="text-7xl md:text-9xl font-black text-neutral-100 dark:text-white/[0.07] leading-none select-none flex-shrink-0 hidden sm:block">
                  {etkinlik.year}
                </span>
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-black dark:text-white leading-tight">
                    {etkinlik.title}
                  </h1>
                  <p className="mt-3 text-sm md:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
                    {etkinlik.description}
                  </p>
                </div>
              </div>

              {/* Detay bilgileri */}
              <div className="mt-8 flex flex-wrap gap-5">
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <MapPin size={14} className="text-neutral-400 dark:text-neutral-500 flex-shrink-0" />
                  {etkinlik.location}
                </div>
                
              </div>

              {/* Etiketler */}
              {etkinlik.tags.length > 0 && (
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <Tag size={12} className="text-neutral-400 dark:text-neutral-500" />
                  {etkinlik.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full border border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* ── MEDYA GALERİSİ ── */}
        <div className="max-w-5xl mx-auto px-4 md:px-10 py-10 md:py-14">

          {/* Başlık */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
              Fotoğraf & Videolar
            </h2>
           
          </div>

          {sortedMedia.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {sortedMedia.map((item, i) => {
                // İlk öğe her zaman tam genişlik ve daha büyük
                const isFirst = i === 0;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className={`group relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-zinc-900 cursor-pointer ${
                      isFirst ? "md:col-span-2" : ""
                    }`}
                    onClick={() => openGallery(i)}
                  >
                    {item.type === "video" ? (
                      /* Video thumbnail */
                      <div className={`relative w-full ${isFirst ? "aspect-video" : "aspect-[4/3]"}`}>
                        <img
                          src={item.thumbnail ?? item.url}
                          alt={item.caption ?? "Video"}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                          <span className={`flex items-center justify-center rounded-full bg-white/20 border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors ${isFirst ? "w-20 h-20" : "w-14 h-14"}`}>
                            <Play className={`text-white fill-white ml-1 ${isFirst ? "w-8 h-8" : "w-5 h-5"}`} />
                          </span>
                        </div>
                        {/* Video etiketi */}
                        <div className="absolute top-3 left-3">
                          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider">
                            <Play size={9} className="fill-white" />
                            Video
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Fotoğraf */
                      <div className={`relative w-full ${isFirst ? "aspect-video" : "aspect-[4/3]"}`}>
                        <img
                          src={item.url}
                          alt={item.caption ?? ""}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                      </div>
                    )}

                    {/* Caption */}
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs text-white/90 font-medium">{item.caption}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Ayırıcı */}
        <div className="max-w-5xl mx-auto border-t border-neutral-100 dark:border-white/[0.06] mx-4 md:mx-auto" />

        {/* ── DİĞER ETKİNLİKLER ── */}
        {others.length > 0 && (
          <div className="max-w-5xl mx-auto px-4 md:px-10 py-10 md:py-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
                Diğer Etkinliklerimiz
              </h2>

              {/* Slider navigasyon */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollSlider("left")}
                  className="w-8 h-8 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-all"
                  aria-label="Sola kaydır"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={() => scrollSlider("right")}
                  className="w-8 h-8 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition-all"
                  aria-label="Sağa kaydır"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* Yatay scroll slider */}
            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto pb-3 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {others.map((other) => (
                <Link
                  key={other.id}
                  href={`/etkinlikler/${other.slug}`}
                  className="group flex-shrink-0 w-64 flex flex-col rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-zinc-950 overflow-hidden hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-400"
                >
                  {/* Görsel */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-zinc-900">
                    <img
                      src={
                        other.media.find((m) => m.type === "video")?.thumbnail ??
                        other.coverImage
                      }
                      alt={other.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    {other.media.some((m) => m.type === "video") && (
                      <div className="absolute top-2 left-2">
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 text-[9px] font-bold text-white">
                          <Play size={8} className="fill-white" />
                          Video
                        </span>
                      </div>
                    )}
                  </div>

                  {/* İçerik */}
                  <div className="p-4 flex-1">
                    <span className="text-3xl font-black text-neutral-100 dark:text-white/[0.08] leading-none block mb-1.5">
                      {other.year}
                    </span>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white leading-snug line-clamp-2 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {other.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
                      <MapPin size={10} />
                      {other.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Alt not */}
        <div className="max-w-5xl mx-auto px-4 md:px-10 pb-12 pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2">
         
          <p className="text-[11px] text-neutral-400 dark:text-neutral-600">
            Çocuk Tribünü © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}