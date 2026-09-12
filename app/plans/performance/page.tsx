"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function PerformancePlan() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "Partnership Plan",
          title: "Performance",
          subtitle:
            "A premium partnership package for monetized YouTube creators. You receive our complete Media Pro service with a lower upfront cost.",
          priceLabel: "/ month + 15% AdSense",
          included: "What's Included",
          who: "Who is this for?",
          whoText:
            "Best suited for creators with a monetized YouTube channel who publish consistently and want a long-term growth partner.",
          works: "How It Works",
          summary: "Summary",
          price: "Base Price",
          revenue: "Revenue Share",
          delivery: "Delivery",
          support: "Support",
          deliveryValue: "24–48 Hours",
          supportValue: "24/7",
          cta: "Apply Now",
          note:
            "15% is calculated only from monthly YouTube AdSense revenue.",
          features: [
            "40 Premium Thumbnails",
            "Complete YouTube SEO",
            "Monthly Channel Analysis",
            "Content Strategy",
            "Priority Delivery",
            "Unlimited Revisions",
            "24/7 Support",
          ],
          steps: [
            [
              "1",
              "Channel Audit",
              "We analyze your channel, audience and growth opportunities.",
            ],
            [
              "2",
              "Optimization",
              "We create thumbnails and optimize your entire SEO strategy.",
            ],
            [
              "3",
              "Scaling",
              "CTR and channel performance are monitored every month.",
            ],
            [
              "4",
              "Partnership",
              "You pay €95/month plus 15% of your monthly AdSense revenue.",
            ],
          ],
        }
      : {
          back: "← Nazad na početnu",
          badge: "Partnerski paket",
          title: "Performance",
          subtitle:
            "Premium partnerski paket za monetizovane YouTube kreatore. Dobijaš kompletnu Media Pro uslugu uz niže početno ulaganje.",
          priceLabel: "/ mesec + 15% AdSense",
          included: "Šta dobijaš",
          who: "Kome je namenjen?",
          whoText:
            "Idealan za kreatore koji imaju monetizovan YouTube kanal, redovno objavljuju sadržaj i žele dugoročnog partnera za rast.",
          works: "Kako funkcioniše",
          summary: "Pregled",
          price: "Osnovna cena",
          revenue: "Udeo u zaradi",
          delivery: "Isporuka",
          support: "Podrška",
          deliveryValue: "24–48h",
          supportValue: "24/7",
          cta: "Prijavi se",
          note:
            "15% se obračunava isključivo na mesečnu YouTube AdSense zaradu.",
          features: [
            "40 premium thumbnailova",
            "Kompletna YouTube SEO strategija",
            "Mesečna analiza kanala",
            "Strategija sadržaja",
            "Prioritetna isporuka",
            "Neograničene revizije",
            "24/7 podrška",
          ],
          steps: [
            [
              "1",
              "Analiza kanala",
              "Analiziramo tvoj kanal, publiku i potencijal za rast.",
            ],
            [
              "2",
              "Optimizacija",
              "Kreiramo thumbnailove i unapređujemo kompletnu SEO strategiju.",
            ],
            [
              "3",
              "Skaliranje",
              "Pratimo CTR i mesečne rezultate kako bismo povećali rast.",
            ],
            [
              "4",
              "Partnerski model",
              "Plaćaš 95€/mesec + 15% mesečne YouTube AdSense zarade.",
            ],
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
              <span className="text-6xl font-extrabold">€95</span>
              <span className="pb-2 text-slate-400">{t.priceLabel}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
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

          <div>
            <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">{t.summary}</h3>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.price}</span>
                  <span>€95</span>
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