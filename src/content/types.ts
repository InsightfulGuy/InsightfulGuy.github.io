import type { Localized } from "../i18n"

export type Image = {
    /** Path from the public/ folder, without "public", e.g. "/work/mergers-misfits/sheet.webp". */
    src: string
    /** Describe what's in the image (for screen readers). Required. */
    alt: Localized
    /** Pixel size of the file. Optional, but stops the page from jumping while loading. */
    width?: number
    height?: number
    /** Optional bigger/original version, offered as "Full resolution" link. */
    full?: string
}

export type Media =
    | ({ type: "image"; caption?: Localized } & Image)
    | {
    type: "video"
    src: string
    /** Still image shown before the video plays. */
    poster?: string
    width?: number
    height?: number
    caption?: Localized
}
    | { type: "audio"; src: string; caption?: Localized }
    | { type: "youtube"; id: string; title: Localized; caption?: Localized }
    | {
    /**
     * Anything playable in a frame: a web export of a game placed in public/,
     * an itch.io embed URL, a Figma prototype embed, ...
     * For files in public/, use the full path ending in index.html.
     */
    type: "embed"
    src: string
    title: Localized
    /** CSS aspect ratio, e.g. "16 / 9" (default) or "4 / 3". */
    aspectRatio?: string
    caption?: Localized
}

export type Section = {
    /** Paragraphs. */
    text?: Localized[]
    media?: Media[]
}

/** "wip" shows a small "Work in progress" label. "done" (or leaving it out) shows nothing. */
export type Status = "wip" | "done"

export type ProjectLink = { label: Localized; url: string }

export type GalleryImage = Image & { caption?: Localized }

export type Project = {
    /** Used in the URL (#/work/<id>) and as the media folder name. Lowercase, no spaces. */
    id: string
    title: Localized
    /** Short label, e.g. "2D game" or "Music". */
    type: Localized
    /** One or two sentences, shown at the top of the page. */
    summary: Localized
    year?: string
    /** What you did, e.g. "Concept, code, art and music". */
    role?: Localized
    status?: Status
    tags?: Localized[]
    /** Image on the overview card. Without one, a plain tile with the number is shown. */
    thumbnail?: Image
    links?: ProjectLink[]

    /** All sections are optional. Empty ones are not shown. */
    idea?: Section
    process?: Section
    outcome?: Section
    people?: Section
    reflection?: Section

    /** "gallery" adds an image grid with an enlarged view (for drawings, collages, ...). */
    layout?: "default" | "gallery"
    gallery?: GalleryImage[]

    /** true = only visible while running `npm run dev`, hidden on the live site. */
    draft?: boolean
}