import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Crash Course',
  description:
    'Learn quantum computing, from linear algebra fundamentals through Shor’s algorithm.',
}

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto w-full mb-24">
      <p className="eyebrow mb-5">Crash Course</p>
      <h1 className="display mb-5">Learn about quantum computing.</h1>
      <p className="lede mb-12">
        These pages are arranged by what they build on, not by any order you have
        to follow. Each one lists what to read first, so you can start at the top
        or jump straight to a topic and work backwards from there.
      </p>
      <BlogPosts />
    </section>
  )
}
