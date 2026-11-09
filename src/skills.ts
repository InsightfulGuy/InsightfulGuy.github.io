import type { Localized } from "./i18n"

export type SkillGroup = {
    title: Localized
    items: string[]
    learning?: boolean
}

export const skillGroups: SkillGroup[] = [
    {
        title: { en: "Programming languages", de: "Programmiersprachen" },
        items: ["Java", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "SCSS"],
    },
    {
        title: "Frameworks",
        items: ["Angular", "React", "Spring"],
    },
    {
        title: { en: "Technologies", de: "Technologien" },
        items: ["AWS", "Docker", "Jenkins", "Grafana", "Prometheus", "MongoDB", "MySQL"],
    },
    {
        title: "Tools",
        items: ["Figma", "Adobe Photoshop"],
    },
    {
        title: { en: "Currently learning", de: "Lerne gerade" },
        items: ["Rust", "C#", "Unity", "Blender"],
        learning: true,
    },
]
