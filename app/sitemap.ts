import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/posts'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getPosts()

  return [
    {
      url: 'https://petermalina.com',
      lastModified: new Date(),
    },
    {
      url: 'https://petermalina.com/about',
      lastModified: new Date(),
    },
    ...blogPosts.map((post) => ({
      url: `https://petermalina.com/posts/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ]
}