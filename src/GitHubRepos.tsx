import { useEffect, useState } from "react"
import { useLang } from "./i18n"

const USER = "InsightfulGuy"
const MAX_REPOS = 6
// If any repo has this topic, only repos with it are shown (an opt-in list).
// Otherwise all public, non-fork, non-archived repos are shown.
const SHOWCASE_TOPIC = "portfolio"
const CACHE_KEY = `gh-repos:${USER}`
const CACHE_MS = 10 * 60 * 1000

type Repo = {
    id: number
    name: string
    description: string | null
    html_url: string
    homepage: string | null
    language: string | null
    stargazers_count: number
    pushed_at: string
    fork: boolean
    archived: boolean
    topics?: string[]
}

type State =
    | { status: "loading" }
    | { status: "error" }
    | { status: "ready"; repos: Repo[] }

function pickRepos(all: Repo[]): Repo[] {
    // Skip forks, archived repos, this site's repo and the profile-README repo.
    const hidden = [USER.toLowerCase(), `${USER.toLowerCase()}.github.io`]
    const candidates = all.filter(
        (r) => !r.fork && !r.archived && !hidden.includes(r.name.toLowerCase()),
    )
    const showcased = candidates.filter((r) => r.topics?.includes(SHOWCASE_TOPIC))
    const list = showcased.length > 0 ? showcased : candidates
    return list
        .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
        .slice(0, MAX_REPOS)
}

function readCache(): Repo[] | null {
    try {
        const raw = sessionStorage.getItem(CACHE_KEY)
        if (!raw) return null
        const { at, repos } = JSON.parse(raw)
        return Date.now() - at < CACHE_MS ? repos : null
    } catch {
        return null
    }
}

function writeCache(repos: Repo[]) {
    try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), repos }))
    } catch {
        // storage unavailable, ignore
    }
}

export default function GitHubRepos() {
    const { lang, t } = useLang()
    const [state, setState] = useState<State>(() => {
        const cached = readCache()
        return cached ? { status: "ready", repos: cached } : { status: "loading" }
    })

    useEffect(() => {
        if (state.status === "ready") return
        const controller = new AbortController()
        fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`, {
            headers: { Accept: "application/vnd.github+json" },
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) throw new Error(`GitHub API ${res.status}`)
                return res.json() as Promise<Repo[]>
            })
            .then((all) => {
                const repos = pickRepos(all)
                writeCache(repos)
                setState({ status: "ready", repos })
            })
            .catch((err) => {
                if (err.name !== "AbortError") setState({ status: "error" })
            })
        return () => controller.abort()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const dateFmt = new Intl.DateTimeFormat(lang === "de" ? "de-CH" : "en", {
        month: "short",
        year: "numeric",
    })

    const profileLink = (
        <a className="more-link" href={`https://github.com/${USER}`} target="_blank" rel="noreferrer">
            {t("allRepos")}
        </a>
    )

    if (state.status === "loading") {
        return (
            <div className="card-grid" aria-busy="true" aria-label={t("loadingRepos")}>
                {[0, 1].map((i) => (
                    <div className="card skeleton" key={i} />
                ))}
            </div>
        )
    }

    if (state.status === "error" || state.repos.length === 0) {
        return <p className="repo-fallback">{profileLink}</p>
    }

    return (
        <>
            <div className="card-grid">
                {state.repos.map((repo) => (
                    <article className="card repo" key={repo.id}>
                        <p className="card-type">{repo.language ?? t("repository")}</p>
                        <h3>
                            <a href={repo.html_url} target="_blank" rel="noreferrer">
                                {repo.name}
                            </a>
                        </h3>
                        <p>{repo.description ?? t("noDescription")}</p>
                        <div className="repo-meta">
                            <span>
                                {t("updated")} {dateFmt.format(new Date(repo.pushed_at))}
                            </span>
                            {repo.stargazers_count > 0 && <span>★ {repo.stargazers_count}</span>}
                            {repo.homepage && (
                                <a href={repo.homepage} target="_blank" rel="noreferrer">
                                    {t("liveDemo")}
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
            <p className="repo-fallback">{profileLink}</p>
        </>
    )
}
