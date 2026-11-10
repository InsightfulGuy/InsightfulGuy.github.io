import type { Localized } from "../i18n"

/*
 * Shapes of the project data. You normally don't need to edit this file,
 * only the files in src/content/projects/.
 *
 * Localized = a plain string (same in EN and DE) or { en: "...", de: "..." }.
 * Text can contain links: "Made with [Godot](https://godotengine.org)".
 *
 * you run `npm run dev`, and hidden on the live site. A section that only has
 */

export type Image = {
    /** Path from the public/ folder, without "public", e.g. "/work/kettlehead/sheet.webp". */
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
    /** One or two sentences, shown on the overview card and at the top of the page. */
    summary: Localized
    year?: string
    /** What you did, e.g. "Concept, code, art and music". */
    role?: Localized
    status?: Status
    tags?: Localized[]
    /** Image on the overview card. Without one, a plain tile with the number is shown. */
    thumbnail?: Image
    links?: ProjectLink[]

    /** All four sections are optional. Empty ones are not shown. */
    concept?: Section
    process?: Section
    outcome?: Section
    reflection?: Section

    /** "gallery" adds an image grid with an enlarged view (for drawings, collages, ...). */
    layout?: "default" | "gallery"
    gallery?: GalleryImage[]

    /** true = only visible while running `npm run dev`, hidden on the live site. */
    draft?: boolean
}
