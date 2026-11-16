import type { Project } from "../types"

// Media for this project goes in public/work/media-library/
// The browser version of the BPM extractor lives in public/work/media-library/app/index.html
const mediaLibrary: Project = {
    id: "media-library",
    title: "My personal Media Library",
    type: { en: "Software · Python", de: "Software · Python" },
    summary:
        "Media Library which displays, plays and retrieves Metadata and has a built in BPM Extractor (Beats per minute) for songs",
    tags: ["Python"],
    links: [
        { label: "GitHub", url: "https://github.com/InsightfulGuy/Media_library" },
        { label: { en: "Open BPM Webpage-Version Extractor", de: "BPM-Extractor Web-Version öffnen" }, url: "/work/media-library/app/index.html" },
    ],

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
            {
                en: "A simple version that runs right in the browser: drop in some songs (or hit “Try demo loops”) and it finds the BPM. Nothing gets uploaded, everything stays on your device.",
                de: "Eine einfache Version, die direkt im Browser läuft: Zieh ein paar Songs rein (oder klick auf «Demo-Loops testen») und sie findet das BPM. Nichts wird hochgeladen, alles bleibt auf deinem Gerät.",
            },
        ],
        media: [
            {
                type: "embed",
                src: "/work/media-library/app/index.html",
                title: { en: "BPM Extractor, browser version", de: "BPM-Finder, Browser-Version" },
                aspectRatio: "16 / 10",
            },
        ],
    },

    reflection: {
        text: ["TODO: What did you learn? What would you change?"],
    },
}

export default mediaLibrary