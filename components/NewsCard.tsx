"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface NewsItem {
  id: string;
  publisher: string;
  title: string;
  description: string;
  news_url: string;
  news_logo: string;
}

export default function NewsCard({
  item,
  index,
}: {
  item: NewsItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
    >
      <Link href={`/basinda-biz/${item.id}`} className="group block h-full">
        <div className="h-full flex flex-col border border-neutral-200 dark:border-neutral-800  overflow-hidden bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/40">
          {/* Logo alanı */}
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
            <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 tracking-wide uppercase">
              {item.publisher}
            </span>
            <ArrowUpRight className="ml-auto w-4 h-4 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-200" />
          </div>

          {/* İçerik */}
          <div className="flex flex-col flex-1 px-5 py-5 gap-3">
            <h3 className="text-base font-bold leading-snug text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3 flex-1">
              {item.description}
            </p>
            <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 mt-auto pt-2 border-t border-neutral-100 dark:border-neutral-800">
              Haberi oku →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}