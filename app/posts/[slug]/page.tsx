import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from "next/link";
import { getPosts } from "@/lib/posts";

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

  return {
    title: post.data.title,
    description: post.data.excerpt,
    image: post.data.coverImage,
  }
}

export default async function BlogPost(props: { params: { slug: string } }) {
  const post = getPost(props.params.slug)

  return (
    <article className="relative mx-auto max-w-2xl lg:max-w-4xl text-gray-900 py-24">
      <Link href={"/"}>
        <div className="pb-6 pt-6 flex flex-row items-center">
          <button
            type="button"
            className="rounded-full bg-indigo-600 p-1.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <ArrowLongLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="pl-2">Back to Blog</span>
        </div>
      </Link>

      <div className="relative sm:aspect-[2.5/1] md:aspect-[3/1]">
        <img
          src={post.data.coverImage}
          alt=""
          className="md:max-w-2xl lg:max-w-4xl mx-auto inset-0 h-full w-full bg-gray-50 object-cover"
        />
      </div>
      <div className="py-12">
        <h1 className="font-bold tracking-tight text-gray-900 sm:text-4xl pb-8">{post.data.title}</h1>

        <div className="text-gray-700 flex flex-col gap-4">
          {await MDXRemote({ source: post.content })}
        </div>
      </div>
    </article>
  )
}