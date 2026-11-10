import type { Project } from "../types"

// Media for this project goes in public/work/media-library/
const mediaLibrary: Project = {
    id: "media-library",
    title: "Media_library",
    type: { en: "Software · Python", de: "Software · Python" },
    summary:
        "Media Library which displays and retrieves Metadata and has a built in BPM Extractor (Beats per minute) for songs",
    tags: ["Python"],
    links: [{ label: "GitHub", url: "https://github.com/InsightfulGuy/Media_library" }],

    concept: {
        text: [
            {
                en: "I wanted to extract the exact tempo of songs and samples without opening each file in a seperate program. Media_library reads the metadata of audio files and estimates their BPM automatically. My motivation was to get the BPM for songs I play on the drums, because I usually just do it after my feeling and hearing skill, not the exact BPM.",
                de: "Ich wollte das Tempo meiner Songs und Samples kennen, ohne jede Datei in einem Musikprogramm zu öffnen. Media_library liest die Metadaten von Audiodateien und schätzt ihr BPM automatisch.",
            },
        ],
    },

    process: {
        text: [
            "TODO: How does the BPM extraction work? Show interface sketches, iterations or decisions you made along the way.",
        ],
    },

    outcome: {
        text: [
            "TODO: Add screenshots or a short screen recording (media type \"video\") of the app in use.",
        ],
    },

    reflection: {
        text: ["TODO: What did you learn? What would you change?"],
    },
}

export default mediaLibrary
