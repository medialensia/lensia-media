"use client";

import { useLanguage } from "../context/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  const t =
    language === "en"
      ? {
          back: "← Back to Home",
          badge: "Legal",
          title: "Terms of Service",
          updated: "Last updated: September 11, 2026",
          intro:
            "These Terms of Service govern the use of Lensia Media's website and creative services. By using our website or purchasing our services, you agree to these terms.",

          s1: "1. Services",
          s1p:
            "Lensia Media provides creative services including thumbnail design, video editing, YouTube SEO, branding, channel strategy and consulting.",

          s2: "2. Project Agreements",
          s2p:
            "Each project is subject to an individual proposal, invoice or Statement of Work outlining scope, pricing, revisions and delivery timelines.",

          s3: "3. Payments",
          s3p:
            "Payments must be completed according to the agreed invoice. Work may begin after the initial payment is received unless otherwise agreed in writing.",

          s4: "4. Revisions",
          s4p:
            "Revision limits depend on the selected package. Additional revisions beyond the agreed scope may incur additional fees.",

          s5: "5. Intellectual Property",
          s5p:
            "Final approved deliverables become the client's property upon full payment. Lensia Media reserves the right to display completed work in its portfolio unless otherwise agreed.",

          s6: "6. Refund Policy",
          s6p:
            "Due to the custom nature of creative work, completed services are generally non-refundable. Refunds are evaluated individually when appropriate.",

          s7: "7. Limitation of Liability",
          s7p:
            "Lensia Media is not responsible for platform algorithm changes, revenue fluctuations or outcomes beyond our reasonable control.",

          s8: "8. Contact",
          contact:
            "For questions regarding these Terms of Service, contact us at:",
        }
      : {
          back: "← Nazad na početnu",
          badge: "Pravno",
          title: "Uslovi korišćenja",
          updated: "Poslednje ažuriranje: 11. septembar 2026.",
          intro:
            "Ovi Uslovi korišćenja regulišu upotrebu sajta i usluga kompanije Lensia Media. Korišćenjem sajta ili kupovinom naših usluga prihvatate ove uslove.",

          s1: "1. Usluge",
          s1p:
            "Lensia Media pruža usluge thumbnail dizajna, video montaže, YouTube SEO optimizacije, brendinga, strategije kanala i konsultacija.",

          s2: "2. Projektni ugovori",
          s2p:
            "Svaki projekat definiše se posebnom ponudom, fakturom ili Statement of Work dokumentom koji određuje obim posla, cenu, broj revizija i rokove.",

          s3: "3. Plaćanje",
          s3p:
            "Plaćanje se vrši prema dogovorenoj fakturi. Rad može započeti nakon prijema početne uplate, osim ukoliko nije drugačije dogovoreno.",

          s4: "4. Revizije",
          s4p:
            "Broj revizija zavisi od odabranog paketa. Dodatne izmene van dogovorenog obima mogu biti dodatno naplaćene.",

          s5: "5. Intelektualna svojina",
          s5p:
            "Nakon potpune uplate, završeni materijali postaju vlasništvo klijenta. Lensia Media zadržava pravo da radove prikaže u svom portfoliju, osim ako nije drugačije dogovoreno.",

          s6: "6. Politika povraćaja",
          s6p:
            "Zbog prirode personalizovanih kreativnih usluga, završeni projekti uglavnom nisu predmet povraćaja novca. Svaki zahtev razmatra se pojedinačno.",

          s7: "7. Ograničenje odgovornosti",
          s7p:
            "Lensia Media nije odgovorna za promene algoritama platformi, pad prihoda ili rezultate koji nisu pod našom razumnom kontrolom.",

          s8: "8. Kontakt",
          contact:
            "Za pitanja u vezi sa Uslovima korišćenja kontaktirajte nas na:",
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
            <p className="mt-4 leading-8 text-slate-300">{t.s2p}</p>
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