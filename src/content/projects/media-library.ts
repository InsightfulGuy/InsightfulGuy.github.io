import type { Project } from "../types"

// Media for this project goes in public/work/media-library/
// The browser version of the BPM extractor lives in public/work/media-library/app/index.html
const mediaLibrary: Project = {
    id: "media-library",
    title: "My personal Media Library",
    type: { en: "Software · Python", de: "Software · Python" },
    summary: {
        en: "A media library that displays, plays and reads the metadata of my songs, with a built-in BPM extractor (beats per minute).",
        de: "Eine Mediathek, die meine Songs anzeigt, abspielt und ihre Metadaten ausliest, mit eingebautem BPM-Extractor (Beats pro Minute).",
    },
    tags: ["Python", "JavaScript", { en: "Audio", de: "Audio" }],
    links: [
        { label: "GitHub", url: "https://github.com/InsightfulGuy/Media_library" },
        {
            label: { en: "Open BPM Webpage-Version Extractor", de: "BPM-Extractor Web-Version öffnen" },
            url: "/work/media-library/app/index.html",
        },
    ],

    idea: {
        text: [
            {
                en: "I play the drums, and I usually find the tempo of a song by feeling and ear, not the exact BPM. I wanted to know the exact tempo of my songs and samples without opening each file in a separate program.",
                de: "Ich spiele Schlagzeug und finde das Tempo eines Songs normalerweise nach Gefühl und Gehör, nicht das genaue BPM. Ich wollte das genaue Tempo meiner Songs und Samples kennen, ohne jede Datei in einem separaten Programm zu öffnen.",
            },
        ],
    },

    process: {
        text: [
            {
                en: "It started as a Python tool (FastAPI and SQLite) for my music library. For the BPM I used the librosa library: find the hits in the song, check at which gap they repeat, and place the beats.",
                de: "Angefangen hat es als Python-Tool (FastAPI und SQLite) für meine Musiksammlung. Für das BPM habe ich die Library librosa benutzt: die Schläge im Song finden, schauen, in welchem Abstand sie sich wiederholen, und die Beats setzen.",
            },
            {
                en: "Then I made a version that runs in the browser, so anyone can try it right here without installing anything.",
                de: "Danach habe ich eine Version gebaut, die im Browser läuft, damit alle sie direkt hier ausprobieren können, ohne etwas zu installieren.",
            },
            {
                en: "Testing it with a real song broke it. “Smells Like Teen Spirit” is officially 117 BPM, my tool said 106. In a dense rock mix it skipped a lot of beats, and the skipped ones dragged the tempo down. So I changed the method to a “tempo wheel”: wrap the song around a circle where one lap is one beat. At the right tempo all the hits stack up in the same spot, at a wrong one they smear around the circle. It also measures every 20 seconds separately, because a real drummer speeds up: Nirvana: Smells Like Teen Spirit for example goes from about 116 to 118. Now it says 117.",
                de: "Beim Test mit einem echten Song ist es kaputtgegangen. «Smells Like Teen Spirit» hat offiziell 117 BPM, mein Tool sagte 106. In einem dichten Rock-Mix hat es viele Beats übersprungen, und die übersprungenen haben das Tempo nach unten gezogen. Also habe ich die Methode zu einem «Tempo-Rad» geändert: Man wickelt den Song um einen Kreis, bei dem eine Runde ein Beat ist. Beim richtigen Tempo stapeln sich alle Schläge an derselben Stelle, bei einem falschen verschmieren sie rund um den Kreis. Ausserdem misst es alle 20 Sekunden einzeln, weil ein echter Drummer schneller wird: Nirvana: Smells like Teen Spirit zum Beispiel geht von etwa 116 auf 118. Jetzt sagt es 117.",
            }
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
                title: { en: "BPM Extractor, browser version", de: "BPM-Extractor, Browser-Version" },
                aspectRatio: "16 / 10",
            },
        ],
    },

    people: {
        text: [],
    },

    reflection: {
        text: [],
    },
}

export default mediaLibrary