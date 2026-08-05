import Link from 'next/link'
import { getBlogPosts, formatDate } from 'app/notes/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="border-t border-line">
      {allBlogs
        .sort((a, b) => {
          const weekDiff =
            parseInt(b.metadata.week) - parseInt(a.metadata.week)
          if (weekDiff !== 0) {
            return weekDiff
          }
          // Within a week, the lesson comes before its addendum.
          const aAdd = a.metadata.title.includes('Addendum') ? 1 : 0
          const bAdd = b.metadata.title.includes('Addendum') ? 1 : 0
          return aAdd - bAdd
        })
        .map((post) => {
          const isAddendum = post.metadata.title.includes('Addendum')

          return (
            <Link
              key={post.slug}
              className="post-row"
              href={`/notes/${post.slug}`}
            >
              <span className="meta w-[5.5rem] shrink-0">
                {'Lesson ' + post.metadata.week}
              </span>
              <span
                className={
                  isAddendum
                    ? 'post-row-title italic flex-1'
                    : 'post-row-title flex-1'
                }
              >
                {isAddendum && <span className="text-faint mr-1.5">↳</span>}
                {post.metadata.title}
              </span>
              <span className="meta hidden sm:block shrink-0">
                {formatDate(post.metadata.publishedAt)}
              </span>
            </Link>
          )
        })}
    </div>
  )
}
