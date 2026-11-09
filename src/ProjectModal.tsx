import { useEffect, useRef } from "react"
import type { Media, Project } from "./projects"
import { useLang } from "./i18n"

function MediaItem({ item }: { item: Media }) {
    const { t, tx } = useLang()
    const caption = item.caption ? tx(item.caption) : undefined
    let content
    switch (item.type) {
        case "image":
            content = <img src={item.src} alt={tx(item.alt)} loading="lazy" />
            break
        case "video":
            content = <video src={item.src} poster={item.poster} controls preload="metadata" />
            break
        case "audio":
            content = <audio src={item.src} controls preload="metadata" />
            break
        case "youtube":
            content = (
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${item.id}`}
                    title={caption ?? `YouTube ${t("video")}`}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            )
            break
    }
    return (
        <figure className={`media media-${item.type}`}>
            {content}
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    )
}

type Props = { project: Project | null; onClose: () => void }

export default function ProjectModal({ project, onClose }: Props) {
    const ref = useRef<HTMLDialogElement>(null)
    const { t, tx } = useLang()

    useEffect(() => {
        const dialog = ref.current
        if (!dialog) return
        if (project && !dialog.open) dialog.showModal()
        if (!project && dialog.open) dialog.close()
    }, [project])

    return (
        <dialog
            ref={ref}
            className="modal"
            aria-labelledby="modal-title"
            onClose={onClose}
            onClick={(e) => {
                // Clicking the dimmed backdrop (the dialog element itself) closes it.
                if (e.target === e.currentTarget) onClose()
            }}
        >
            {project && (
                <div className="modal-inner">
                    <button className="modal-close" onClick={onClose} aria-label={t("close")}>
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
                            <path d="M6 6l12 12M18 6 6 18" />
                        </svg>
                    </button>

                    <p className="card-type">{tx(project.type)}</p>
                    <h2 id="modal-title">{tx(project.title)}</h2>

                    {(project.status || project.tags?.length) && (
                        <div className="modal-tags">
                            {project.status && (
                                <span className="status">{tx(project.status)}</span>
                            )}
                            {project.tags?.map((tag, i) => (
                                <span className="tag" key={i}>
                                    {tx(tag)}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="modal-text">
                        {(project.description ?? [project.summary]).map((p, i) => (
                            <p key={i}>{tx(p)}</p>
                        ))}
                    </div>

                    {project.links && project.links.length > 0 && (
                        <div className="modal-links">
                            {project.links.map((l) => (
                                <a
                                    className="btn btn-ghost"
                                    key={l.url}
                                    href={l.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {tx(l.label)} ↗
                                </a>
                            ))}
                        </div>
                    )}

                    {project.media && project.media.length > 0 && (
                        <div className="media-list">
                            {project.media.map((m, i) => (
                                <MediaItem item={m} key={i} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </dialog>
    )
}
