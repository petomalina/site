import { readingTime } from "@/app/readingTime";
import fs from "fs";
import matter from "gray-matter";

export function getPosts() {
  return fs.readdirSync("posts").filter((file) => file.endsWith(".md")).map((file) => {
    const slug = file.replace(".md", "");
    const { data, content } = matter(fs.readFileSync(`posts/${file}`, "utf8"));

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return {
      title: data.title,
      category: data.category,
      slug: slug,
      published: data.published,
      date: data.date.toLocaleDateString("en-US", options),
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      readTime: readingTime(content),
    };
  })
    .filter((post) => post.published)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
}
