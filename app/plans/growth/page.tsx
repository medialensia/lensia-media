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
            "A complete growth package for creators who want better thumbnails, stronger branding and long-term YouTube strategy.",
          priceLabel: "one-time payment",

          included: "What's Included",
          who: "Who is this for?",
          whoText:
            "The Growth Plan is designed for creators who already publish content consistently and want to improve click-through rate, branding and discoverability without guessing what works.",

          process: "Our Process",
          faq: "FAQ",

          summary: "Summary",
          price: "Price",
          delivery: "Delivery",
          revisions: "Revisions",

          deliveryValue: "3–5 Days",
          revisionsValue: "7 Days",

          cta: "Contact Us",
          note:
            "Payment is completed only after the project is discussed and approved.",

          features: [
            "10 Premium Thumbnails",
            "Complete YouTube SEO",
            "Channel Branding Review",
            "Growth Strategy Document",
            "CTR Optimization Tips",
            "Priority Email Support",
            "Competitor Analysis",
            "7-Day Revision Window",
          ],

          steps: [
            ["1", "Discovery", "We analyze your channel and goals."],
            ["2", "Research", "Competitors, audience and SEO review."],
            ["3", "Creation", "Design and optimization begin."],
            ["4", "Delivery", "Final assets delivered with revisions."],
          ],

          faqs: [
            [
              "How long does delivery take?",
              "Usually between 3–5 business days depending on the project.",
            ],
            [
              "Can I request revisions?",
              "Yes. This package includes a 7-day revision period.",
            ],
            [
              "Is this only for YouTube?",
              "The strategy is focused on YouTube, while branding can also be used across other platforms.",
            ],
          ],
        }
      : {
          back: "← Nazad na početnu",
          badge: "Najpopularniji",
          title: "Growth Paket",
          subtitle:
            "Kompletan paket za kreatore koji žele bolje thumbnailove, jači brending i dugoročnu YouTube strategiju.",
          priceLabel: "jednokratno plaćanje",

          included: "Šta dobijaš",
          who: "Kome je namenjen?",
          whoText:
            "Growth paket je namenjen kreatorima koji redovno objavljuju sadržaj i žele da povećaju CTR, unaprede brend i poboljšaju vidljivost kanala bez nagađanja šta funkcioniše.",

          process: "Naš proces",
          faq: "Česta pitanja",

          summary: "Pregled",
          price: "Cena",
          delivery: "Isporuka",
          revisions: "Revizije",

          deliveryValue: "3–5 dana",
          revisionsValue: "7 dana",

          cta: "Kontaktiraj nas",
          note:
            "Plaćanje se vrši tek nakon razgovora i odobrenja projekta.",

          features: [
            "10 Premium Thumbnail-a",
            "Kompletna YouTube SEO optimizacija",
            "Analiza Channel Brandinga",
            "Dokument strategije rasta",
            "Saveti za veći CTR",
            "Prioritetna email podrška",
            "Analiza konkurencije",
            "7 dana za revizije",
          ],

          steps: [
            ["1", "Analiza", "Analiziramo tvoj kanal i ciljeve."],
            ["2", "Istraživanje", "Pregled konkurencije, publike i SEO-a."],
            ["3", "Kreiranje", "Počinje dizajn i kompletna optimizacija."],
            ["4", "Isporuka", "Finalni materijali sa uključenim revizijama."],
          ],

          faqs: [
            [
              "Koliko traje isporuka?",
              "Najčešće između 3 i 5 radnih dana, u zavisnosti od projekta.",
            ],
            [
              "Da li mogu da tražim izmene?",
              "Da. Ovaj paket uključuje period revizija od 7 dana.",
            ],
            [
              "Da li je paket samo za YouTube?",
              "Strategija je fokusirana na YouTube, dok se brending može koristiti i na drugim društvenim mrežama.",
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
              <span className="text-6xl font-extrabold">€109</span>
              <span className="pb-2 text-slate-400">{t.priceLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left */}
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
                  <span>€109</span>
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