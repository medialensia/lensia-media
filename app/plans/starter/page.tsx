"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function StarterPlan() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "Beginner Friendly",
          title: "Starter Plan",
          subtitle:
            "Perfect for new creators who want professional thumbnails and a stronger YouTube foundation.",
          priceLabel: "one-time payment",
          included: "What's Included",
          who: "Who is this for?",
          whoText:
            "Ideal for creators starting their YouTube journey who need higher quality visuals and better optimization without a large investment.",
          summary: "Summary",
          price: "Price",
          delivery: "Delivery",
          revisions: "Revisions",
          deliveryValue: "3 Days",
          revisionValue: "1 Round",
          cta: "Contact Us",
          note: "Payment happens after project approval.",
          features: [
            "5 Premium Thumbnails",
            "Basic YouTube SEO",
            "Title & Description Optimization",
            "CTR Improvement Suggestions",
            "1 Revision Round",
            "Email Support",
          ],
        }
      : {
          back: "← Nazad na početnu",
          badge: "Početnički paket",
          title: "Starter Paket",
          subtitle:
            "Savršen za nove kreatore koji žele profesionalne thumbnailove i jaču osnovu za YouTube kanal.",
          priceLabel: "jednokratno plaćanje",
          included: "Šta dobijaš",
          who: "Kome je namenjen?",
          whoText:
            "Idealan za kreatore koji započinju svoj YouTube put i žele kvalitetniji vizuelni identitet i bolju optimizaciju bez velikog ulaganja.",
          summary: "Pregled",
          price: "Cena",
          delivery: "Isporuka",
          revisions: "Revizije",
          deliveryValue: "3 dana",
          revisionValue: "1 revizija",
          cta: "Kontaktiraj nas",
          note: "Plaćanje se vrši nakon odobrenja projekta.",
          features: [
            "5 Premium Thumbnail-a",
            "Osnovni YouTube SEO",
            "Optimizacija naslova i opisa",
            "Predlozi za veći CTR",
            "1 Krug revizije",
            "Email podrška",
          ],
        };

  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <a
            href="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            {t.back}
          </a>

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
              {t.badge}
            </div>

            <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-300">
              {t.subtitle}
            </p>

            <div className="mt-10 flex items-end gap-2">
              <span className="text-6xl font-extrabold">€69</span>
              <span className="pb-2 text-slate-400">{t.priceLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">{t.included}</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {t.features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold">{t.who}</h2>

              <p className="mt-5 leading-8 text-slate-300">{t.whoText}</p>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">{t.summary}</h3>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.price}</span>
                  <span>€69</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.delivery}</span>
                  <span>{t.deliveryValue}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.revisions}</span>
                  <span>{t.revisionValue}</span>
                </div>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <a
                href="/buy"
                className="flex w-full justify-center rounded-2xl bg-purple-600 py-4 font-semibold transition hover:bg-purple-500"
              >
                {t.cta}
              </a>

              <p className="mt-4 text-center text-xs text-slate-500">
                {t.note}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}