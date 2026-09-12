"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function StarterPlan() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "Monthly Plan",
          title: "Starter Plan",
          subtitle:
            "The perfect monthly package for creators who want consistent, professional thumbnails and stronger YouTube optimization.",
          priceLabel: "/ month",
          included: "What's Included",
          who: "Who is this for?",
          whoText:
            "Ideal for smaller creators who publish consistently and want a stronger visual identity, higher CTR and better channel optimization.",
          summary: "Summary",
          price: "Price",
          delivery: "Delivery",
          revisions: "Revisions",
          deliveryValue: "24–48 Hours",
          revisionValue: "1 per Thumbnail",
          cta: "Get Started",
          note: "Monthly subscription. Cancel anytime.",
          features: [
            "8 Premium Thumbnails",
            "SEO for 8 Videos",
            "Title & Description Optimization",
            "1 Revision per Thumbnail",
            "24/7 Support",
          ],
        }
      : {
          back: "← Nazad na početnu",
          badge: "Mesečni paket",
          title: "Starter Paket",
          subtitle:
            "Savršen mesečni paket za kreatore koji žele profesionalne thumbnailove i jaču YouTube optimizaciju.",
          priceLabel: "/ mesec",
          included: "Šta dobijaš",
          who: "Kome je namenjen?",
          whoText:
            "Idealan za manje kreatore koji redovno objavljuju i žele bolji vizuelni identitet, veći CTR i profesionalniji izgled kanala.",
          summary: "Pregled",
          price: "Cena",
          delivery: "Isporuka",
          revisions: "Revizije",
          deliveryValue: "24–48h",
          revisionValue: "1 po thumbnailu",
          cta: "Započni saradnju",
          note: "Mesečna pretplata. Otkazivanje u bilo kom trenutku.",
          features: [
            "8 premium thumbnailova",
            "SEO za 8 videa",
            "Optimizacija naslova i opisa",
            "1 revizija po thumbnailu",
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