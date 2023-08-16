import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from "next/link";
import { getPosts } from "@/lib/posts";
import Image from "next/image";
import { readingTime } from "@/app/readingTime";

function getPost(slug: string) {
  const { data, content } = matter(fs.readFileSync(`posts/${slug}.md`, "utf8"));

  return {
    data,
    content,
  }
}

export const generateStaticParams = async () => {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug);
  const readTime = readingTime(post.content);

  return {
    metadataBase: new URL('https://petermalina.com'),
    title: post.data.title + ` (${readTime} min)`,
    description: post.data.excerpt,
    image: post.data.coverImage,
    authors: ['Peter Malina'],
    openGraph: {
      type: "article",
      locale: 'en_US',
      images: [post.data.coverImage],
      publishedTime: post.data.date,
      article: {
        title: post.data.title,
        description: post.data.excerpt,
        images: [post.data.coverImage],
        publishedTime: post.data.date,
      },
    },
  }
}

export default async function BlogPost(props: { params: { slug: string } }) {
  const post = getPost(props.params.slug)
  const readTime = readingTime(post.content)

  return (
    <div className="relative mx-auto max-w-2xl lg:max-w-4xl px-6">
      <Link href={"/"}>
        <div className="pb-6 pt-6 flex flex-row items-center">
          <button
            type="button"
            className="rounded-full text-white bg-indigo-600 p-1.5 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <ArrowLongLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="pl-2">Back to Blog</span>
        </div>
      </Link>

      <div className="relative aspect-[2.5/1.5] md:aspect-[5/2.3]">
        <Image
          fill
          src={post.data.coverImage}
          alt=""
          className="md:max-w-2xl lg:max-w-4xl mx-auto inset-0 h-full w-full bg-gray-50 object-cover"
        />
      </div>
      <main className="py-12 prose-lg dark:prose-invert prose-li:list-disc prose-ul:mt-0">
        <div>({readTime} min)</div>
        <h1 className="font-bold tracking-tight sm:text-4xl flex flex-row">
          {post.data.title}
        </h1>

        <article className="flex flex-col">
          {await MDXRemote({ source: post.content })}
        </article>
      </main>

      <div className="border-t-2 border-gray-800 dark:border-white p-4">
        <a href="https://www.linkedin.com/in/petomalina/" target="_blank" className="flex flex-row gap-4 justify-center items-center">
          <h3 className="font-bold">Struggling with delivery? Contact me on LinkedIn</h3>
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="fill-gray-800 dark:fill-white">
            <path d="M14.4 0H1.6C.7 0 0 .7 0 1.6v12.8C0 15.3.7 16 1.6 16h12.8c.9 0 1.6-.7 1.6-1.6V1.6c0-.9-.7-1.6-1.6-1.6zM4.8 13.2H2.4V6.4h2.4v6.8zm-1.2-8c-.8 0-1.2-.5-1.2-1.2 0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2c0 .7-.5 1.2-1.2 1.2zm9.6 8h-2.4v-4.4c0-1.1-.4-1.8-1.3-1.8-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.8v4.4H6V6.4h2.3v1.1c.3-.5.8-1.2 2-1.2 1.5 0 2.7 1 2.7 3.2v4.7z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}