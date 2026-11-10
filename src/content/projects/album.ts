import type { Project } from "../types"

// Media for this project goes in public/work/album/
const album: Project = {
    id: "album",
    title: { en: "In-Depth Project Music-Album", de: "Album zur Vertiefungsarbeit" },
    type: { en: "Music", de: "Musik" },
    summary: {
        en: "A rock album for my Vertiefungsarbeit for my Final Grade in my Apprenticeship. It's about the struggles and worries of Gen Z people.",
        de: "Ein Rockalbum über die Sorgen und Kämpfe der Gen Z. Es entsteht als meine Vertiefungsarbeit, die Teil meines Lehrabschlusses ist.",
    },
    status: "wip",
    tags: [{ en: "Music production", de: "Musikproduktion" }, "Rock"],
    links: [],

    concept: {
        text: [
            {
                en: "This Project is about the creation of a music album for my Vertiefungsarbeit (final project) in my apprenticeship. The album is about the struggles and worries of Gen Z.",
            },
            "TODO: A rock album about what my generation worries about: [2–3 concrete themes, e.g. future, pressure, being online all the time].",
            "TODO: I chose rock because [reason].",
            "TODO: An album instead of single songs, because [it lets the songs tell one story together / reason].",
        ],
    },

    process: {
        text: [
            "TODO: How do you write and record the songs? Add demos (media type \"audio\"), lyric sketches or photos of the setup.",
        ],
    },

    outcome: {
        text: ["TODO: Add finished tracks (media type \"audio\") or a video when they're ready."],
    },

    reflection: {
        text: ["TODO: What did you learn? What would you do differently?"],
    },
}

export default album
