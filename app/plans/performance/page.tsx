"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function PerformancePlan() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "Performance Plan",
          title: "Performance",
          subtitle:
            "A flexible growth package that offers more than Starter while keeping the upfront investment low through a performance-based pricing model.",
          priceLabel: "+ 15% revenue model",
          included: "What's Included",
          who: "Who is this for?",
          whoText:
            "Ideal for creators who upload consistently and want more support than the Starter package without paying the full price of Growth. The performance model keeps the initial cost accessible while rewarding long-term results.",
          works: "How It Works",
          summary: "Summary",
          price: "Price",
          revenue: "Revenue Model",
          delivery: "Delivery",
          support: "Support",
          deliveryValue: "3–5 Days",
          supportValue: "Monthly",
          cta: "Contact Us",
          note:
            "Payment is completed only after the project is discussed and approved.",

          features: [
            "8 Premium Thumbnails",
            "YouTube SEO Optimization",
            "CTR Improvement Strategy",
            "Monthly Performance Review",
            "Thumbnail A/B Recommendations",
            "Growth Roadmap",
            "Priority Email Support",
            "15% Revenue Model",
          ],

          steps: [
            ["1", "Strategy", "We analyze your channel and growth potential."],
            [
              "2",
              "Optimization",
              "Thumbnails, SEO and CTR improvements are implemented.",
            ],
            [
              "3",
              "Growth",
              "We monitor performance and continuously improve results.",
            ],
            [
              "4",
              "Performance",
              "The package combines a low upfront fee with a 15% revenue model.",
            ],
          ],
        }
      : {
          back: "← Nazad na početnu",
          badge: "Performance Paket",
          title: "Performance",
          subtitle:
            "Fleksibilan paket koji nudi više od Starter paketa, uz nisku početnu cenu zahvaljujući modelu naplate zasnovanom na rezultatima.",
          priceLabel: "+ 15% model prihoda",
          included: "Šta dobijaš",
          who: "Kome je namenjen?",
          whoText:
            "Idealan za kreatore koji redovno objavljuju sadržaj i žele više podrške od Starter paketa, ali bez pune cene Growth paketa. Performance model održava početno ulaganje pristupačnim, dok nagrađuje dugoročne rezultate.",
          works: "Kako funkcioniše",
          summary: "Pregled",
          price: "Cena",
          revenue: "Model prihoda",
          delivery: "Isporuka",
          support: "Podrška",
          deliveryValue: "3–5 dana",
          supportValue: "Mesečna",
          cta: "Kontaktiraj nas",
          note:
            "Plaćanje se vrši tek nakon razgovora i odobrenja projekta.",

          features: [
            "8 Premium Thumbnail-a",
            "YouTube SEO optimizacija",
            "Strategija za veći CTR",
            "Mesečni pregled performansi",
            "A/B preporuke za thumbnail",
            "Plan dugoročnog rasta",
            "Prioritetna email podrška",
            "15% model prihoda",
          ],

          steps: [
            [
              "1",
              "Strategija",
              "Analiziramo tvoj kanal i potencijal za rast.",
            ],
            [
              "2",
              "Optimizacija",
              "Implementiramo thumbnail, SEO i CTR poboljšanja.",
            ],
            [
              "3",
              "Rast",
              "Pratimo rezultate i kontinuirano unapređujemo performanse.",
            ],
            [
              "4",
              "Performance model",
              "Paket kombinuje nisku početnu cenu sa modelom od 15% prihoda.",
            ],
          ],
        };

  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <a
            href="/"
            className="text-sm text-slate-400 hover:text-white transition"
          >
            {t.back}
          </a>

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-slate-300">
              {t.badge}
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold">
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
                    <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
                      ✓
                    </div>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold">{t.who}</h2>

              <p className="mt-5 leading-8 text-slate-300">
                {t.whoText}
              </p>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold">{t.works}</h2>

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
          </div>

          {/* Right Sidebar */}
          <div>
            <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">{t.summary}</h3>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.price}</span>
                  <span>€69</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.revenue}</span>
                  <span>15%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.delivery}</span>
                  <span>{t.deliveryValue}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.support}</span>
                  <span>{t.supportValue}</span>
                </div>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <a
                href="/buy"
                className="flex w-full justify-center rounded-2xl bg-purple-600 py-4 font-semibold hover:bg-purple-500 transition"
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