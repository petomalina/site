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
    title: post.data.title + ` (${readTime} min)`,
    description: post.data.excerpt,
    image: post.data.coverImage,
    openGraph: {
      type: "article",
      locale: 'en_US',
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
            className="rounded-full bg-indigo-600 p-1.5 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
      <article className="py-12 prose-lg dark:prose-invert">
        <div>({readTime} min)</div>
        <h1 className="font-bold tracking-tight sm:text-4xl pb-8 flex flex-row">
          {post.data.title}
        </h1>

        <div className="flex flex-col">
          {await MDXRemote({ source: post.content })}
        </div>
      </article>
    </div>
  )
}