"use client";


import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "./context/LanguageContext";



function ThumbnailGallery() {
  const thumbnails = [
    "thumb1.png",
    "thumb2.png",
    "thumb3.png",
    "thumb4.png",
    "thumb5.png",
    "thumb6.png",
    "thumb7.png",
    "thumb8.png",
    "thumb9.png",
  ];

  const firstGroupRef = useRef<HTMLDivElement>(null);
  const [groupWidth, setGroupWidth] = useState(0);

  useEffect(() => {
    const group = firstGroupRef.current;
    if (!group) return;

    const measure = () => {
      // Use the exact rendered width, including the gap between thumbnails.
      setGroupWidth(group.getBoundingClientRect().width);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(group);

    // Re-measure after images load so the loop distance stays exact.
    const images = Array.from(group.querySelectorAll("img"));
    images.forEach((img) => {
      if (!img.complete) img.addEventListener("load", measure);
    });

    return () => {
      observer.disconnect();
      images.forEach((img) => img.removeEventListener("load", measure));
    };
  }, []);








  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={groupWidth > 0 ? { x: [0, -groupWidth] } : { x: 0 }}
        transition={{
          x: {
            // A fixed pixel speed feels consistent on different screen sizes.
            duration: groupWidth > 0 ? groupWidth / 45 : 0,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
        style={{ willChange: "transform" }}
      >
        {[0, 1].map((set) => (
          <div
            ref={set === 0 ? firstGroupRef : undefined}
            className="flex shrink-0 items-stretch gap-4 pr-4"
            key={set}
            aria-hidden={set === 1}
          >
            {thumbnails.map((filename, i) => (
              <div
                className="w-[220px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] sm:w-[280px] lg:w-[320px]"
                key={`${set}-${i}`}
              >
                <img
                  src={`/thumbs/${filename}`}
                  alt={set === 0 ? filename : ""}
                  draggable={false}
                  loading="lazy"
                  className="block aspect-video h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {

  
const { language, setLanguage } = useLanguage();

const [scrolled, setScrolled] = useState(false);
const [activeSection, setActiveSection] = useState("home");
const [selectedService, setSelectedService] = useState<string | null>(null);
const [scrollPosition, setScrollPosition] = useState(0);
const [mobileMenu, setMobileMenu] = useState(false);

const [selectedMember, setSelectedMember] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);

    const sections = ["home", "services", "pricing", "contact", "about"];
    const currentScroll = window.scrollY + 250;

    for (const id of sections) {
      const section = document.getElementById(id);

      if (
        section &&
        currentScroll >= section.offsetTop &&
        currentScroll < section.offsetTop + section.offsetHeight
      ) {
        setActiveSection(id);
        break;
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

useEffect(() => {
  if (selectedService) {
    setScrollPosition(window.scrollY);
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";

    requestAnimationFrame(() => {
      window.scrollTo(0, scrollPosition);
    });
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [selectedService, scrollPosition]);


 
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
   <main className="relative min-h-screen bg-[#050505]">
    
 

{/* Navbar */}
<header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-8 sm:pt-5 lg:px-12">
  <nav className="mx-auto max-w-[1600px]">
    {/* MAIN NAVBAR */}
    <div className="flex min-h-[68px] items-center justify-between border-b border-white/15 pb-3 sm:min-h-[72px] sm:pb-4">
      {/* BRAND */}
      <button
        type="button"
        onClick={() => {
          setMobileMenu(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="shrink-0 text-left"
      >
        <p className="text-sm font-bold tracking-[0.12em] text-white sm:text-base">
          LENSIA <span className="text-purple-400">MEDIA</span>
        </p>

        <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
          {language === "en" ? "Growth Together" : "Rastemo zajedno"}
        </p>
      </button>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden items-center gap-7 lg:flex xl:gap-10">
        {[
          {
            id: "youtube-services",
            label: language === "en" ? "Services" : "Usluge",
          },
          {
            id: "pricing",
            label: language === "en" ? "Pricing" : "Cene",
          },
          {
            id: "about",
            label: language === "en" ? "About" : "O nama",
          },
          {
            id: "contact",
            label: language === "en" ? "Contact" : "Kontakt",
          },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className={`text-[13px] font-medium transition-colors duration-200 ${
              activeSection === item.id
                ? "text-white"
                : "text-white/55 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        {/* LANGUAGE */}
        <button
          type="button"
          onClick={() => setLanguage(language === "en" ? "sr" : "en")}
          aria-label={
            language === "en"
              ? "Switch to Serbian"
              : "Prebaci na engleski"
          }
          className="whitespace-nowrap text-[10px] font-semibold tracking-wider transition-colors duration-200 sm:text-[11px]"
        >
          <span
            className={
              language === "en" ? "text-white" : "text-white/40"
            }
          >
            EN
          </span>
          <span className="mx-1 text-white/20 sm:mx-1.5">/</span>
          <span
            className={
              language === "sr" ? "text-white" : "text-white/40"
            }
          >
            SR
          </span>
        </button>

        {/* DESKTOP CTA */}
        <button
          type="button"
          onClick={() => window.location.assign("/buy")}
          className="hidden rounded-xl bg-white px-5 py-3 text-xs font-semibold text-black transition-colors duration-200 hover:bg-purple-300 sm:block"
        >
          {language === "en" ? "Start a project" : "Započni saradnju"}
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenu((previous) => !previous)}
          aria-label={
            mobileMenu
              ? language === "en"
                ? "Close menu"
                : "Zatvori meni"
              : language === "en"
                ? "Open menu"
                : "Otvori meni"
          }
          aria-expanded={mobileMenu}
          aria-controls="mobile-navigation"
          className="flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-200 hover:border-white/25 lg:hidden sm:text-xs"
        >
          <span>
            {mobileMenu
              ? language === "en"
                ? "Close"
                : "Zatvori"
              : language === "en"
                ? "Menu"
                : "Meni"}
          </span>

          <span className="relative flex h-3.5 w-4 flex-col justify-center gap-[5px]">
            <span
              className={`h-px w-full bg-white transition-transform duration-300 ${
                mobileMenu
                  ? "translate-y-[3px] rotate-45"
                  : "translate-y-0"
              }`}
            />
            <span
              className={`h-px w-full bg-white transition-transform duration-300 ${
                mobileMenu
                  ? "-translate-y-[3px] -rotate-45"
                  : "translate-y-0"
              }`}
            />
          </span>
        </button>
      </div>
    </div>

    {/* MOBILE PREMIUM DROPDOWN */}
    <AnimatePresence initial={false}>
      {mobileMenu && (
        <motion.div
          id="mobile-navigation"
          key="mobile-navigation"
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{
            height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.2 },
            y: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
          }}
          className="overflow-hidden lg:hidden"
        >
          <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#09090c]/95 shadow-2xl shadow-black/30 backdrop-blur-xl">
            {/* MENU HEADER */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                {language === "en" ? "Navigation" : "Navigacija"}
              </p>

              <span className="text-[10px] font-medium tracking-wider text-purple-300">
                L / M
              </span>
            </div>

            {/* NAVIGATION LINKS */}
            <div className="px-3 py-2">
              {[
                {
                  id: "youtube-services",
                  number: "01",
                  label: language === "en" ? "Services" : "Usluge",
                },
                {
                  id: "pricing",
                  number: "02",
                  label: language === "en" ? "Pricing" : "Cene",
                },
                {
                  id: "about",
                  number: "03",
                  label: language === "en" ? "About us" : "O nama",
                },
                {
                  id: "contact",
                  number: "04",
                  label: language === "en" ? "Contact" : "Kontakt",
                },
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.045,
                  }}
                  onClick={() => {
                    setMobileMenu(false);
                    scrollToSection(item.id);
                  }}
                  className={`group flex min-h-[56px] w-full items-center gap-4 rounded-xl px-3 text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? "bg-white/[0.07] text-white"
                      : "text-white/65 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span
                    className={`w-6 text-[10px] font-medium tabular-nums ${
                      activeSection === item.id
                        ? "text-purple-300"
                        : "text-white/25"
                    }`}
                  >
                    {item.number}
                  </span>

                  <span className="flex-1 text-[15px] font-medium">
                    {item.label}
                  </span>

                  <span
                    className={`text-base transition-all duration-200 ${
                      activeSection === item.id
                        ? "translate-x-0 text-purple-300"
                        : "-translate-x-1 text-white/20 group-hover:translate-x-0 group-hover:text-white/70"
                    }`}
                  >
                    →
                  </span>
                </motion.button>
              ))}
            </div>

            {/* CTA */}
            <div className="border-t border-white/[0.08] p-4">
              <button
                type="button"
                onClick={() => {
                  setMobileMenu(false);
                  window.location.assign("/buy");
                }}
                className="flex min-h-[50px] w-full items-center justify-between rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:bg-purple-300"
              >
                <span>
                  {language === "en"
                    ? "Start a project"
                    : "Započni saradnju"}
                </span>

                <span className="text-lg">↗</span>
              </button>

              <p className="mt-3 text-center text-[10px] tracking-wide text-white/30">
                {language === "en"
                  ? "YouTube Growth Agency"
                  : "Agencija za YouTube rast"}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </nav>
</header>

      





{/* HERO — LENSIA MEDIA */}
<section
  id="home"
  className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-24 pt-28 text-white sm:px-8"
>
  {/* Background glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse at 50% 42%, rgba(109,40,217,0.09) 0%, transparent 55%)",
    }}
  />

  {/* Organic ribbon waves */}
  <div
    aria-hidden="true"
    className="lensia-reference-waves pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[43%] overflow-hidden sm:h-[47%]"
  >
    <svg
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      className="h-full w-full"
      fill="none"
    >
      <defs>
        <linearGradient
          id="lensia-ribbon-stroke"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#c8c8cc" stopOpacity="0.72" />
          <stop offset="45%" stopColor="#898991" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#55555d" stopOpacity="0.08" />
        </linearGradient>

        <linearGradient
          id="lensia-ribbon-mask"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="12%" stopColor="white" stopOpacity="1" />
          <stop offset="65%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <mask id="lensia-ribbon-visibility">
          <rect width="1440" height="400" fill="url(#lensia-ribbon-mask)" />
        </mask>
      </defs>

      <g mask="url(#lensia-ribbon-visibility)">
        {Array.from({ length: 58 }, (_, i) => {
          const y = 54 + i * 4.8;
          const t = i / 57;

          const variation = (n: number) =>
            Math.sin(i * 0.37 + n * 1.7) * 15 +
            Math.sin(i * 0.19 + n * 2.4) * 9;

          const p = [
            [-80, y + variation(0)],
            [100, y - 12 + variation(1)],
            [205, y - 30 + variation(2)],
            [330, y - 5 + variation(3)],
            [440, y + 15 + variation(4)],
            [555, y - 13 + variation(5)],
            [680, y - 25 + variation(6)],
            [800, y + 13 + variation(7)],
            [925, y + 29 + variation(8)],
            [1045, y - 10 + variation(9)],
            [1160, y - 26 + variation(10)],
            [1280, y + 9 + variation(11)],
            [1510, y + variation(12)],
          ];

          let d = `M ${p[0][0]} ${p[0][1]}`;

          for (let j = 0; j < p.length - 1; j++) {
            const a = p[j];
            const b = p[j + 1];
            const distance = b[0] - a[0];

            d += ` C ${a[0] + distance * 0.42} ${a[1] + variation(j + 2) * 0.22},
              ${b[0] - distance * 0.42} ${b[1] - variation(j + 4) * 0.22},
              ${b[0]} ${b[1]}`;
          }

          return (
            <path
              key={i}
              d={d}
              stroke="url(#lensia-ribbon-stroke)"
              strokeWidth={i % 8 === 0 ? 1.45 : 0.9}
              opacity={0.12 + (1 - t) * 0.22}
              className="lensia-reference-wave"
              style={{
                animationDelay: `${-(i % 10) * 0.7}s`,
                animationDuration: `${12 + (i % 7) * 1.5}s`,
              }}
            />
          );
        })}
      </g>
    </svg>
  </div>

  {/* Main content */}
  <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-col items-center text-center">
    {/* Eyebrow */}
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-8 flex items-center gap-3 sm:mb-10"
    >
      <span className="h-px w-6 bg-purple-400/70 sm:w-9" />

      <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/75 sm:text-xs sm:tracking-[0.28em]">
        {language === "en"
          ? "Creative Studio · Digital Growth"
          : "Kreativni studio · Digitalni rast"}
      </span>

      <span className="h-px w-6 bg-purple-400/70 sm:w-9" />
    </motion.div>

    {/* Single-line brand title — matching purple gradient */}
    <motion.h1
      initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative z-10 whitespace-nowrap select-none text-[clamp(2.5rem,9.5vw,9rem)] font-black uppercase leading-none tracking-[-0.065em]"
      style={{
        fontFamily:
          "var(--font-space-grotesk, var(--font-manrope, sans-serif))",
      }}
    >
      <span
        className="inline-block text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #ffffff 0%, #d9c5ff 50%, #a78bfa 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        LENSIA
      </span>

      <span
        className="ml-[0.14em] inline-block text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #ffffff 0%, #d9c5ff 50%, #a78bfa 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        MEDIA
      </span>
    </motion.h1>

    {/* Accent line */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0.2 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: 0.35, duration: 0.9 }}
      className="mt-6 h-px w-20 origin-center bg-purple-400/70 sm:mt-7 sm:w-28"
    />

    {/* Description — no slogan underneath the title */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/90 sm:mt-7 sm:text-base sm:leading-8"
    >
      {language === "en"
        ? "We help creators and brands grow through creative design, engaging content and digital strategy."
        : "Pomažemo kreatorima i brendovima da rastu kroz kreativni dizajn, kvalitetan sadržaj i digitalnu strategiju."}
    </motion.p>

    {/* Interactive creative services */}
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-[8px] font-medium uppercase tracking-[0.13em] text-white/75 sm:gap-x-5 sm:text-[10px] sm:tracking-[0.18em]"
    >
      <motion.span
        whileHover={{ scale: 1.12, color: "#c4a7ff" }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        className="inline-block cursor-default"
      >
        {language === "en" ? "Social Media" : "Društvene mreže"}
      </motion.span>

      <span className="text-purple-400">/</span>

      <motion.span
        whileHover={{ scale: 1.12, color: "#c4a7ff" }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        className="inline-block cursor-default"
      >
        {language === "en" ? "Creative Design" : "Kreativni dizajn"}
      </motion.span>

      <span className="text-purple-400">/</span>

      <motion.span
        whileHover={{ scale: 1.12, color: "#c4a7ff" }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        className="inline-block cursor-default"
      >
        {language === "en" ? "Content Strategy" : "Strategija sadržaja"}
      </motion.span>
    </motion.div>

    {/* CTA */}
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.7 }}
      onClick={() => scrollToSection("services")}
      className="group mt-7 inline-flex min-h-12 items-center justify-center gap-5 border border-white/25 bg-black/30 px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 sm:mt-8 sm:px-8 sm:text-[10px]"
    >
      <span>
        {language === "en" ? "Explore Services" : "Istraži usluge"}
      </span>

      <span className="text-base text-purple-300 transition-transform duration-300 group-hover:translate-y-1">
        ↓
      </span>
    </motion.button>
  </div>

 
{/* Centered Scroll Indicator */}
<motion.button
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.1, duration: 0.8 }}
  onClick={() => scrollToSection("services")}
  aria-label={language === "en" ? "Scroll to services" : "Skroluj do usluga"}
  className="group absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white/40 transition-colors duration-300 hover:text-white sm:bottom-7"
>
  <span className="text-[9px] font-medium uppercase tracking-[0.28em] transition-colors duration-300 group-hover:text-purple-300">
    {language === "en" ? "Scroll to explore" : "Skroluj za više"}
  </span>

  <span className="relative h-10 w-px overflow-hidden bg-white/15">
    <motion.span
      animate={{ y: [-16, 40] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-0 top-0 h-4 w-px bg-purple-400"
    />
  </span>
</motion.button>
</section>




{/* LENSIA MEDIA — SERVICES */}

{/* YouTube Services Showcase */}
<motion.section
  id="youtube-services"
  initial={{ opacity: 0, y: 35, scale: 0.98 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative isolate w-full scroll-mt-28 overflow-hidden px-0 py-16 md:py-20"
>
  {/* Background glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-[55%] -z-10 h-64 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px] sm:h-96"
  />

  {/* YouTube Heading */}
  <div className="mx-auto mb-8 max-w-4xl px-5 text-center sm:mb-10">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-5 flex justify-center"
    >
      <div className="inline-flex items-center gap-2.5 rounded-full border border-red-500/25 bg-red-500/[0.08] px-4 py-2">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-red-500"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
        </svg>

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">
          YouTube Services
        </span>
      </div>
    </motion.div>

    <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      {language === "en"
        ? "YouTube Optimization &"
        : "YouTube optimizacija i"}

      <span className="mt-1 block text-red-400">
        {language === "en" ? "Channel Growth" : "rast kanala"}
      </span>
    </h2>
  </div>

  {/* YouTube Dashboard Image */}
  <motion.div
    initial={{ opacity: 0, y: 25, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 1.2,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative mx-auto w-full"
  >
    <img
      src="/services/lensia-services.png"
      alt={
        language === "en"
          ? "Lensia Media YouTube SEO, analytics and channel strategy"
          : "Lensia Media YouTube SEO, analitika i strategija kanala"
      }
      loading="lazy"
      className="relative z-10 block h-auto w-full object-contain drop-shadow-[0_0_35px_rgba(139,92,246,0.12)]"
    />

    {/* Thumbnail Gallery Heading */}
    <div className="relative z-20 mb-5 mt-8 text-center sm:mt-10">
      <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-white sm:text-2xl">
        {language === "en"
          ? "Our Thumbnails"
          : "Primeri thumbnailova"}
      </h3>

      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-red-500" />
    </div>

    <ThumbnailGallery />
  </motion.div>
</motion.section>

{/* YouTube Services Checklist */}
<motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative mx-auto w-full max-w-7xl px-5 pb-6 pt-2 sm:px-6"
>
  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
    {(language === "en"
      ? [
          "YouTube SEO",
          "Channel Analytics",
          "Channel Strategy",
          "Thumbnail Design",
        ]
      : [
          "SEO optimizacija",
          "Analitika kanala",
          "Strategija kanala",
          "Thumbnailovi",
        ]
    ).map((service) => (
      <div
        key={service}
        className="flex items-center gap-2 whitespace-nowrap"
      >
        <svg
          className="h-5 w-5 shrink-0 text-green-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>

        <span className="text-sm font-medium text-slate-200 sm:text-base">
          {service}
        </span>
      </div>
    ))}
  </div>
</motion.div>

{/* Instagram Strategy Section */}
<motion.section
  id="instagram-services"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative isolate w-full scroll-mt-28 overflow-hidden py-14 md:py-20"
>
  {/* Background glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-[55%] -z-10 h-64 w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/15 blur-[100px] sm:h-96"
  />

  {/* Instagram Heading */}
  <div className="mx-auto mb-8 max-w-4xl px-5 text-center sm:mb-10">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-5 flex justify-center"
    >
      <div className="inline-flex items-center gap-2.5 rounded-full border border-fuchsia-500/25 bg-fuchsia-500/[0.08] px-4 py-2">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-fuchsia-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="18"
            cy="6"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>

        <span className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-300">
          Instagram Services
        </span>
      </div>
    </motion.div>

    <h2 className="font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
      {language === "en"
        ? "Instagram Strategy &"
        : "Instagram strategija i"}

      <span className="mt-1 block bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
        {language === "en" ? "Profile Growth" : "rast profila"}
      </span>
    </h2>
  </div>

  {/* Instagram Visual */}
  <motion.div
    initial={{ opacity: 0, y: 25, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 1.1,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative mx-auto w-[95vw] max-w-[1600px]"
  >
    {/* Visual Heading */}
    <div className="relative z-20 mb-5 mt-2 text-center sm:mb-7">
      <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-white sm:text-2xl">
        {language === "en"
          ? "Instagram Content"
          : "Instagram objave"}
      </h3>

      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500" />
    </div>

    <img
      src="/services/instagram-strategy.png"
      alt={
        language === "en"
          ? "Instagram strategy, content planning and profile optimization"
          : "Instagram strategija, planiranje sadržaja i optimizacija profila"
      }
      loading="lazy"
      className="relative z-10 block h-auto w-full object-contain drop-shadow-[0_0_35px_rgba(192,38,211,0.12)]"
    />
  </motion.div>

  {/* Instagram Services Checklist */}
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-5 sm:px-6"
  >
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
      {(language === "en"
        ? [
            "Instagram Strategy",
            "Content Planning",
            "Profile Optimization",
            "Analytics & Growth",
          ]
        : [
            "Instagram strategija",
            "Planiranje sadržaja",
            "Optimizacija profila",
            "Analitika i rast",
          ]
      ).map((service) => (
        <div
          key={service}
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <svg
            className="h-5 w-5 shrink-0 text-green-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>

          <span className="text-sm font-medium text-slate-200 sm:text-base">
            {service}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
</motion.section>





{/* LENSIA MEDIA — WIDE PRICING */}
<section
  id="pricing"
  className="relative isolate overflow-hidden bg-[#050505] px-5 pt-12 pb-20 text-white sm:px-8 sm:pt-16 lg:px-12 lg:pt-20 lg:pb-24"
>

  <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-full bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.10),transparent_60%)]" />

  <div className="relative mx-auto max-w-[1600px]">
    
{/* HEADER */}
<div className="mb-16 flex flex-col items-center text-center lg:mb-20">
  <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
    <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(167,139,250,0.7)]" />
    {language === "sr"
      ? "Lensia Media / Cenovnik"
      : "Lensia Media / Pricing"}
  </div>

  <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
    {language === "sr" ? (
      <>
        Tvoj sadržaj.
        <br />
        <span className="bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
          Na sledećem nivou.
        </span>
      </>
    ) : (
      <>
        Your content.
        <br />
        <span className="bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
          The next level.
        </span>
      </>
    )}
  </h2>

  <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
    {language === "sr"
      ? "Od pojedinačnih usluga do kompletne strategije rasta. Izaberi model saradnje koji odgovara tvojim ciljevima."
      : "From individual services to a complete growth strategy. Choose the approach that fits your goals."}
  </p>
</div>


    {/* YOUTUBE & INSTAGRAM */}
    <div className="grid items-start gap-8 xl:grid-cols-2">
      {/* YOUTUBE */}
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b10]">
        {/* Header */}
        <div className="border-b border-white/10 border-t-2 border-t-red-500 p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-red-400"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
              </svg>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">YouTube</h3>
              <p className="mt-1 text-sm text-gray-400">
                {language === "sr"
                  ? "Optimizacija i rast kanala"
                  : "Channel optimization and growth"}
              </p>
            </div>
          </div>
        </div>

        {/* Main packages */}
        <div className="grid grid-cols-2">
          {/* Starter */}
          <a
            href="/plans/starter"
            className="border-b border-r border-white/10 p-6 transition-colors hover:bg-white/[0.03] sm:p-8"
          >
            <h4 className="text-lg font-semibold text-white">Starter</h4>
            <p className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              €69
            </p>
            <p className="mt-3 text-sm text-gray-400">
              {language === "sr"
                ? "Osnovna optimizacija"
                : "Essential optimization"}
            </p>
          </a>

          {/* Growth */}
          <a
            href="/plans/growth"
            className="border-b border-white/10 bg-purple-500/10 p-6 transition-colors hover:bg-purple-500/[0.15] sm:p-8"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-lg font-semibold text-white">Growth</h4>
              <span className="rounded-md border border-purple-400/30 bg-purple-500/10 px-2 py-1 text-[10px] font-bold uppercase text-purple-300">
                {language === "sr" ? "Popularno" : "Popular"}
              </span>
            </div>
            <p className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              €99
            </p>
            <p className="mt-3 text-sm text-gray-400">
              {language === "sr"
                ? "Strategija rasta kanala"
                : "Channel growth strategy"}
            </p>
          </a>

          {/* Media Pro - full width */}
          <a
            href="/plans/media-pro"
            className="col-span-2 border-b border-white/10 p-6 transition-colors hover:bg-white/[0.03] sm:p-8"
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-lg font-semibold text-white">Media Pro</h4>
                <p className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  €199
                </p>
                <p className="mt-3 text-sm text-gray-400">
                  {language === "sr"
                    ? "Napredna podrška"
                    : "Advanced support"}
                </p>
              </div>

              <span className="hidden text-sm font-medium text-gray-500 sm:block">
                {language === "sr"
                  ? "Za ozbiljan rast kanala"
                  : "For serious channel growth"}
              </span>
            </div>
          </a>
        </div>

        {/* Launch FREE - in development */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="text-lg font-semibold text-white">Launch</h4>
              <span className="rounded-md border border-amber-400/25 bg-amber-400/[0.08] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-300">
                In Development
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              {language === "sr"
                ? "Za kanale bez monetizacije"
                : "For non-monetized channels"}
            </p>
          </div>

          <p className="shrink-0 text-2xl font-bold text-white">FREE</p>
        </div>

        {/* Performance - in development */}
        <div className="flex items-center justify-between gap-4 p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h4 className="text-lg font-semibold text-white">
                Performance
              </h4>
              <span className="rounded-md border border-amber-400/25 bg-amber-400/[0.08] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-300">
                In Development
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              {language === "sr"
                ? "Fiksna cena uz udeo u zaradi"
                : "Fixed fee plus a share of revenue"}
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-2xl font-bold text-white">€95</p>
            <p className="mt-1 text-sm font-semibold text-purple-300">+15%</p>
          </div>
        </div>
      </div>

      

{/* INSTAGRAM */}
<div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b10]">
  {/* Header */}
  <div className="border-b border-white/10 border-t-2 border-t-purple-500 p-8">
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-none stroke-purple-400"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            className="fill-purple-400 stroke-none"
          />
        </svg>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">Instagram</h3>
        <p className="mt-1 text-sm text-gray-400">
          {language === "sr"
            ? "Optimizacija i rast profila"
            : "Profile optimization and growth"}
        </p>
      </div>
    </div>
  </div>

  {/* Main packages */}
  <div className="grid grid-cols-2">
    {/* Starter */}
    <a
      href="/plans/instagram-starter"
      className="border-b border-r border-white/10 p-6 transition-colors hover:bg-white/[0.03] sm:p-8"
    >
      <h4 className="text-lg font-semibold text-white">Starter</h4>
      <p className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        €19
      </p>
      <p className="mt-3 text-sm text-gray-400">
        {language === "sr"
          ? "Osnovna optimizacija profila"
          : "Essential profile optimization"}
      </p>
    </a>

    {/* Growth */}
    <a
      href="/plans/instagram-growth"
      className="border-b border-white/10 bg-purple-500/10 p-6 transition-colors hover:bg-purple-500/[0.15] sm:p-8"
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-lg font-semibold text-white">Growth</h4>
        <span className="rounded-md border border-purple-400/30 bg-purple-500/10 px-2 py-1 text-[10px] font-bold uppercase text-purple-300">
          {language === "sr" ? "Popularno" : "Popular"}
        </span>
      </div>
      <p className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        €39
      </p>
      <p className="mt-3 text-sm text-gray-400">
        {language === "sr"
          ? "Strategija rasta profila"
          : "Profile growth strategy"}
      </p>
    </a>

    {/* Pro */}
    <a
      href="/plans/instagram-pro"
      className="col-span-2 border-b border-white/10 p-6 transition-colors hover:bg-white/[0.03] sm:p-8"
    >
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h4 className="text-lg font-semibold text-white">Media Pro</h4>
          <p className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            €79
          </p>
          <p className="mt-3 text-sm text-gray-400">
            {language === "sr"
              ? "Napredna strategija i analitika"
              : "Advanced strategy and analytics"}
          </p>
        </div>

        <span className="hidden text-sm font-medium text-gray-500 sm:block">
          {language === "sr"
            ? "Za ozbiljan rast profila"
            : "For serious profile growth"}
        </span>
      </div>
    </a>
  </div>

  

{/* YouTube + Instagram Combo */}
<a
  href="#contact"
  className="block border-b border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.05] sm:p-8"
>
  <div className="flex items-center justify-between gap-4">
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <h4 className="text-lg font-semibold text-white">
          YouTube + Instagram Combo
        </h4>

        
      </div>

      <p className="mt-3 text-sm text-gray-400">
        {language === "sr"
          ? "Kombinovana podrška za rast na YouTube-u i Instagramu"
          : "Combined support for growth on YouTube and Instagram"}
      </p>
    </div>

    <span className="shrink-0 text-2xl font-bold text-white transition-colors group-hover:text-purple-300">
      {language === "sr" ? "Kontakt" : "Contact"} 
    </span>
  </div>

  </a>
</div>
      </div>
    </div>
  </section>






{/* INDIVIDUAL SERVICES */}
<section id="individual-services" className="py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
        {language === "sr" ? "Pojedinačne usluge" : "Individual Services"}
      </p>

      <h2 className="text-3xl font-bold text-white md:text-5xl">
        {language === "sr"
          ? "Izaberite uslugu koja vam je potrebna"
          : "Choose the Service You Need"}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
        {language === "sr"
          ? "Kupite pojedinačne usluge bez obavezivanja na mesečni paket."
          : "Purchase individual services without committing to a monthly plan."}
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {/* YOUTUBE SERVICES */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <h3 className="mb-6 text-2xl font-bold text-white">
          {language === "sr" ? "YouTube usluge" : "YouTube Services"}
        </h3>

        <div className="space-y-4">
          {/* THUMBNAIL DESIGN */}
          <a
            href="/buy?category=services&service=thumbnail-design"
            className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 p-5 transition hover:border-purple-500/50 hover:bg-purple-500/5"
          >
            <div>
              <h4 className="font-semibold text-white transition group-hover:text-purple-300">
                {language === "sr" ? "Dizajn thumbnail-a" : "Thumbnail Design"}
              </h4>
              <p className="mt-1 text-sm text-gray-400">
                {language === "sr"
                  ? "YouTube thumbnail-i osmišljeni da privuku pažnju i klikove."
                  : "Custom YouTube thumbnails designed to attract clicks."}
              </p>
              <p className="mt-2 text-sm font-medium text-purple-300">
                {language === "sr" ? "15 € po thumbnail-u" : "€15 / thumbnail"}
              </p>
            </div>
            <span className="text-xl text-gray-400 transition group-hover:translate-x-1 group-hover:text-purple-300">
              →
            </span>
          </a>

          {/* VIDEO EDITING */}
          <a
            href="/buy?category=services&service=video-editing"
            className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 p-5 transition hover:border-purple-500/50 hover:bg-purple-500/5"
          >
            <div>
              <h4 className="font-semibold text-white transition group-hover:text-purple-300">
                {language === "sr" ? "Montaža YouTube videa" : "YouTube Video Editing"}
              </h4>
              <p className="mt-1 text-sm text-gray-400">
                {language === "sr"
                  ? "Profesionalna montaža prilagođena sadržaju vašeg kanala."
                  : "Professional editing tailored to your channel."}
              </p>
              <p className="mt-2 text-sm font-medium text-purple-300">
                {language === "sr" ? "Cena po dogovoru" : "Custom pricing"}
              </p>
            </div>
            <span className="text-xl text-gray-400 transition group-hover:translate-x-1 group-hover:text-purple-300">
              →
            </span>
          </a>

          {/* YOUTUBE SEO */}
          <a
            href="/buy?category=services&service=youtube-seo"
            className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 p-5 transition hover:border-purple-500/50 hover:bg-purple-500/5"
          >
            <div>
              <h4 className="font-semibold text-white transition group-hover:text-purple-300">
                YouTube SEO
              </h4>
              <p className="mt-1 text-sm text-gray-400">
                {language === "sr"
                  ? "Jednokratna optimizacija YouTube kanala."
                  : "One-time YouTube channel optimization."}
              </p>
              <p className="mt-2 text-sm font-medium text-purple-300">
                {language === "sr" ? "25 € jednokratno" : "€25 one-time"}
              </p>
            </div>
            <span className="text-xl text-gray-400 transition group-hover:translate-x-1 group-hover:text-purple-300">
              →
            </span>
          </a>

          {/* YOUTUBE REBRANDING */}
          <a
            href="/buy?category=services&service=youtube-rebranding"
            className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 p-5 transition hover:border-purple-500/50 hover:bg-purple-500/5"
          >
            <div>
              <h4 className="font-semibold text-white transition group-hover:text-purple-300">
                {language === "sr" ? "Redizajn YouTube kanala" : "YouTube Rebranding"}
              </h4>
              <p className="mt-1 text-sm text-gray-400">
                {language === "sr"
                  ? "Osvežite vizuelni identitet i brending svog kanala."
                  : "Refresh your channel's visual identity and branding."}
              </p>
              <p className="mt-2 text-sm font-medium text-purple-300">
                {language === "sr" ? "Cena po dogovoru" : "Custom pricing"}
              </p>
            </div>
            <span className="text-xl text-gray-400 transition group-hover:translate-x-1 group-hover:text-purple-300">
              →
            </span>
          </a>
        </div>
      </div>

      {/* INSTAGRAM SERVICES */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <h3 className="mb-6 text-2xl font-bold text-white">
          {language === "sr" ? "Instagram usluge" : "Instagram Services"}
        </h3>

        <div className="space-y-4">
          {/* PHOTO EDITING */}
          <a
            href="/buy?category=services&service=instagram-photo-editing"
            className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 p-5 transition hover:border-purple-500/50 hover:bg-purple-500/5"
          >
            <div>
              <h4 className="font-semibold text-white transition group-hover:text-purple-300">
                {language === "sr" ? "Obrada fotografija" : "Photo Editing"}
              </h4>
              <p className="mt-1 text-sm text-gray-400">
                {language === "sr"
                  ? "Profesionalna obrada fotografija za društvene mreže."
                  : "Clean, professional edits for your social media content."}
              </p>
              <p className="mt-2 text-sm font-medium text-purple-300">
                {language === "sr" ? "Cena po dogovoru" : "Custom pricing"}
              </p>
            </div>
            <span className="text-xl text-gray-400 transition group-hover:translate-x-1 group-hover:text-purple-300">
              →
            </span>
          </a>

          {/* INSTAGRAM REELS */}
          <a
            href="/buy?category=services&service=instagram-reels-editing"
            className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 p-5 transition hover:border-purple-500/50 hover:bg-purple-500/5"
          >
            <div>
              <h4 className="font-semibold text-white transition group-hover:text-purple-300">
                {language === "sr" ? "Montaža Instagram Reels videa" : "Instagram Reels Editing"}
              </h4>
              <p className="mt-1 text-sm text-gray-400">
                {language === "sr"
                  ? "Dinamična montaža Reels videa za društvene mreže."
                  : "Engaging Reels edited for social media."}
              </p>
              <p className="mt-2 text-sm font-medium text-purple-300">
                {language === "sr" ? "Cena po dogovoru" : "Custom pricing"}
              </p>
            </div>
            <span className="text-xl text-gray-400 transition group-hover:translate-x-1 group-hover:text-purple-300">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>





{/* ABOUT US */}
<section id="about" className="py-24">
  <div className="mx-auto max-w-7xl px-6">
    {/* SECTION HEADER */}
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
        {language === "sr" ? "O nama" : "About Us"}
      </p>

    <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
  <span className="bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
     {language === "sr"
          ? "Ljudi iza Lensia Media"
          : "The People Behind Lensia Media"}
  </span>
</h2>


      <p className="mx-auto mt-4 max-w-2xl text-gray-400">
        {language === "sr"
          ? "Upoznajte naše iskustvo u YouTube sadržaju, marketingu i vizuelnom dizajnu."
          : "Discover our experience in YouTube content, marketing, and visual design."}
      </p>
    </div>

    {/* TEAM MEMBERS */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {[
        {
          name: "Miloš Vranješ",
          role:
            language === "sr"
              ? "Osnivač i direktor"
              : "Founder & CEO",
          image: "/team/founder1.png",
        },
        {
          name: "Lazar Sekulić",
          role:
            language === "sr"
              ? "Menadžer za klijente — Balkan"
              : "Balkan Client Manager",
          image: "/team/founder2.png",
        },
        {
          name: "Vlatko Danilovski",
          role:
            language === "sr"
              ? "Stručnjak za međunarodni rast"
              : "International Growth Strategist",
          image: "/team/founder3.png",
        },
      ].map((member, index) => (
        <button
          key={member.name}
          type="button"
          onClick={() => setSelectedMember(index)}
          aria-pressed={selectedMember === index}
          className={`group overflow-hidden rounded-xl border text-left transition-colors duration-500 ${
            selectedMember === index
              ? "border-purple-500"
              : "border-white/10 hover:border-white/25"
          }`}
        >
          {/* PORTRAIT */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[#0b0b10]">
            <img
              src={member.image}
              alt={member.name}
              className={`h-full w-full object-cover object-center transform-gpu origin-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                selectedMember === index
                  ? "scale-[1.06]"
                  : "scale-100 group-hover:scale-[1.02]"
              }`}
            />
          </div>

          {/* NAME AND POSITION */}
          <div className="bg-[#0b0b10] px-5 py-5">
            <h3 className="text-lg font-semibold text-white">
              {member.name}
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              {member.role}
            </p>
          </div>
        </button>
      ))}
    </div>

    {/* EXPERIENCE PANEL */}
    <div
      key={selectedMember}
      className="mt-8 grid overflow-hidden rounded-xl border border-white/10 bg-[#0b0b10] md:grid-cols-[0.9fr_1.1fr]"
    >
      {/* EXPERIENCE DESCRIPTION */}
      <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-10">
        <p className="text-sm font-medium text-purple-400">
          {language === "sr"
            ? "Profesionalno iskustvo"
            : "Professional Experience"}
        </p>

        <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
          {[
            language === "sr"
              ? "YouTube video montaža i upravljanje kanalom"
              : "YouTube Video Editing & Channel Management",
            language === "sr"
              ? "Marketing malih biznisa"
              : "Small Business Marketing",
            language === "sr"
              ? "Rebrending i vizuelni dizajn"
              : "Rebranding & Visual Design",
          ][selectedMember]}
        </h3>

        <p className="mt-5 text-sm leading-7 text-gray-400 md:text-base">
          {[
            language === "sr"
              ? "Praktično iskustvo u montaži videa, objavi YouTube sadržaja, izradi thumbnailova, pisanju naslova i optimizaciji YouTube metapodataka u okviru definisane strategije kanala."
              : "Hands-on experience in video editing, YouTube publishing, thumbnail creation, title writing, and metadata optimization within a defined channel strategy.",
            language === "sr"
              ? "Planiranje i realizacija marketinških strategija za više malih biznisa sa fokusom na povećanje vidljivosti, privlačenje novih klijenata i unapređenje online prisustva."
              : "Planning and executing marketing strategies for multiple small businesses, focusing on increasing visibility, attracting new clients, and improving online presence.",
            language === "sr"
              ? "Izrada kompletnog vizuelnog identiteta za male biznise, uključujući logotipe, menije, promotivne materijale i redizajn postojećih brendova."
              : "Creating complete visual identities for small businesses, including logos, menus, promotional materials, and redesigns of existing brands.",
          ][selectedMember]}
        </p>
      </div>

      {/* AREAS OF EXPERTISE */}
      <div className="p-7 md:p-10">
        <h4 className="mb-6 text-lg font-semibold text-white">
          {language === "sr"
            ? "Oblasti stručnosti"
            : "Areas of Expertise"}
        </h4>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [
              language === "sr" ? "Objava na YouTube" : "YouTube Publishing",
              language === "sr" ? "Thumbnail dizajn" : "Thumbnail Design",
              language === "sr" ? "Optimizacija naslova" : "Title Optimization",
              "YouTube SEO",
              language === "sr" ? "Video montaža" : "Video Editing",
              language === "sr" ? "Analitika" : "Analytics",
            ],
            [
              language === "sr" ? "Strategija društvenih mreža" : "Social Media Strategy",
              language === "sr" ? "Brend marketing" : "Brand Marketing",
              language === "sr" ? "Kreiranje sadržaja" : "Content Creation",
              language === "sr" ? "Privlačenje klijenata" : "Client Acquisition",
              "Meta Ads",
              language === "sr" ? "Rast malih biznisa" : "Small Business Growth",
            ],
            [
              language === "sr" ? "Dizajn logotipa" : "Logo Design",
              language === "sr" ? "Dizajn menija" : "Menu Design",
              language === "sr" ? "Vizuelni identitet" : "Visual Identity",
              language === "sr" ? "Grafički dizajn" : "Graphic Design",
              language === "sr" ? "Štampani materijali" : "Print Materials",
              language === "sr" ? "Rebrending biznisa" : "Business Rebranding",
            ],
          ][selectedMember].map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-white/10 px-4 py-3 transition-colors duration-300 hover:border-purple-500/40"
            >
              <span className="text-sm text-gray-300">{skill}</span>
            </div>
          ))}
        </div>

        {/* CENTERED NAVIGATION ARROWS */}
        <div className="mt-8 flex items-center justify-center gap-3 border-t border-white/10 pt-6">
          <button
            type="button"
            onClick={() =>
              setSelectedMember((selectedMember + 2) % 3)
            }
            aria-label={
              language === "sr" ? "Prethodni član" : "Previous member"
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:border-purple-500/60 hover:bg-purple-500/10"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() =>
              setSelectedMember((selectedMember + 1) % 3)
            }
            aria-label={
              language === "sr" ? "Sledeći član" : "Next member"
            }
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:border-purple-500/60 hover:bg-purple-500/10"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>












{/* LENSIA MEDIA — CONTACT */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-full bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.10),transparent_60%)]" />

  <div className="relative mx-auto max-w-[1600px]">
    {/* HEADER */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
        <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(167,139,250,0.7)]" />

        {language === "sr"
          ? "Lensia Media / Kontakt"
          : "Lensia Media / Contact"}
      </div>

      
<h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
  <span className="bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
    {language === "sr" ? "Kontaktirajte nas" : "Get in touch"}
  </span>
</h2>


      <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
        {language === "sr"
          ? "Opiši nam svoju ideju, ciljeve ili izazove. Razgovarajmo o tome kako Lensia Media može da doprinese tvom projektu."
          : "Tell us about your ideas, goals or challenges. Let's discuss how Lensia Media can contribute to your project."}
      </p>

      {/* CONTACT CARD */}
      <div className="mt-12 w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b10] sm:mt-14">
        <div className="border-t-2 border-t-purple-400 px-6 py-10 sm:px-12 sm:py-14">
          {/* EMAIL ICON */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-purple-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            {language === "sr"
              ? "Kontaktiraj nas putem emaila"
              : "Get in touch by email"}
          </p>

          {/* EMAIL ADDRESS */}
          <p className="mt-3 break-all text-lg font-semibold text-white sm:text-2xl">
            lensiamedia@gmail.com
          </p>

          {/* LARGE GMAIL BUTTON */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lensiamedia%40gmail.com&su=Lensia%20Media%20-%20Poslovni%20upit"
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto mt-8 flex min-h-[76px] w-full max-w-xl items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-5 text-lg font-bold text-white shadow-[0_0_35px_rgba(124,58,237,0.22)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(124,58,237,0.35)] active:scale-[0.99] sm:px-8 sm:text-xl"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            <span>
              {language === "sr"
                ? "Pošalji email"
                : "Send an email"}
            </span>

            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          {/* FOOTNOTE */}
          <p className="mt-5 text-sm text-gray-500">
            {language === "sr"
              ? "Saradnja sa klijentima širom sveta"
              : "Working with clients worldwide"}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



{/* Footer */}
<footer className="border-t border-white/10 bg-[#050505]">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 sm:flex-row">
    {/* Brand */}
    <a href="/" className="text-center sm:text-left">
      <p className="text-sm font-bold tracking-[0.12em] text-white">
        LENSIA <span className="text-purple-400">MEDIA</span>
      </p>
      <p className="mt-1 text-xs text-slate-500">
        {language === "en" ? "Growth Together" : "Rastemo zajedno"}
      </p>
    </a>

    {/* Legal links */}
    <div className="flex items-center gap-5 text-xs text-slate-400 sm:gap-6 sm:text-sm">
      <a
        href="/privacy"
        className="transition-colors hover:text-white"
      >
        {language === "en" ? "Privacy Policy" : "Politika privatnosti"}
      </a>

      <a
        href="/terms"
        className="transition-colors hover:text-white"
      >
        {language === "en" ? "Terms of Service" : "Uslovi korišćenja"}
      </a>
    </div>

    {/* Copyright */}
    <p className="text-xs text-slate-500">
      © {new Date().getFullYear()} Lensia Media
    </p>
  </div>
</footer>


      </main>
    );
}