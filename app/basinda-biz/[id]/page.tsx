import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import newsData from "../../../data/news.json";
import { ArrowLeft, ExternalLink } from "lucide-react";

type Params = Promise<{
  id: string;
}>;

export function generateStaticParams() {
  return newsData.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  const item = newsData.find((n) => n.id === id);

  if (!item) {
    return {
      title: "Haber bulunamadı",
    };
  }

  return {
    title: `${item.title} | Çocuk Tribünü`,
    description: item.description,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params; // ✅ ZORUNLU

  const item = newsData.find((n) => n.id === id);

  if (!item) notFound();

  const others = newsData
    .filter((n) => n.id !== item.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-3xl mx-auto px-4 pt-30 pb-20 md:pt-20">

        {/* Geri */}
        <Link
          href="/basinda-biz"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors duration-200 mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
       All News
        </Link>

        {/* Kaynak */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative w-9 h-9 flex-shrink-0 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-1.5">
            <Image
              src={item.news_logo}
              alt={item.publisher}
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
          <div>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-semibold">
         Source
            </p>
            <p className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
              {item.publisher}
            </p>
          </div>
        </div>

        {/* Başlık */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight mb-6">
          {item.title}
        </h1>

        <div className="h-px bg-neutral-200 dark:bg-neutral-800 mb-8" />

        {/* Açıklama */}
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
          {item.description}
        </p>

        {/* Link */}
        <a
          href={item.news_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
        >
          <ExternalLink className="w-4 h-4" />
          Read Source — {item.publisher}
        </a>

        {/* Diğer haberler */}
        {others.length > 0 && (
          <div className="mt-20">
            <div className="h-px bg-neutral-200 dark:bg-neutral-800 mb-10" />
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
              Other News
            </p>

            <div className="flex flex-col gap-4">
              {others.map((o) => (
                <Link
                  key={o.id}
                  href={`/basinda-biz/${o.id}`} // ✅ FIXED ROUTE
                  className="group flex items-start gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 bg-white dark:bg-neutral-900 transition-all duration-200"
                >
                  <div className="relative w-8 h-8 flex-shrink-0 mt-0.5">
                    <Image
                      src={o.news_logo}
                      alt={o.publisher}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-neutral-400 uppercase tracking-wide font-semibold mb-1">
                      {o.publisher}
                    </p>
                    <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 line-clamp-2 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors duration-200">
                      {o.title}
                    </p>
                  </div>

                  <ArrowLeft className="w-4 h-4 text-neutral-300 dark:text-neutral-600 rotate-180 flex-shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}