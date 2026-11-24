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

    idea: {
        text: [
            {
                en: "An album about the worries and struggles of people my age, based on what they told me.",
                de: "Ein Album über die Sorgen und Probleme von Leuten in meinem Alter, basierend auf dem, was sie mir erzählt haben.",
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
        text: [
            {
                en: "The lyrics come from other people: I shared an anonymous Google Form in an online forum, where people could write about their worries and struggles. I'm using their answers as the guideline for the songs.",
                de: "Die Songtexte kommen von anderen Menschen: Ich habe ein anonymes Google-Formular in einem Online-Forum geteilt, in dem die Leute über ihre Sorgen und Probleme schreiben konnten. Ihre Antworten dienen mir als Grundlage für die Songs.",
            },
        ],
    },

    reflection: {
        text: [],
    },
}

export default album