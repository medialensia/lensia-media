"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function MediaProPlan() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "Premium Package",
          title: "Media Pro",
          subtitle:
            "The complete solution for creators and brands that want premium visuals, advanced SEO and a scalable YouTube growth system.",
          priceLabel: "one-time payment",
          included: "What's Included",
          who: "Who is this for?",
          whoText:
            "Built for established creators and businesses that want a premium content identity, higher CTR and a long-term competitive advantage on YouTube.",
          summary: "Summary",
          price: "Price",
          delivery: "Delivery",
          revisions: "Revisions",
          deliveryValue: "5–7 Days",
          revisionValue: "Unlimited*",
          cta: "Contact Us",
          note: "*Unlimited revisions during the 7-day revision period.",
          features: [
            "20 Premium Thumbnails",
            "Advanced YouTube SEO",
            "Full Channel Branding",
            "Custom Thumbnail System",
            "Competitor Research",
            "Content Growth Strategy",
            "Priority Support",
            "Unlimited Revisions (7 Days)",
          ],
        }
      : {
          back: "← Nazad na početnu",
          badge: "Premium Paket",
          title: "Media Pro",
          subtitle:
            "Kompletno rešenje za kreatore i brendove koji žele vrhunski vizuelni identitet, napredni SEO i skalabilan sistem rasta na YouTube-u.",
          priceLabel: "jednokratno plaćanje",
          included: "Šta dobijaš",
          who: "Kome je namenjen?",
          whoText:
            "Napravljen za etablirane kreatore i kompanije koje žele premium identitet sadržaja, veći CTR i dugoročnu konkurentsku prednost na YouTube-u.",
          summary: "Pregled",
          price: "Cena",
          delivery: "Isporuka",
          revisions: "Revizije",
          deliveryValue: "5–7 dana",
          revisionValue: "Neograničeno*",
          cta: "Kontaktiraj nas",
          note: "*Neograničene revizije tokom perioda od 7 dana.",
          features: [
            "20 Premium Thumbnail-a",
            "Napredna YouTube SEO optimizacija",
            "Kompletan Channel Branding",
            "Prilagođen Thumbnail Sistem",
            "Analiza konkurencije",
            "Strategija rasta sadržaja",
            "Prioritetna podrška",
            "Neograničene revizije (7 dana)",
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
            <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-sm text-yellow-300">
              {t.badge}
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold">
              {t.title}
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-300">
              {t.subtitle}
            </p>

            <div className="mt-10 flex items-end gap-2">
              <span className="text-6xl font-extrabold">€179</span>
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
          </div>

          {/* Right Sidebar */}
          <div>
            <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">{t.summary}</h3>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.price}</span>
                  <span>€179</span>
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