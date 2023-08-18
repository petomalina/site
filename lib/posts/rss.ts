import RSS from 'rss';
import { getPosts } from './posts';
import fs from 'fs';

export async function generateRSSFeed() {
  const feedOptions = {
    title: "Peter Malina's Blog",
    site_url: "https://petermalina.com",
    feed_url: "https://petermalina.com/feed",
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  const posts = await getPosts();

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      url: `https://petermalina.com/posts/${post.slug}`,
      guid: post.slug,
      date: post.date,
      description: post.excerpt,
    });
  });

  return feed.xml({ indent: true });
}