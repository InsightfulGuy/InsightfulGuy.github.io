import type { Project } from "../types"

// Media for this project lives in public/work/mergersmisfits/
const mergersmisfits: Project = {
    id: "Mergers & Misfits",
    title: "Mergers & Misfits",
    type: { en: "Indie game · 2D top-down fighter", de: "Indie-Game · 2D-Kampfspiel mit Draufsicht" },
    summary: {
        en: "",
        de: "",
    },
    status: "wip",
    tags: [{ en: "Game dev", de: "Game-Entwicklung" }, "Pixel Art"],
    thumbnail: {
        src: "",
        alt: {
            en: "Mergers & Misfits character spritesheet early concept",
            de: "Frühes Konzept des Mergers & Misfits-Spritesheets",
        },
        width: 1536,
        height: 1024,
    },
    links: [],

    concept: {
        text: [
            {
                en: "",
                de: "",
            },
            {
                en: "The game is a mix between a 2D top down fighting game and a versus 1v1 fight.",
                de: "Das Spiel ist eine Mischung aus einem 2D-Kampfspiel mit Draufsicht und einem 1-gegen-1-Kampf.",
            },
            {
                en: "Mergers & Misfits is about a guy who is clearly not ready for",
                de: "Mergers & Misfits handelt von ",
            },
            {
                en: "The idea to make this game came from playing games like Hollow Knight, Scott Pilgrim EX and Deltarune. I wanted to make a game that used some mix of Combat mechanics of those games, trying out different ideas and seeing what works. The game is still in development, but I hope to have a playable demo soon.",
                de: "Die Idee zu diesem Spiel entstand beim Spielen von Titeln wie Hollow Knight, Scott Pilgrim EX und Deltarune. Ich wollte ein Spiel entwickeln, das eine Mischung aus den Kampfmechaniken dieser Spiele nutzt, dabei verschiedene Ideen ausprobieren und sehen, was funktioniert. Das Spiel befindet sich noch in der Entwicklung, aber ich hoffe, bald eine spielbare Demo bereitstellen zu können.",
            },
            {
                en: "It mixes top-down movement with 1v1 duels, basically Challenging an enemy to a duel, and then fighting them in a 1v1 arena. But depending on the amount of enemies and/or if they respect the duel, the player may have to fight multiple enemies at once.",
                de: "Es kombiniert Top-Down-Bewegung mit 1-gegen-1-Duellen, im Grunde genommen fordert man einen Gegner zu einem Duell heraus und kämpft dann in einer 1-gegen-1-Arena. Je nach Anzahl der Gegner und/oder ob sie das Duell respektieren, muss der Spieler jedoch möglicherweise gegen mehrere Gegner gleichzeitig kämpfen.",
            },
        ],
    },

    process: {
        text: [
            "This concept sheet is the result of doodling around with the idea in my notebook, and then trying to make a concept sheet that shows the character, the enemies and the environment. I scanned in my pages I drew by hand and edited them a bit, forming into this concept art.",
            "Moreover, my ideas have been going back and forth between a goofy kind of world and serious, mostly taking inspiration from the games I mentioned above.",
        ],
        media: [
            {
                type: "image",
                src: "",
                full: "",
                width: 1536,
                height: 1024,
                alt: {
                    en: "Mergers & Misfits character spritesheet early concept",
                    de: "Frühes Konzept des Mergers & Misfits-Spritesheets",
                },
                caption: { en: "Character spritesheet", de: "Charakter-Spritesheet" },
            },
        ],
    },

    outcome: {
        text: [
            {
                en: "The current build is a prototype for testing movement, combat and physics, shown in the gameplay video below.",
                de: "Der aktuelle Build ist ein Prototyp, mit dem ich Bewegung, Kampf und Physik teste, zu sehen im Gameplay-Video unten.",
            }
        ],
        media: [
            {
                type: "video",
                src: "",
                poster: "",
                width: 1280,
                height: 720,
                caption: "Testing gameplay mechanics and physics",
            },
        ],
    },

    reflection: {
        text: ["So far I have learned more about Unity mechanics, as well as C# programming. Specifically tho, I learned alot about Game Design/Designing in general, I started to understand design principles and how to apply them to my work."],
    },
}

export default mergersmisfits
