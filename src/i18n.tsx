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
    skip: "Skip to content",
    navLabel: "Main navigation",
    langLabel: "Language",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",

    kicker: "Apprentice application developer",
    heroHi: "Hi, I'm Tristan",
    heroLead:
        "I do programming tasks and study during the week and games, music in my free time. Currently doing my apprenticeship at [Worldline Schweiz AG](https://worldline.com/en-ch/home) and my Berufsschule at [TBZ](https://tbz.ch/).",
    viewProjects: "View projects",
    avatarAlt: "Sketch of Kettlehead, the knight from my game",

    aboutTitle: "About",
    aboutText:
        "I like building things that line up with my interests. At work that's web apps and backend code; at home it's pixel-art games, recording songs and whatever media project I'm into at the moment.",
    skillLanguages: "languages",
    skillFrameworks: "frameworks",
    skillSide: "on the side",
    skillGameDev: "Game dev",
    skillMusic: "Music production",

    projectsTitle: "Projects",
    details: "Details",
    onGithub: "On GitHub",
    loadingRepos: "Loading repositories",
    allRepos: "All repositories on GitHub →",
    repository: "Repository",
    noDescription: "No description yet.",
    updated: "Updated",
    liveDemo: "Live demo ↗",

    close: "Close",
    video: "Video",

    contactTitle: "Get in touch",
    contactText: "Want to work together or just say hi? My inbox is open.",
    builtWith: "Built with React + Vite",
}

type Dict = typeof en

const de: Dict = {
    skip: "Zum Inhalt springen",
    navLabel: "Hauptnavigation",
    langLabel: "Sprache",
    navAbout: "Über mich",
    navProjects: "Projekte",
    navContact: "Kontakt",

    kicker: "Applikationsentwickler in Ausbildung",
    heroHi: "Hallo, ich bin Tristan",
    heroLead:
        "Unter der Woche entwickle ich Webanwendungen, in meiner Freizeit Games und Musik. Zurzeit mache ich meine Lehre bei der [Worldline Schweiz AG](https://worldline.com/en-ch/home) und die Berufsschule an der [TBZ Zürich](https://tbz.ch/).",
    viewProjects: "Projekte ansehen",
    avatarAlt: "Skizze von Kettlehead, dem Ritter aus meinem Game",

    aboutTitle: "Über mich",
    aboutText:
        "Ich baue gerne Dinge, die zu meinen Interessen passen. Bei der Arbeit sind das Webanwendungen und Backend-Code, zu Hause Pixel-Art-Games, eigene Songs und das Medienprojekt, das mich gerade begeistert.",
    skillLanguages: "Programmiersprachen",
    skillFrameworks: "Frameworks",
    skillSide: "Nebenbei",
    skillGameDev: "Game-Entwicklung",
    skillMusic: "Musikproduktion",

    projectsTitle: "Projekte",
    details: "Details",
    onGithub: "Auf GitHub",
    loadingRepos: "Repositories werden geladen",
    allRepos: "Alle Repositories auf GitHub →",
    repository: "Repository",
    noDescription: "Noch keine Beschreibung.",
    updated: "Aktualisiert",
    liveDemo: "Live-Demo ↗",

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
