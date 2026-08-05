import { getBlogPosts } from 'app/crash-course/utils'

export const baseUrl = 'https://buquantum.org'

export default async function sitemap() {
  let today = new Date().toISOString().split('T')[0]

  let lessons = getBlogPosts().map((post) => ({
    url: `${baseUrl}/crash-course/${post.slug}`,
    lastModified: today,
  }))

  let routes = ['', '/about', '/schedule', '/crash-course'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: today,
  }))

  return [...routes, ...lessons]
}
