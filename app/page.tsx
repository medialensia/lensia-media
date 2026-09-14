
"use client";


import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "./context/LanguageContext";

export default function Home() {

  
const { language, setLanguage } = useLanguage();

const [scrolled, setScrolled] = useState(false);
const [activeSection, setActiveSection] = useState("home");
const [selectedService, setSelectedService] = useState<string | null>(null);
const [mobileMenu, setMobileMenu] = useState(false);

const [experienceIndex, setExperienceIndex] = useState(0);

const experiences = [
  {
    company: "Euronews Serbia",
    roleEn: "Digital Media & YouTube",
    roleSr: "Digitalni Mediji i YouTube",
    descEn: "Real industry experience managing YouTube content, improving click-through rate and producing high-performing visual media.",
    descSr: "Praktično iskustvo u vođenju YouTube sadržaja, optimizaciji CTR-a i kreiranju vizuelnog sadržaja visokih performansi.",
    logo: "/logos/company-logo.png",
    featuresEn: [
      "CTR Optimization",
      "Thumbnail Design",
      "YouTube SEO",
      "Video Editing",
      "Channel Strategy",
      "Analytics",
    ],
    featuresSr: [
      "Optimizacija CTR-a",
      "Thumbnail Dizajn",
      "YouTube SEO",
      "Video Montaža",
      "Strategija Kanala",
      "Analitika",
    ],
  },
  {
    company: "Multiple Small Businesses",
    roleEn: "Marketing & Growth",
    roleSr: "Marketing Malih Biznisa",
    descEn: "Planned and executed marketing strategies for multiple small businesses, helping increase visibility, customer acquisition and online presence.",
    descSr: "Planiranje i realizacija marketinških strategija za više malih biznisa, sa fokusom na povećanje vidljivosti, novih klijenata i online prisustva.",
    logo: null,
    featuresEn: [
      "Social Media Strategy",
      "Brand Marketing",
      "Content Creation",
      "Customer Acquisition",
      "Meta Ads",
      "Local Business Growth",
    ],
    featuresSr: [
      "Strategija Društvenih Mreža",
      "Brend Marketing",
      "Kreiranje Sadržaja",
      "Privlačenje Klijenata",
      "Meta Oglasi",
      "Rast Malih Biznisa",
    ],
  },
  {
    company: "Independent Design Projects",
    roleEn: "Brand Identity & Rebranding",
    roleSr: "Rebrending i Vizuelni Dizajn",
    descEn: "Created complete visual identities for small businesses including logos, menus, branding materials and redesign of existing brands.",
    descSr: "Izrada kompletnog vizuelnog identiteta za male biznise uključujući logotipe, menije, promotivne materijale i redizajn postojećih brendova.",
    logo: null,
    featuresEn: [
      "Logo Design",
      "Menu Design",
      "Brand Identity",
      "Visual Design",
      "Print Materials",
      "Business Rebranding",
    ],
    featuresSr: [
      "Dizajn Logotipa",
      "Dizajn Menija",
      "Vizuelni Identitet",
      "Grafički Dizajn",
      "Štampani Materijali",
      "Rebrending Biznisa",
    ],
  },
];

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);

    const sections = ["home", "services", "pricing", "contact","about"];
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

useEffect(() => {
  if (selectedService) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedService]);

 
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
   <main
  className={`bg-[#070B14] ${
    selectedService ? "h-screen overflow-hidden" : "min-h-screen"
  }`}
>
    
 {/* Navbar */}
<header className="fixed top-0 left-0 z-50 flex w-full justify-center pt-3 md:pt-5">
  <nav
    className={`w-[94%] max-w-7xl rounded-2xl px-4 py-3 transition-all duration-300 md:px-6 md:py-4 ${
      scrolled
        ? "glass border border-white/10 bg-[#0B1020]/80 shadow-2xl"
        : "glass bg-white/5"
    }`}
  >
    <div className="flex items-center justify-between">
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-left"
      >
        <h2 className="text-lg font-bold tracking-wide md:text-xl">
          LENSIA Media
        </h2>
        <p className="text-[9px] text-slate-400 md:text-[10px]">
          {language === "en" ? "Growth Together" : "Rastemo Zajedno"}
        </p>
      </button>

      {/* Desktop Menu */}
<div className="hidden items-center gap-8 text-sm md:flex">
  <button onClick={() => scrollToSection("services")}>
    {language === "en" ? "Services" : "Usluge"}
  </button>

  <button onClick={() => scrollToSection("pricing")}>
    {language === "en" ? "Pricing" : "Cene"}
  </button>

  <button
  onClick={() => scrollToSection("about")}
  className={`transition ${
    activeSection === "about"
      ? "text-purple-400"
      : "text-slate-300 hover:text-white"
  }`}
>
  {language === "en" ? "About" : "O Nama"}
</button>

  <button onClick={() => scrollToSection("contact")}>
    {language === "en" ? "Contact" : "Kontakt"}
  </button>

  <button
  type="button"
  onClick={() => window.location.assign("/buy")}
  className="cursor-pointer font-medium text-white transition hover:text-purple-400"
>
  {language === "en" ? "Buy" : "Kupi"}
</button>

</div>

{/* Right */}
<div className="flex items-center gap-3">
  {/* Language */}
  <button
    onClick={() => setLanguage(language === "en" ? "sr" : "en")}
    className="glass relative flex h-10 w-20 items-center rounded-xl p-1 transition"
  >
    <div
      className={`absolute top-1 h-8 w-9 rounded-lg bg-purple-600 transition-all duration-300 ${
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

  {/* Hamburger */}
  <button
    onClick={() => setMobileMenu(!mobileMenu)}
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
  >
    {mobileMenu ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 7H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 12H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 17H20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )}
  </button>
</div>
</div>

{/* Mobile Menu */}
<AnimatePresence>
  {mobileMenu && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3 text-sm md:hidden"
    >
      <button
        onClick={() => {
          scrollToSection("services");
          setMobileMenu(false);
        }}
      >
        {language === "en" ? "Services" : "Usluge"}
      </button>

      <button
        onClick={() => {
          scrollToSection("pricing");
          setMobileMenu(false);
        }}
      >
        {language === "en" ? "Pricing" : "Cene"}
      </button>

      <button
        onClick={() => {
          scrollToSection("contact");
          setMobileMenu(false);
        }}
      >
        {language === "en" ? "Contact" : "Kontakt"}
      </button>

      <button
        onClick={() => {
          window.location.href = "/buy";
          setMobileMenu(false);
        }}
      >
        {language === "en" ? "Buy" : "Kupi"}
      </button>
    </motion.div>
  )}
</AnimatePresence>

</nav>
</header>


      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 pb-16 sm:px-6 lg:px-6 lg:pt-0 lg:pb-0">

  {/* Premium Animated Background */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

    <motion.div
      animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-1/2 h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600 blur-[140px]"
    />

    <motion.div
      animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.45, 0.25] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-1/2 top-1/2 h-56 w-56 sm:h-72 sm:w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500 blur-[90px]"
    />

    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute left-1/2 top-1/2 h-[520px] w-[520px] sm:h-[720px] sm:w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/15"
    />

    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      className="absolute left-1/2 top-1/2 h-[380px] w-[380px] sm:h-[520px] sm:w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-400/10"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070B14]" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-7xl">
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">

      {/* LEFT */}
      <div className="text-center lg:text-left">

        <AnimatePresence mode="wait">
          <motion.div
            key={language + "-badge"}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-slate-300">
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
            className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-purple-400 sm:text-sm"
          >
            {language === "en" ? "Growth Together" : "Rastemo Zajedno"}
          </motion.p>
        </AnimatePresence>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-[family-name:var(--font-manrope)] text-[56px] font-extrabold leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl md:text-8xl"
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
            className="mx-auto mt-6 max-w-md text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-xl lg:text-xl"
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
          className="mt-8 flex justify-center lg:mt-10 lg:justify-start"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="purple-gradient w-full rounded-2xl px-8 py-4 text-base font-semibold text-white transition hover:scale-105 sm:w-auto"
          >
            {language === "en" ? "Get Free Audit" : "Besplatna Analiza"}
          </button>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-400 sm:gap-6 sm:text-sm lg:justify-start">
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
      <div className="relative flex items-center justify-center lg:justify-end">

        <div className="absolute h-[460px] w-[460px] rounded-full bg-purple-600/20 blur-[120px]" />

        <motion.img
          src="/thumbnails/dashboard.png"
          alt="Lensia Dashboard"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 mt-2 w-[320px] sm:w-[380px] lg:mt-0 lg:w-[560px] drop-shadow-[0_0_70px_rgba(139,92,246,.35)]"
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
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block lg:bottom-10"
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

    <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight text-white md:text-5xl">
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

  <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
  className="mx-auto max-w-7xl px-5 py-20 md:px-6 md:py-28"
>
  <div className="text-center">
    <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
      {language === "en" ? "Pricing" : "Cene"}
    </p>

    <h2 className="mt-4 font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight text-white md:text-5xl">
      {language === "en" ? "Choose Your Plan" : "Izaberi Svoj Paket"}
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-slate-400">
      {language === "en"
        ? "Transparent pricing for creators and brands."
        : "Transparentne cene za kreatore i brendove."}
    </p>
  </div>

  <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
        className={`relative flex flex-col rounded-3xl p-5 md:p-6 ${
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



{/* About */}
<motion.section
  id="about"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
  className="mx-auto max-w-7xl px-6 py-28"
>
  <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
    {language === "en" ? "About Us" : "O Nama"}
  </p>

  <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
    {language === "en"
      ? "Young team of creators building modern media brands."
      : "Mladi tim kreatora koji gradi moderne medijske brendove."}
  </h2>

  <p className="mt-6 max-w-4xl leading-8 text-slate-400">
    {language === "en"
      ? "Lensia Media is a creative agency focused on YouTube growth, branding and content optimization. We combine design, analytics and strategy to help creators and businesses grow sustainably."
      : "Lensia Media je kreativna agencija fokusirana na YouTube rast, brending i optimizaciju sadržaja. Spajamo dizajn, analitiku i strategiju kako bismo pomogli kreatorima i kompanijama da dugoročno rastu."}
  </p>

  <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] items-start">

    {/* LEFT - Professional Experience */}
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-[#7C3AED] via-[#5B21B6] to-[#312E81] p-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-200">
            {language === "en"
              ? "Professional Experience"
              : "Profesionalno Iskustvo"}
          </p>

          <div className="flex gap-2">
            <button
              onClick={() =>
                setExperienceIndex(
                  experienceIndex === 0
                    ? experiences.length - 1
                    : experienceIndex - 1
                )
              }
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
            >
              ←
            </button>

            <button
              onClick={() =>
                setExperienceIndex(
                  experienceIndex === experiences.length - 1
                    ? 0
                    : experienceIndex + 1
                )
              }
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
            >
              →
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={experienceIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="mt-4 flex items-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              {experiences[experienceIndex].logo ? (
                <img
                  src={experiences[experienceIndex].logo}
                  alt="Company Logo"
                  className="max-h-10 max-w-10 object-contain"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21h18M5 21V7l7-4 7 4v14M9 9h6M9 13h6M9 17h6"
                  />
                </svg>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                {experiences[experienceIndex].company}
              </h3>
              <p className="text-sm text-purple-100">
                {language === "en"
                  ? experiences[experienceIndex].roleEn
                  : experiences[experienceIndex].roleSr}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={experienceIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mb-5 text-sm leading-7 text-slate-300"
          >
            {language === "en"
              ? experiences[experienceIndex].descEn
              : experiences[experienceIndex].descSr}
          </motion.p>
        </AnimatePresence>

        <div className="mb-5 flex justify-center gap-2">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setExperienceIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === experienceIndex
                  ? "w-8 bg-purple-500"
                  : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {(language === "en"
            ? experiences[experienceIndex].featuresEn
            : experiences[experienceIndex].featuresSr
          ).map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">
                ✓
              </div>
              <span className="text-xs font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

{/* RIGHT - Founders */}
<div className="grid h-full grid-cols-3 gap-4">
  {[
    {
      name: "Miloš Vranješ",
      image: "/team/founder1.png",
      roleEn: "Founder & CEO",
      roleSr: "Osnivač i CEO",
    },
    {
      name: "Lazar Sekulić",
      image: "/team/founder2.png",
      roleEn: "Balkan Client Manager",
      roleSr: "Menadžer za Balkanske Klijente",
    },
    {
      name: "Vlatko Danilovski",
      image: "/team/founder3.png",
      roleEn: "International Growth Strategist",
      roleSr: "Strateg za Internacionalni Rast",
    },
  ].map((founder, index) => {
    const active = experienceIndex === index;

    return (
      <motion.div
        key={founder.name}
        layout
        onClick={() => setExperienceIndex(index)}
        animate={{
          scale: active ? 1.06 : 0.97,
          y: active ? -6 : 2,
          opacity: active ? 1 : 0.82,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border ${
          active
            ? "border-purple-500 bg-white/10 shadow-[0_0_24px_rgba(124,58,237,0.30)]"
            : "border-white/10 bg-white/5"
        }`}
      >
        <div className="flex-1 overflow-hidden">
          <img
            src={founder.image}
            alt={founder.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <h3 className="text-sm font-semibold text-white">
            {founder.name}
          </h3>

          <p
            className={`mt-1 text-xs transition-colors duration-300 ${
              active ? "text-purple-300" : "text-slate-400"
            }`}
          >
            {language === "en" ? founder.roleEn : founder.roleSr}
          </p>
        </div>
      </motion.div>
    );
  })}
</div>
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
          ? "Let's Grow Your Channel"
          : "Hajde da Razvijemo Tvoj Kanal"}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
        {language === "en"
          ? "Tell us about your channel, goals and current challenges. We'll personally review everything and reply with a free growth strategy."
          : "Pošalji nam informacije o svom kanalu, ciljevima i izazovima. Lično ćemo pregledati kanal i odgovoriti besplatnom strategijom rasta."}
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

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl font-bold text-white">&lt;12h</p>
          <p className="mt-1 text-xs text-slate-400">
            {language === "en" ? "Average response" : "Prosečan odgovor"}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl font-bold text-white">FREE</p>
          <p className="mt-1 text-xs text-slate-400">
            {language === "en" ? "Channel audit" : "Analiza kanala"}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-2xl font-bold text-white">🌍</p>
          <p className="mt-1 text-xs text-slate-400">
            {language === "en" ? "Worldwide" : "Globalno"}
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm text-slate-500">
        {language === "en"
          ? "No contracts • Free consultation • Worldwide creators"
          : "Bez ugovorne obaveze • Besplatna konsultacija • Kreatori širom sveta"}
      </p>
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
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 md:p-6"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-white/10 bg-[#0B1020]"
    >
      {/* HERO */}
      <div className="relative overflow-hidden rounded-t-[32px] bg-gradient-to-br from-[#7C3AED] via-[#5B21B6] to-[#312E81] p-8">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-purple-200">
            {language === "en" ? "Thumbnail Design" : "Thumbnail Dizajn"}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            {language === "en"
              ? "Thumbnails That Drive Clicks"
              : "Thumbnailovi Koji Donose Klikove"}
          </h2>

          <p className="mt-4 max-w-2xl text-purple-100 leading-7">
            {language === "en"
              ? "We design high-converting YouTube thumbnails focused on curiosity, clarity and strong visual hierarchy."
              : "Dizajniramo YouTube thumbnailove sa fokusom na CTR, jasnu poruku i profesionalan vizuelni identitet."}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8 space-y-8">
        {/* Gallery */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "Recent Work" : "Naši Radovi"}
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {["thumb1", "thumb2", "thumb3", "thumb4"].map((img) => (
              <div
                key={img}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <img
                  src={`/thumbnails/${img}.png`}
                  alt="Thumbnail"
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "What You Get" : "Šta Dobijaš"}
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              {
                title: language === "en" ? "High CTR Design" : "Dizajn za CTR",
                desc:
                  language === "en"
                    ? "Every thumbnail is built to maximize click-through rate."
                    : "Svaki thumbnail je pravljen sa ciljem većeg CTR-a.",
              },
              {
                title:
                  language === "en"
                    ? "Professional Editing"
                    : "Profesionalna Obrada",
                desc:
                  language === "en"
                    ? "Clean composition, lighting and visual hierarchy."
                    : "Čista kompozicija, osvetljenje i jasna hijerarhija.",
              },
              {
                title:
                  language === "en"
                    ? "Brand Consistency"
                    : "Dosledan Brending",
                desc:
                  language === "en"
                    ? "A recognizable style across every upload."
                    : "Prepoznatljiv izgled kroz ceo kanal.",
              },
              {
                title:
                  language === "en" ? "Fast Delivery" : "Brza Isporuka",
                desc:
                  language === "en"
                    ? "Ready-to-upload thumbnails delivered in high quality."
                    : "Thumbnail spreman za objavu u visokoj rezoluciji.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "Our Process" : "Naš Proces"}
          </h3>

          <div className="mt-6 space-y-5">
            {[
              {
                n: "01",
                t: language === "en" ? "Research" : "Analiza",
                d:
                  language === "en"
                    ? "Study competitors, audience and click patterns."
                    : "Analiziramo konkurenciju, publiku i obrasce klikova.",
              },
              {
                n: "02",
                t: language === "en" ? "Design" : "Dizajn",
                d:
                  language === "en"
                    ? "Create multiple concepts with strong visual hierarchy."
                    : "Kreiramo koncept sa jasnom vizuelnom hijerarhijom.",
              },
              {
                n: "03",
                t: language === "en" ? "Refinement" : "Finalizacija",
                d:
                  language === "en"
                    ? "Polish every detail for maximum CTR potential."
                    : "Finalna obrada svakog detalja radi maksimalnog CTR potencijala.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  {step.n}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{step.t}</h4>
                  <p className="mt-1 text-sm text-slate-400">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Close */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-6 top-6 rounded-xl bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        ✕
      </button>
    </motion.div>
  </motion.div>
)}


{selectedService === "strategy" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 md:p-6"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-white/10 bg-[#0B1020]"
    >
      {/* HERO */}
      <div className="relative overflow-hidden rounded-t-[32px] bg-gradient-to-br from-[#7C3AED] via-[#5B21B6] to-[#312E81] p-8">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-purple-200">
            {language === "en" ? "Growth Strategy" : "Strategija Rasta"}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            {language === "en"
              ? "Build a Channel That Scales"
              : "Izgradi Kanal Koji Raste"}
          </h2>

          <p className="mt-4 max-w-2xl text-purple-100 leading-7">
            {language === "en"
              ? "We create a repeatable content strategy based on audience behavior, niche positioning and long-term YouTube growth."
              : "Pravimo sistem sadržaja zasnovan na publici, pozicioniranju niše i dugoročnom rastu na YouTube-u."}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "What's Included" : "Šta Dobijaš"}
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              {
                title:
                  language === "en"
                    ? "Niche Positioning"
                    : "Pozicioniranje Niše",
                desc:
                  language === "en"
                    ? "Define your audience and competitive advantage."
                    : "Definišemo ciljnu publiku i prednost u odnosu na konkurenciju.",
              },
              {
                title:
                  language === "en"
                    ? "Content Pillars"
                    : "Stubovi Sadržaja",
                desc:
                  language === "en"
                    ? "3–5 repeatable formats that build consistency."
                    : "3–5 formata videa koji stvaraju dosledan sadržaj.",
              },
              {
                title:
                  language === "en"
                    ? "Upload Schedule"
                    : "Plan Objavljivanja",
                desc:
                  language === "en"
                    ? "A realistic weekly publishing workflow."
                    : "Realan nedeljni sistem objavljivanja.",
              },
              {
                title:
                  language === "en"
                    ? "Growth Roadmap"
                    : "Plan Rasta",
                desc:
                  language === "en"
                    ? "Clear priorities for the next 30–90 days."
                    : "Jasni prioriteti za narednih 30–90 dana.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PROCESS */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "Our Process" : "Naš Proces"}
          </h3>

          <div className="mt-6 space-y-5">
            {[
              {
                n: "01",
                t: language === "en" ? "Research" : "Istraživanje",
                d:
                  language === "en"
                    ? "Analyze your channel, niche and competitors."
                    : "Analiziramo kanal, nišu i konkurenciju.",
              },
              {
                n: "02",
                t: language === "en" ? "Strategy" : "Strategija",
                d:
                  language === "en"
                    ? "Design repeatable content formats and positioning."
                    : "Kreiramo formate sadržaja i pozicioniranje kanala.",
              },
              {
                n: "03",
                t: language === "en"
                    ? "Execution Plan"
                    : "Plan Izvršenja",
                d:
                  language === "en"
                    ? "You receive a structured publishing roadmap."
                    : "Dobijaš kompletan plan objavljivanja i rasta.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  {step.n}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{step.t}</h4>
                  <p className="mt-1 text-sm text-slate-400">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CLOSE */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-6 top-6 rounded-xl bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        ✕
      </button>
    </motion.div>
  </motion.div>
)}



  {selectedService === "branding" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 md:p-6"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-white/10 bg-[#0B1020]"
    >
      {/* HERO */}
      <div className="relative overflow-hidden rounded-t-[32px] bg-gradient-to-br from-[#7C3AED] via-[#5B21B6] to-[#312E81] p-8">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-purple-200">
            {language === "en" ? "Brand Identity" : "Vizuelni Identitet"}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            {language === "en"
              ? "Build a Brand People Remember"
              : "Izgradi Brend Koji Se Pamti"}
          </h2>

          <p className="mt-4 max-w-2xl text-purple-100 leading-7">
            {language === "en"
              ? "We create a consistent visual identity that makes your channel instantly recognizable across YouTube and every social platform."
              : "Kreiramo dosledan vizuelni identitet koji čini tvoj kanal odmah prepoznatljivim na YouTube-u i svim društvenim mrežama."}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8 space-y-8">
        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "What's Included" : "Šta Dobijaš"}
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              {
                title: language === "en" ? "Logo System" : "Sistem Logotipa",
                desc:
                  language === "en"
                    ? "Primary and secondary logo for YouTube, social media and future business use."
                    : "Primarni i sekundarni logotip za YouTube, društvene mreže i buduću upotrebu.",
              },
              {
                title:
                  language === "en" ? "Visual Direction" : "Vizuelni Pravac",
                desc:
                  language === "en"
                    ? "Colors, typography and a complete design language."
                    : "Boje, tipografija i kompletan dizajn sistem.",
              },
              {
                title:
                  language === "en" ? "Channel Presence" : "Izgled Kanala",
                desc:
                  language === "en"
                    ? "Banner, profile picture and branded assets optimized for every device."
                    : "Baner, profilna slika i svi elementi optimizovani za svaki uređaj.",
              },
              {
                title:
                  language === "en" ? "Thumbnail Style" : "Stil Thumbnailova",
                desc:
                  language === "en"
                    ? "A repeatable thumbnail system that improves recognition."
                    : "Prepoznatljiv stil thumbnailova koji gradi identitet kanala.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Branding Matters */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
            {language === "en" ? "Why Branding Matters" : "Zašto je Brending Bitan"}
          </p>

          <p className="mt-4 text-slate-300 leading-7">
            {language === "en"
              ? "Strong branding increases recognition, builds trust and makes every upload feel like part of one professional ecosystem. Consistency is often the difference between a creator and a memorable brand."
              : "Jak brending povećava prepoznatljivost, gradi poverenje i čini da svaki video izgleda kao deo jednog profesionalnog sistema. Doslednost je često razlika između običnog kreatora i prepoznatljivog brenda."}
          </p>
        </div>

        {/* Process */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "Our Process" : "Naš Proces"}
          </h3>

          <div className="mt-6 space-y-5">
            {[
              {
                n: "01",
                t: language === "en" ? "Discovery" : "Analiza",
                d:
                  language === "en"
                    ? "Research your niche, audience and competitors."
                    : "Istražujemo tvoju nišu, publiku i konkurenciju.",
              },
              {
                n: "02",
                t: language === "en" ? "Identity" : "Identitet",
                d:
                  language === "en"
                    ? "Define the visual personality of your brand."
                    : "Definišemo vizuelnu ličnost tvog brenda.",
              },
              {
                n: "03",
                t: language === "en" ? "Design & Delivery" : "Dizajn i Isporuka",
                d:
                  language === "en"
                    ? "Deliver organized logo, banner and branding assets ready for immediate use."
                    : "Isporučujemo logotip, baner i kompletne brend elemente spremne za korišćenje.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  {step.n}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{step.t}</h4>
                  <p className="mt-1 text-sm text-slate-400">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CLOSE */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-6 top-6 rounded-xl bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        ✕
      </button>
    </motion.div>
  </motion.div>
)}

{selectedService === "analytics" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 md:p-6"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-white/10 bg-[#0B1020]"
    >
      {/* HERO */}
      <div className="relative overflow-hidden rounded-t-[32px] bg-gradient-to-br from-[#7C3AED] via-[#5B21B6] to-[#312E81] p-8">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-purple-200">
            {language === "en" ? "Performance Analytics" : "Analitika Performansi"}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            {language === "en"
              ? "Turn Data Into Growth"
              : "Pretvori Podatke u Rast"}
          </h2>

          <p className="mt-4 max-w-2xl text-purple-100 leading-7">
            {language === "en"
              ? "We analyze the metrics that truly drive YouTube growth and identify the highest-impact opportunities for your channel."
              : "Analiziramo metrike koje zaista pokreću rast na YouTube-u i pronalazimo najveće prilike za napredak tvog kanala."}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8 space-y-8">
        {/* Metrics */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "Key Metrics We Analyze" : "Ključne Metrike"}
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "CTR",
                desc:
                  language === "en"
                    ? "Understand what makes viewers click."
                    : "Otkrivamo šta povećava stopu klikova.",
              },
              {
                title:
                  language === "en"
                    ? "Audience Retention"
                    : "Retention Publike",
                desc:
                  language === "en"
                    ? "Pinpoint where viewers lose interest."
                    : "Pronalazimo tačne momente kada publika odlazi.",
              },
              {
                title:
                  language === "en"
                    ? "Traffic Sources"
                    : "Izvori Saobraćaja",
                desc:
                  language === "en"
                    ? "Evaluate Browse, Search and Suggested traffic."
                    : "Analiza Browse, Search i Suggested izvora.",
              },
              {
                title:
                  language === "en"
                    ? "Returning Viewers"
                    : "Povratni Gledaoci",
                desc:
                  language === "en"
                    ? "Measure audience loyalty and long-term growth."
                    : "Merimo lojalnost publike i potencijal dugoročnog rasta.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "What You'll Receive" : "Šta Dobijaš"}
          </h3>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              language === "en"
                ? "Detailed performance report"
                : "Detaljan izveštaj performansi",
              language === "en"
                ? "CTR improvement opportunities"
                : "Prilike za povećanje CTR-a",
              language === "en"
                ? "Retention breakdown"
                : "Analiza retention-a",
              language === "en"
                ? "Traffic source evaluation"
                : "Analiza izvora saobraćaja",
              language === "en"
                ? "Audience behavior insights"
                : "Uvid u ponašanje publike",
              language === "en"
                ? "Actionable growth recommendations"
                : "Konkretne preporuke za rast",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                  ✓
                </div>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "Our Process" : "Naš Proces"}
          </h3>

          <div className="mt-6 space-y-5">
            {[
              {
                n: "01",
                t: language === "en" ? "Collect Data" : "Prikupljanje Podataka",
                d:
                  language === "en"
                    ? "Review YouTube Analytics across your content."
                    : "Pregled svih ključnih podataka iz YouTube Analytics-a.",
              },
              {
                n: "02",
                t: language === "en" ? "Find Patterns" : "Pronalaženje Obrazaca",
                d:
                  language === "en"
                    ? "Identify what's limiting growth and what's already working."
                    : "Otkrivamo šta usporava rast i šta već funkcioniše.",
              },
              {
                n: "03",
                t: language === "en" ? "Optimization Plan" : "Plan Optimizacije",
                d:
                  language === "en"
                    ? "Receive prioritized actions with measurable impact."
                    : "Dobijaš prioritetne korake sa najvećim potencijalom rasta.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  {step.n}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{step.t}</h4>
                  <p className="mt-1 text-sm text-slate-400">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CLOSE */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-6 top-6 rounded-xl bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        ✕
      </button>
    </motion.div>
  </motion.div>
)}


{selectedService === "audit" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 md:p-6"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-white/10 bg-[#0B1020]"
    >
      {/* HERO */}
      <div className="relative overflow-hidden rounded-t-[32px] bg-gradient-to-br from-[#7C3AED] via-[#5B21B6] to-[#312E81] p-8">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-purple-200">
            {language === "en" ? "Channel Audit" : "Analiza Kanala"}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            {language === "en"
              ? "A Complete Health Check For Your Channel"
              : "Kompletan Health Check Tvog Kanala"}
          </h2>

          <p className="mt-4 max-w-2xl text-purple-100 leading-7">
            {language === "en"
              ? "We perform a comprehensive review of your branding, SEO, thumbnails and content structure to uncover the biggest growth opportunities."
              : "Radimo detaljnu analizu brendinga, SEO-a, thumbnailova i strukture sadržaja kako bismo pronašli najveće prilike za rast."}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8 space-y-8">
        {/* Checklist */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "20+ Point Evaluation" : "Analiza Kroz 20+ Tačaka"}
          </h3>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
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
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  ✓
                </div>
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "What You'll Receive" : "Šta Dobijaš"}
          </h3>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              language === "en"
                ? "Detailed audit report (PDF)"
                : "Detaljan audit izveštaj (PDF)",
              language === "en"
                ? "Personalized growth roadmap"
                : "Personalizovan plan rasta",
              language === "en"
                ? "Thumbnail & CTR feedback"
                : "Analizu thumbnailova i CTR-a",
              language === "en"
                ? "SEO improvement opportunities"
                : "SEO prilike za napredak",
              language === "en"
                ? "Content structure review"
                : "Pregled strukture sadržaja",
              language === "en"
                ? "Prioritized action list"
                : "Listu prioriteta za dalje korake",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                  ✓
                </div>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "Our Process" : "Naš Proces"}
          </h3>

          <div className="mt-6 space-y-5">
            {[
              {
                n: "01",
                t: language === "en" ? "Channel Review" : "Pregled Kanala",
                d:
                  language === "en"
                    ? "We analyze every major aspect of your YouTube channel."
                    : "Analiziramo svaki važan segment tvog YouTube kanala.",
              },
              {
                n: "02",
                t: language === "en" ? "Opportunity Mapping" : "Mapiranje Prilika",
                d:
                  language === "en"
                    ? "We identify weaknesses and the highest-impact improvements."
                    : "Pronalazimo slabosti i najveće prilike za napredak.",
              },
              {
                n: "03",
                t: language === "en" ? "Action Plan" : "Akcioni Plan",
                d:
                  language === "en"
                    ? "You receive a clear roadmap with practical next steps."
                    : "Dobijaš jasan plan sa konkretnim koracima za rast.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  {step.n}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{step.t}</h4>
                  <p className="mt-1 text-sm text-slate-400">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CLOSE */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-6 top-6 rounded-xl bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        ✕
      </button>
    </motion.div>
  </motion.div>
)}



{selectedService === "seo" && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedService(null)}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 md:p-6"
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] border border-white/10 bg-[#0B1020]"
    >
      {/* HERO */}
      <div className="relative overflow-hidden rounded-t-[32px] bg-gradient-to-br from-[#7C3AED] via-[#5B21B6] to-[#312E81] p-8">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-purple-200">
            {language === "en" ? "YouTube SEO" : "YouTube SEO"}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            {language === "en"
              ? "Get Discovered More Often"
              : "Povećaj Vidljivost u Pretrazi"}
          </h2>

          <p className="mt-4 max-w-2xl text-purple-100 leading-7">
            {language === "en"
              ? "We optimize every upload using keyword research, titles, descriptions and metadata to improve discoverability."
              : "Optimizujemo svaki video kroz istraživanje ključnih reči, naslove, opise i metapodatke kako bi sadržaj bio lakše pronađen."}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8 space-y-8">
        {/* What's Included */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "What's Included" : "Šta Dobijaš"}
          </h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              {
                title: language === "en" ? "Keyword Research" : "Ključne Reči",
                desc:
                  language === "en"
                    ? "Find high-potential search terms for your niche."
                    : "Pronalazimo ključne reči sa najvećim potencijalom.",
              },
              {
                title: language === "en" ? "SEO Titles" : "SEO Naslovi",
                desc:
                  language === "en"
                    ? "Titles built for both clicks and search intent."
                    : "Naslovi optimizovani za CTR i pretragu.",
              },
              {
                title:
                  language === "en"
                    ? "Description Optimization"
                    : "Optimizacija Opisa",
                desc:
                  language === "en"
                    ? "Descriptions structured for visibility and relevance."
                    : "Strukturirani opisi koji povećavaju vidljivost.",
              },
              {
                title: language === "en" ? "Metadata" : "Metapodaci",
                desc:
                  language === "en"
                    ? "Tags, hashtags and publishing structure."
                    : "Tagovi, hashtagovi i pravilna struktura objave.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Example */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
            {language === "en"
              ? "Example Optimization"
              : "Primer Optimizacije"}
          </p>

          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-white/5 bg-[#111827] p-4">
              <p className="mb-2 text-xs text-slate-500">
                {language === "en" ? "Optimized Title" : "Optimizovan Naslov"}
              </p>

              <h4 className="font-semibold text-white">
                {language === "en"
                  ? "How I Gained 1,000,000 Views With Better Thumbnails"
                  : "Kako sam došao do 1.000.000 pregleda uz bolje thumbnailove"}
              </h4>
            </div>

            <div className="rounded-xl border border-white/5 bg-[#111827] p-4">
              <p className="mb-2 text-xs text-slate-500">
                {language === "en" ? "Primary Keywords" : "Glavne Ključne Reči"}
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "youtube seo",
                  "thumbnail design",
                  "high ctr",
                  "youtube growth",
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
          </div>
        </div>

        {/* Process */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold text-white">
            {language === "en" ? "Our Process" : "Naš Proces"}
          </h3>

          <div className="mt-6 space-y-5">
            {[
              {
                n: "01",
                t: language === "en" ? "Research" : "Istraživanje",
                d:
                  language === "en"
                    ? "Analyze search demand and competitor keywords."
                    : "Analiza pretrage i ključnih reči konkurencije.",
              },
              {
                n: "02",
                t: language === "en" ? "Optimization" : "Optimizacija",
                d:
                  language === "en"
                    ? "Rewrite titles, descriptions and metadata."
                    : "Optimizujemo naslove, opise i metapodatke.",
              },
              {
                n: "03",
                t: language === "en" ? "Growth System" : "Sistem Rasta",
                d:
                  language === "en"
                    ? "Receive a repeatable SEO framework for future uploads."
                    : "Dobijaš sistem koji možeš primenjivati na svaki novi video.",
              },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                  {step.n}
                </div>

                <div>
                  <h4 className="font-semibold text-white">{step.t}</h4>
                  <p className="mt-1 text-sm text-slate-400">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CLOSE */}
      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-6 top-6 rounded-xl bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        ✕
      </button>
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