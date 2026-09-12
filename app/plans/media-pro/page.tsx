"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function MediaProPlan() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "Premium Monthly Plan",
          title: "Media Pro",
          subtitle:
            "Our complete monthly solution for creators who want consistent growth, premium thumbnails and a professional YouTube strategy.",
          priceLabel: "/ month",
          included: "What's Included",
          who: "Who is this for?",
          whoText:
            "Perfect for established creators and brands that want a dedicated team managing thumbnails, SEO and long-term channel growth.",
          summary: "Summary",
          price: "Price",
          delivery: "Delivery",
          revisions: "Revisions",
          deliveryValue: "24–48 Hours",
          revisionValue: "Unlimited",
          cta: "Get Started",
          note: "Monthly subscription with priority support.",
          features: [
            "40 Premium Thumbnails",
            "Complete YouTube SEO Strategy",
            "Monthly Channel Analysis",
            "Content Strategy",
            "Priority Delivery",
            "Unlimited Revisions",
            "24/7 Support",
          ],
        }
      : {
          back: "← Nazad na početnu",
          badge: "Premium mesečni paket",
          title: "Media Pro",
          subtitle:
            "Kompletno mesečno rešenje za kreatore koji žele kontinuiran rast, vrhunske thumbnailove i profesionalnu YouTube strategiju.",
          priceLabel: "/ mesec",
          included: "Šta dobijaš",
          who: "Kome je namenjen?",
          whoText:
            "Idealan za etablirane kreatore i brendove koji žele tim koji će voditi thumbnailove, SEO i dugoročan rast njihovog YouTube kanala.",
          summary: "Pregled",
          price: "Cena",
          delivery: "Isporuka",
          revisions: "Revizije",
          deliveryValue: "24–48h",
          revisionValue: "Neograničene",
          cta: "Započni saradnju",
          note: "Mesečna pretplata uz prioritetnu podršku.",
          features: [
            "40 premium thumbnailova",
            "Kompletna YouTube SEO strategija",
            "Mesečna analiza kanala",
            "Strategija sadržaja",
            "Prioritetna isporuka",
            "Neograničene revizije",
            "24/7 podrška",
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
            <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-300">
              {t.badge}
            </div>

            <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-300">
              {t.subtitle}
            </p>

            <div className="mt-10 flex items-end gap-2">
              <span className="text-6xl font-extrabold">€199</span>
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
          </div>

          <div>
            <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">{t.summary}</h3>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.price}</span>
                  <span>€199</span>
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