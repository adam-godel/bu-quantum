import Link from 'next/link'
import { getBlogPosts } from 'app/notes/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            parseInt(a.metadata.week) > parseInt(b.metadata.week)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/notes/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 text-lg">
              <p className="text-neutral-400 w-[80px] tabular-nums">
                {"Week "+post.metadata.week}
              </p>
              <p className={"text-neutral-100 tracking-tight"+(post.metadata.title.includes('Addendum') && " italic")}>
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
