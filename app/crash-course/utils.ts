import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  /** Comma-separated slugs of the pages this one builds on. */
  requires?: string
  summary?: string
  image?: string
}

export type Lesson = {
  slug: string
  content: string
  metadata: Metadata
  /** Prerequisite slugs, parsed from `requires`. */
  requires: string[]
  /** Longest path from a page with no prerequisites. 0 = start here. */
  depth: number
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

function parseRequires(value?: string): string[] {
  if (!value) return []
  return value
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

export function getBlogPosts(): Lesson[] {
  const raw = getMDXData(path.join(process.cwd(), 'app', 'crash-course', 'posts'))
  const requiresBySlug = new Map<string, string[]>(
    raw.map((p) => [p.slug, parseRequires(p.metadata.requires)])
  )

  // Longest path from a root, so a page always renders below everything it
  // depends on. Memoised, with a guard so a bad `requires` edge can't hang the
  // build on a cycle.
  const depths = new Map<string, number>()
  const depthOf = (slug: string, seen = new Set<string>()): number => {
    if (depths.has(slug)) return depths.get(slug)!
    if (seen.has(slug)) return 0
    seen.add(slug)
    const reqs = (requiresBySlug.get(slug) ?? []).filter((r) =>
      requiresBySlug.has(r)
    )
    const d = reqs.length
      ? Math.max(...reqs.map((r) => depthOf(r, new Set(seen)))) + 1
      : 0
    depths.set(slug, d)
    return d
  }

  return raw.map((p) => ({
    ...p,
    requires: (requiresBySlug.get(p.slug) ?? []).filter((r) =>
      requiresBySlug.has(r)
    ),
    depth: depthOf(p.slug),
  }))
}

/** Pages that list `slug` as a prerequisite. */
export function getDependents(slug: string): Lesson[] {
  return getBlogPosts().filter((p) => p.requires.includes(slug))
}
