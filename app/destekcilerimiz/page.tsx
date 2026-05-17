"use client";

import Link from "next/link";
import Image from "next/image";
import supporters from "@/data/destek.json";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Logo from "../../components/Loop";

export default function DestekcilerimizPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black py-20 px-4 md:px-10">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-14 mt-15">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 text-xs tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400">
         Child Tribune
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
          Our Supporters
          </h1>

         <p className="mt-5 max-w-2xl text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
  
Universities, governorates, and various public institutions are organizations that have supported us in the past and continue to support us today.</p>
        </div>
        <Logo />
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-7">

        {supporters.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <Link href={`/destekcilerimiz/${item.slug}`}>
              <div className="group relative overflow-hidden  border border-neutral-200 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer">

                {/* TOP */}
                <div className="flex items-center gap-3 p-4 md:p-5 border-b border-neutral-100 dark:border-white/10">

                  {/* LOGO */}
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={item.logoUrl}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  {/* INFO */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm md:text-base font-semibold text-black dark:text-white leading-tight line-clamp-2">
                      {item.name}
                    </h2>

                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      {item.type}
                    </p>
                  </div>

                  <ExternalLink
                    size={16}
                    className="text-neutral-400 group-hover:text-black dark:group-hover:text-white transition"
                  />
                </div>

                {/* A4 DOCUMENT IMAGE */}
             <div className="relative aspect-[210/297] bg-white dark:bg-zinc-900 overflow-hidden">
  <Image
    src={item.supportDocumentImage}
    alt={item.name}
    fill
    className="object-cover transition-transform duration-700 group-hover:scale-105"
  />

  {/* soft overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-white/5" />
</div>

              </div>
            </Link>
          </motion.div>
        ))}

      </div>
    </div>
  );
}