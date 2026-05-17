"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import PolicyModal from "./PolicyModal";
import policies from "../app/data/polices.json";

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

// ── Corporate links ──
const kurumsal = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/hakkimizda" },
  { label: "About the Project", href: "/cocuk-tribunu" },
  { label: "Press", href: "/basinda-biz" },
  { label: "Contact", href: "/iletisim" },
  { label: "Corporate Identity", href: "/kurumsal-kimlik" },
];

// ── Content & Projects links ──
const icerik = [
  { label: "2026 World Cup", href: "/2026-dunya-kupasi" },
  { label: "Registration Documents", href: "/tescil" },
  { label: "Our Supporters", href: "/destekcilerimiz" },
  { label: "Events", href: "/etkinlikler" },
];

// ── Tekrar kullanılabilir link listesi ──
function LinkList({
  title,
  links,
  extra,
}: {
  title: string;
  links: { label: string; href: string }[];
  extra?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm tracking-tight">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#006039] dark:hover:text-[#4D96FF] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
        {extra}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [openPolicy, setOpenPolicy] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<any>(null);

  const openPolicyById = (id: string) => {
    const policy = policies.find((p) => p.id === id);
    setSelectedPolicy(policy);
    setOpenPolicy(true);
  };

  return (
    <>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* ── TOP: 4 eşit sütun ──────────────────────────────────
              Mobil  → 1 sütun (alt alta)
              sm     → 2 sütun
              lg     → 4 sütun (yan yana, simetrik)
          ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* ── SÜTUN 1: Marka ── */}
            <div className="flex flex-col gap-6">
              <Logo width={130} height={40} />

             <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
  A social responsibility project aimed at spreading a healthy sports
  culture by creating safe tribune areas for children.
</p>
              {/* Sosyal medya */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/hkncskn78"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://twitter.com/hakancoskun_78"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors"
                >
                  <XIcon />
                </a>
              </div>

              {/* TPE tescil rozeti */}
              <div className="flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-600 font-medium">
               Registered Trademark
                </p>
                <Link href="/tescil" className="group w-fit">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-zinc-900 hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-sm transition-all duration-300">
                    <div className="relative w-20 h-6 flex-shrink-0">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/T%C3%BCrk_Patent_ve_Marka_Kurumu_logo.svg/1280px-T%C3%BCrk_Patent_ve_Marka_Kurumu_logo.svg.png"
                        alt="Türk Patent ve Marka Kurumu"
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-[10px] text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors whitespace-nowrap">
                      Tescil Belgesi →
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* ── SÜTUN 2: Kurumsal ── */}
            <LinkList
              title="Company"
              links={kurumsal}
              extra={
                <li>
                  <button
                    onClick={() => openPolicyById("gizlilik")}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#006039] dark:hover:text-[#4D96FF] transition-colors"
                  >
                    Gizlilik Politikası
                  </button>
                </li>
              }
            />

            {/* ── SÜTUN 3: İçerik & Projeler ── */}
            <LinkList title="Project" links={icerik} />

            {/* ── SÜTUN 4: İletişim ── */}
            <div className="flex flex-col gap-5">
              <h3 className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm tracking-tight">
                Contact
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li>
                  <a
                    href="mailto:iletisim@cocuktribunu.com"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-[#006039] dark:hover:text-[#4D96FF] transition-colors"
                  >
                    iletisim@cocuktribunu.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-neutral-200 dark:border-neutral-800" />

          {/* ── BOTTOM BAR ── */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <p>
              © {new Date().getFullYear()} KUZEYBATI INTERNATIONAL @Copyright
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500">
              <span>bir</span>
              <a
                href="https://terrasoftware.co"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:rotate-12 transition-all duration-300"
              >
                <Image
                  src="/terra.png"
                  alt="Terra Software"
                  width={20}
                  height={20}
                  className="opacity-80 hover:opacity-100 transition"
                />
              </a>
              <span>yazılımı</span>
            </div>
          </div>
        </div>
      </footer>

      <PolicyModal
        open={openPolicy}
        onClose={() => setOpenPolicy(false)}
        policy={selectedPolicy}
      />
    </>
  );
}