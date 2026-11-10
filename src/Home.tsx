import { useEffect } from "react"
import { projects } from "./content"
import { isTodo, SHOW_TODOS } from "./content/todo"
import { useLang } from "./i18n"
import RichText from "./RichText"
import { StatusLabel } from "./ProjectPage"
import { workHref } from "./router"
import { skillGroups } from "./skills"

const ArrowIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
)

function WorkGrid() {
    const { t, tx } = useLang()
    return (
        <ol className="work-grid">
            {projects.map((p, i) => {
                const number = String(i + 1).padStart(2, "0")
                const summary = tx(p.summary)
                return (
                    <li key={p.id}>
                        <a className="work-card" href={workHref(p.id)}>
                            <div className="work-thumb">
                                {p.thumbnail ? (
                                    // Decorative here: the card's title already names the link.
                                    <img
                                        src={p.thumbnail.src}
                                        alt=""
                                        width={p.thumbnail.width}
                                        height={p.thumbnail.height}
                                        loading={i < 2 ? "eager" : "lazy"}
                                        decoding="async"
                                    />
                                ) : (
                                    <span className="work-thumb-empty" aria-hidden="true">
                                        {number}
                                    </span>
                                )}
                            </div>
                            <div className="work-body">
                                <p className="card-type">
                                    {number} · {tx(p.type)}
                                </p>
                                <h3>{tx(p.title)}</h3>
                                {(SHOW_TODOS || !isTodo(summary)) && (
                                    <p className={`work-summary${isTodo(summary) ? " todo" : ""}`}>
                                        {summary}
                                    </p>
                                )}
                                <div className="work-foot">
                                    <StatusLabel status={p.status} />
                                    {p.draft && <span className="status draft">{t("draft")}</span>}
                                </div>
                            </div>
                        </a>
                    </li>
                )
            })}
        </ol>
    )
}

export default function Home({ anchor }: { anchor?: string }) {
    const { t, tx } = useLang()
    const designIntro = t("heroDesignIntro")

    useEffect(() => {
        document.title = t("pageTitle")
    }, [t])

    // Scroll to #work / #about / #contact, also when coming back from a project page.
    useEffect(() => {
        if (anchor) document.getElementById(anchor)?.scrollIntoView()
        else window.scrollTo(0, 0)
    }, [anchor])

    return (
        <main id="main" tabIndex={-1}>
            <section className="hero container" id="top">
                <div className="hero-text">
                    <p className="kicker">{t("kicker")}</p>
                    <h1>
                        {t("heroHi")}
                        <span className="accent">.</span>
                    </h1>
                    <p className="lead">
                        <RichText text={t("heroLead")} />
                    </p>
                    {(SHOW_TODOS || !isTodo(designIntro)) && (
                        <p className={`lead${isTodo(designIntro) ? " todo" : ""}`}>
                            <RichText text={designIntro} />
                        </p>
                    )}
                    <div className="actions">
                        <a className="btn btn-primary" href="#work">
                            {t("viewWork")} <ArrowIcon />
                        </a>
                    </div>
                </div>
                <img
                    className="avatar"
                    src="/pfp-neil.jpg"
                    alt={t("avatarAlt")}
                    width="160"
                    height="160"
                />
            </section>

            <section className="section container" id="work" aria-labelledby="work-title">
                <h2 id="work-title">{t("workTitle")}</h2>
                <WorkGrid />
            </section>

            <section className="section container" id="about" aria-labelledby="about-title">
                <h2 id="about-title">{t("aboutTitle")}</h2>
                <div className="about-layout">
                    <div>
                        <p className="about-text">
                            <RichText text={t("aboutText")} />
                        </p>
                        <a
                            className="more-link"
                            href="https://github.com/InsightfulGuy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {t("githubLink")}
                        </a>
                    </div>
                    <dl className="skills-compact" aria-label={t("skillsTitle")}>
                        {skillGroups.map((g, i) => (
                            <div key={i} className={g.learning ? "learning" : undefined}>
                                <dt>{tx(g.title)}</dt>
                                <dd>{g.items.join(" · ")}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="section container contact" id="contact" aria-labelledby="contact-title">
                <h2 id="contact-title">{t("contactTitle")}</h2>
                <p>
                    <RichText text={t("contactText")} />
                </p>
                <a className="btn btn-primary" href="mailto:tristan.evans@bluewin.ch">
                    tristan.evans@bluewin.ch <ArrowIcon />
                </a>
                <div className="social">
                    <a href="https://www.linkedin.com/in/tristan-evans-862b84222" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <a href="https://github.com/InsightfulGuy" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </div>
            </section>
        </main>
    )
}
