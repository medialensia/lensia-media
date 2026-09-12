"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function LaunchPlan() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "FREE",
          title: "Launch Plan",
          subtitle:
            "A free growth partnership created exclusively for YouTube channels that have not yet reached monetization.",

          included: "What's Included",
          who: "Who is this for?",
          whoText:
            "Designed for promising creators with non-monetized channels who want professional thumbnails, SEO and channel strategy without any upfront cost.",

          process: "How It Works",
          faq: "FAQ",

          summary: "Summary",
          price: "Price",
          eligibility: "Eligibility",
          agreement: "After Monetization",

          eligibilityValue: "Non-monetized channels",
          agreementValue: "€35 + 35% for 12 months",

          cta: "Apply Now",
          note: "Applications are reviewed manually. We accept a limited number of creators.",

          features: [
            "Professional Thumbnail Design",
            "YouTube SEO Optimization",
            "Channel Growth Strategy",
            "Competitor Analysis",
            "CTR Optimization",
            "Unlimited Revisions",
            "Priority Support",
          ],

          steps: [
  ["1", "Apply", "Submit your channel for review."],
  [
    "2",
    "Agreement",
    "We sign a performance agreement before any work begins.",
  ],
  [
    "3",
    "Audit",
    "We analyze your content, audience and growth potential.",
  ],
  [
    "4",
    "Grow",
    "We work with you completely free until your channel reaches monetization.",
  ],
],

          faqs: [
            [
              "Who can apply?",
              "Only YouTube channels that have not yet reached monetization.",
            ],
            [
              "Is it really free?",
              "Yes. There are no upfront costs before monetization.",
            ],
            [
              "What happens after monetization?",
              "The partnership converts into a 12-month agreement: €35/month + 35% of YouTube revenue.",
            ],
          ],
        }
      : {
          back: "← Nazad na početnu",
          badge: "BESPLATNO",
          title: "Launch Paket",
          subtitle:
            "Besplatna saradnja namenjena isključivo YouTube kanalima koji još nisu dostigli monetizaciju.",

          included: "Šta dobijaš",
          who: "Kome je namenjen?",
          whoText:
            "Napravljen za perspektivne kreatore koji žele profesionalne thumbnailove, SEO i strategiju kanala bez ikakvih početnih troškova.",

          process: "Kako funkcioniše",
          faq: "Česta pitanja",

          summary: "Pregled",
          price: "Cena",
          eligibility: "Uslov",
          agreement: "Nakon monetizacije",

          eligibilityValue: "Kanal bez monetizacije",
          agreementValue: "35€ + 35% tokom 12 meseci",

          cta: "Prijavi se",
          note: "Prijave prolaze ručnu proveru. Prihvatamo ograničen broj kreatora.",

          features: [
            "Profesionalni thumbnailovi",
            "YouTube SEO optimizacija",
            "Strategija rasta kanala",
            "Analiza konkurencije",
            "Optimizacija CTR-a",
            "Neograničene revizije",
            "Prioritetna podrška",
          ],

          steps: [
  ["1", "Prijava", "Pošalji kanal na besplatnu proveru."],
  [
    "2",
    "Ugovor",
    "Potpisujemo ugovor o saradnji pre početka rada.",
  ],
  [
    "3",
    "Analiza",
    "Analiziramo sadržaj, publiku i potencijal rasta.",
  ],
  [
    "4",
    "Rast",
    "Radimo potpuno besplatno sve dok kanal ne dostigne monetizaciju.",
  ],
],

          faqs: [
            [
              "Ko može da se prijavi?",
              "Samo YouTube kanali koji još nisu dostigli monetizaciju.",
            ],
            [
              "Da li je zaista besplatno?",
              "Da. Nema nikakvih početnih troškova pre monetizacije.",
            ],
            [
              "Šta se dešava nakon monetizacije?",
              "Saradnja prelazi na 12-mesečni ugovor: 35€/mesec + 35% od YouTube zarade.",
            ],
          ],
        };

  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            {t.back}
          </a>

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">
              {t.badge}
            </div>

            <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
              {t.title}
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-300">
              {t.subtitle}
            </p>

            <div className="mt-10 flex items-end gap-2">
              <span className="text-6xl font-extrabold text-emerald-400">
                FREE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h2 className="text-3xl font-bold">{t.included}</h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {t.features.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 font-bold">
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

          {/* Sidebar */}
          <div>
            <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-bold">{t.summary}</h3>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.price}</span>
                  <span className="font-semibold text-emerald-400">FREE</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.eligibility}</span>
                  <span className="text-right">{t.eligibilityValue}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">{t.agreement}</span>
                  <span className="text-right">{t.agreementValue}</span>
                </div>
              </div>

              <div className="my-6 h-px bg-white/10" />

              <a
                href="/contact"
                className="flex w-full justify-center rounded-2xl bg-emerald-500 py-4 font-semibold transition hover:bg-emerald-400"
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