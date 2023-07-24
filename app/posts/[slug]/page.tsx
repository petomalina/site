import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from 'next-mdx-remote/rsc'

function getPost(slug: string) {
  const { data, content } = matter(fs.readFileSync(`posts/${slug}.md`, "utf8"));

  return {
    data,
    content,
  }
}

export default async function BlogPost(props: { params: { slug: string } }) {
  const post = getPost(props.params.slug)

  return (
    <article className="pt-12">
      <div className="relative sm:aspect-[2.5/1] md:aspect-[3/1]">
        <img
          src={post.data.coverImage}
          alt=""
          className="md:max-w-2xl lg:max-w-4xl mx-auto inset-0 h-full w-full bg-gray-50 object-cover"
        />
      </div>
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.data.title}</h2>

            <div className="text-gray-700 flex flex-col gap-4">
              {await MDXRemote({ source: post.content }) }
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}