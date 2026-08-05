import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'QC Crash Course',
  description: 'Read all past meeting notes and addendums.',
}

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto w-full mb-24">
      <p className="eyebrow mb-5">Crash course</p>
      <h1 className="display mb-5">Quantum Computing Crash Course</h1>
      <p className="lede mb-12">
        Every session we've run, from linear algebra fundamentals through Shor's
        algorithm. Addenda go deeper on the mathematics behind each lesson.
      </p>
      <BlogPosts />
    </section>
  )
}
