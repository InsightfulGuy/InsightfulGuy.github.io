import type { Project } from "../types"

// Media for this project goes in public/work/mergers-misfits/
const mergersmisfits: Project = {
    id: "mergers-misfits",
    title: "Mergers & Misfits",
    type: { en: "Game in development · 2D action roguelite", de: "Game in Entwicklung · 2D-Action-Roguelite" },
    summary: {
        en: "A burnt-out office worker who makes music and art at night quits for good, and fights his way up a corporate tower with his guitar, freeing his co-workers one floor at a time.",
        de: "Ein ausgebrannter Büroangestellter, der nachts Musik und Kunst macht, kündigt endgültig und kämpft sich mit seiner Gitarre einen Konzernturm hoch. Stockwerk für Stockwerk befreit er dabei seine Arbeitskollegen.",
    },
    role: {
        en: "Solo: game design, code, art, animation, music, writing",
        de: "Solo: Game Design, Code, Art, Animation, Musik, Story",
    },
    status: "wip",
    tags: [{ en: "Game design", de: "Game Design" }, "Unity", "C#", { en: "Hand-drawn", de: "Handgezeichnet" }],
    // thumbnail: { src: "/work/mergers-misfits/thumb.webp", alt: { en: "...", de: "..." }, width: 1200, height: 900 },
    links: [],

    idea: {
        text: [
            {
                en: "The player is a bit like me: a desk worker who does music and art in his free time. The game is about taking your life and creativity back.",
                de: "Der Spieler ist ein bisschen wie ich: ein Bürojob-Typ, der in seiner Freizeit Musik und Kunst macht. Im Game geht es darum, sich sein Leben und seine Kreativität zurückzuholen.",
            },
            {
                en: "The world is a huge glass skyscraper that works like a merger machine: it swallows small companies, studios and artists and turns them all into the same grey, faceless style. Its newest weapon is an AI lab that “acquires” people's art. Every floor is a department, from the Lobby up to the Boardroom, so you climb the corporate ladder, literally.",
                de: "Die Welt ist ein riesiger Glas-Wolkenkratzer, der wie eine Fusionsmaschine funktioniert: Er schluckt kleine Firmen, Studios und Künstler und macht aus allen denselben grauen, gesichtslosen Stil. Seine neuste Waffe ist ein KI-Labor, das die Kunst von Menschen «übernimmt». Jedes Stockwerk ist eine Abteilung, von der Lobby bis zum Boardroom. Man klettert die Karriereleiter also wortwörtlich hoch.",
            },
            {
                en: "My main design rule: freeing people is better than beating them, but it takes skill and effort. Workers are freed by talking and jamming with them on the beat, middle managers by parrying their memos back upstairs. Only the higher-ups have to be beaten.",
                de: "Meine wichtigste Design-Regel: Menschen befreien ist besser als sie zu besiegen, braucht aber Können und Aufwand. Angestellte befreit man, indem man mit ihnen redet und im Takt jammt, mittlere Manager, indem man ihre Memos im Takt nach oben zurückschlägt. Nur die Chefs muss man wirklich besiegen.",
            },
            {
                en: "The five design pillars: human-made vs. machine-made in everything (art, music, story) · freeing beats fighting, but takes skill · the world remembers your choices across runs · goofy surface, sincere heart (punch up, not down) · short and dense beats long and repetitive.",
                de: "Die fünf Design-Pfeiler: menschengemacht gegen maschinengemacht, in allem (Kunst, Musik, Story) · befreien schlägt kämpfen, braucht aber Können · die Welt merkt sich deine Entscheidungen über mehrere Runs · alberne Oberfläche, ehrlicher Kern (nach oben treten, nicht nach unten) · kurz und dicht statt lang und repetitiv.",
            },
        ],
    },

    process: {
        text: [
            {
                en: "It started as doodles in my notebook. My ideas went back and forth between a goofy world and a serious one, mostly inspired by Hollow Knight, Scott Pilgrim and Deltarune. In the end I kept both: a goofy surface with a sincere heart.",
                de: "Angefangen hat es mit Kritzeleien in meinem Notizbuch. Meine Ideen schwankten zwischen einer albernen und einer ernsten Welt, vor allem inspiriert von Hollow Knight, Scott Pilgrim und Deltarune. Am Ende habe ich beides behalten: eine alberne Oberfläche mit einem ehrlichen Kern.",
            },
            {
                en: "The game changed a lot on the way. The first version was a top-down fighter where you challenge enemies to 1v1 duels in an arena. Now it's a side-view game where duels are music battles that run on a beat.",
                de: "Das Spiel hat sich unterwegs stark verändert. Die erste Version war ein Kampfspiel in Draufsicht, in dem man Gegner zu 1-gegen-1-Duellen in einer Arena herausfordert. Jetzt ist es ein Side-View-Game, in dem Duelle Musik-Battles im Takt sind.",
            },
            {
                en: "Two art styles tell the story. The corporate world is flat vector art made on the computer, with long limbs, tiny heads, blank faces and greys. The hero and everyone he frees are drawn by hand on paper in pencil and fineliner and scanned in. When you free a worker, their flat look gets swapped for a hand-drawn one. The music follows the same split: sterile elevator muzak on corporate floors, 2000s pop-punk and garage rock once a floor is free.",
                de: "Zwei Grafikstile erzählen die Geschichte. Die Konzernwelt ist flache Vektorgrafik vom Computer, mit langen Gliedern, winzigen Köpfen, leeren Gesichtern und Grautönen. Der Held und alle, die er befreit, sind von Hand auf Papier gezeichnet, mit Bleistift und Fineliner, und eingescannt. Befreit man jemanden, wird sein flacher Look durch einen handgezeichneten ersetzt. Die Musik folgt derselben Trennung: sterile Fahrstuhlmusik auf den Konzern-Stockwerken, 2000er-Pop-Punk und Garage Rock, sobald ein Stockwerk frei ist.",
            },
            {
                en: "Right now I'm in Phase 1: a grey-box prototype with placeholder shapes. The rule for moving on: freeing a worker by jamming on the beat has to feel good even with rectangles.",
                de: "Zurzeit bin ich in Phase 1: ein Grey-Box-Prototyp mit Platzhalter-Formen. Die Regel, um weiterzumachen: Einen Angestellten durch Jammen im Takt zu befreien, muss sich schon mit Rechtecken gut anfühlen.",
            },
            {
                en: "One technical decision that matters for the feel: the beat clock runs on the audio hardware clock instead of the frame rate, so the timing never drifts. Every memo an enemy throws is calculated to arrive exactly on a beat.",
                de: "Eine technische Entscheidung, die für das Spielgefühl wichtig ist: Die Beat-Uhr läuft auf der Audio-Hardware-Uhr statt auf der Framerate, damit das Timing nie abdriftet. Jedes Memo, das ein Gegner wirft, ist so berechnet, dass es genau auf einem Beat ankommt.",
            },
        ],
    },

    outcome: {
        text: [
            {
                en: "Not playable yet. The Phase 1 prototype code has the beat clock with Perfect/Good/Off timing, memos timed to the beat, a ragdoll system for all characters, a world that remembers who you freed across runs, and colour that comes back around the hero as he walks through the grey offices.",
                de: "Noch nicht spielbar. Der Code des Phase-1-Prototyps hat die Beat-Uhr mit Perfect/Good/Off-Timing, Memos im Takt, ein Ragdoll-System für alle Figuren, eine Welt, die sich über Runs merkt, wen man befreit hat, und Farbe, die rund um den Helden zurückkommt, während er durch die grauen Büros läuft.",
            },
        ],
    },

    people: {
        text: [],
    },

    reflection: {
        text: [
            {
                en: "So far I have learned more about Unity and C#, but mostly about game design itself: I started to understand design principles and how to apply them to my work.",
                de: "Bisher habe ich mehr über Unity und C# gelernt, aber vor allem über Game Design selbst: Ich habe angefangen, Design-Prinzipien zu verstehen und sie in meiner Arbeit anzuwenden.",
            },
            {
                en: "What I'm learning right now: gameplay that's synced to audio, game feel and juice, 2D physics, save systems, Unity editor tools, getting hand-drawn art into the engine, frame-by-frame animation, and scoping a solo project so it actually gets finished. The target is a tight 3–5 hour game.",
                de: "Was ich gerade lerne: Gameplay, das mit Audio synchron läuft, Game Feel und Juice, 2D-Physik, Speichersysteme, Unity-Editor-Tools, handgezeichnete Grafik in die Engine bringen, Frame-by-Frame-Animation und ein Solo-Projekt so planen, dass es auch fertig wird. Ziel ist ein kompaktes Game von 3–5 Stunden.",
            },
        ],
    },
}

export default mergersmisfits