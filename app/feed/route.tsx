import { generateRSSFeed } from "@/lib/posts"

export async function GET(request: Request) {
  const feed = await generateRSSFeed()

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
