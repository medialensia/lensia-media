"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function MediaProPlan() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  const content = isEnglish
    ? {
        back: "Back to home",
        eyebrow: "LENSIA MEDIA / YOUTUBE GROWTH",
        title: "YouTube Media Pro",
        description:
          "A complete YouTube growth solution with premium thumbnails, SEO strategy and ongoing channel analysis.",
        priceLabel: "/ month",
        included: "What’s included",
        features: [
          "40 premium thumbnails",
          "Complete YouTube SEO strategy",
          "Monthly channel analysis",
          "Content strategy",
          "Priority delivery",
          "Unlimited revisions",
          "24/7 support",
        ],
        faq: "Frequently asked questions",
        questions: [
          {
            q: "How fast is delivery?",
            a: "Requests are delivered within a maximum of 24 hours, with the highest priority for Media Pro clients.",
          },
          {
            q: "Is there a contract commitment?",
            a: "The minimum commitment is one month. To cancel, please notify us at least 15 days before the next billing cycle.",
          },
          {
            q: "Do I get a dedicated strategy?",
            a: "Yes. Every month we analyze your channel, competitors and performance to improve thumbnails, SEO and your content strategy.",
          },
        ],
        cta: "Get started",
        ctaNote: "Monthly package · No hidden fees",
        priceCaption: "Media Pro monthly price",
      }
    : {
        back: "Nazad na početnu",
        eyebrow: "LENSIA MEDIA / YOUTUBE GROWTH",
        title: "YouTube Media Pro paket",
        description:
          "Kompletno YouTube rešenje sa premium thumbnailovima, SEO strategijom i kontinuiranom analizom kanala.",
        priceLabel: "/ mesečno",
        included: "Šta nudimo",
        features: [
          "40 premium thumbnailova",
          "Kompletna YouTube SEO strategija",
          "Mesečna analiza kanala",
          "Strategija sadržaja",
          "Prioritetna isporuka",
          "Neograničene revizije",
          
        ],
        faq: "Česta pitanja",
        questions: [
          {
            q: "Koliko traje isporuka?",
            a: "Sve zahteve isporučujemo u roku od najviše 24 sata, uz najviši prioritet za Media Pro klijente.",
          },
          {
            q: "Da li postoji ugovorna obaveza?",
            a: "Minimalna obaveza traje jedan mesec. Za otkazivanje je potrebno da nas obavestiš najmanje 15 dana pre narednog obračunskog perioda.",
          },
          {
            q: "Da li dobijam posebnu strategiju?",
            a: "Da. Svakog meseca analiziramo tvoj kanal, konkurenciju i rezultate kako bismo unapredili thumbnailove, SEO i strategiju sadržaja.",
          },
        ],
        cta: "Započni saradnju",
        ctaNote: "Mesečni paket · Bez skrivenih troškova",
        priceCaption: "Mesečna cena Media Pro paketa",
      };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 sm:px-10 sm:py-8 lg:px-12">
        <a
          href="/"
          className="inline-flex w-fit items-center gap-2 text-base text-white/55 transition-colors hover:text-white"
        >
          <span aria-hidden="true">←</span>
          {content.back}
        </a>

        <header className="mt-7 flex flex-col gap-3 border-b border-white/10 pb-7 sm:mt-8 sm:pb-8">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#c4b5fd]">
            {content.eyebrow}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-5xl">
            {content.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            {content.description}
          </p>
        </header>

        <div className="grid flex-1 gap-8 py-7 md:grid-cols-[minmax(0,1fr)_360px] md:gap-12 md:py-8 lg:grid-cols-[minmax(0,1fr)_390px]">
          <div className="flex min-w-0 flex-col gap-8">
            <section>
              <h2 className="text-xl font-semibold">{content.included}</h2>
              <ul className="mt-4 grid gap-x-7 sm:grid-cols-2">
                {content.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 border-b border-white/[0.07] py-3 text-base leading-6 text-white/80"
                  >
                    <span className="mt-px text-purple-300" aria-hidden="true">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">{content.faq}</h2>
              <div className="mt-3 grid gap-x-8 sm:grid-cols-2">
                {content.questions.map((item) => (
                  <details
                    key={item.q}
                    className="group border-b border-white/10 py-4"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white/85 marker:content-none [&::-webkit-details-marker]:hidden">
                      <span>{item.q}</span>
                      <span
                        className="shrink-0 text-lg leading-none text-white/45 transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pt-3 text-base leading-6 text-white/60">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.035] p-7 md:sticky md:top-8 md:p-8">
            <p className="text-sm font-medium text-[#c4b5fd]">YouTube · {content.priceCaption}</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight">€199</span>
              <span className="text-sm text-white/45">{content.priceLabel}</span>
            </div>
            <div className="my-6 h-px bg-white/10" />
            <p className="text-base leading-7 text-white/60">{content.description}</p>
            <a
              href="/buy"
              className="mt-6 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#8b5cf6] px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-[#7c3aed]"
            >
              {content.cta}
              <span aria-hidden="true">↗</span>
            </a>
            <p className="mt-4 text-center text-sm text-white/45">
              {content.ctaNote}
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
