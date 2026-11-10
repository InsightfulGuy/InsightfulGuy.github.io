import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Lang = "en" | "de"
export const LANGS: Lang[] = ["en", "de"]

/**
 * Text that can be translated. Either a plain string (same in every language)
 * or { en: "...", de: "..." }. If "de" is missing, English is shown.
 */
export type Localized = string | { en: string; de?: string }

export function pick(text: Localized, lang: Lang): string {
    return typeof text === "string" ? text : (text[lang] ?? text.en)
}

/* ---------- interface text ---------- */

const en = {
    pageTitle: "Tristan Evans · Portfolio",
    skip: "Skip to content",
    navLabel: "Main navigation",
    homeLink: "Tristan Evans, home",
    langLabel: "Language",
    navWork: "Work",
    navAbout: "About",
    navContact: "Contact",

    kicker: "Apprentice application developer",
    heroHi: "Hi, I'm Tristan",
    heroLead:
        "I do programming tasks/study during the week and games + music in my free time. Currently doing my apprenticeship at [Worldline Schweiz AG](https://worldline.com/en-ch/home) and my Berufsschule at [TBZ](https://tbz.ch/).",
    heroDesignIntro:
        "I’m Tristan, an application developer in training. Outside of work I make pixel-art games, record music and draw in a messy zine/collage style. What interests me most is the moment where code, image and sound meet the person using them.",
    viewWork: "View work",
    avatarAlt: "Profile picture: cartoon character with round glasses and a dark T-shirt",

    workTitle: "Work",
    statusWip: "Work in progress",
    draft: "Draft · not on live site",

    allWork: "All work",
    moreWork: "More work",
    previous: "Previous",
    next: "Next",
    notFound: "Project not found",
    year: "Year",
    role: "Role",
    section_concept: "Concept",
    section_process: "Process",
    section_outcome: "Outcome",
    section_reflection: "Reflection",
    fullRes: "Full resolution ↗",
    openImage: "Open image",
    prevImage: "Previous image",
    nextImage: "Next image",

    aboutTitle: "About",
    aboutText:
        "I like building things that line up with my interests. At work that's web apps and backend code; at home it's Indie Games, recording songs and whatever media I'm into at the moment :)",
    skillsTitle: "Skills",
    githubLink: "More code on GitHub ↗",

    close: "Close",
    video: "Video",

    contactTitle: "Get in touch",
    contactText: "Want to work together or just say hi? My inbox is open.",
    builtWith: "Built with React + Vite and designed with Figma",
}

type Dict = typeof en

const de: Dict = {
    pageTitle: "Tristan Evans · Portfolio",
    skip: "Zum Inhalt springen",
    navLabel: "Hauptnavigation",
    homeLink: "Tristan Evans, Startseite",
    langLabel: "Sprache",
    navWork: "Arbeiten",
    navAbout: "Über mich",
    navContact: "Kontakt",

    kicker: "Applikationsentwickler in Ausbildung",
    heroHi: "Hallo, ich bin Tristan",
    heroLead:
        "Unter der Woche entwickle ich Webanwendungen, in meiner Freizeit Games und Musik. Zurzeit mache ich meine Lehre bei der [Worldline Schweiz AG](https://worldline.com/en-ch/home) und die Berufsschule an der [TBZ Zürich](https://tbz.ch/).",
    heroDesignIntro:
        "Ich bin Tristan, angehender Applikationsentwickler. Neben der Arbeit mache ich Pixel-Art-Games, nehme Musik auf und zeichne im Zine- und Collage-Stil. Am meisten interessiert mich der Moment, in dem Code, Bild und Ton auf die Person treffen, die sie benutzt.",
    viewWork: "Arbeiten ansehen",
    avatarAlt: "Profilbild: Cartoonfigur mit runder Brille und dunklem T-Shirt",

    workTitle: "Arbeiten",
    statusWip: "In Arbeit",
    draft: "Entwurf · nicht live",

    allWork: "Alle Arbeiten",
    moreWork: "Weitere Arbeiten",
    previous: "Vorherige",
    next: "Nächste",
    notFound: "Projekt nicht gefunden",
    year: "Jahr",
    role: "Rolle",
    section_concept: "Konzept",
    section_process: "Prozess",
    section_outcome: "Ergebnis",
    section_reflection: "Reflexion",
    fullRes: "Volle Auflösung ↗",
    openImage: "Bild öffnen",
    prevImage: "Vorheriges Bild",
    nextImage: "Nächstes Bild",

    aboutTitle: "Über mich",
    aboutText:
        "Ich baue gerne Dinge, die zu meinen Interessen passen. Bei der Arbeit sind das Webanwendungen und Backend-Code, zu Hause Indie Games, eigene Songs und das Medienprojekt, das mich gerade begeistert.",
    skillsTitle: "Skills",
    githubLink: "Mehr Code auf GitHub ↗",

    close: "Schliessen",
    video: "Video",

    contactTitle: "Kontakt",
    contactText: "Lust auf eine Zusammenarbeit oder einfach Hallo sagen? Schreib mir.",
    builtWith: "Erstellt mit React + Vite",
}

const dictionaries: Record<Lang, Dict> = { en, de }

/* ---------- context ---------- */

const STORAGE_KEY = "lang"

function initialLang(): Lang {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved === "en" || saved === "de") return saved
    } catch {
        // storage unavailable
    }
    return navigator.language?.toLowerCase().startsWith("de") ? "de" : "en"
}

type LangContextValue = {
    lang: Lang
    setLang: (lang: Lang) => void
    /** Interface text by key. */
    t: (key: keyof Dict) => string
    /** Pick the right language from a Localized value. */
    tx: (text: Localized) => string
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(initialLang)

    useEffect(() => {
        document.documentElement.lang = lang
        try {
            localStorage.setItem(STORAGE_KEY, lang)
        } catch {
            // storage unavailable
        }
    }, [lang])

    const value: LangContextValue = {
        lang,
        setLang,
        t: (key) => dictionaries[lang][key],
        tx: (text) => pick(text, lang),
    }

    return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
    const ctx = useContext(LangContext)
    if (!ctx) throw new Error("useLang must be used inside <LangProvider>")
    return ctx
}
