import type { Project } from "../types"

// Media for this project goes in public/work/album/
const album: Project = {
    id: "album",
    title: { en: "In-Depth Project Music-Album", de: "Album zur Vertiefungsarbeit" },
    type: { en: "Music", de: "Musik" },
    summary: {
        en: "A rock album for my Vertiefungsarbeit for my Final Grade in my Apprenticeship. It's about the struggles and worries of Gen Z.",
        de: "Ein Rockalbum über die Sorgen und Kämpfe der Gen Z. Es entsteht als meine Vertiefungsarbeit, die Teil meines Lehrabschlusses ist.",
    },
    status: "wip",
    tags: [{ en: "Music production", de: "Musikproduktion" }, "Rock"],
    links: [],

    concept: {
        text: [
            {
                en: "The album lyrics are being written with the help of a Google Form, where I asked/posted an anonymous forum for people to share their worries and struggles. I am currently using these lyrics as guideline for the songs.",
                de: "Die Songtexte für das Album entstehen mithilfe eines Google-Formulars, in dem ich in einem anonymen Forum darum gebeten habe, dass die Teilnehmer ihre Sorgen und Probleme mitteilen. Diese Texte diene mir derzeit als Grundlage für die Songs."
            },
        ],
    },

    process: {
        text: [
            "",
        ],
    },

    outcome: {
        text: ["Placeholder for results"],
    },

    reflection: {
        text: [""],
    },
}

export default album
