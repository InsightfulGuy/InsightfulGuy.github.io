import type { Project } from "./types"
import kettlehead from "./projects/kettlehead"
import album from "./projects/album"
import albumArtwork from "./projects/album-artwork"
import mediaLibrary from "./projects/media-library"
import drawings from "./projects/drawings"

/*
 * ORDER OF THE WORK OVERVIEW.
 * To add a project: create a file in src/content/projects/ (copy an existing one),
 * import it above and add it to this list. ZHdK allows at most 12 works.
 */
const allProjects: Project[] = [kettlehead, album, albumArtwork, drawings, mediaLibrary]

/** Drafts are only shown while running `npm run dev`. */
export const projects = allProjects.filter((p) => import.meta.env.DEV || !p.draft)

export const MAX_WORKS = 12

if (import.meta.env.DEV) {
    if (allProjects.length > MAX_WORKS) {
        console.warn(
            `[portfolio] ${allProjects.length} works listed, but ZHdK allows at most ${MAX_WORKS}.`,
        )
    }
    const ids = new Set<string>()
    for (const p of allProjects) {
        if (ids.has(p.id)) console.warn(`[portfolio] Duplicate project id "${p.id}".`)
        ids.add(p.id)
    }
}

export type { Project } from "./types"
