import type { Project } from "../types"

// Media for this project goes in public/work/album-artwork/
const albumArtwork: Project = {
    id: "album-artwork",
    title: { en: "Album artwork", de: "Album-Artwork" },
    type: "Design / Video",
    summary: {
        en: "Drawing the cover for the album, and possibly shooting a music video for it.",
        de: "Ich zeichne das Cover für das Album und drehe vielleicht auch ein Musikvideo dazu.",
    },
    status: "wip",
    tags: ["Design", "Video"],
    links: [],

    idea: {
        text: [
            {
                en: "It uses the same zine/collage style as my drawings, so the music and the visuals feel like one project.",
                de: "Es nutzt denselben Zine- und Collage-Stil wie meine Zeichnungen, damit Musik und Visuals wie ein gemeinsames Projekt wirken.",
            },
        ],
    },

    process: {
        text: [],
    },

    outcome: {
        text: [],
    },

    people: {
        text: [],
    },

    reflection: {
        text: [],
    },
}

export default albumArtwork