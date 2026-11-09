import type { ReactNode } from "react"

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g
const SAFE_URL = /^(https?:\/\/|mailto:|\/|#)/i

export default function RichText({ text }: { text: string }) {
    const parts: ReactNode[] = []
    let last = 0

    for (const match of text.matchAll(LINK)) {
        const [whole, label, url] = match
        const start = match.index ?? 0
        if (!SAFE_URL.test(url)) continue

        if (start > last) parts.push(text.slice(last, start))
        const external = /^(https?:)?\/\//i.test(url)
        parts.push(
            <a
                key={start}
                className="rich-link"
                href={url}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
                {label}
            </a>,
        )
        last = start + whole.length
    }

    if (last < text.length) parts.push(text.slice(last))
    return <>{parts}</>
}
