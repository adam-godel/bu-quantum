import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mb-24">
      <p className="eyebrow mb-5">Error 404</p>
      <h1 className="display mb-6">Page not found.</h1>
      <p className="lede mb-9">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="btn-ghost">
        Back to home
      </Link>
    </section>
  )
}
