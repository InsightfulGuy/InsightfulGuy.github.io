import type { Project } from "../types"

/*
 * Drawings & Collage gallery.
 * 1. Put images in public/work/drawings/ (WebP or JPEG, ideally under ~500 KB each).
 * 2. Add one entry per image to `gallery` below, e.g.
 *      {
 *          src: "/work/drawings/collage-01.webp",
 *          alt: { en: "Describe the image", de: "Bild beschreiben" },
 *          width: 1600, height: 1200,
 *          caption: { en: "Collage, 2025", de: "Collage, 2025" },
 *      },
 * 3. Pick one image as `thumbnail` for the overview card.
 * 4. Remove `draft: true` so it appears on the live site.
 */
const drawings: Project = {
    id: "drawings",
    title: { en: "Drawings & Collage", de: "Zeichnungen & Collagen" },
    type: { en: "Drawing · Collage", de: "Zeichnung · Collage" },
    summary: {
        en: "Doodles, collages and zine pages: the things I make without a plan. This is where my visual style comes from.",
        de: "Doodles, Collagen und Zine-Seiten: die Dinge, die ich ohne Plan mache. Hier entsteht mein visueller Stil.",
    },
    draft: true,
    layout: "gallery",

    concept: {
        text: ["TODO: What connects these works? Themes, techniques, materials?"],
    },

    gallery: [],

    reflection: {
        text: ["TODO: What did you learn from drawing and collaging? How does it feed into your other work?"],
    },
}

export default drawings
