import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Meeting Notes',
  description: 'Read all past meeting notes and addendums.',
}

export default function Page() {
  return (
    <section className="w-1/2 mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Meeting Notes</h1>
      <BlogPosts />
    </section>
  )
}
