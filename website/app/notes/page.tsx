import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Meeting Notes',
  description: 'Read all past meeting notes and addendums.',
}

export default function Page() {
  return (
    <section className="lg:w-1/2 mx-auto min-h-[calc(100vh-288px)]">
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">meeting notes</h1>
      <BlogPosts />
    </section>
  )
}
