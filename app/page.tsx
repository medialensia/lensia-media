
"use client";


import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "./context/LanguageContext";

export default function Home() {


const { language, setLanguage } = useLanguage();

const [scrolled, setScrolled] = useState(false);
const [activeSection, setActiveSection] = useState("home");
const [selectedService, setSelectedService] = useState<string | null>(null);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);

    const sections = ["home", "services", "pricing", "contact"];
    const scrollPosition = window.scrollY + 250;

    for (const id of sections) {
  const section = document.getElementById(id);

  if (
    section &&
    scrollPosition >= section.offsetTop &&
    scrollPosition < section.offsetTop + section.offsetHeight
  ) {
    setActiveSection(id);
    break;
  }
}
    }


  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

 
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  const target = section.offsetTop - 90; // 90px zbog navbara
  const start = window.scrollY;
  const distance = target - start;
  const duration = 700;

  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo({
      top: start + distance * easeInOutCubic(progress),
    });

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};


  return (
    <main className="min-h-screen bg-[#070B14]">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5">
        <nav
  className={`w-[92%] max-w-7xl rounded-2xl px-6 py-4 transition-all duration-300 ${
    scrolled
      ? "glass border border-white/10 bg-[#0B1020]/80 shadow-2xl"
      : "glass bg-white/5"
  }`}
><div
  className="pointer-events-none fixed inset-0 opacity-[0.03] z-0"
  style={{
    backgroundImage:
      "url('/noise.png')",
  }}
/>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  className="text-left cursor-pointer"
  
>
  <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold tracking-wider">
    LENSIA Media
  </h2>
  <p className="text-[10px] text-slate-400 -mt-1">
    {language === "en" ? "Growth Together" : "Rastemo Zajedno"}
  </p>
</button>

            {/* Menu */}
           <div className="hidden items-center gap-8 text-sm md:flex">


  <button
  onClick={() => scrollToSection("services")}
  className={`transition ${
    activeSection === "services"
      ? "text-purple-400"
      : "text-slate-300 hover:text-white"
  }`}
>
  {language === "en" ? "Services" : "Usluge"}
</button>

  <button
  onClick={() => scrollToSection("pricing")}
  className={`transition ${
    activeSection === "pricing"
      ? "text-purple-400"
      : "text-slate-300 hover:text-white"
  }`}
>
  {language === "en" ? "Pricing" : "Cene"}
</button>

<button
  onClick={() => scrollToSection("contact")}
  className={`transition ${
    activeSection === "contact"
      ? "text-purple-400"
      : "text-slate-300 hover:text-white"
  }`}
>
  {language === "en" ? "Contact" : "Kontakt"}
</button>


<button
  onClick={() => (window.location.href = "/buy")}
  className="text-slate-300 transition hover:text-white"
>
  Buy
</button>

</div>

            {/* Right side */}
            <div className="glass flex rounded-xl p-1 text-sm">
  <button
  onClick={() => setLanguage(language === "en" ? "sr" : "en")}
  className="glass relative flex h-10 w-20 items-center rounded-xl p-1 transition"
>
  <div
    className={`absolute h-8 w-9 rounded-lg bg-purple-600 transition-all duration-300 ${
      language === "en" ? "left-1" : "left-10"
    }`}
  />

  <span className="z-10 w-1/2 text-center text-xs font-semibold text-white">
    EN
  </span>

  <span className="z-10 w-1/2 text-center text-xs font-semibold text-white">
    SR
  </span>
</button>
</div>
          </div>
        </nav>
      </header>





      {/* Hero */}
<section className="relative flex min-h-screen items-center overflow-hidden px-6">

  {/* Premium Animated Background */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 blur-[140px]"
    />

    <motion.div
      animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.45, 0.25] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500 blur-[90px]"
    />

    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/15"
    />

    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/10"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070B14]" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-7xl">
    <div className="grid items-center gap-14 lg:grid-cols-2">

      {/* LEFT */}
      <div className="text-center lg:text-left">

        <AnimatePresence mode="wait">
          <motion.div
            key={language + "-badge"}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] text-slate-300">
              {language === "en" ? "YouTube Growth Agency" : "YouTube Growth Agencija"}
            </span>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={language + "-slogan"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-purple-400"
          >
            {language === "en" ? "Growth Together" : "Rastemo Zajedno"}
          </motion.p>
        </AnimatePresence>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-manrope)] text-5xl font-extrabold leading-none text-white md:text-8xl"
        >
          LENSIA
          <br />
          MEDIA
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={language + "-hero-desc"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl lg:mx-0 mx-auto"
          >
            {language === "en"
              ? "We help creators and brands grow through high-converting thumbnails, SEO, branding and channel strategy."
              : "Pomažemo kreatorima i brendovima da rastu kroz thumbnailove, SEO, brending i strategiju kanala."}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex justify-center lg:justify-start"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="purple-gradient rounded-2xl px-8 py-4 text-base font-semibold text-white transition hover:scale-105"
          >
            {language === "en" ? "Get Free Audit" : "Besplatna Analiza"}
          </button>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400 lg:justify-start">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-400" />
            Thumbnail Design
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-400" />
            YouTube SEO
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-400" />
            Branding
          </div>
        </div>

      </div>

      {/* RIGHT */}
      <div className="relative hidden lg:flex items-center justify-center">

        <div className="absolute h-[460px] w-[460px] rounded-full bg-purple-600/20 blur-[120px]" />

        <motion.img
          src="/thumbnails/dashboard.png"
          alt="Lensia Dashboard"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-[560px] drop-shadow-[0_0_70px_rgba(139,92,246,.35)]"
        />

      </div>

    </div>
  </div>

  {/* Scroll indicator */}
  <AnimatePresence>
    {!scrolled && (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: 20 }}
        animate={{ y: [0, 10, 0] }}
        transition={{
          y: { duration: 1.8, repeat: Infinity },
          opacity: { duration: 0.3 }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("services")}
          className="flex flex-col items-center gap-2 text-slate-400 transition hover:text-white"
        >
          <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>

          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect
              x="4"
              y="1"
              width="12"
              height="26"
              rx="6"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <motion.circle
              cx="10"
              cy="8"
              r="2"
              fill="currentColor"
              animate={{ cy: [8, 16, 8] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </svg>
        </button>
      </motion.div>
    )}
  </AnimatePresence>

</section>

<div className="relative flex h-20 items-center justify-center">
  <div className="h-px w-72 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
  <div className="absolute h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_#8B5CF6]" />
</div>


{/* Services */}
<motion.section
  id="services"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="mx-auto max-w-7xl px-6 py-28"
>
  <div className="text-center">
    <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
      {language === "en" ? "Services" : "Usluge"}
    </p>

    <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-4xl font-bold text-white md:text-5xl">
      {language === "en"
        ? "Everything You Need to Grow"
        : "Sve što ti je potrebno za rast"}
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-slate-400">
      {language === "en"
        ? "From thumbnails and SEO to branding and strategy — we help creators build stronger YouTube brands."
        : "Od thumbnailova i SEO-a do brendinga i strategije — pomažemo kreatorima da izgrade jači YouTube brend."}
    </p>
  </div>

  <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {[
      {
        title: language === "en" ? "Thumbnail Design" : "Dizajn Thumbnaila",
        desc:
          language === "en"
            ? "High-converting thumbnails designed for better CTR."
            : "Thumbnailovi napravljeni za veći CTR.",
        icon: "thumbnail",
      },
      {
        title: "YouTube SEO",
        desc:
          language === "en"
            ? "Titles, keywords and discoverability optimization."
            : "Optimizacija naslova, ključnih reči i pretrage.",
        icon: "seo",
      },
      {
        title: language === "en" ? "Channel Strategy" : "Strategija Kanala",
        desc:
          language === "en"
            ? "Long-term positioning and growth planning."
            : "Dugoročna strategija i plan razvoja kanala.",
        icon: "strategy",
      },
      {
        title: language === "en" ? "Brand Identity" : "Brend Identitet",
        desc:
          language === "en"
            ? "Professional visual identity for your channel."
            : "Profesionalni vizuelni identitet kanala.",
        icon: "branding",
      },
      {
        title: language === "en" ? "Analytics Review" : "Analiza Statistike",
        desc:
          language === "en"
            ? "Data-driven insights to improve performance."
            : "Detaljna analiza podataka i performansi.",
        icon: "analytics",
      },
      {
        title: language === "en" ? "Channel Audit" : "Analiza Kanala",
        desc:
          language === "en"
            ? "Complete review with actionable recommendations."
            : "Kompletna analiza sa konkretnim predlozima.",
        icon: "audit",
      },
    ].map((service, index) => (
 <motion.div
  key={service.title}
  onClick={() => setSelectedService(service.icon)}
  initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
      ease: "easeOut",
    }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="glass group cursor-pointer rounded-3xl border border-transparent p-7 hover:border-purple-500/40"
  >
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600/10 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-purple-600/20">

          {service.icon === "thumbnail" && (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="3" stroke="#A78BFA" strokeWidth="1.8"/>
              <path d="M7 14l3-3 2 2 3-4 2 5" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}

          {service.icon === "seo" && (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="6" stroke="#A78BFA" strokeWidth="1.8"/>
              <path d="M20 20l-4-4" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}

          {service.icon === "strategy" && (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M5 16l4-4 3 3 7-8" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}

          {service.icon === "branding" && (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="#A78BFA" strokeWidth="1.8"/>
              <circle cx="12" cy="12" r="2" fill="#A78BFA"/>
            </svg>
          )}

          {service.icon === "analytics" && (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M5 19V9M12 19V5M19 19v-7" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}

          {service.icon === "audit" && (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="4" width="14" height="16" rx="2" stroke="#A78BFA" strokeWidth="1.8"/>
              <path d="M8 9h8M8 13h5" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}

        </div>

        <h3 className="font-[family-name:var(--font-manrope)] text-xl font-semibold text-white">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          {service.desc}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>



{/* Pricing */}
<motion.section
  id="pricing"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="mx-auto max-w-7xl px-6 py-28"
>
  <div className="text-center">
    <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
      {language === "en" ? "Pricing" : "Cene"}
    </p>

    <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-4xl font-bold text-white md:text-5xl">
      {language === "en" ? "Choose Your Plan" : "Izaberi Svoj Paket"}
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-slate-400">
      {language === "en"
        ? "Transparent pricing for creators and brands."
        : "Transparentne cene za kreatore i brendove."}
    </p>
  </div>

  <div className="mt-16 grid gap-5 lg:grid-cols-5">
    {[
      {
        name: "Launch",
        price: "FREE",
        free: true,
        path: "/plans/launch",
      },
      {
        name: "Starter",
        price: "€69",
        path: "/plans/starter",
      },
      {
        name: "Growth",
        price: "€99",
        popular: true,
        path: "/plans/growth",
      },
      {
        name: "Media Pro",
        price: "€199",
        path: "/plans/media-pro",
      },
      {
        name: "Performance",
        price: "€95",
        extra: "+15%",
        path: "/plans/performance",
      },
    ].map((plan) => (
      <motion.div
        key={plan.name}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={`relative flex flex-col rounded-3xl p-6 ${
          plan.popular
            ? "border border-purple-500 bg-purple-500/10"
            : plan.free
            ? "border border-emerald-500/40 bg-emerald-500/10"
            : "glass border border-transparent"
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-[10px] font-bold uppercase text-white">
            {language === "en" ? "Most Popular" : "Najpopularniji"}
          </div>
        )}

        {plan.free && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold uppercase text-white">
            FREE
          </div>
        )}

        <h3 className="text-xl font-bold text-white">{plan.name}</h3>

        <div className="mt-5 flex items-end gap-1">
          <span className="text-4xl font-extrabold text-white">
            {plan.price}
          </span>
        </div>

       {plan.free && (
  <p className="mt-3 mb-5 text-xs font-medium leading-5 text-emerald-300">
    {language === "en"
      ? "For non-monetized channels only"
      : "Samo za kanale bez monetizacije"}
  </p>
)}

        {plan.extra && (
          <p className="mt-1 text-sm font-medium text-purple-300">
            {language === "en"
              ? `${plan.extra} YouTube Revenue`
              : `${plan.extra} od YouTube zarade`}
          </p>
        )}

        <button
          onClick={() => {
            window.location.href = plan.path;
          }}
          className={`mt-auto w-full rounded-2xl py-3 text-sm font-semibold transition ${
            plan.popular
              ? "purple-gradient text-white hover:scale-105"
              : plan.free
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "glass text-white hover:bg-white/10"
          }`}
        >
          {language === "en" ? "View Plan" : "Pogledaj Paket"}
        </button>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* Contact */}

<motion.section
  id="contact"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="mx-auto max-w-5xl px-6 py-28"
  
>
  <div className="glass relative overflow-hidden rounded-[32px] p-10 md:p-14">

    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
    <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-fuchsia-600/10 blur-3xl" />

    <div className="relative text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
        {language === "en" ? "Contact" : "Kontakt"}
      </p>

      <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-4xl font-bold text-white md:text-5xl">
        {language === "en"
          ? "Let's Grow Together"
          : "Hajde da Rastemo Zajedno"}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-slate-400">
        {language === "en"
          ? "Tell us about your channel and we'll get back to you within 24 hours."
          : "Pošalji nam email i odgovorićemo u roku od 24 sata."}
      </p>

      <a
  href="mailto:lensiamedia@gmail.com"
  className="purple-gradient mx-auto mt-10 flex w-full max-w-md items-center justify-center gap-3 rounded-2xl px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6l8 6 8-6M5 6h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        lensiamedia@gmail.com
      </a>

      <p className="mt-5 text-sm text-slate-500">
        {language === "en"
          ? "Average response time: under 24 hours"
          : "Prosečno vreme odgovora: manje od 24h"}
      </p>
    </div>
  </div>
</motion.section>



{/* About */}
<motion.section
  id="about"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="mx-auto max-w-7xl px-6 py-28"
>
  <div className="grid items-center gap-14 lg:grid-cols-2">
    {/* Left */}
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
        {language === "en" ? "About Us" : "O Nama"}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        {language === "en"
          ? "Two creators building modern media brands."
          : "Dva kreatora koja grade moderne media brendove."}
      </h2>

      <p className="mt-6 leading-8 text-slate-400">
        {language === "en"
          ? "Lensia Media is a creative agency focused on YouTube growth, branding and content optimization. We combine design, analytics and strategy to help creators and businesses grow sustainably."
          : "Lensia Media je kreativna agencija fokusirana na YouTube rast, brending i optimizaciju sadržaja. Spajamo dizajn, analitiku i strategiju kako bismo pomogli kreatorima i kompanijama da dugoročno rastu."}
      </p>
    </div>

    {/* Right */}
    <div className="grid grid-cols-2 gap-4">
      {/* Founder */}
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="overflow-hidden">
          <img
            src="/team/founder1.png"
            alt="Founder 1"
            className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-white">
            {language === "en" ? "Miloš Vranješ" : "Miloš Vranješ"}
          </h3>
          <p className="text-sm text-slate-400">
            {language === "en"
              ? "Creative Director"
              : "Kreativni Direktor"}
          </p>
        </div>
      </div>

      {/* Co-Founder */}
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="overflow-hidden">
          <img
            src="/team/founder2.png"
            alt="Founder 2"
            className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-white">
            {language === "en" ? " Lazar Sekulić" : "Lazar Sekulić"}
          </h3>
          <p className="text-sm text-slate-400">
            {language === "en"
              ? "Growth Strategist"
              : "Strateg Rasta"}
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.section>





    {/* Service Popup */}
<AnimatePresence>
  {selectedService === "thumbnail" && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedService(null)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0B1020] p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">
            {language === "en"
              ? "Thumbnail Examples"
              : "Primeri Thumbnailova"}
          </h2>

          <button
            onClick={() => setSelectedService(null)}
            className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {["thumb1", "thumb2", "thumb3", "thumb4"].map((img) => (
            <div
              key={img}
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src={`/thumbnails/${img}.png`}
                alt={
                  language === "en"
                    ? "Thumbnail example"
                    : "Primer thumbnaila"
                }
                className="aspect-video w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

    
      </motion.div>
    </motion.div>
  )}


  {selectedService === "strategy" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0B1020] p-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          {language === "en"
            ? "Channel Strategy"
            : "Strategija Kanala"}
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
        >
          ✕
        </button>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-widest text-purple-300">
            {language === "en" ? "STEP 1" : "KORAK 1"}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {language === "en"
              ? "Niche Positioning"
              : "Pozicioniranje Niše"}
          </h3>

          <p className="mt-2 text-slate-400">
            {language === "en"
              ? "Define the audience, content angle and competitive position."
              : "Definišemo ciljnu publiku, pravac sadržaja i konkurentsku poziciju."}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-widest text-purple-300">
            {language === "en" ? "STEP 2" : "KORAK 2"}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {language === "en"
              ? "Content Pillars"
              : "Stubovi Sadržaja"}
          </h3>

          <p className="mt-2 text-slate-400">
            {language === "en"
              ? "Create 3–5 repeatable video formats that build a recognizable brand."
              : "Kreiramo 3–5 formata videa koji grade prepoznatljiv brend."}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-widest text-purple-300">
            {language === "en" ? "STEP 3" : "KORAK 3"}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {language === "en"
              ? "Weekly Upload System"
              : "Nedeljni Sistem Objava"}
          </h3>

          <p className="mt-2 text-slate-400">
            {language === "en"
              ? "Plan uploads, thumbnails and SEO into one consistent workflow."
              : "Povezujemo objave, thumbnailove i SEO u jedan dosledan sistem."}
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}



{selectedService === "branding" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0B1020] p-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          {language === "en" ? "Brand Identity" : "Vizuelni Identitet"}
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
        >
          ✕
        </button>
      </div>

      <p className="mb-8 text-slate-400">
        {language === "en"
          ? "A consistent visual identity helps creators become instantly recognizable across YouTube and social media."
          : "Dosledan vizuelni identitet čini kreatore odmah prepoznatljivim na YouTube-u i društvenim mrežama."}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-white/10">
          <img
            src="/branding/logo.jpg"
            alt={language === "en" ? "Logo example" : "Primer logotipa"}
            className="aspect-video w-full object-cover"
          />
          <div className="p-3 text-sm text-slate-300">
            {language === "en" ? "Logo Design" : "Dizajn Logotipa"}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10">
          <img
            src="/branding/banner.jpg"
            alt={language === "en" ? "Banner example" : "Primer banera"}
            className="aspect-video w-full object-cover"
          />
          <div className="p-3 text-sm text-slate-300">
            {language === "en" ? "YouTube Banner" : "YouTube Baner"}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10">
          <img
            src="/branding/palette.jpg"
            alt={language === "en" ? "Color palette" : "Paleta boja"}
            className="aspect-video w-full object-cover"
          />
          <div className="p-3 text-sm text-slate-300">
            {language === "en" ? "Color Palette" : "Paleta Boja"}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10">
          <img
            src="/branding/style.jpg"
            alt={language === "en" ? "Brand style guide" : "Vodič vizuelnog stila"}
            className="aspect-video w-full object-cover"
          />
          <div className="p-3 text-sm text-slate-300">
            {language === "en"
              ? "Visual Style Guide"
              : "Vodič Vizuelnog Stila"}
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}





{selectedService === "analytics" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0B1020] p-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          {language === "en" ? "Statistics Analysis" : "Analiza statistike"}
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
        >
          ✕
        </button>
      </div>

      <p className="mb-8 text-slate-400">
        {language === "en"
          ? "We analyze the metrics that actually drive channel growth and identify where the biggest improvements can be made."
          : "Analiziramo metrike koje zaista pokreću rast kanala i pronalazimo najveće prilike za napredak."}
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">CTR</p>
          <p className="mt-2 text-4xl font-bold text-white">8.7%</p>
          <p className="mt-2 text-sm text-green-400">
            {language === "en" ? "+2.3% improvement" : "+2.3% poboljšanje"}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">
            {language === "en" ? "Avg. View Duration" : "Prosečno Gledanje"}
          </p>
          <p className="mt-2 text-4xl font-bold text-white">6:42</p>
          <p className="mt-2 text-sm text-green-400">+31% retention</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">
            {language === "en" ? "Monthly Views" : "Mesečni Pregledi"}
          </p>
          <p className="mt-2 text-4xl font-bold text-white">1.2M</p>
          <p className="mt-2 text-sm text-green-400">
            {language === "en" ? "Growth example" : "Primer rasta"}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-white">
            {language === "en"
              ? "Click Through Rate Trend"
              : "Trend CTR-a"}
          </h3>
          <span className="text-sm text-slate-400">
            {language === "en" ? "Last 90 days" : "Poslednjih 90 dana"}
          </span>
        </div>

        <div className="flex h-40 items-end justify-between gap-2">
          {[25, 40, 32, 55, 48, 72, 86, 80, 95, 88].map((h, i) => (
            <div
              key={i}
              className="w-full rounded-t-lg bg-gradient-to-t from-purple-600 to-purple-400"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="mt-3 flex justify-between text-xs text-slate-500">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h4 className="font-semibold text-white">
            {language === "en" ? "What We Analyze" : "Šta Analiziramo"}
          </h4>

          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              •{" "}
              {language === "en"
                ? "Click Through Rate (CTR)"
                : "Stopa Klikova (CTR)"}
            </li>
            <li>
              •{" "}
              {language === "en"
                ? "Audience Retention"
                : "Zadržavanje Publike"}
            </li>
            <li>
              •{" "}
              {language === "en" ? "Traffic Sources" : "Izvori Saobraćaja"}
            </li>
            <li>
              •{" "}
              {language === "en"
                ? "Returning Viewers"
                : "Povratni Gledaoci"}
            </li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <h4 className="font-semibold text-white">
            {language === "en" ? "What You Receive" : "Šta Dobijaš"}
          </h4>

          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              •{" "}
              {language === "en"
                ? "Detailed Channel Analysis"
                : "Detaljna analiza kanala"}
            </li>
            <li>
              •{" "}
              {language === "en"
                ? "Growth Recommendations"
                : "Preporuke za Rast"}
            </li>
            <li>
              •{" "}
              {language === "en"
                ? "Thumbnail Feedback"
                : "Analiza Thumbnailova"}
            </li>
            <li>
              •{" "}
              {language === "en"
                ? "SEO Improvements"
                : "SEO Poboljšanja"}
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  </motion.div>
)}



{selectedService === "audit" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0B1020] p-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          {language === "en" ? "Channel Audit" : "Analiza Kanala"}
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
        >
          ✕
        </button>
      </div>

      <p className="mb-8 text-slate-400">
        {language === "en"
          ? "A complete review of your YouTube channel across branding, SEO, thumbnails and content structure."
          : "Kompletna analiza YouTube kanala kroz brending, SEO, thumbnailove i strukturu sadržaja."}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {(
          language === "en"
            ? [
                "Channel Branding",
                "Logo & Banner",
                "Thumbnail Quality",
                "Title Optimization",
                "Video Descriptions",
                "Keyword Strategy",
                "CTR Analysis",
                "Audience Retention",
                "Content Structure",
                "Upload Consistency",
              ]
            : [
                "Brending Kanala",
                "Logo i Baner",
                "Kvalitet Thumbnailova",
                "Optimizacija Naslova",
                "Opisi Videa",
                "Strategija Ključnih Reči",
                "CTR Analiza",
                "Zadržavanje Publike",
                "Struktura Sadržaja",
                "Doslednost Objava",
              ]
        ).map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-sm font-bold">
              ✓
            </div>
            <span className="text-white">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6">
        <h3 className="text-xl font-semibold text-white">
          {language === "en" ? "What You Receive" : "Šta Dobijaš"}
        </h3>

        <ul className="mt-4 space-y-2 text-slate-300">
          {language === "en" ? (
            <>
              <li>• 20+ point channel evaluation</li>
              <li>• Personalized improvement roadmap</li>
              <li>• Thumbnail & SEO feedback</li>
              <li>• Actionable growth recommendations</li>
            </>
          ) : (
            <>
              <li>• Analiza kanala kroz 20+ tačaka</li>
              <li>• Personalizovan plan unapređenja</li>
              <li>• Analiza Thumbnailova i SEO-a</li>
              <li>• Konkretne preporuke za rast</li>
            </>
          )}
        </ul>
      </div>
    </motion.div>
  </motion.div>
)}



{selectedService === "seo" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0B1020] p-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          {language === "en"
            ? "YouTube SEO"
            : "YouTube SEO Optimizacija"}
        </h2>

        <button
          onClick={() => setSelectedService(null)}
          className="rounded-xl p-2 text-slate-400 hover:bg-white/10 hover:text-white"
        >
          ✕
        </button>
      </div>

      <p className="mb-8 text-slate-400">
        {language === "en"
          ? "Every upload is optimized for discoverability using titles, descriptions, keywords and metadata that improve search visibility."
          : "Svaka objava optimizuje se kroz naslove, opise, ključne reči i metapodatke kako bi povećala vidljivost u pretrazi."}
      </p>

      <div className="mb-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-green-300">
              {language === "en" ? "SEO Score" : "SEO Ocena"}
            </p>
            <h3 className="mt-1 text-5xl font-bold text-white">96/100</h3>
          </div>

          <div className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white">
            {language === "en" ? "Excellent" : "Odlično"}
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-5">
        <p className="mb-2 text-xs uppercase tracking-widest text-purple-300">
          {language === "en"
            ? "Optimized Title"
            : "Optimizovan Naslov"}
        </p>

        <h3 className="text-xl font-semibold text-white">
          {language === "en"
            ? "How I Gained 1,000,000 Views With Better Thumbnails"
            : "Kako sam došao do 1.000.000 pregleda uz bolje thumbnailove"}
        </h3>
      </div>

      <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-5">
        <p className="mb-2 text-xs uppercase tracking-widest text-purple-300">
          {language === "en"
            ? "Optimized Description"
            : "Optimizovan Opis"}
        </p>

        <p className="text-slate-300">
          {language === "en"
            ? "Learn the thumbnail strategy, CTR optimization and YouTube SEO techniques used to increase visibility and audience retention on modern YouTube channels..."
            : "Saznajte strategiju thumbnailova, optimizaciju CTR-a i YouTube SEO tehnike koje povećavaju vidljivost i zadržavanje publike na modernim YouTube kanalima..."}
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-5">
        <p className="mb-3 text-xs uppercase tracking-widest text-purple-300">
          {language === "en"
            ? "Primary Keywords"
            : "Glavne Ključne Reči"}
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "youtube seo",
            "thumbnail design",
            "high ctr",
            "youtube growth",
            "viral thumbnails",
            "content strategy",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {(
          language === "en"
            ? [
                "Keyword Research",
                "SEO Title",
                "Description Optimization",
                "Hashtag Structure",
                "Metadata Review",
                "Search Intent Match",
              ]
            : [
                "Istraživanje Ključnih Reči",
                "SEO Naslov",
                "Optimizacija Opisa",
                "Struktura Hashtagova",
                "Pregled Metapodataka",
                "Usklađenost sa Pretragom",
              ]
        ).map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-sm font-bold">
              ✓
            </div>
            <span className="text-white">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
)}

</AnimatePresence>

{/* Footer */}
<footer className="border-t border-white/10 py-8">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
    <div>
      <p className="font-semibold text-white">LENSIA MEDIA</p>
      <p className="mt-1">
        {language === "en" ? "Growth Together" : "Rastemo Zajedno"}
      </p>
    </div>

    <div className="flex gap-6">
      <a href="/privacy" className="hover:text-white transition">
        Privacy Policy
      </a>

      <a href="/terms" className="hover:text-white transition">
        Terms of Service
      </a>
    </div>
  </div>
</footer>


    </main>
  );
}