"use client";

import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

export default function BuySuccessPage() {
  const { language } = useLanguage();
  const isSerbian = language === "sr";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-5 py-20 text-white selection:bg-purple-500/30 selection:text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-180px] h-[460px] w-[700px] -translate-x-1/2 rounded-full bg-purple-700/[0.12] blur-[140px]" />
        <div className="absolute bottom-[-220px] right-[-100px] h-[360px] w-[360px] rounded-full bg-red-600/[0.045] blur-[130px]" />
      </div>

      <section className="relative z-10 w-full max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-purple-300"
          >
            <path
              d="m5 12.5 4.2 4.2L19 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="mb-5 text-[10px] font-semibold tracking-[0.28em] text-purple-300 sm:text-xs">
          LENSIA MEDIA
        </p>

        <h1 className="text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl">
          {isSerbian ? "Upit je uspešno poslat." : "Your inquiry was sent."}
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
          {isSerbian
            ? "Hvala na interesovanju za Lensia Media. Primili smo tvoje podatke i javićemo ti se kako bismo razgovarali o projektu i narednim koracima."
            : "Thanks for your interest in Lensia Media. We've received your details and will get back to you to discuss your project and the next steps."}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            {isSerbian ? "Nazad na početnu" : "Back to homepage"}
            <span className="ml-5 text-lg" aria-hidden="true">
              →
            </span>
          </Link>

          <Link
            href="/buy"
            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-medium text-white/75 transition hover:border-white/30 hover:text-white"
          >
            {isSerbian ? "Pogledaj ostale usluge" : "Explore other services"}
          </Link>
        </div>

        <p className="mt-12 text-xs text-white/30">
          {isSerbian
            ? "Imaš dodatno pitanje? Piši nam na "
            : "Have another question? Email us at "}
          <a
            href="mailto:lensiamedia@gmail.com"
            className="text-white/60 underline underline-offset-4 transition hover:text-white"
          >
            lensiamedia@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
