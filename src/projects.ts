import type { Localized } from "./i18n"

/*
 * Your projects live here. Each one gets a card on the page and a detail pop-up.
 *
 * Translations: any text can be a plain string (same in both languages) or
 *   { en: "English text", de: "Deutscher Text" }
 * If "de" is left out, the English text is shown on the German page.
 *
 * Media files: put them in  public/projects/<id>/  and reference them as
 * "/projects/<id>/file.png". Supported media types:
 *   { type: "image",   src: "/projects/x/shot.png", alt: "...", caption?: "..." }
 *   { type: "video",   src: "/projects/x/clip.mp4", caption?: "...", poster?: "/projects/x/poster.png" }
 *   { type: "audio",   src: "/projects/x/song.mp3", caption?: "..." }
 *   { type: "youtube", id: "dQw4w9WgXcQ", caption?: "..." }   (the id from the YouTube URL)
 *
 * Keep media files small (compress images, keep videos short). Big files are
 * better uploaded to YouTube and embedded with type "youtube".
 */

export type Media =
    | { type: "image"; src: string; alt: Localized; caption?: Localized }
    | { type: "video"; src: string; caption?: Localized; poster?: string }
    | { type: "audio"; src: string; caption?: Localized }
    | { type: "youtube"; id: string; caption?: Localized }

export type ProjectLink = { label: Localized; url: string }

export type Project = {
    /** Used in the URL (#project=<id>) and as the media folder name. Lowercase, no spaces. */
    id: string
    type: Localized
    title: Localized
    /** One or two sentences shown on the card. */
    summary: Localized
    status?: Localized
    /** Shown as the big card at the top. Only one project should have this. */
    featured?: boolean
    /** Image shown on the featured card. */
    cover?: string
    tags?: Localized[]
    /** Longer text for the pop-up. Each entry is one paragraph. */
    description?: Localized[]
    media?: Media[]
    links?: ProjectLink[]
}

export const projects: Project[] = [
    {
        id: "kettlehead",
        type: { en: "Indie game · 2D platformer", de: "Indie-Game · 2D-Platformer" },
        title: "Kettlehead",
        summary: {
            en: "A knight sets out to save the princess, armed with a frying pan and a Kettle-Helmet",
            de: "Ein Ritter zieht los, um die Prinzessin zu retten, bewaffnet mit einer Bratpfanne and einem Kesselhelm",
        },
        status: { en: "In development", de: "In Entwicklung" },
        featured: true,
        cover: "/spritesheet.png",
        tags: [{ en: "Game dev", de: "Game-Entwicklung" }, "Pixel Art"],
        description: [
            {
                en: "A 2D platformer about a very under-equipped knight. I'm doing the code, the art and the music myself.",
                de: "Ein 2D-Platformer über einen sehr schlecht ausgerüsteten Ritter. Code, Grafik und Musik mache ich alles selbst.",
            }
        ],
        media: [
            {
                type: "video",
                src: "/public/gameplay-test.mp4",
                caption: "Testing gameplay mechanics and physics",
            },
            {
                type: "image",
                src: "/spritesheet.png",
                alt: {
                    en: "Kettlehead character spritesheet early concept",
                    de: "Frühes Konzept des Kettlehead-Spritesheets",
                },
                caption: { en: "Character spritesheet", de: "Charakter-Spritesheet" },
            },
        ],
        links: [],
    },
    {
        id: "album",
        type: { en: "Music", de: "Musik" },
        title: { en: "In-Depth Project Music-Album", de: "Album zur Vertiefungsarbeit" },
        summary: {
            en: "A rock album for my Vertiefungsarbeit for my Final Grade in my Apprenticeship. It's about the struggles and worries of Gen Z people.",
            de: "Ein Rockalbum für die Schule über die Sorgen und Kämpfe ganz normaler Menschen.",
        },
        status: { en: "Coming soon", de: "Bald verfügbar" },
        tags: [{ en: "Music production", de: "Musikproduktion" }, "Rock"],
        description: [
            {
                en: "This Project is about the creation of a music album for my Vertiefungsarbeit (final project) in my apprenticeship. The album is about the struggles and worries of Gen Z.",
                de: "Hier Details zu den Songs, zum Aufnahme-Setup und zum Thema des Albums ergänzen.",
            },
        ],
        media: [],
        links: [],
    },
    {
        id: "album-artwork",
        type: "Design / Video",
        title: { en: "Album artwork", de: "Album-Artwork" },
        summary: {
            en: "Drawing the cover for the album, and possibly shooting a music video for it.",
            de: "Ich zeichne das Cover für das Album und drehe vielleicht auch ein Musikvideo dazu.",
        },
        status: { en: "Coming soon", de: "Bald verfügbar" },
        tags: ["Design", "Video"],
        description: [
            {
                en: "Add sketches, drafts and the final cover here once they're ready.",
                de: "Hier Skizzen, Entwürfe und das finale Cover ergänzen, sobald sie fertig sind.",
            },
        ],
        media: [],
        links: [],
    },
]
