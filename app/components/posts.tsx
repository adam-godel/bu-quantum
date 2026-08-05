import Link from 'next/link'
import { getBlogPosts } from 'app/crash-course/utils'

export function BlogPosts() {
  const all = getBlogPosts()
  const titleBySlug = new Map(all.map((p) => [p.slug, p.metadata.title]))

  // Group into tiers by dependency depth, so nothing appears above something it
  // builds on. Order within a tier is alphabetical — there is no chronology here.
  const maxDepth = all.reduce((m, p) => Math.max(m, p.depth), 0)
  const tiers = Array.from({ length: maxDepth + 1 }, (_, d) =>
    all
      .filter((p) => p.depth === d)
      .sort((a, b) => a.metadata.title.localeCompare(b.metadata.title))
  )

  return (
    <div className="tree">
      {tiers.map((tier, d) => (
        <section key={d} className="tree-tier">
          {/* Only the entry tier is labelled — the rail and each card's
              "Requires" line carry the structure from there down. */}
          {d === 0 && (
            <p className="eyebrow tree-tier-label">Start here · no prerequisites</p>
          )}
          <div className="tree-row">
            {tier.map((post) => (
              <Link
                key={post.slug}
                href={`/crash-course/${post.slug}`}
                className="lesson-card"
              >
                <span className="lesson-card-title">{post.metadata.title}</span>
                {post.metadata.summary && (
                  <span className="lesson-card-summary">
                    {post.metadata.summary}
                  </span>
                )}
                {post.requires.length > 0 && (
                  <span className="lesson-card-reqs">
                    <span className="eyebrow">Requires</span>
                    <span className="lesson-card-reqs-list">
                      {post.requires
                        .map((r) => titleBySlug.get(r))
                        .filter(Boolean)
                        .join(' · ')}
                    </span>
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
