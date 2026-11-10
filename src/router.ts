import { useEffect, useState } from "react"

/*
 * Hash-based routes (GitHub Pages can't serve real sub-paths for a single-page app):
 *   #/                 home
 *   #/work/<id>        project page
 *   #work, #about ...  home, scrolled to that section
 * Old links (#project=<id>) are redirected to #/work/<id>.
 */

export type Route = { name: "home"; anchor?: string } | { name: "project"; id: string }

const WORK_PREFIX = "#/work/"
const LEGACY_PREFIX = "#project="

export const workHref = (id: string) => `${WORK_PREFIX}${encodeURIComponent(id)}`

function parse(hash: string): Route {
    if (hash.startsWith(WORK_PREFIX)) {
        return { name: "project", id: decodeURIComponent(hash.slice(WORK_PREFIX.length)) }
    }
    if (hash.startsWith(LEGACY_PREFIX)) {
        return { name: "project", id: decodeURIComponent(hash.slice(LEGACY_PREFIX.length)) }
    }
    if (hash === "" || hash === "#" || hash === "#/") return { name: "home" }
    return { name: "home", anchor: decodeURIComponent(hash.slice(1)) }
}

function redirectLegacy() {
    const hash = window.location.hash
    if (hash.startsWith(LEGACY_PREFIX)) {
        const id = hash.slice(LEGACY_PREFIX.length)
        history.replaceState(null, "", `${window.location.pathname}${window.location.search}${WORK_PREFIX}${id}`)
    }
}

export function useRoute(): Route {
    const [route, setRoute] = useState<Route>(() => {
        redirectLegacy()
        return parse(window.location.hash)
    })

    useEffect(() => {
        const onChange = () => {
            redirectLegacy()
            setRoute(parse(window.location.hash))
        }
        window.addEventListener("hashchange", onChange)
        return () => window.removeEventListener("hashchange", onChange)
    }, [])

    return route
}
