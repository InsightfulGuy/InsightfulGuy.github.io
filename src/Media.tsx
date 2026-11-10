import type { Media } from "./content/types"
import { useLang } from "./i18n"
import RichText from "./RichText"

/** One image, video, audio clip, YouTube video or playable embed. */
export function MediaItem({ item }: { item: Media }) {
    const { t, tx } = useLang()
    const caption = item.caption ? tx(item.caption) : undefined
    let content
    let extra = null

    switch (item.type) {
        case "image":
            content = (
                <img
                    src={item.src}
                    alt={tx(item.alt)}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                />
            )
            if (item.full) {
                extra = (
                    <a className="full-res" href={item.full} target="_blank" rel="noreferrer">
                        {t("fullRes")}
                    </a>
                )
            }
            break
        case "video":
            content = (
                <video
                    src={item.src}
                    poster={item.poster}
                    width={item.width}
                    height={item.height}
                    controls
                    playsInline
                    preload="metadata"
                    className={
                        item.width && item.height && item.height > item.width ? "portrait" : undefined
                    }
                />
            )
            break
        case "audio":
            content = <audio src={item.src} controls preload="metadata" />
            break
        case "youtube":
            content = (
                <iframe
                    className="frame"
                    src={`https://www.youtube-nocookie.com/embed/${item.id}`}
                    title={tx(item.title)}
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                />
            )
            break
        case "embed":
            content = (
                <iframe
                    className="frame"
                    src={item.src}
                    title={tx(item.title)}
                    style={{ aspectRatio: item.aspectRatio ?? "16 / 9" }}
                    allow="autoplay; fullscreen; gamepad"
                    allowFullScreen
                    loading="lazy"
                />
            )
            break
    }

    return (
        <figure className={`media media-${item.type}`}>
            {content}
            {(caption || extra) && (
                <figcaption>
                    {caption && <RichText text={caption} />}
                    {extra}
                </figcaption>
            )}
        </figure>
    )
}

export function MediaList({ items }: { items?: Media[] }) {
    if (!items?.length) return null
    return (
        <div className="media-list">
            {items.map((m, i) => (
                <MediaItem item={m} key={i} />
            ))}
        </div>
    )
}
