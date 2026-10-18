
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

type Category = "youtube" | "instagram" | "services";

const srTranslations: Record<string, string> = {
  "Back to homepage": "Nazad na početnu",
  "LET'S WORK TOGETHER": "HAJDE DA RADIMO ZAJEDNO",
  "Choose your direction.": "Izaberi svoj pravac.",
  "Find your package.": "Pronađi svoj paket.",
  "Tell us about your project.": "Reci nam nešto o svom projektu.",
  "Start by choosing the platform or service you need.": "Za početak izaberi platformu ili uslugu koja ti je potrebna.",
  "Select an offer on the left to explore everything included.": "Izaberi ponudu sa leve strane i pogledaj šta je uključeno.",
  "Share a few details. We'll get back to you to discuss the next steps.": "Podeli nekoliko detalja. Javićemo ti se da dogovorimo naredne korake.",
  "CATEGORY": "KATEGORIJA",
  "PACKAGE": "PAKET",
  "YOUR DETAILS": "TVOJI PODACI",
  "VIDEO": "VIDEO",
  "SOCIAL": "DRUŠTVENE MREŽE",
  "CREATIVE": "KREATIVNO",
  "Optimize your channel and build a clearer growth strategy.": "Optimizuj svoj kanal i napravi jasniju strategiju rasta.",
  "Improve your profile, content direction and brand presence.": "Unapredi profil, smer sadržaja i prisustvo brenda.",
  "One-time services": "Pojedinačne usluge",
  "Choose an individual service tailored to your project.": "Izaberi pojedinačnu uslugu prilagođenu svom projektu.",
  "Explore offers": "Pogledaj ponude",
  "Continue": "Nastavi",
  "AVAILABLE OFFERS": "DOSTUPNE PONUDE",
  "Change category": "Promeni kategoriju",
  "SELECT AN OFFER": "IZABERI PONUDU",
  "POPULAR": "POPULARNO",
  "IN DEVELOPMENT": "U RAZVOJU",
  "Selected": "Izabrano",
  "PACKAGE DETAILS": "DETALJI PAKETA",
  "POPULAR CHOICE": "POPULARAN IZBOR",
  "About this offer": "O ovoj ponudi",
  "What's included": "Šta je uključeno",
  "WHAT YOU CAN EXPECT": "ŠTA MOŽEŠ DA OČEKUJEŠ",
  "This package is still in development. Its final scope and pricing will be agreed with you before any work begins.": "Ovaj paket je još u razvoju. Konačan obim usluge i cena biće dogovoreni pre početka rada.",
  "Discuss this package": "Razgovaraj o ovom paketu",
  "Continue with this package": "Nastavi sa ovim paketom",
  "No payment is required at this stage. We'll discuss the project with you first.": "U ovoj fazi nema plaćanja. Najpre ćemo razgovarati o tvom projektu.",
  "← Back to categories": "← Nazad na kategorije",
  "YOUR SELECTION": "TVOJ IZBOR",
  "Change package": "Promeni paket",
  "Project details": "Detalji projekta",
  "Tell us a little about yourself and what you want to achieve.": "Reci nam nešto o sebi i šta želiš da postigneš.",
  "Your name *": "Tvoje ime *",
  "Email address *": "Email adresa *",
  "Budget (optional)": "Budžet (opciono)",
  "Select your budget": "Izaberi budžet",
  "Under €50": "Manje od 50 €",
  "€50–€100": "50–100 €",
  "€100–€200": "100–200 €",
  "€200+": "200 €+",
  "Flexible": "Fleksibilan",
  "Tell us about your project *": "Opiši svoj projekat *",
  "What are your goals? Share your channel or profile link and tell us what you need.": "Koji su tvoji ciljevi? Pošalji link kanala ili profila i napiši šta ti je potrebno.",
  "Your inquiry could not be sent. Please try again or email lensiamedia@gmail.com.": "Upit nije poslat. Pokušaj ponovo ili piši na lensiamedia@gmail.com.",
  "Connection error. Please try again or email lensiamedia@gmail.com.": "Greška u povezivanju. Pokušaj ponovo ili piši na lensiamedia@gmail.com.",
  "Sending...": "Slanje...",
  "Send project inquiry": "Pošalji upit",
  "This is an inquiry, not a payment. We'll contact you to discuss the project before any work begins.": "Ovo je upit, ne plaćanje. Kontaktiraćemo te da razgovaramo o projektu pre početka rada.",
  "Prefer email?": "Više ti odgovara email?",
  "← Back to packages": "← Nazad na pakete",
  "← Back to package": "← Nazad na paket",
  "Strategy · Creativity · Growth": "Strategija · Kreativnost · Rast",
  "Starter": "Starter",
  "Growth": "Growth",
  "Media Pro": "Media Pro",
  "Pro": "Pro",
  "Combo": "Combo",
  "Essential channel optimization": "Osnovna optimizacija YouTube kanala",
  "A starting point for creators who want to improve their YouTube channel's presentation, discoverability and overall structure.": "Početni paket za kreatore koji žele da unaprede izgled, vidljivost i strukturu svog YouTube kanala.",
  "Channel review": "Analiza kanala",
  "An assessment of your channel's current presentation and the main areas that could be improved.": "Procena trenutnog izgleda kanala i glavnih oblasti koje se mogu unaprediti.",
  "SEO recommendations": "SEO preporuke",
  "Practical recommendations for video titles, descriptions and relevant search terms.": "Praktične preporuke za naslove videa, opise i relevantne pojmove za pretragu.",
  "Channel optimization guidance": "Smernice za optimizaciju kanala",
  "Suggestions for improving the consistency and clarity of your channel's presentation.": "Predlozi za dosledniji i jasniji izgled tvog kanala.",
  "Action plan": "Plan aktivnosti",
  "A clear list of recommended next steps to help you improve your channel.": "Jasna lista narednih koraka za unapređenje kanala.",
  "You receive an evaluation of your channel and practical recommendations you can use to improve it.": "Dobijaš procenu kanala i praktične preporuke koje možeš da primeniš za njegovo unapređenje.",
  "Channel growth strategy": "Strategija rasta kanala",
  "For creators who want a more structured approach to content discovery, channel development and long-term growth.": "Za kreatore koji žele strukturisaniji pristup otkrivanju sadržaja, razvoju kanala i dugoročnom rastu.",
  "Channel and content audit": "Analiza kanala i sadržaja",
  "An assessment of your channel's presentation, content direction and opportunities for improvement.": "Procena izgleda kanala, pravca sadržaja i mogućnosti za unapređenje.",
  "YouTube SEO strategy": "YouTube SEO strategija",
  "Recommendations for titles, descriptions, keywords and content discoverability.": "Preporuke za naslove, opise, ključne reči i vidljivost sadržaja.",
  "Content improvement ideas": "Ideje za unapređenje sadržaja",
  "Suggestions for making your content more relevant to your target audience.": "Predlozi kako da sadržaj bude relevantniji ciljnoj publici.",
  "Growth recommendations": "Preporuke za rast",
  "A practical set of priorities to help guide your channel's future development.": "Praktični prioriteti koji usmeravaju budući razvoj kanala.",
  "Actionable next steps": "Konkretni naredni koraci",
  "Recommendations organized so you know what to focus on first.": "Preporuke organizovane tako da znaš čime prvo da se pozabaviš.",
  "You receive a structured growth strategy with clear priorities and recommendations for your channel.": "Dobijaš strukturisanu strategiju rasta sa jasnim prioritetima i preporukama za kanal.",
  "Advanced channel support": "Napredna podrška za kanal",
  "An advanced option for creators who need a deeper review of their channel and more comprehensive strategic guidance.": "Napredna opcija za kreatore kojima je potrebna detaljnija analiza kanala i sveobuhvatnije strateške smernice.",
  "In-depth channel audit": "Detaljna analiza kanala",
  "A comprehensive review of channel presentation, content direction and discoverability.": "Sveobuhvatna analiza izgleda kanala, pravca sadržaja i vidljivosti.",
  "Advanced SEO recommendations": "Napredne SEO preporuke",
  "Detailed suggestions for improving metadata and the way videos are positioned for search.": "Detaljni predlozi za unapređenje metapodataka i pozicioniranja videa u pretrazi.",
  "Content strategy": "Strategija sadržaja",
  "Recommendations for content planning, consistency and alignment with your target audience.": "Preporuke za planiranje sadržaja, doslednost i usklađivanje sa ciljnom publikom.",
  "Brand and presentation review": "Analiza brenda i izgleda",
  "Suggestions for creating a more consistent and recognizable channel identity.": "Predlozi za dosledniji i prepoznatljiviji identitet kanala.",
  "Prioritized improvement roadmap": "Plan unapređenja po prioritetima",
  "A structured overview of recommended improvements and the order in which to approach them.": "Strukturisan pregled preporučenih unapređenja i redosleda njihove primene.",
  "You receive a comprehensive channel review and a prioritized plan for future improvements.": "Dobijaš sveobuhvatnu analizu kanala i plan budućih unapređenja po prioritetima.",
  "Essential profile optimization": "Osnovna optimizacija profila",
  "A starting point for improving your Instagram profile's clarity, presentation and first impression.": "Početni paket za jasniji i profesionalniji Instagram profil i bolji prvi utisak.",
  "Profile review": "Analiza profila",
  "An assessment of your bio, profile presentation and how clearly your account communicates its purpose.": "Procena biografije, izgleda profila i jasnoće poruke koju nalog prenosi.",
  "Bio improvement suggestions": "Predlozi za unapređenje biografije",
  "Recommendations for making your profile description clearer and more relevant to your audience.": "Preporuke da opis profila bude jasniji i relevantniji publici.",
  "Profile presentation": "Izgled profila",
  "Suggestions for improving consistency and making important information easier to find.": "Predlozi za veću doslednost i lakše pronalaženje važnih informacija.",
  "You receive practical recommendations for a clearer and more professional Instagram profile.": "Dobijaš praktične preporuke za jasniji i profesionalniji Instagram profil.",
  "Profile growth strategy": "Strategija rasta profila",
  "For creators and brands looking for a more consistent Instagram presence and a clearer content direction.": "Za kreatore i brendove koji žele doslednije prisustvo na Instagramu i jasniji pravac sadržaja.",
  "Profile and content review": "Analiza profila i sadržaja",
  "A review of your profile presentation and the general direction of your published content.": "Analiza izgleda profila i opšteg pravca objavljenog sadržaja.",
  "Content strategy recommendations": "Preporuke za strategiju sadržaja",
  "Ideas for content themes and a more consistent publishing approach.": "Ideje za teme sadržaja i dosledniji ritam objavljivanja.",
  "Audience positioning": "Pozicioniranje publike",
  "Recommendations for communicating more clearly with your intended audience.": "Preporuke za jasniju komunikaciju sa ciljnom publikom.",
  "Profile growth action plan": "Plan rasta profila",
  "Practical priorities to guide the next stage of your Instagram development.": "Praktični prioriteti za narednu fazu razvoja Instagram profila.",
  "You receive a content direction and practical recommendations for developing your Instagram presence.": "Dobijaš smernice za sadržaj i praktične preporuke za razvoj prisustva na Instagramu.",
  "Advanced strategy and analytics": "Napredna strategija i analitika",
  "A more comprehensive strategic review for brands and creators who want to refine their Instagram content and positioning.": "Sveobuhvatnija strateška analiza za brendove i kreatore koji žele da unaprede sadržaj i pozicioniranje na Instagramu.",
  "Detailed profile audit": "Detaljna analiza profila",
  "A deeper review of your profile, visual consistency and content direction.": "Detaljnija analiza profila, vizuelne doslednosti i pravca sadržaja.",
  "Performance review guidance": "Smernice za analizu rezultata",
  "Guidance on key Instagram insights and metrics worth reviewing when evaluating content.": "Smernice za važne Instagram uvide i metrike koje treba pratiti pri proceni sadržaja.",
  "Brand positioning": "Pozicioniranje brenda",
  "Suggestions for communicating your value and maintaining a recognizable presence.": "Predlozi za jasnije predstavljanje vrednosti i prepoznatljivo prisustvo.",
  "Strategic action plan": "Strateški plan aktivnosti",
  "A prioritized list of recommendations for your next stage of development.": "Lista preporuka po prioritetima za narednu fazu razvoja.",
  "You receive a detailed strategic review and a prioritized plan for improving your Instagram presence.": "Dobijaš detaljnu stratešku analizu i plan unapređenja prisustva na Instagramu.",
  "YouTube + Instagram": "YouTube + Instagram",
  "A combined service concept for creators and brands who want to develop their YouTube and Instagram presence together.": "Kombinovana usluga za kreatore i brendove koji žele zajednički razvoj YouTube i Instagram prisustva.",
  "Combined channel and profile review": "Zajednička analiza kanala i profila",
  "A review of your YouTube channel and Instagram profile, including their presentation and positioning.": "Analiza YouTube kanala i Instagram profila, uključujući njihov izgled i pozicioniranje.",
  "Cross-platform recommendations": "Preporuke za obe platforme",
  "Suggestions for maintaining a consistent identity across both platforms.": "Predlozi za dosledan identitet na obe platforme.",
  "Content direction": "Pravac sadržaja",
  "Initial recommendations for aligning your content and communicating with your target audience.": "Početne preporuke za usklađivanje sadržaja i komunikaciju sa ciljnom publikom.",
  "Custom service proposal": "Ponuda prilagođena projektu",
  "The exact scope and pricing can be discussed based on your goals and requirements.": "Tačan obim usluge i cena dogovaraju se prema tvojim ciljevima i zahtevima.",
  "This package is currently in development. Contact us to discuss your project and the most suitable scope of work.": "Ovaj paket je trenutno u razvoju. Kontaktiraj nas da razgovaramo o projektu i najprikladnijem obimu usluge.",
  "Custom thumbnail design for one video": "Dizajn thumbnaila za jedan video",
  "per thumbnail": "po thumbnailu",
  "A custom YouTube thumbnail designed to match your video's topic and channel style.": "YouTube thumbnail dizajniran prema temi videa i stilu kanala.",
  "Custom thumbnail design": "Izrada thumbnaila po meri",
  "A design tailored to the subject and style of your video.": "Dizajn prilagođen temi i stilu tvog videa.",
  "Clear visual message": "Jasna vizuelna poruka",
  "A clear composition that helps viewers understand the video's main idea at a glance.": "Jasna kompozicija koja gledaocima pomaže da odmah razumeju glavnu ideju videa.",
  "Ready-to-use file": "Fajl spreman za korišćenje",
  "A finished image prepared for use as a YouTube thumbnail.": "Gotova slika pripremljena za YouTube thumbnail.",
  "One custom thumbnail design for one video.": "Jedan gotov thumbnail dizajn. Usluga obuhvata thumbnail za jedan video.",
  "One-time YouTube channel SEO audit": "Jednokratna SEO analiza YouTube kanala",
  "per channel": "po kanalu",
  "per video": "po videu",
  "A one-time review of your entire YouTube channel to identify SEO and presentation issues, with a short explanation of the main mistakes and practical recommendations.": "Jednokratna analiza celog YouTube kanala radi pronalaženja SEO i prezentacionih problema, uz kratko objašnjenje glavnih grešaka i praktične preporuke.",
  "Channel SEO review": "SEO analiza kanala",
  "A review of key channel SEO elements and how clearly the channel is positioned for discovery.": "Pregled ključnih SEO elemenata kanala i procena koliko je kanal dobro postavljen za pronalaženje u pretrazi.",
  "Channel errors explained": "Objašnjenje grešaka na kanalu",
  "A concise explanation of the main issues found across the channel and why they may be limiting its performance.": "Kratko objašnjenje glavnih problema na kanalu i načina na koji mogu da ograniče njegove rezultate.",
  "SEO recomendations": "SEO preporuke",
  "Practical recommendations for improving channel keywords, descriptions and discoverability.": "Praktične preporuke za unapređenje ključnih reči, opisa i vidljivosti kanala.",
  "Action points": "Konkretni koraci",
  "A short list of prioritized changes you can make to improve your channel.": "Kratka lista promena po prioritetu koje možeš da primeniš za unapređenje kanala.",
  "You receive a one-time SEO review of your entire YouTube channel, with the main issues explained briefly and practical next steps.": "Dobijaš SEO preporuke prilagođene jednom YouTube videu.",
  "Editing for YouTube videos": "Montaža YouTube videa",
  "Video editing tailored to your content, preferred style and project requirements.": "Montaža videa prilagođena sadržaju, željenom stilu i zahtevima projekta.",
  "Project review": "Pregled projekta",
  "We review your footage, references and desired final result before agreeing on the scope.": "Pregledamo snimke, reference i željeni rezultat pre dogovora o obimu posla.",
  "Editing scope": "Obim montaže",
  "The editing approach is agreed according to the length, complexity and style of the video.": "Način montaže dogovaramo prema dužini, složenosti i stilu videa.",
  "Project-specific quote": "Cena prema projektu",
  "Pricing is provided after reviewing the requirements of your project.": "Cenu određujemo nakon pregleda zahteva projekta.",
  "The final deliverables, timeline and price are agreed individually for each project.": "Konačni materijali, rokovi i cena dogovaraju se zasebno za svaki projekat.",
  "A refreshed look for your channel": "Osvežen izgled kanala",
  "A visual refresh designed to make your channel's identity more consistent and recognizable.": "Vizuelno osvežavanje koje identitet tvog kanala čini doslednijim i prepoznatljivijim.",
  "Visual identity review": "Analiza vizuelnog identiteta",
  "A review of the existing channel presentation and direction for a refreshed look.": "Analiza trenutnog izgleda kanala i smernice za osvežen vizuelni identitet.",
  "Branding recommendations": "Preporuke za brendiranje",
  "Suggestions for a more consistent visual style across relevant channel elements.": "Predlozi za dosledniji vizuelni stil kroz ključne elemente kanala.",
  "Custom project scope": "Obim projekta po meri",
  "The specific design deliverables and price are agreed based on your needs.": "Konkretni dizajnerski materijali i cena dogovaraju se prema tvojim potrebama.",
  "The exact rebranding deliverables are defined together before the project begins.": "Tačan obim rebrendinga definišemo zajedno pre početka projekta.",
  "Photo editing for Instagram": "Obrada fotografija za Instagram",
  "Photo editing tailored to your preferred look and the visual identity of your Instagram account.": "Obrada fotografija prilagođena željenom izgledu i vizuelnom identitetu Instagram naloga.",
  "Style and reference review": "Pregled stila i referenci",
  "We review your images and references to understand the desired visual direction.": "Pregledamo slike i reference kako bismo razumeli željeni vizuelni pravac.",
  "Editing requirements": "Zahtevi za obradu",
  "The editing scope is agreed based on the number of images and complexity.": "Obim obrade dogovaramo prema broju slika i složenosti posla.",
  "Custom quote": "Individualna ponuda",
  "Pricing is provided according to your project requirements.": "Cena se određuje prema zahtevima projekta.",
  "The number of edited images, style and delivery details are agreed before work begins.": "Broj obrađenih slika, stil i detalji isporuke dogovaraju se pre početka rada.",
  "Editing for Instagram Reels": "Montaža Instagram Reels videa",
  "Short-form video editing adapted to your content, references and preferred style for Instagram Reels.": "Montaža kratkih videa prilagođena sadržaju, referencama i željenom stilu za Instagram Reels.",
  "Footage and reference review": "Pregled snimaka i referenci",
  "We review your source material and references to agree on the editing direction.": "Pregledamo izvorne snimke i reference kako bismo dogovorili pravac montaže.",
  "The scope is agreed according to the length, complexity and style of the Reel.": "Obim posla dogovaramo prema dužini, složenosti i stilu Reels videa.",
  "Pricing is determined after reviewing your project requirements.": "Cenu određujemo nakon pregleda zahteva projekta.",
  "The editing scope, delivery details and price are agreed individually for your Reel.": "Obim montaže, detalji isporuke i cena dogovaraju se za svaki Reels video posebno.",
  "Contact": "Kontakt",
  "Custom": "Po dogovoru"
};

function tr(value: string, isSerbian: boolean): string {
  return isSerbian ? (srTranslations[value] ?? value) : value;
}


type Offer = {
  id: string;
  category: Category[];
  name: string;
  price: string;
  unit?: string;
  short: string;
  description: string;
  features: { title: string; description: string }[];
  result: string;
  accent: "red" | "purple" | "white";
  popular?: boolean;
  development?: boolean;
};

const offers: Offer[] = [
  {
    id: "youtube-starter",
    category: ["youtube"],
    name: "Starter",
    price: "€69",
    short: "Essential channel optimization",
    description:
      "A starting point for creators who want to improve their YouTube channel's presentation, discoverability and overall structure.",
    features: [
      {
        title: "Channel review",
        description:
          "An assessment of your channel's current presentation and the main areas that could be improved.",
      },
      {
        title: "SEO recommendations",
        description:
          "Practical recommendations for video titles, descriptions and relevant search terms.",
      },
      {
        title: "Channel optimization guidance",
        description:
          "Suggestions for improving the consistency and clarity of your channel's presentation.",
      },
      {
        title: "Action plan",
        description:
          "A clear list of recommended next steps to help you improve your channel.",
      },
    ],
    result:
      "You receive an evaluation of your channel and practical recommendations you can use to improve it.",
    accent: "red",
  },
  {
    id: "youtube-growth",
    category: ["youtube"],
    name: "Growth",
    price: "€99",
    short: "Channel growth strategy",
    description:
      "For creators who want a more structured approach to content discovery, channel development and long-term growth.",
    features: [
      {
        title: "Channel and content audit",
        description:
          "An assessment of your channel's presentation, content direction and opportunities for improvement.",
      },
      {
        title: "YouTube SEO strategy",
        description:
          "Recommendations for titles, descriptions, keywords and content discoverability.",
      },
      {
        title: "Content improvement ideas",
        description:
          "Suggestions for making your content more relevant to your target audience.",
      },
      {
        title: "Growth recommendations",
        description:
          "A practical set of priorities to help guide your channel's future development.",
      },
      {
        title: "Actionable next steps",
        description:
          "Recommendations organized so you know what to focus on first.",
      },
    ],
    result:
      "You receive a structured growth strategy with clear priorities and recommendations for your channel.",
    accent: "red",
    popular: true,
  },
  {
    id: "youtube-media-pro",
    category: ["youtube"],
    name: "Media Pro",
    price: "€199",
    short: "Advanced channel support",
    description:
      "An advanced option for creators who need a deeper review of their channel and more comprehensive strategic guidance.",
    features: [
      {
        title: "In-depth channel audit",
        description:
          "A comprehensive review of channel presentation, content direction and discoverability.",
      },
      {
        title: "Advanced SEO recommendations",
        description:
          "Detailed suggestions for improving metadata and the way videos are positioned for search.",
      },
      {
        title: "Content strategy",
        description:
          "Recommendations for content planning, consistency and alignment with your target audience.",
      },
      {
        title: "Brand and presentation review",
        description:
          "Suggestions for creating a more consistent and recognizable channel identity.",
      },
      {
        title: "Prioritized improvement roadmap",
        description:
          "A structured overview of recommended improvements and the order in which to approach them.",
      },
    ],
    result:
      "You receive a comprehensive channel review and a prioritized plan for future improvements.",
    accent: "red",
  },
  {
    id: "instagram-starter",
    category: ["instagram"],
    name: "Starter",
    price: "€19",
    short: "Essential profile optimization",
    description:
      "A starting point for improving your Instagram profile's clarity, presentation and first impression.",
    features: [
      {
        title: "Profile review",
        description:
          "An assessment of your bio, profile presentation and how clearly your account communicates its purpose.",
      },
      {
        title: "Bio improvement suggestions",
        description:
          "Recommendations for making your profile description clearer and more relevant to your audience.",
      },
      {
        title: "Profile presentation",
        description:
          "Suggestions for improving consistency and making important information easier to find.",
      },
    ],
    result:
      "You receive practical recommendations for a clearer and more professional Instagram profile.",
    accent: "purple",
  },
  {
    id: "instagram-growth",
    category: ["instagram"],
    name: "Growth",
    price: "€39",
    short: "Profile growth strategy",
    description:
      "For creators and brands looking for a more consistent Instagram presence and a clearer content direction.",
    features: [
      {
        title: "Profile and content review",
        description:
          "A review of your profile presentation and the general direction of your published content.",
      },
      {
        title: "Content strategy recommendations",
        description:
          "Ideas for content themes and a more consistent publishing approach.",
      },
      {
        title: "Audience positioning",
        description:
          "Recommendations for communicating more clearly with your intended audience.",
      },
      {
        title: "Profile growth action plan",
        description:
          "Practical priorities to guide the next stage of your Instagram development.",
      },
    ],
    result:
      "You receive a content direction and practical recommendations for developing your Instagram presence.",
    accent: "purple",
    popular: true,
  },
  {
    id: "instagram-pro",
    category: ["instagram"],
    name: "Pro",
    price: "€79",
    short: "Advanced strategy and analytics",
    description:
      "A more comprehensive strategic review for brands and creators who want to refine their Instagram content and positioning.",
    features: [
      {
        title: "Detailed profile audit",
        description:
          "A deeper review of your profile, visual consistency and content direction.",
      },
      {
        title: "Content strategy",
        description:
          "Recommendations for content themes, formats and a consistent publishing approach.",
      },
      {
        title: "Performance review guidance",
        description:
          "Guidance on key Instagram insights and metrics worth reviewing when evaluating content.",
      },
      {
        title: "Brand positioning",
        description:
          "Suggestions for communicating your value and maintaining a recognizable presence.",
      },
      {
        title: "Strategic action plan",
        description:
          "A prioritized list of recommendations for your next stage of development.",
      },
    ],
    result:
      "You receive a detailed strategic review and a prioritized plan for improving your Instagram presence.",
    accent: "purple",
  },
  {
    id: "combo",
    category: ["youtube", "instagram"],
    name: "Combo",
    price: "Contact",
    short: "YouTube + Instagram",
    description:
      "A combined service concept for creators and brands who want to develop their YouTube and Instagram presence together.",
    features: [
      {
        title: "Combined channel and profile review",
        description:
          "A review of your YouTube channel and Instagram profile, including their presentation and positioning.",
      },
      {
        title: "Cross-platform recommendations",
        description:
          "Suggestions for maintaining a consistent identity across both platforms.",
      },
      {
        title: "Content direction",
        description:
          "Initial recommendations for aligning your content and communicating with your target audience.",
      },
      {
        title: "Custom service proposal",
        description:
          "The exact scope and pricing can be discussed based on your goals and requirements.",
      },
    ],
    result:
      "This package is currently in development. Contact us to discuss your project and the most suitable scope of work.",
    accent: "purple",
    development: true,
  },
  {
    id: "thumbnail-design",
    category: ["services"],
    name: "Thumbnail Design",
    price: "€5",
    unit: "per video",
    short: "Custom thumbnail design for one video",
    description:
      "A custom YouTube thumbnail designed to match your video's topic and channel style.",
    features: [
      {
        title: "Custom thumbnail design",
        description:
          "A design tailored to the subject and style of your video.",
      },
      {
        title: "Clear visual message",
        description:
          "A clear composition that helps viewers understand the video's main idea at a glance.",
      },
      {
        title: "Ready-to-use file",
        description:
          "A finished image prepared for use as a YouTube thumbnail.",
      },
    ],
    result:
      "One custom thumbnail design for one video.",
    accent: "red",
  },
  {
    id: "youtube-seo",
    category: ["services"],
    name: "YouTube SEO",
    price: "€25",
    unit: "per channel",
    short: "One-time YouTube channel SEO audit",
    description:
      "A one-time review of your entire YouTube channel to identify SEO and presentation issues, with a short explanation of the main mistakes and practical recommendations.",
    features: [
      {
        title: "Channel SEO review",
        description:
          "A review of key channel SEO elements and how clearly the channel is positioned for discovery.",
      },
      {
        title: "Channel errors explained",
        description:
          "A concise explanation of the main issues found across the channel and why they may be limiting its performance.",
      },
      {
        title: "SEO recommendations",
        description:
          "Practical recommendations for improving channel keywords, descriptions and discoverability.",
      },
      {
        title: "Action points",
        description:
          "A short list of prioritized changes you can make to improve your channel.",
      },
    ],
    result:
      "You receive a one-time SEO review of your entire YouTube channel, with the main issues explained briefly and practical next steps.",
    accent: "red",
  },
  {
    id: "video-editing",
    category: ["services"],
    name: "Video Editing",
    price: "Custom",
    short: "Editing for YouTube videos",
    description:
      "Video editing tailored to your content, preferred style and project requirements.",
    features: [
      {
        title: "Project review",
        description:
          "We review your footage, references and desired final result before agreeing on the scope.",
      },
      {
        title: "Editing scope",
        description:
          "The editing approach is agreed according to the length, complexity and style of the video.",
      },
      {
        title: "Project-specific quote",
        description:
          "Pricing is provided after reviewing the requirements of your project.",
      },
    ],
    result:
      "The final deliverables, timeline and price are agreed individually for each project.",
    accent: "red",
  },
  {
    id: "youtube-rebranding",
    category: ["services"],
    name: "YouTube Rebranding",
    price: "Custom",
    short: "A refreshed look for your channel",
    description:
      "A visual refresh designed to make your channel's identity more consistent and recognizable.",
    features: [
      {
        title: "Visual identity review",
        description:
          "A review of the existing channel presentation and direction for a refreshed look.",
      },
      {
        title: "Branding recommendations",
        description:
          "Suggestions for a more consistent visual style across relevant channel elements.",
      },
      {
        title: "Custom project scope",
        description:
          "The specific design deliverables and price are agreed based on your needs.",
      },
    ],
    result:
      "The exact rebranding deliverables are defined together before the project begins.",
    accent: "red",
  },
  {
    id: "instagram-photo-editing",
    category: ["services"],
    name: "Instagram Photo Editing",
    price: "Custom",
    short: "Photo editing for Instagram",
    description:
      "Photo editing tailored to your preferred look and the visual identity of your Instagram account.",
    features: [
      {
        title: "Style and reference review",
        description:
          "We review your images and references to understand the desired visual direction.",
      },
      {
        title: "Editing requirements",
        description:
          "The editing scope is agreed based on the number of images and complexity.",
      },
      {
        title: "Custom quote",
        description:
          "Pricing is provided according to your project requirements.",
      },
    ],
    result:
      "The number of edited images, style and delivery details are agreed before work begins.",
    accent: "purple",
  },
  {
    id: "instagram-reels-editing",
    category: ["services"],
    name: "Reels Video Editing",
    price: "Custom",
    short: "Editing for Instagram Reels",
    description:
      "Short-form video editing adapted to your content, references and preferred style for Instagram Reels.",
    features: [
      {
        title: "Footage and reference review",
        description:
          "We review your source material and references to agree on the editing direction.",
      },
      {
        title: "Editing requirements",
        description:
          "The scope is agreed according to the length, complexity and style of the Reel.",
      },
      {
        title: "Project-specific quote",
        description:
          "Pricing is determined after reviewing your project requirements.",
      },
    ],
    result:
      "The editing scope, delivery details and price are agreed individually for your Reel.",
    accent: "purple",
  },
];

const categoryInfo: Record<
  Category,
  { title: string; description: string; number: string }
> = {
  youtube: {
    title: "YouTube",
    description:
      "Optimize your channel and build a clearer growth strategy.",
    number: "01",
  },
  instagram: {
    title: "Instagram",
    description:
      "Improve your profile, content direction and brand presence.",
    number: "02",
  },
  services: {
    title: "One-time services",
    description:
      "Choose an individual service tailored to your project.",
    number: "03",
  },
};

const accents = {
  red: {
    border: "border-red-500/70",
    text: "text-red-400",
    bg: "bg-red-500/10",
    button: "bg-red-600 hover:bg-red-500",
    dot: "bg-red-500",
  },
  purple: {
    border: "border-purple-500/70",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    button: "bg-purple-600 hover:bg-purple-500",
    dot: "bg-purple-500",
  },
  white: {
    border: "border-white/40",
    text: "text-white",
    bg: "bg-white/5",
    button: "bg-white text-black hover:bg-white/90",
    dot: "bg-white",
  },
};

export default function BuyPage() {
  const { language } = useLanguage();
  const isSerbian = language === "sr";
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<Category>("youtube");
  const [selectedOfferId, setSelectedOfferId] = useState("youtube-growth");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const visibleOffers = offers.filter((offer) =>
    offer.category.includes(category)
  );

  const selectedOffer =
    visibleOffers.find((offer) => offer.id === selectedOfferId) ??
    visibleOffers[0];

  const accent = accents[selectedOffer.accent];

  function chooseCategory(nextCategory: Category) {
    setCategory(nextCategory);

    const firstOffer = offers.find((offer) =>
      offer.category.includes(nextCategory)
    );

    if (firstOffer) {
      setSelectedOfferId(firstOffer.id);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/mgaeqrrj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        window.location.href = "/buy/success";
        return;
      }

      setSubmitError(
        tr("Your inquiry could not be sent. Please try again or email lensiamedia@gmail.com.", isSerbian)
      );
    } catch {
      setSubmitError(
        tr("Connection error. Please try again or email lensiamedia@gmail.com.", isSerbian)
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-purple-500/30 selection:text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-purple-700/[0.09] blur-[140px]" />
        <div className="absolute right-[-180px] top-[42rem] h-[360px] w-[360px] rounded-full bg-red-600/[0.045] blur-[130px]" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
        <header className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20">
          <h1 className="text-4xl font-medium leading-[1.08] tracking-[-0.06em] sm:text-5xl md:text-6xl lg:text-7xl">
            {step === 1
              ? tr("Choose your direction.", isSerbian)
              : step === 2
                ? tr("Find your package.", isSerbian)
                : tr("Tell us about your project.", isSerbian)}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            {step === 1
              ? tr("Start by choosing the platform or service you need.", isSerbian)
              : step === 2
                ? tr("Select an offer on the left to explore everything included.", isSerbian)
                : tr("Share a few details. We'll get back to you to discuss the next steps.", isSerbian)}
          </p>
        </header>

        <div className="mx-auto w-full min-w-0 max-w-6xl">
          <div className="mb-5 flex justify-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs text-white/55 transition hover:border-white/25 hover:text-white"
            >
              <span aria-hidden="true">←</span>
              {tr("Back to homepage", isSerbian)}
            </Link>
          </div>

          <nav aria-label="Purchase steps" className="mb-8 grid w-full min-w-0 grid-cols-3 overflow-hidden rounded-xl border border-white/[0.09] bg-[#08080b] sm:mb-10">
            {[
              { number: 1, label: "CATEGORY" },
              { number: 2, label: "PACKAGE" },
              { number: 3, label: "YOUR DETAILS" },
            ].map((item) => {
              const isActive = step === item.number;
              const isCompleted = step > item.number;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setStep(item.number)}
                  aria-current={isActive ? "step" : undefined}
                  className={`group relative min-w-0 px-1 py-4 text-center text-[9px] font-medium tracking-[0.08em] transition-colors duration-200 sm:px-3 sm:text-xs sm:tracking-[0.16em] ${
                    isActive
                      ? "text-white"
                      : isCompleted
                        ? "text-white/65 hover:text-white"
                        : "text-white/35 hover:text-white/75"
                  }`}
                >
                  <span
                    className={`mr-1 transition-colors sm:mr-2 ${
                      isActive || isCompleted
                        ? "text-purple-400"
                        : "text-white/35 group-hover:text-purple-300"
                    }`}
                  >
                    0{item.number}
                  </span>
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full transition-opacity duration-200 ${
                      isActive
                        ? "bg-purple-500 opacity-100"
                        : "bg-white/15 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {step === 1 && (
            <section>
              <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
                {(["youtube", "instagram", "services"] as Category[]).map(
                  (item) => {
                    const selected = category === item;
                    const borderColor =
                      item === "youtube"
                        ? "border-red-500"
                        : item === "instagram"
                          ? "border-purple-500"
                          : "border-white/70";

                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => chooseCategory(item)}
                        className={`group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-2xl border bg-[#0b0b10]/90 p-6 text-left shadow-[0_16px_60px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#0e0e14] sm:p-8 ${
                          selected
                            ? `${borderColor} bg-white/[0.045] shadow-[0_18px_70px_rgba(124,58,237,0.08)]`
                            : "border-white/[0.09] hover:border-white/25"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full blur-3xl transition-opacity duration-300 ${
                            selected ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                          } ${item === "youtube" ? "bg-red-500/10" : item === "instagram" ? "bg-purple-500/10" : "bg-white/[0.04]"}`}
                        />
                        <div className="relative flex items-start justify-between gap-4">
                          <span className="text-[10px] tracking-[0.2em] text-white/40">
                            {categoryInfo[item].number} /{" "}
                            {item === "youtube"
                              ? "VIDEO"
                              : item === "instagram"
                                ? "SOCIAL"
                                : "CREATIVE"}
                          </span>
                          <span
                            className={`flex h-5 w-5 items-center justify-center border text-xs ${
                              selected
                                ? "border-purple-400 bg-purple-500 text-white"
                                : "border-white/20 text-transparent"
                            }`}
                          >
                            ✓
                          </span>
                        </div>

                        <div className="relative">
                          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                            {tr(categoryInfo[item].title, isSerbian)}
                          </h2>
                          <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                            {tr(categoryInfo[item].description, isSerbian)}
                          </p>
                        </div>

                        <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                          <span className="text-xs text-white/50">{tr("Explore offers", isSerbian)}</span>
                          <span
                            className={`text-lg transition-transform group-hover:translate-x-1 ${
                              selected ? "text-purple-400" : "text-white/50"
                            }`}
                          >
                            →
                          </span>
                        </div>
                      </button>
                    );
                  }
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-8 rounded-lg bg-white px-7 py-4 text-sm font-medium text-black shadow-[0_8px_30px_rgba(255,255,255,0.06)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/90"
                >{tr("Continue", isSerbian)}<span>→</span>
                </button>
              </div>
            </section>
          )}

          {step === 2 && (
            <section>
              <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] tracking-[0.22em] text-white/35">{tr("AVAILABLE OFFERS", isSerbian)}</p>
                  <h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
                    {tr(categoryInfo[category].title, isSerbian)}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="self-start rounded-full border border-white/10 px-4 py-2.5 text-xs text-white/55 transition hover:border-white/25 hover:text-white sm:self-auto"
                >{tr("← Change category", isSerbian)}</button>
              </div>

              <div className="grid items-start gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-7">
                <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0b10]/90 shadow-[0_18px_60px_rgba(0,0,0,0.2)]">
                  <div className="border-b border-white/10 px-5 py-4">
                    <p className="text-[10px] tracking-[0.2em] text-white/40">{tr("SELECT AN OFFER", isSerbian)}</p>
                  </div>

                  <div className="divide-y divide-white/[0.08]">
                    {visibleOffers.map((offer, index) => {
                      const selected = selectedOffer.id === offer.id;
                      const offerAccent = accents[offer.accent];

                      return (
                        <button
                          type="button"
                          key={offer.id}
                          onClick={() => setSelectedOfferId(offer.id)}
                          className={`relative flex w-full items-center justify-between gap-3 px-5 py-5 text-left transition duration-200 ${
                            selected
                              ? "bg-white/[0.045]"
                              : "hover:bg-white/[0.025]"
                          }`}
                        >
                          {selected && (
                            <span
                              className={`absolute bottom-0 left-0 top-0 w-[2px] ${offerAccent.dot}`}
                            />
                          )}

                          <div className="min-w-0">
                            <div className="mb-3 flex min-h-5 flex-wrap items-center gap-2.5">
                              <span className="text-[10px] text-white/25">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              {offer.popular && (
                                <span className="inline-flex items-center rounded-sm border border-purple-500/35 bg-purple-500/10 px-2 py-1 text-[9px] leading-none tracking-[0.1em] text-purple-300">{tr("POPULAR", isSerbian)}</span>
                              )}

                              {offer.development && (
                                <span className="inline-flex items-center rounded-sm border border-white/15 px-2 py-1 text-[9px] leading-none tracking-[0.08em] text-white/45">{tr("IN DEVELOPMENT", isSerbian)}</span>
                              )}
                            </div>

                            <p
                              className={`text-base font-medium ${
                                selected ? "text-white" : "text-white/75"
                              }`}
                            >
                              {tr(offer.name, isSerbian)}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-white/40">
                              {tr(offer.short, isSerbian)}
                            </p>
                          </div>

                          <div className="shrink-0 text-right">
                            <p className="text-lg font-medium tracking-tight">
                              {tr(offer.price, isSerbian)}
                            </p>
                            {offer.unit && (
                              <p className="mt-1 text-[10px] text-white/35">
                                {tr(offer.unit, isSerbian)}
                              </p>
                            )}
                            {selected && (
                              <p className={`mt-1 text-[10px] ${offerAccent.text}`}>{tr("Selected", isSerbian)}</p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div
                  className={`overflow-hidden rounded-2xl border border-white/[0.09] border-t-2 bg-[#0b0b10]/95 shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${accent.border}`}
                >
                  <div className="p-5 sm:p-8 lg:p-9">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p
                        className={`text-[10px] font-medium tracking-[0.22em] ${accent.text}`}
                      >{tr("PACKAGE DETAILS", isSerbian)}</p>

                      {selectedOffer.popular && (
                        <span className="border border-purple-500/30 px-3 py-1 text-[9px] tracking-[0.12em] text-purple-300">{tr("POPULAR CHOICE", isSerbian)}</span>
                      )}
                    </div>

                    <div className="mt-5 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                          {tr(selectedOffer.name, isSerbian)}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-6 text-white/45">
                          {tr(selectedOffer.short, isSerbian)}
                        </p>
                      </div>

                      <div className="sm:text-right">
                        <p className="text-3xl font-medium tracking-tight">
                          {tr(selectedOffer.price, isSerbian)}
                        </p>
                        {selectedOffer.unit && (
                          <p className="mt-1 text-xs text-white/40">
                            {tr(selectedOffer.unit, isSerbian)}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="py-6">
                      <h4 className="text-sm font-medium">{tr("About this offer", isSerbian)}</h4>
                      <p className="mt-3 text-sm leading-7 text-white/55">
                        {tr(selectedOffer.description, isSerbian)}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <h4 className="mb-5 text-sm font-medium">{tr("What's included", isSerbian)}</h4>

                      <div className="space-y-5">
                        {selectedOffer.features.map((feature, index) => (
                          <div key={tr(feature.title, isSerbian)} className="flex gap-4">
                            <span
                              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-medium ${accent.bg} ${accent.text}`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h5 className="text-sm font-medium text-white/90">
                                {tr(feature.title, isSerbian)}
                              </h5>
                              <p className="mt-1 text-xs leading-6 text-white/45 sm:text-sm">
                                {tr(feature.description, isSerbian)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-7 border-t border-white/10 pt-6">
                      <p className="text-[10px] font-medium tracking-[0.18em] text-white/35">{tr("WHAT YOU CAN EXPECT", isSerbian)}</p>
                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {tr(selectedOffer.result, isSerbian)}
                      </p>
                    </div>

                    {selectedOffer.development && (
                      <div className="mt-6 border border-white/10 p-4">
                        <p className="text-xs leading-6 text-white/50">
                          {tr("This package is still in development. Its final scope and pricing will be agreed with you before any work begins.", isSerbian)}
                        </p>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="mt-8 flex w-full items-center justify-between rounded-lg border border-white/10 bg-white px-5 py-4 text-sm font-medium text-black shadow-[0_8px_30px_rgba(255,255,255,0.06)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/90"
                    >
                      <span>
                        {selectedOffer.development
                          ? tr("Discuss this package", isSerbian)
                          : tr("Continue with this package", isSerbian)}
                      </span>
                      <span className="text-lg">→</span>
                    </button>

                    <p className="mt-4 text-center text-[11px] leading-5 text-white/35">
                      {tr("No payment is required at this stage. We'll discuss the project with you first.", isSerbian)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-white/45 transition hover:text-white"
                >{tr("← Back to categories", isSerbian)}</button>
              </div>
            </section>
          )}

          {step === 3 && (
            <section className="grid min-w-0 items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
              <aside className="rounded-2xl border border-white/[0.09] bg-[#0b0b10]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)] sm:p-8">
                <p className="text-[10px] tracking-[0.2em] text-white/40">{tr("YOUR SELECTION", isSerbian)}</p>

                <div className="mt-6 border-b border-white/10 pb-6">
                  <p className="text-sm text-white/50">
                    {tr(categoryInfo[category].title, isSerbian)}
                  </p>
                  <h2 className="mt-2 text-2xl font-medium">
                    {tr(selectedOffer.name, isSerbian)}
                  </h2>
                  <p className={`mt-3 text-3xl font-medium ${accent.text}`}>
                    {tr(selectedOffer.price, isSerbian)}
                  </p>
                  {selectedOffer.unit && (
                    <p className="mt-1 text-xs text-white/40">
                      {tr(selectedOffer.unit, isSerbian)}
                    </p>
                  )}
                </div>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  {tr(selectedOffer.description, isSerbian)}
                </p>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/55 transition hover:border-white/25 hover:text-white"
                >{tr("← Change package", isSerbian)}</button>
              </aside>

              <div className="min-w-0 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0b10]/90 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)] sm:p-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{tr("Project details", isSerbian)}</h2>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-white/55 transition hover:border-white/25 hover:text-white"
                  >
                    <span>←</span> Back to package
                  </button>
                </div>

                <p className="mt-3 text-sm leading-6 text-white/45">{tr("Tell us a little about yourself and what you want to achieve.", isSerbian)}</p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <input
                    type="hidden"
                    name="category"
                    value={tr(categoryInfo[category].title, isSerbian)}
                  />
                  <input
                    type="hidden"
                    name="package"
                    value={tr(selectedOffer.name, isSerbian)}
                  />
                  <input
                    type="hidden"
                    name="package_price"
                    value={tr(selectedOffer.price, isSerbian)}
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value={`New Lensia Media inquiry — ${tr(selectedOffer.name, isSerbian)}`}
                  />

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs text-white/65"
                    >{tr("Your name *", isSerbian)}</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder={isSerbian ? "Ime i prezime" : "John Smith"}
                      className="w-full rounded-lg border border-white/[0.11] bg-black/70 px-4 py-3.5 text-sm text-white outline-none transition duration-200 placeholder:text-white/25 focus:border-purple-500/70 focus:bg-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs text-white/65"
                    >{tr("Email address *", isSerbian)}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={isSerbian ? "ti@primer.com" : "you@example.com"}
                      className="w-full rounded-lg border border-white/[0.11] bg-black/70 px-4 py-3.5 text-sm text-white outline-none transition duration-200 placeholder:text-white/25 focus:border-purple-500/70 focus:bg-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-xs text-white/65"
                    >{tr("Budget (optional)", isSerbian)}</label>
                    <select
                      id="budget"
                      name="budget"
                      value={budget}
                      onChange={(event) => setBudget(event.target.value)}
                      className="w-full rounded-lg border border-white/[0.11] bg-black/70 px-4 py-3.5 text-sm text-white outline-none transition duration-200 focus:border-purple-500/70 focus:bg-black"
                    >
                      <option value="">{tr("Select your budget", isSerbian)}</option>
                      <option value="Under €50">{tr("Under €50", isSerbian)}</option>
                      <option value="€50–€100">{tr("€50–€100", isSerbian)}</option>
                      <option value="€100–€200">{tr("€100–€200", isSerbian)}</option>
                      <option value="€200+">{tr("€200+", isSerbian)}</option>
                      <option value="Flexible">{tr("Flexible", isSerbian)}</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className="mb-2 block text-xs text-white/65"
                    >{tr("Tell us about your project *", isSerbian)}</label>
                    <textarea
                      id="project"
                      name="project_details"
                      required
                      rows={5}
                      value={project}
                      onChange={(event) => setProject(event.target.value)}
                      placeholder={isSerbian ? "Koji su tvoji ciljevi? Pošalji link kanala ili profila i napiši šta ti je potrebno." : "What are your goals? Share your channel or profile link and tell us what you need."}
                      className="w-full resize-y rounded-lg border border-white/[0.11] bg-black/70 px-4 py-3.5 text-sm leading-6 text-white outline-none transition duration-200 placeholder:text-white/25 focus:border-purple-500/70 focus:bg-black"
                    />
                  </div>

                  {submitError && (
                    <p
                      role="alert"
                      className="border border-red-500/30 bg-red-500/5 p-3 text-sm leading-6 text-red-300"
                    >
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-between rounded-lg bg-white px-5 py-4 text-sm font-medium text-black shadow-[0_8px_30px_rgba(255,255,255,0.06)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>
                      {submitting ? "Sending..." : "Send project inquiry"}
                    </span>
                    <span className="text-lg">→</span>
                  </button>

                  <p className="text-center text-xs leading-6 text-white/35">
                    This is an inquiry, not a payment. We&apos;ll contact you
                    to discuss the project before any work begins.
                  </p>

                  <p className="text-center text-xs text-white/40">
                    Prefer email?{" "}
                    <a
                      href="mailto:lensiamedia@gmail.com"
                      className="text-white/75 underline underline-offset-4 transition hover:text-white"
                    >
                      lensiamedia@gmail.com
                    </a>
                  </p>
                </form>
              </div>

              <div className="lg:col-span-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-white/45 transition hover:text-white"
                >{tr("← Back to packages", isSerbian)}</button>
              </div>
            </section>
          )}

          <footer className="mt-16 border-t border-white/[0.09] pt-6 sm:mt-20">
            <div className="flex flex-col justify-between gap-3 text-[10px] tracking-[0.12em] text-white/30 sm:flex-row sm:items-center">
              <span>LENSIA MEDIA</span>
              <span>STRATEGY · CREATIVITY · GROWTH</span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
