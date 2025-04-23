import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Meeting Notes',
  description: 'Read my notes.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Meeting Notes</h1>
      <BlogPosts />
    </section>
  )
}
