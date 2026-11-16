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

    concept: {
        text: [
            {
                en: "When the Album is finished, I might also wan't to make cover art, to improve my designing skills.",
                de: "Wenn das Album fertig ist, kann es sein dass ich noch ein Cover-Art für es mache, um meine Design-Skills zu verbessern.",
            },
            {
                en: "It uses the same zine/collage style as my drawings, so the music and the visuals feel like one project.",
                de: "Es nutzt denselben Zine- und Collage-Stil wie meine Zeichnungen, damit Musik und Visuals wie ein gemeinsames Projekt wirken.",
            },
        ],
    },

    process: {
        text: [
            "sketches, moodboards, drafts and storyboards for the music video",
        ],
    },

    outcome: {
        text: ["Cover art still TBD"],
    },

    reflection: {
        text: [""],
    },
}

export default albumArtwork
