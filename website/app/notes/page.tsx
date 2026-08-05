import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'QC Crash Course',
  description: 'Read all past meeting notes and addendums.',
}

export default function Page() {
  return (
    <section className="lg:w-1/2 mx-auto lg:min-h-[calc(100vh-288px)] mb-8 flex flex-col justify-center">
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">Quantum Computing Crash Course</h1>
      <BlogPosts />
    </section>
  )
}
