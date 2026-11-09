import { useEffect, useState } from "react"
import GitHubRepos from "./GitHubRepos"
import ProjectModal from "./ProjectModal"
import { projects } from "./projects"

const skills = [
    { group: "languages", items: ["Java", "TypeScript", "Python"] },
    { group: "frameworks", items: ["React", "Angular"] },
    { group: "on the side", items: ["Game dev", "Music production"] },
]

const featured = projects.find((p) => p.featured)
const others = projects.filter((p) => p !== featured)

const ArrowIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
)

// The open project is kept in the URL (#project=<id>) so it can be linked
// to directly and the browser back button closes it.
const HASH_PREFIX = "#project="

function projectIdFromHash() {
    const hash = window.location.hash
    return hash.startsWith(HASH_PREFIX) ? decodeURIComponent(hash.slice(HASH_PREFIX.length)) : null
}

function App() {
    const year = new Date().getFullYear()
    const [openId, setOpenId] = useState(projectIdFromHash)
    const openProject = projects.find((p) => p.id === openId) ?? null

    useEffect(() => {
        const onHash = () => setOpenId(projectIdFromHash())
        window.addEventListener("hashchange", onHash)
        return () => window.removeEventListener("hashchange", onHash)
    }, [])

    const open = (id: string) => {
        window.location.hash = `project=${encodeURIComponent(id)}`
    }

    const close = () => {
        if (projectIdFromHash()) {
            history.replaceState(null, "", window.location.pathname + window.location.search)
        }
        setOpenId(null)
    }

    return (
        <>
            <a className="skip-link" href="#main">
                Skip to content
            </a>

            <header className="topbar">
                <div className="container topbar-inner">
                    <a className="brand" href="#top">
                        tristan<span className="accent">.dev</span>
                    </a>
                    <nav aria-label="Main navigation">
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </header>

            <main id="main">
                <section className="hero container" id="top">
                    <div className="hero-text">
                        <p className="kicker">Apprentice application developer</p>
                        <h1>
                            Hi, I'm Tristan<span className="accent">.</span>
                        </h1>
                        <p className="lead">
                            I build web applications during the week and games and music in my
                            free time. Currently doing my apprenticeship at Worldline Schweiz AG.
                        </p>
                        <div className="actions">
                            <a className="btn btn-primary" href="#projects">
                                View projects <ArrowIcon />
                            </a>
                            <a
                                className="btn btn-ghost"
                                href="https://github.com/InsightfulGuy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <img
                        className="avatar"
                        src="/head-icon.png"
                        alt="Sketch of Kettlehead, the knight from my game"
                        width="160"
                        height="160"
                    />
                </section>

                <section className="section container" id="about" aria-labelledby="about-title">
                    <h2 id="about-title">About</h2>
                    <div className="about-grid">
                        <p>
                            I like building things that line up with my interests. At work that's
                            web apps and backend code; at home it's pixel-art games, recording
                            songs and whatever media project I'm into at the moment.
                        </p>
                        <dl className="skills">
                            {skills.map((s) => (
                                <div key={s.group}>
                                    <dt>{s.group}</dt>
                                    <dd>
                                        {s.items.map((item) => (
                                            <span className="tag" key={item}>
                                                {item}
                                            </span>
                                        ))}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section
                    className="section container"
                    id="projects"
                    aria-labelledby="projects-title"
                >
                    <h2 id="projects-title">Projects</h2>

                    {featured && (
                        <article className="card featured clickable">
                            {featured.cover && (
                                <div className="featured-media">
                                    <img src={featured.cover} alt="" />
                                </div>
                            )}
                            <div className="featured-body">
                                <p className="card-type">{featured.type}</p>
                                <h3>
                                    <button className="card-link" onClick={() => open(featured.id)}>
                                        {featured.title}
                                    </button>
                                </h3>
                                <p>{featured.summary}</p>
                                <div className="card-foot">
                                    {featured.status && (
                                        <span className="status">{featured.status}</span>
                                    )}
                                    <span className="details-hint" aria-hidden="true">
                                        Details <ArrowIcon />
                                    </span>
                                </div>
                            </div>
                        </article>
                    )}

                    <div className="card-grid">
                        {others.map((p) => (
                            <article className="card clickable" key={p.id}>
                                <p className="card-type">{p.type}</p>
                                <h3>
                                    <button className="card-link" onClick={() => open(p.id)}>
                                        {p.title}
                                    </button>
                                </h3>
                                <p>{p.summary}</p>
                                <div className="card-foot">
                                    {p.status && <span className="status">{p.status}</span>}
                                    <span className="details-hint" aria-hidden="true">
                                        Details <ArrowIcon />
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <h3 className="subheading">On GitHub</h3>
                    <GitHubRepos />
                </section>

                <section
                    className="section container contact"
                    id="contact"
                    aria-labelledby="contact-title"
                >
                    <h2 id="contact-title">Get in touch</h2>
                    <p>Want to work together or just say hi? My inbox is open.</p>
                    <a className="btn btn-primary" href="mailto:tristan.evans@bluewin.ch">
                        tristan.evans@bluewin.ch <ArrowIcon />
                    </a>
                    <div className="social">
                        <a
                            href="https://www.linkedin.com/in/tristan-evans-862b84222"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a href="https://github.com/InsightfulGuy" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </section>
            </main>

            <ProjectModal project={openProject} onClose={close} />

            <footer className="container footer">
                <span>© {year} Tristan Evans</span>
                <span>Built with React + Vite</span>
            </footer>
        </>
    )
}

export default App
