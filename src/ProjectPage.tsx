import { useEffect } from "react"
import type { Project, Section } from "./content/types"
import { projects } from "./content"
import { useLang } from "./i18n"
import { MediaList } from "./Media"
import Gallery from "./Gallery"
import RichText from "./RichText"
import { workHref } from "./router"

export function Paragraphs({ texts }: { texts: string[] }) {
    return (
        <>
            {texts.map((text, i) => (
                <p key={i}>
                    <RichText text={text} />
                </p>
            ))}
        </>
    )
}

export function StatusLabel({ status }: { status: Project["status"] }) {
    const { t } = useLang()
    if (status !== "wip") return null
    return <span className="status">{t("statusWip")}</span>
}

const SECTIONS = ["concept", "process", "outcome", "reflection"] as const

function ProjectSection({ id, section }: { id: (typeof SECTIONS)[number]; section?: Section }) {
    const { lang, t } = useLang()
    const titleKey = `section_${id}` as const
    return (
        <section className="project-section" aria-labelledby={`sec-${id}`}>
            <h2 id={`sec-${id}`}>{t(titleKey)}</h2>
            <MediaList items={section?.media} />
        </section>
    )
}

export default function ProjectPage({ id }: { id: string }) {
    const { t, tx } = useLang()
    const index = projects.findIndex((p) => p.id === id)
    const project = projects[index]

    useEffect(() => {
        const name = project ? tx(project.title) : t("notFound")
        document.title = `${name} · Tristan Evans`
    }, [project, tx, t])

    if (!project) {
        return (
            <main id="main" tabIndex={-1} className="container project-page">
                <a className="back-link" href="#work">
                    ← {t("allWork")}
                </a>
                <h1 className="project-title">{t("notFound")}</h1>
            </main>
        )
    }

    const prev = projects[(index - 1 + projects.length) % projects.length]
    const next = projects[(index + 1) % projects.length]
    const summary = tx(project.summary)

    return (
        <main id="main" tabIndex={-1} className="container project-page">
            <a className="back-link" href="#work">
                ← {t("allWork")}
            </a>

            <header className="project-header">
                <p className="kicker">
                    {String(index + 1).padStart(2, "0")} · {tx(project.type)}
                </p>
                <h1 className="project-title">{tx(project.title)}</h1>
                <dl className="project-meta">
                    {project.year && (
                        <div>
                            <dt>{t("year")}</dt>
                            <dd>{project.year}</dd>
                        </div>
                    )}
                    {project.role && (
                        <div>
                            <dt>{t("role")}</dt>
                            <dd>{tx(project.role)}</dd>
                        </div>
                    )}
                </dl>

                <div className="project-tags">
                    <StatusLabel status={project.status} />
                    {project.tags?.map((tag, i) => (
                        <span className="tag" key={i}>
                            {tx(tag)}
                        </span>
                    ))}
                </div>

                {project.links && project.links.length > 0 && (
                    <div className="actions">
                        {project.links.map((l) => (
                            <a className="btn btn-ghost" key={l.url} href={l.url} target="_blank" rel="noreferrer">
                                {tx(l.label)} ↗
                            </a>
                        ))}
                    </div>
                )}
            </header>

            <ProjectSection id="concept" section={project.concept} />

            {project.layout === "gallery" && (
                <section className="project-section" aria-label={tx(project.title)}>
                    {project.gallery && project.gallery.length > 0 ? (
                        <Gallery images={project.gallery} />
                    ) : null}
                </section>
            )}

            <ProjectSection id="process" section={project.process} />
            <ProjectSection id="outcome" section={project.outcome} />
            <ProjectSection id="reflection" section={project.reflection} />

            {projects.length > 1 && (
                <nav className="project-nav" aria-label={t("moreWork")}>
                    <a href={workHref(prev.id)} rel="prev">
                        <span>← {t("previous")}</span>
                        <strong>{tx(prev.title)}</strong>
                    </a>
                    <a href={workHref(next.id)} rel="next">
                        <span>{t("next")} →</span>
                        <strong>{tx(next.title)}</strong>
                    </a>
                </nav>
            )}
        </main>
    )
}
