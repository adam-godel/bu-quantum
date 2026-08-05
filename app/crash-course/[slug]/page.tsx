import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import Link from 'next/link'
import { getBlogPosts, getDependents } from 'app/crash-course/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let { title, summary: description, image } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${baseUrl}/crash-course/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const bySlug = new Map(getBlogPosts().map((p) => [p.slug, p]))
  const prerequisites = post.requires
    .map((slug) => bySlug.get(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
  const nextUp = getDependents(post.slug)

  return (
    <section className="max-w-[68ch] mx-auto w-full mb-24">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.metadata.title,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/crash-course/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'BU Quantum',
            },
          }),
        }}
      />
      <h1 className="display-sm mb-4">
        {post.metadata.title}
      </h1>
      {post.metadata.summary && (
        <p className="lede mb-6">{post.metadata.summary}</p>
      )}
      {prerequisites.length > 0 && (
        <div className="pb-8 mb-10 border-b border-line">
          <p className="eyebrow mb-3">Read first</p>
          <div className="flex flex-wrap gap-2">
            {prerequisites.map((p) => (
              <Link key={p.slug} href={`/crash-course/${p.slug}`} className="chip">
                {p.metadata.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      {prerequisites.length === 0 && (
        <div className="pb-8 mb-10 border-b border-line" />
      )}
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
      {nextUp.length > 0 && (
        <div className="mt-16 pt-8 border-t border-line">
          <p className="eyebrow mb-3">Builds on this page</p>
          <div className="flex flex-wrap gap-2">
            {nextUp.map((p) => (
              <Link key={p.slug} href={`/crash-course/${p.slug}`} className="chip">
                {p.metadata.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
