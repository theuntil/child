"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Newspaper, ArrowUpRight, ArrowRight } from "lucide-react";

interface NewsItem {
  id: string;
  publisher: string;
  title: string;
  description: string;
  news_url: string;
  news_logo: string;
}

interface MediaSectionProps {
  news: NewsItem[];          // data coming from news.json – pass as prop
  maxItems?: number;         // how many cards to display (default: 6)
}

export default function MediaSection({ news, maxItems = 6 }: MediaSectionProps) {
  const items = news.slice(0, maxItems);

  return (
    <section className="w-full bg-neutral-50 dark:bg-black py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
              <Newspaper className="w-3.5 h-3.5" />
              In the Press
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight">
              The Press
              <br />
              <span className="text-neutral-400 dark:text-neutral-600">Is Writing About Us</span>
            </h2>
          </div>

          {/* See All button – appears beside the title on large screens */}
          <Link
            href="/in-the-press"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-200 group"
          >
            All news
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 mb-10" />

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
            >
              <Link href={`/in-the-press/${item.id}`} className="group block h-full">
                <div className="h-full flex flex-col border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/40">

                  {/* Logo area */}
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-neutral-100 dark:border-neutral-800">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image
                        src={item.news_logo}
                        alt={item.publisher}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 tracking-wide uppercase truncate">
                      {item.publisher}
                    </span>
                    <ArrowUpRight className="ml-auto w-4 h-4 flex-shrink-0 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-200" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 px-5 py-5 gap-3">
                    <h3 className="text-base font-bold leading-snug text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3 flex-1">
                      {item.description}
                    </p>
                    <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 mt-auto pt-2 border-t border-neutral-100 dark:border-neutral-800">
                      Read article →
                    </span>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── See All – drops below on mobile ── */}
        <div className="mt-10 flex sm:hidden">
          <Link
            href="/in-the-press"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors duration-200 group"
          >
            All news
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </section>
  );
} 