import fs from "fs";
import matter from "gray-matter";

function getPost(slug: string) {
  const { data, content } = matter(fs.readFileSync(`posts/${slug}.md`, "utf8"));

  console.log(data, content);

  return {
    data,
    content,
  }
}

export default function BlogPost(props: { params: { slug: string } }) {
  const post = getPost(props.params.slug);

  return (
    <article>
      <div className="relative aspect-[16/9] sm:aspect-[2/1]">
        <img
          src={post.data.coverImage}
          alt=""
          className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
        />
      </div>
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.data.title}</h2>
          </div>
        </div>
      </div>
    </article>
  )
}