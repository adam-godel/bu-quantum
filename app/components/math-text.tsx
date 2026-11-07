import { Fragment } from 'react'
import katex from 'katex'

// Matches $$display$$ or $inline$ math. A dollar sign preceded by a backslash
// (\$) is treated as a literal dollar sign, not a delimiter.
const MATH = /(?<!\\)\$\$([\s\S]+?)(?<!\\)\$\$|(?<!\\)\$([\s\S]+?)(?<!\\)\$/g

/**
 * Renders a plain string, typesetting any `$...$` (inline) or `$$...$$`
 * (display) segments with KaTeX. Rendering happens on the server, so this
 * works inside server components with no client-side JS.
 *
 * Write descriptions containing TeX with String.raw`...` (or doubled
 * backslashes) so JS doesn't swallow the backslashes in commands like \mathcal.
 */
export default function MathText({ children }: { children: string }) {
  const parts: React.ReactNode[] = []
  let last = 0

  for (const match of Array.from(children.matchAll(MATH))) {
    const [whole, display, inline] = match
    const start = match.index!
    if (start > last) parts.push(unescape(children.slice(last, start)))

    const html = katex.renderToString(display ?? inline, {
      displayMode: display !== undefined,
      throwOnError: false,
    })
    parts.push(<span key={start} dangerouslySetInnerHTML={{ __html: html }} />)
    last = start + whole.length
  }
  if (last < children.length) parts.push(unescape(children.slice(last)))

  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>{p}</Fragment>
      ))}
    </>
  )
}

function unescape(text: string) {
  return text.replace(/\\\$/g, '$')
}
