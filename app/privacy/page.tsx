"use client";

import { useLanguage } from "../context/LanguageContext";

export default function PrivacyPage() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "Legal",
          title: "Privacy Policy",
          updated: "Last updated: September 11, 2026",
          intro:
            "This Privacy Policy explains how Lensia Media collects, uses and protects your personal information when you visit our website or use our creative services.",

          s1: "1. Information We Collect",
          s1p:
            "We may collect your name, email address, business information and any project details you voluntarily provide through our contact form or email communication.",

          s2: "2. How We Use Your Information",
          s2a: "Respond to inquiries and project requests.",
          s2b: "Deliver creative and consulting services.",
          s2c: "Improve our website and user experience.",
          s2d: "Send important project-related communications.",

          s3: "3. Cookies",
          s3p:
            "Our website may use essential cookies and analytics tools to understand website performance. We do not sell your personal information.",

          s4: "4. Data Sharing",
          s4p:
            "We do not sell or rent your personal data. Information is shared only with trusted providers when necessary to deliver our services or comply with legal obligations.",

          s5: "5. Data Security",
          s5p:
            "We use reasonable technical and organizational measures to protect your information against unauthorized access, disclosure or misuse.",

          s6: "6. Your Rights",
          s6p:
            "You may request access, correction or deletion of your personal data by contacting us.",

          s7: "7. Third-Party Services",
          s7p:
            "Our website may contain links to services such as YouTube, Stripe and PayPal. Their privacy policies apply separately.",

          s8: "8. Contact",
          contact:
            "If you have any questions regarding this Privacy Policy, contact us:",
        }
      : {
          back: "← Nazad na početnu",
          badge: "Pravno",
          title: "Politika privatnosti",
          updated: "Poslednje ažuriranje: 11. septembar 2026.",
          intro:
            "Ova Politika privatnosti objašnjava kako Lensia Media prikuplja, koristi i štiti vaše lične podatke kada koristite naš sajt ili naše kreativne usluge.",

          s1: "1. Podaci koje prikupljamo",
          s1p:
            "Možemo prikupljati vaše ime, email adresu, poslovne informacije i podatke o projektu koje dobrovoljno pošaljete putem kontakt forme ili email komunikacije.",

          s2: "2. Kako koristimo vaše podatke",
          s2a: "Odgovaranje na upite i zahteve za saradnju.",
          s2b: "Pružanje kreativnih i konsultantskih usluga.",
          s2c: "Unapređenje sajta i korisničkog iskustva.",
          s2d: "Slanje važnih informacija vezanih za projekat.",

          s3: "3. Kolačići (Cookies)",
          s3p:
            "Naš sajt može koristiti osnovne kolačiće i analitičke alate radi merenja performansi sajta. Ne prodajemo vaše lične podatke.",

          s4: "4. Deljenje podataka",
          s4p:
            "Ne prodajemo niti iznajmljujemo vaše lične podatke. Podaci se dele samo sa pouzdanim partnerima kada je to neophodno za pružanje usluge ili ispunjenje zakonskih obaveza.",

          s5: "5. Bezbednost podataka",
          s5p:
            "Primenjujemo razumne tehničke i organizacione mere kako bismo zaštitili vaše podatke od neovlašćenog pristupa ili zloupotrebe.",

          s6: "6. Vaša prava",
          s6p:
            "Imate pravo da zatražite pristup, ispravku ili brisanje svojih ličnih podataka kontaktiranjem naše agencije.",

          s7: "7. Usluge trećih strana",
          s7p:
            "Naš sajt može sadržati linkove ka servisima kao što su YouTube, Stripe i PayPal. Njihove politike privatnosti važe nezavisno od naše.",

          s8: "8. Kontakt",
          contact:
            "Ukoliko imate pitanja u vezi sa Politikom privatnosti, kontaktirajte nas:",
        };

  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <a
            href="/"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            {t.back}
          </a>

          <div className="mt-8">
            <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-300">
              {t.badge}
            </div>

            <h1 className="mt-6 text-5xl font-extrabold md:text-6xl">
              {t.title}
            </h1>

            <p className="mt-4 text-slate-400">{t.updated}</p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {t.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold">{t.s1}</h2>
            <p className="mt-4 leading-8 text-slate-300">{t.s1p}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{t.s2}</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• {t.s2a}</li>
              <li>• {t.s2b}</li>
              <li>• {t.s2c}</li>
              <li>• {t.s2d}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{t.s3}</h2>
            <p className="mt-4 leading-8 text-slate-300">{t.s3p}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{t.s4}</h2>
            <p className="mt-4 leading-8 text-slate-300">{t.s4p}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{t.s5}</h2>
            <p className="mt-4 leading-8 text-slate-300">{t.s5p}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{t.s6}</h2>
            <p className="mt-4 leading-8 text-slate-300">{t.s6p}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{t.s7}</h2>
            <p className="mt-4 leading-8 text-slate-300">{t.s7p}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">{t.s8}</h2>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-slate-300">{t.contact}</p>

              <div className="mt-4 space-y-2">
                <p className="font-semibold text-white">Lensia Media</p>
                <p className="text-slate-400">lensiamedia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}