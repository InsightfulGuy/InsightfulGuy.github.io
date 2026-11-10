import { useEffect, useRef, useState } from "react"
import type { GalleryImage } from "./content/types"
import { useLang } from "./i18n"
import RichText from "./RichText"

/*
 * Image grid with an enlarged view (lightbox) built on the native <dialog>.
 * Keyboard: Tab to an image, Enter/Space opens it, ← / → switch, Esc closes,
 * and focus returns to the image you opened.
 */
export default function Gallery({ images }: { images: GalleryImage[] }) {
    const { t, tx } = useLang()
    const [index, setIndex] = useState<number | null>(null)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const thumbRefs = useRef<(HTMLButtonElement | null)[]>([])
    const lastOpened = useRef<number | null>(null)

    const count = images.length
    const current = index === null ? null : images[index]

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return
        if (index !== null && !dialog.open) dialog.showModal()
        if (index === null && dialog.open) dialog.close()
    }, [index])

    const open = (i: number) => {
        lastOpened.current = i
        setIndex(i)
    }

    const close = () => {
        setIndex(null)
        const i = lastOpened.current
        if (i !== null) requestAnimationFrame(() => thumbRefs.current[i]?.focus())
    }

    const step = (delta: number) => {
        setIndex((i) => {
            if (i === null) return i
            const next = (i + delta + count) % count
            lastOpened.current = next
            return next
        })
    }

    if (count === 0) return null

    return (
        <>
            <ul className="gallery-grid">
                {images.map((img, i) => (
                    <li key={img.src}>
                        <button
                            ref={(el) => {
                                thumbRefs.current[i] = el
                            }}
                            type="button"
                            className="gallery-thumb"
                            onClick={() => open(i)}
                            aria-label={`${t("openImage")}: ${tx(img.alt)}`}
                        >
                            <img
                                src={img.src}
                                alt=""
                                width={img.width}
                                height={img.height}
                                loading="lazy"
                                decoding="async"
                            />
                        </button>
                    </li>
                ))}
            </ul>

            <dialog
                ref={dialogRef}
                className="lightbox"
                aria-label={current ? tx(current.alt) : undefined}
                onClose={close}
                onKeyDown={(e) => {
                    if (e.key === "ArrowRight") step(1)
                    if (e.key === "ArrowLeft") step(-1)
                }}
                onClick={(e) => {
                    if (e.target === e.currentTarget) close()
                }}
            >
                {current && index !== null && (
                    <div className="lightbox-inner">
                        <img
                            src={current.full ?? current.src}
                            alt={tx(current.alt)}
                            width={current.width}
                            height={current.height}
                        />
                        <div className="lightbox-bar">
                            <span className="lightbox-count" aria-live="polite">
                                {index + 1} / {count}
                            </span>
                            {current.caption && (
                                <span className="lightbox-caption">
                                    <RichText text={tx(current.caption)} />
                                </span>
                            )}
                            <div className="lightbox-controls">
                                {count > 1 && (
                                    <>
                                        <button type="button" onClick={() => step(-1)} aria-label={t("prevImage")}>
                                            ←
                                        </button>
                                        <button type="button" onClick={() => step(1)} aria-label={t("nextImage")}>
                                            →
                                        </button>
                                    </>
                                )}
                                <button type="button" onClick={close} aria-label={t("close")} autoFocus>
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </dialog>
        </>
    )
}
