import NewsCard from "../../components/NewsCard";
import newsData from "../../data/news.json";
import { Newspaper } from "lucide-react";

export const metadata = {
  title: "Basın Bizi Yazıyor | Çocuk Tribünü",
  description: "Çocuk Tribünü projesi hakkında yapılan haberler",
};

export default function BasinPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Hero */}
      <section className="px-4 pt-40 pb-14 md:pt-28 md:pb-18 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            <Newspaper className="w-3.5 h-3.5" />
          İn Press
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-neutral-50 leading-tight tracking-tight mb-5">
          Press writes
          <br />
          <span className="text-red-400"> About us</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
         News coverage from leading Turkish media outlets about the Children's Stand project. </p>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
      </div>

      {/* Grid */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {newsData.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}