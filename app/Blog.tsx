import { ArrowPathIcon, PlusIcon } from "@heroicons/react/24/outline";
import { createContext, useState } from "react";
import Badge from "./Badge";
import fs from "fs";
import matter from "gray-matter";

function getPosts() {
  return fs.readdirSync("posts").filter((file) => file.endsWith(".md")).map((file) => {
    const slug = file.replace(".md", "");
    const { data } = matter(fs.readFileSync(`posts/${file}`, "utf8"));

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return {
      title: data.title,
      category: data.category,
      slug: slug,
      published: data.published,
      date: data.date.toLocaleDateString("en-US", options),
      excerpt: data.excerpt,
      coverImage: data.coverImage,
    };
  })
  .filter((post) => post.published)
  .sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })
}

export default function Blog() {
  const posts = getPosts();

  const headlinePosts = posts.slice(0, 3);
  const otherPosts = posts.slice(3);

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            This blog is a mix of articles about engineering and leadership. You can see the category
            by looking at the badges of either <Badge category="Engineering" /> or <Badge category="Leadership" />.
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {headlinePosts.map((post) => (
              <article key={post.slug} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.coverImage}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date.toString()}
                    </time>
                    <Badge category={post.category}></Badge>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={"posts/" + post.slug}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col mt-16 space-y-6 lg:mt-20">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 sm:text-3xl">Older Posts</h3>

            {otherPosts.map((post) => (
              <article key={post.slug} className="relative isolate flex gap-8 flex-row">
                <div className="flex items-start gap-x-4 text-xs mt-1">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={"posts/" + post.slug}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                    <Badge className="ml-3" category={post.category}></Badge>
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button
              type="button"
              className="rounded-full bg-indigo-600
                px-4 py-2.5 text-sm font-semibold
                text-white shadow-sm hover:bg-indigo-500
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                transition-all ease-in-out duration-200"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
