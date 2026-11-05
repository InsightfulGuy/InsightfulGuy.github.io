const Arrow = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow">
        <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
)

const Star = ({ className = "" }: { className?: string }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 100 100">
        <path d="M50 4 62 38 97 38 69 59 80 94 50 72 20 94 31 59 3 38 38 38Z" />
    </svg>
)

const Bolt = ({ className = "" }: { className?: string }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 60 100">
        <path d="M38 2 6 56h22L18 98 54 38H32Z" />
    </svg>
)

const Pin = ({ className = "" }: { className?: string }) => (
    <svg aria-hidden="true" className={`pin ${className}`} viewBox="0 0 120 30">
        <path d="M14 15h88a10 10 0 1 0 0-.1M14 15a10 10 0 0 1 10-10h70" />
        <circle cx="10" cy="15" r="7" />
    </svg>
)

const Tape = ({ className = "" }: { className?: string }) => (
    <span aria-hidden="true" className={`tape ${className}`} />
)

const Scribble = ({ className = "" }: { className?: string }) => (
    <svg aria-hidden="true" className={`scribble ${className}`} viewBox="0 0 200 40">
        <path d="M4 30c20-24 30-24 38 0s20 22 34-2 26-22 36 2 22 20 36-4 24-20 46 0" />
    </svg>
)

const stats = [
    { label: "code", value: 85 },
    { label: "music", value: 70 },
    { label: "game dev", value: 75 },
    { label: "sleep", value: 15 },
]

function App() {
    const year = new Date().getFullYear()

    return (
        <div className="site-shell">
            <a className="skip-link" href="#main">
                Skip to content
            </a>

            <header className="topbar">
                <a className="brand" href="#top" aria-label="Go to top">
                    <span className="brand-mark">T</span>
                    <span>tristan</span>
                </a>
                <nav aria-label="Main navigation">
                    <a href="#about">about</a>
                    <a href="#work">work</a>
                    <a className="nav-contact" href="#contact">
                        Contact me
                    </a>
                </nav>
            </header>

            <main id="main">
                <section className="hero" id="top" aria-labelledby="hero-title">
                    <div className="checker checker-hero" aria-hidden="true" />
                    <div className="paper-scrap scrap-a" aria-hidden="true" />
                    <div className="paper-scrap scrap-b" aria-hidden="true" />

                    <span className="label-strip">
                        dev / music / games
                    </span>

                    <h1 id="hero-title">
                        <span className="cut cut-1">hello</span>
                        <span className="cut cut-2">there</span>
                    </h1>
                    <Scribble className="hero-underline" />

                    <a className="btn" href="#work">
                        see my stuff <Arrow />
                    </a>

                    <Star className="doodle-star star-1" />
                    <Star className="doodle-star star-2" />
                    <Bolt className="doodle-bolt bolt-1" />

                    <div className="sticker mixtape" aria-hidden="true">
                        <Tape className="tape-mixtape" />
                        <div className="cd">
                            <span></span>
                            <i />
                        </div>
                    </div>

                    <div className="sticker smiley" aria-hidden="true">
                        <span>x &nbsp; x</span>
                        <span className="smiley-mouth">◡</span>
                    </div>
                </section>

                <div className="caution" aria-hidden="true">
                </div>

                <section
                    className="about section-pad"
                    id="about"
                    aria-labelledby="about-title"
                >
                    <div className="about-copy">
                        <p className="eyebrow">About</p>
                        <h2 id="about-title">
                            hi, I'm <span className="marker">tristan.</span>
                        </h2>
                        <div className="lined-paper">
                            <p>
                                I work currently in an apprenticeship at Worldline Schweiz AG, make hobby games, music and random media in my free time. I like to build things that align with my hobbies and interests :)
                            </p>
                        </div>
                        <div className="patches">
                            <span>react</span>
                            <span>typescript</span>
                            <span>angular</span>
                            <span>java</span>
                            <span>python</span>
                            <span>game dev</span>
                            <span>music prod</span>
                            <span>...and more on my Github ↓</span>
                        </div>
                    </div>
                </section>

                <section
                    className="work section-pad"
                    id="work"
                    aria-labelledby="work-title"
                >
                    <Star className="doodle-star star-work" />
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow light">work</p>
                            <h2 id="work-title">
                                stuff i'm <span className="marker">doing</span>
                            </h2>
                        </div>
                    </div>

                    <article className="project featured-project">
                        <Tape className="tape-feature" />
                        <Tape className="tape-feature-2" />
                        <div className="feature-visual">
                            <img
                                className="feature-image"
                                src="/spritesheet.png"
                                alt="Kettlehead character spritesheet"
                            />
                        </div>
                        <div className="project-copy">
                            <span className="project-type">indie game · 2D platformer</span>
                            <h3>kettlehead</h3>
                            <p>
                                A knight goes on a quest to save the
                                princess. Armed with a frying pan and a kettle helmet
                            </p>
                        </div>
                    </article>

                    <div className="project-grid">
                        <article className="project project-small flyer-ink">
                            <Tape className="tape-flyer" />
                            <span className="project-type">music</span>
                            <h3>Vertiefungsarbeit School</h3>
                            <p>A Rock Album for Schoolwork about the struggles and worries of everyday people</p>
                            <span className="soon">more soon</span>
                        </article>

                        <article className="project project-small flyer-tan">
                            <Tape className="tape-flyer" />
                            <span className="project-type">design/video</span>
                            <h3>Designing my Rock Album</h3>
                            <p>Design draw my own Rock Album cover and potentially record a Music-Video for it</p>
                            <span className="soon">more soon</span>
                        </article>
                    </div>
                </section>

                <section
                    className="contact section-pad"
                    id="contact"
                    aria-labelledby="contact-title"
                >
                    <div className="checker checker-contact" aria-hidden="true" />
                    <Star className="doodle-star star-contact-1" />
                    <Bolt className="doodle-bolt bolt-contact" />
                    <p className="eyebrow light">contact</p>
                    <h2 id="contact-title">
                        Wanna
                        <br />
                        Contact me?
                    </h2>
                    <p className="contact-sub">
                        Here ya go
                    </p>
                    <a className="btn btn-big" href="mailto:tristan.evans@bluewin.ch">
                        tristan.evans@bluewin.ch <Arrow />
                    </a>
                    <div className="social-links" aria-label="Social links">
                        <a
                            href="https://www.linkedin.com/in/tristan-evans-862b84222"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin ↗
                        </a>
                        <a
                            href="https://github.com/InsightfulGuy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github ↗
                        </a>
                    </div>
                </section>
            </main>

            <footer>
                <span>© {year} tristan</span>
                <span>built with react</span>
                <a href="#top">back to top ↑</a>
            </footer>
        </div>
    )
}

export default App
