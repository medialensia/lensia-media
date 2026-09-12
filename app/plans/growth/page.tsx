"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function GrowthPlan() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "Most Popular",
          title: "Growth Plan",
          subtitle:
            "The ideal monthly package for creators who want faster growth, stronger thumbnails and advanced YouTube optimization.",
          priceLabel: "/ month",

          included: "What's Included",
          who: "Who is this for?",
          whoText:
            "Perfect for creators who publish consistently and want higher CTR, better discoverability and a more professional channel presence.",

          process: "Our Process",
          faq: "FAQ",

          summary: "Summary",
          price: "Price",
          delivery: "Delivery",
          revisions: "Revisions",

          deliveryValue: "24–48 Hours",
          revisionsValue: "Unlimited",

          cta: "Get Started",
          note: "Monthly subscription with unlimited revisions.",

          features: [
            "20 Premium Thumbnails",
            "Advanced YouTube SEO",
            "A/B Thumbnail Variations",
            "Competitor Analysis",
            "CTR Optimization",
            "Unlimited Revisions",
            "24/7 Support",
          ],

          steps: [
            ["1", "Audit", "We analyze your channel, audience and competitors."],
            ["2", "Strategy", "A thumbnail and SEO plan is created for maximum CTR."],
            ["3", "Creation", "We design thumbnails and optimize every upload."],
            ["4", "Growth", "We continuously improve performance through revisions and optimization."],
          ],

          faqs: [
            [
              "How many thumbnails are included?",
              "20 premium thumbnails every month.",
            ],
            [
              "Are revisions limited?",
              "No. This package includes unlimited revisions.",
            ],
            [
              "Is support included?",
              "Yes, you receive 24/7 support throughout the subscription.",
            ],
          ],
        }
      : {
          back: "← Nazad na početnu",
          badge: "Najpopularniji",
          title: "Growth Paket",
          subtitle:
            "Idealan mesečni paket za kreatore koji žele brži rast, kvalitetnije thumbnailove i naprednu YouTube optimizaciju.",
          priceLabel: "/ mesec",

          included: "Šta dobijaš",
          who: "Kome je namenjen?",
          whoText:
            "Savršen za kreatore koji redovno objavljuju sadržaj i žele veći CTR, bolju vidljivost i profesionalniji izgled svog kanala.",

          process: "Naš proces",
          faq: "Česta pitanja",

          summary: "Pregled",
          price: "Cena",
          delivery: "Isporuka",
          revisions: "Revizije",

          deliveryValue: "24–48h",
          revisionsValue: "Neograničene",

          cta: "Započni saradnju",
          note: "Mesečna pretplata sa neograničenim revizijama.",

          features: [
            "20 premium thumbnailova",
            "Napredni YouTube SEO",
            "A/B varijacije thumbnailova",
            "Analiza konkurencije",
            "Optimizacija CTR-a",
            "Neograničene revizije",
            "24/7 podrška",
          ],

          steps: [
            ["1", "Analiza", "Analiziramo tvoj kanal, publiku i konkurenciju."],
            ["2", "Strategija", "Pravimo plan thumbnailova i SEO optimizacije za maksimalan CTR."],
            ["3", "Kreiranje", "Dizajniramo thumbnailove i optimizujemo svaki upload."],
            ["4", "Rast", "Kontinuirano unapređujemo rezultate kroz revizije i optimizaciju."],
          ],

          faqs: [
            [
              "Koliko thumbnailova dobijam?",
              "20 premium thumbnailova svakog meseca.",
            ],
            [
              "Da li su revizije ograničene?",
              "Ne. Ovaj paket uključuje neograničene revizije.",
            ],
            [
              "Da li je podrška uključena?",
              "Da, dobijaš 24/7 podršku tokom cele saradnje.",
            ],
          ],
        };

  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            {t.back}
          </a>

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm font-medium text-purple-300">
              {t.badge}
            </div>

            <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-300">
              {t.subtitle}
            </p>

            <div className="mt-10 flex items-end gap-2">
              <span className="text-6xl font-extrabold">€99</span>
              <span className="pb-2 text-slate-400">{t.priceLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
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
            </div>

            <div>
              <h2 className="text-3xl font-bold">{t.who}</h2>
              <p className="mt-5 leading-8 text-slate-300">{t.whoText}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">{t.process}</h2>

              <div className="mt-8 space-y-6">
                {t.steps.map(([n, title, desc]) => (
                  <div key={n} className="flex gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 font-bold">
                      {n}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-1 text-slate-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold">{t.faq}</h2>

              <div className="mt-6 space-y-4">
                {t.faqs.map(([q, a]) => (
                  <div
                    key={q}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h4 className="font-semibold">{q}</h4>
                    <p className="mt-2 text-slate-400">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div>
            <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">{t.summary}</h3>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.price}</span>
                  <span>€99</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.delivery}</span>
                  <span>{t.deliveryValue}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.revisions}</span>
                  <span>{t.revisionsValue}</span>
                </div>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <a
                href="/buy"
                className="flex w-full justify-center rounded-2xl bg-purple-600 py-4 font-semibold transition hover:bg-purple-500"
              >
                {t.cta}
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                {t.note}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}