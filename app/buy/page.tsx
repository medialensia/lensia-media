"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function BuyPage() {
  const { language } = useLanguage();

  const [selectedPlan, setSelectedPlan] = useState("Growth");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const plans = [
  {
    name: "Starter",
    price: "€69",
    descEn: "8 Thumbnails • YouTube SEO",
    descSr: "8 Thumbnailova • YouTube SEO",
  },
  {
    name: "Growth",
    price: "€99",
    descEn: "20 Thumbnails • Advanced SEO",
    descSr: "20 Thumbnailova • Napredni SEO",
  },
  {
    name: "Media Pro",
    price: "€199",
    descEn: "40 Thumbnails • Complete Strategy",
    descSr: "40 Thumbnailova • Kompletna Strategija",
  },
  {
    name: "Performance",
    price: "€95 + 15%",
    descEn: "Media Pro + Revenue Partnership",
    descSr: "Media Pro + Partnerski Model",
  },
];

  const current = plans.find((p) => p.name === selectedPlan)!;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = new FormData(e.currentTarget);

    // Izabrani paket dodajemo u formu
    form.append("Plan", selectedPlan);

    try {
      const response = await fetch(
        "https://formspree.io/f/mgaeqrrj",
        {
          method: "POST",
          body: form,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSuccess(true);
        e.currentTarget.reset();
      } else {
        throw new Error();
      }
    } catch {
      alert(
        language === "en"
          ? "Something went wrong. Please try again."
          : "Došlo je do greške. Pokušajte ponovo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <a
          href="/"
          className="text-sm text-slate-400 transition hover:text-white"
        >
          ← {language === "en" ? "Back to Home" : "Nazad"}
        </a>

        <div className="mt-8">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            BUY
          </p>

          <h1 className="mt-3 text-5xl font-bold">
            {language === "en"
              ? "Choose Your Plan"
              : "Izaberi Svoj Paket"}
          </h1>

          <p className="mt-5 max-w-2xl text-slate-400">
            {language === "en"
              ? "Select the package that best fits your goals, then send us your project details."
              : "Izaberi paket koji najbolje odgovara tvojim ciljevima, a zatim nam pošalji detalje projekta."}
          </p>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <button
              key={plan.name}
              type="button"
              onClick={() => setSelectedPlan(plan.name)}
              className={`rounded-3xl border p-6 text-left transition-all ${
  selectedPlan === plan.name
    ? "border-violet-500 bg-gradient-to-b from-violet-500/20 to-violet-700/10 shadow-[0_0_30px_rgba(139,92,246,0.18)]"
    : "border-white/10 bg-white/5 hover:border-violet-400/40"
}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold">{plan.name}</h3>

                {selectedPlan === plan.name && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-sm">
                    ✓
                  </div>
                )}
              </div>

              <p className="mt-4 text-3xl font-extrabold">{plan.price}</p>

              <p className="mt-3 text-sm text-slate-400">
                {language === "en" ? plan.descEn : plan.descSr}
              </p>
            </button>
          ))}
        </div>

        {/* Form + Summary */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">
              {language === "en"
                ? "Project Details"
                : "Detalji Projekta"}
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {language === "en"
                    ? "Full Name"
                    : "Ime i Prezime"}
                </label>

                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0D1324] px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0D1324] px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {language === "en"
                    ? "YouTube Channel"
                    : "YouTube Kanal"}
                </label>

                <input
                  name="channel"
                  className="w-full rounded-xl border border-white/10 bg-[#0D1324] px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Discord / WhatsApp
                </label>

                <input
                  name="discord"
                  className="w-full rounded-xl border border-white/10 bg-[#0D1324] px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  {language === "en"
                    ? "Project Description"
                    : "Opis Projekta"}
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder={
                    language === "en"
                      ? "Tell us about your goals..."
                      : "Opiši svoj kanal i ciljeve..."
                  }
                  className="w-full rounded-xl border border-white/10 bg-[#0D1324] px-4 py-3 outline-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl 
                bg-purple-600 py-4 font-semibold text-white transition hover:bg-purple-500 
                disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? language === "en"
                    ? "Sending..."
                    : "Šaljem..."
                  : language === "en"
                  ? "Send Request"
                  : "Pošalji Zahtev"}
              </button>

              {success && (
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-center text-green-300">
                  {language === "en"
                    ? "Request sent successfully! We'll contact you within 24 hours."
                    : "Zahtev je uspešno poslat! Kontaktiraćemo vas u roku od 24 sata."}
                </div>
              )}
            </form>
          </div>

          {/* Summary */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-bold">
              {language === "en" ? "Summary" : "Pregled"}
            </h2>

            <div className="mt-8 rounded-2xl bg-[#0D1324] p-5">
              <p className="text-sm text-slate-400">
                {language === "en"
                  ? "Selected Plan"
                  : "Izabrani Paket"}
              </p>

              <h3 className="mt-2 text-2xl font-bold">{current.name}</h3>

              <p className="mt-3 text-4xl font-extrabold text-white">
  {current.price}
</p>

              <p className="mt-4 text-sm text-slate-400">
                {language === "en"
                  ? current.descEn
                  : current.descSr}
              </p>
            </div>

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <div>
                ✓{" "}
                {language === "en"
                  ? "Project discussion included"
                  : "Uključen razgovor o projektu"}
              </div>
              <div>
                ✓{" "}
                {language === "en"
                  ? "Delivery starts after approval"
                  : "Izrada počinje nakon odobrenja"}
              </div>
              <div>
                ✓{" "}
                {language === "en"
                  ? "Payment after agreement"
                  : "Plaćanje nakon dogovora"}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs text-slate-500">
                {language === "en"
                  ? "No payment is required before we discuss your project."
                  : "Plaćanje nije potrebno pre nego što dogovorimo projekat."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}