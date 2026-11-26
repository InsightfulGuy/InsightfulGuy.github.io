import type { Project } from "../types"

const zuriTonight: Project = {
    id: "zuri-tonight",
    title: "Zuri Tonight",
    type: { en: "Web app · Interaction design", de: "Web-App · Interaction Design" },
    summary: {
        en: "A mobile web app that answers one question fast: what can I do tonight near me in Zürich?",
        de: "Eine mobile Web-App, die eine Frage schnell beantwortet: Was kann ich heute Abend in meiner Nähe in Zürich machen?",
    },
    year: "2026",
    role: { en: "Concept, interaction design, code", de: "Konzept, Interaction Design, Code" },
    status: "wip",
    tags: ["React", "TypeScript", "PWA", { en: "Maps", de: "Karten" }],
    // thumbnail: { src: "/work/zuri-tonight/thumb.webp", alt: { en: "...", de: "..." }, width: 1200, height: 900 },
    links: [
        { label: { en: "Open the app", de: "App öffnen" }, url: "https://insightfulguy.github.io/zuri-tonight/" },
        { label: "GitHub", url: "https://github.com/InsightfulGuy/zuri-tonight" },
    ],

    idea: {
        text: [
            {
                en: "Event information in Zürich is spread over many websites, so finding something to do takes too long. I wanted the shortest path from opening an app to seeing tonight's events near me: two taps.",
                de: "Infos zu Events in Zürich sind über viele Websites verteilt, darum dauert es zu lange, etwas zu finden. Ich wollte den kürzesten Weg vom Öffnen einer App bis zu den Events von heute Abend in meiner Nähe: zwei Taps.",
            },
            {
                en: "It's for three groups: young people with little money who decide spontaneously, musicians looking for open stages and jam sessions, and people who need step-free or quiet places.",
                de: "Sie ist für drei Gruppen: junge Leute mit wenig Geld, die spontan entscheiden, Musiker:innen, die offene Bühnen und Jam Sessions suchen, und Menschen, die stufenlose oder ruhige Orte brauchen.",
            },
        ],
    },

    process: {
        text: [
            {
                en: "All events are invented demo data. That created a design problem: a reviewer opening the app months later would see an empty map. So the demo week moves along with the current week, and the app always has something on tonight.",
                de: "Alle Events sind erfundene Demo-Daten. Das war ein Designproblem: Wer die App Monate später öffnet, sähe eine leere Karte. Darum wandert die Demo-Woche mit der aktuellen Woche mit, und die App hat immer etwas für heute Abend.",
            },
            {
                en: "I didn't want to invent facts about real venues, but without accessibility data the step-free filter would show nothing. So the venues are clearly made up and sit at public places. And “unknown” is never treated as “no”: the app says how many events it hid because access is unknown.",
                de: "Ich wollte keine Fakten über echte Lokale erfinden, aber ohne Zugänglichkeitsdaten hätte der Filter «stufenlos» nichts gezeigt. Darum sind die Orte klar erfunden und stehen an öffentlichen Plätzen. Und «unbekannt» wird nie wie «nein» behandelt: Die App sagt, wie viele Events sie versteckt hat, weil der Zugang unbekannt ist.",
            },
            {
                en: "Testing changed details: the sport icon looked like a “no entry” sign on the map, the fourth filter didn't fit on a small phone, and keyboard users lost their place after closing a detail view. All three are fixed.",
                de: "Beim Testen haben sich Details geändert: Das Sport-Icon sah auf der Karte wie ein Fahrverbot aus, der vierte Filter passte nicht auf ein kleines Handy, und mit der Tastatur verlor man nach dem Schliessen einer Detailansicht seine Position. Alle drei sind behoben.",
            },
        ],
    },

    outcome: {
        text: [
            {
                en: "A web app you can open right away, no install, no login. Map and list, a time switch (now, tonight, this weekend, a date), four filters, a small “My evening” planner and reminders. It can be added to the home screen and works offline.",
                de: "Eine Web-App, die man sofort öffnen kann, ohne Installation und ohne Login. Karte und Liste, ein Zeitschalter (jetzt, heute Abend, dieses Wochenende, ein Datum), vier Filter, ein kleiner «Mein Abend»-Planer und Erinnerungen. Man kann sie auf den Homescreen legen, und sie funktioniert offline.",
            },
        ],
        media: [
            {
                type: "embed",
                src: "https://insightfulguy.github.io/zuri-tonight/",
                title: { en: "Zuri Tonight, live demo", de: "Zuri Tonight, Live-Demo" },
                aspectRatio: "4 / 3",
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

export default zuriTonight
