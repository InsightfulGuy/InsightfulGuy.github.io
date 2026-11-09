import { useEffect, useState } from "react"
import GitHubRepos from "./GitHubRepos"
import ProjectModal from "./ProjectModal"
import { projects } from "./projects"
import { LANGS, useLang } from "./i18n"

const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => p !== featured)

const ArrowIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
)

// The open project is kept in the URL (#project=<id>) so it can be linked
// to directly and the browser back button closes it.
const HASH_PREFIX = "#project="

function projectIdFromHash() {
    const hash = window.location.hash
    return hash.startsWith(HASH_PREFIX) ? decodeURIComponent(hash.slice(HASH_PREFIX.length)) : null
}

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
    const { t, tx } = useLang()
    const year = new Date().getFullYear()
    const [openId, setOpenId] = useState(projectIdFromHash)
    const openProject = projects.find((p) => p.id === openId) ?? null

    const skills = [
        { group: t("skillLanguages"), items: ["Java", "TypeScript", "Python"] },
        { group: t("skillFrameworks"), items: ["React", "Angular"] },
        { group: t("skillSide"), items: [t("skillGameDev"), t("skillMusic")] },
    ]

    useEffect(() => {
        const onHash = () => setOpenId(projectIdFromHash())
        window.addEventListener("hashchange", onHash)
        return () => window.removeEventListener("hashchange", onHash)
    }, [])

    const open = (id: string) => {
        window.location.hash = `project=${encodeURIComponent(id)}`
    }

    const close = () => {
        if (projectIdFromHash()) {
            history.replaceState(null, "", window.location.pathname + window.location.search)
        }
        setOpenId(null)
    }

    return (
        <>
            <a className="skip-link" href="#main">
                {t("skip")}
            </a>

            <header className="topbar">
                <div className="container topbar-inner">
                    <a className="brand" href="#top">
                        tristan<span className="accent">.dev</span>
                    </a>
                    <div className="topbar-right">
                        <nav aria-label={t("navLabel")}>
                            <a href="#about">{t("navAbout")}</a>
                            <a href="#projects">{t("navProjects")}</a>
                            <a href="#contact">{t("navContact")}</a>
                        </nav>
                        <LangSwitch />
                    </div>
                </div>
            </header>

            <main id="main">
                <section className="hero container" id="top">
                    <div className="hero-text">
                        <p className="kicker">{t("kicker")}</p>
                        <h1>
                            {t("heroHi")}
                            <span className="accent">.</span>
                        </h1>
                        <p className="lead">{t("heroLead")}</p>
                        <div className="actions">
                            <a className="btn btn-primary" href="#projects">
                                {t("viewProjects")} <ArrowIcon />
                            </a>
                            <a
                                className="btn btn-ghost"
                                href="https://github.com/InsightfulGuy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <img
                        className="avatar"
                        src="/head-icon.png"
                        alt={t("avatarAlt")}
                        width="160"
                        height="160"
                    />
                </section>

                <section className="section container" id="about" aria-labelledby="about-title">
                    <h2 id="about-title">{t("aboutTitle")}</h2>
                    <div className="about-grid">
                        <p>{t("aboutText")}</p>
                        <dl className="skills">
                            {skills.map((s) => (
                                <div key={s.group}>
                                    <dt>{s.group}</dt>
                                    <dd>
                                        {s.items.map((item) => (
                                            <span className="tag" key={item}>
                                                {item}
                                            </span>
                                        ))}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section
                    className="section container"
                    id="projects"
                    aria-labelledby="projects-title"
                >
                    <h2 id="projects-title">{t("projectsTitle")}</h2>

                    {featured && (
                        <article className="card featured clickable">
                            {featured.cover && (
                                <div className="featured-media">
                                    <img src={featured.cover} alt="" />
                                </div>
                            )}
                            <div className="featured-body">
                                <p className="card-type">{tx(featured.type)}</p>
                                <h3>
                                    <button className="card-link" onClick={() => open(featured.id)}>
                                        {tx(featured.title)}
                                    </button>
                                </h3>
                                <p>{tx(featured.summary)}</p>
                                <div className="card-foot">
                                    {featured.status && (
                                        <span className="status">{tx(featured.status)}</span>
                                    )}
                                    <span className="details-hint" aria-hidden="true">
                                        {t("details")} <ArrowIcon />
                                    </span>
                                </div>
                            </div>
                        </article>
                    )}

                    <div className="card-grid">
                        {others.map((p) => (
                            <article className="card clickable" key={p.id}>
                                <p className="card-type">{tx(p.type)}</p>
                                <h3>
                                    <button className="card-link" onClick={() => open(p.id)}>
                                        {tx(p.title)}
                                    </button>
                                </h3>
                                <p>{tx(p.summary)}</p>
                                <div className="card-foot">
                                    {p.status && <span className="status">{tx(p.status)}</span>}
                                    <span className="details-hint" aria-hidden="true">
                                        {t("details")} <ArrowIcon />
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <h3 className="subheading">{t("onGithub")}</h3>
                    <GitHubRepos />
                </section>

                <section
                    className="section container contact"
                    id="contact"
                    aria-labelledby="contact-title"
                >
                    <h2 id="contact-title">{t("contactTitle")}</h2>
                    <p>{t("contactText")}</p>
                    <a className="btn btn-primary" href="mailto:tristan.evans@bluewin.ch">
                        tristan.evans@bluewin.ch <ArrowIcon />
                    </a>
                    <div className="social">
                        <a
                            href="https://www.linkedin.com/in/tristan-evans-862b84222"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a href="https://github.com/InsightfulGuy" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </section>
            </main>

            <ProjectModal project={openProject} onClose={close} />

            <footer className="container footer">
                <span>© {year} Tristan Evans</span>
                <span>{t("builtWith")}</span>
            </footer>
        </>
    )
}

export default App
