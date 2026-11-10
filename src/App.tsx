import { useEffect } from "react"
import Home from "./Home"
import ProjectPage from "./ProjectPage"
import { LANGS, useLang } from "./i18n"
import { useRoute } from "./router"

function LangSwitch() {
    const { lang, setLang, t } = useLang()
    return (
        <div className="lang-switch" role="group" aria-label={t("langLabel")}>
            {LANGS.map((l) => (
                <button
                    key={l}
                    type="button"
                    lang={l}
                    aria-pressed={lang === l}
                    onClick={() => setLang(l)}
                >
                    {l.toUpperCase()}
                </button>
            ))}
        </div>
    )
}

function App() {
    const { t } = useLang()
    const route = useRoute()
    const year = new Date().getFullYear()
    const projectId = route.name === "project" ? route.id : null

    // New project page: start at the top.
    useEffect(() => {
        if (projectId) window.scrollTo(0, 0)
    }, [projectId])

    return (
        <>
            {/* Focuses the content without changing the URL (the URL is used for routing). */}
            <a
                className="skip-link"
                href="#main"
                onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("main")?.focus()
                }}
            >
                {t("skip")}
            </a>

            <header className="topbar">
                <div className="container topbar-inner">
                    <a className="brand" href="#/" aria-label={t("homeLink")}>
                        <img
                            className="mascot"
                            src="/head-icon.png"
                            alt=""
                            width="102"
                            height="102"
                        />
                    </a>
                    <div className="topbar-right">
                        <nav aria-label={t("navLabel")}>
                            <a href="#work">{t("navWork")}</a>
                            <a href="#about">{t("navAbout")}</a>
                            <a href="#contact">{t("navContact")}</a>
                        </nav>
                        <LangSwitch />
                    </div>
                </div>
            </header>

            {route.name === "project" ? (
                <ProjectPage id={route.id} />
            ) : (
                <Home anchor={route.anchor} />
            )}

            <footer className="container footer">
                <span>© {year} Tristan Evans</span>
                <span>{t("builtWith")}</span>
            </footer>
        </>
    )
}

export default App
