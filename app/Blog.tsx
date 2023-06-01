"use client";

import { ArrowPathIcon, PlusIcon } from "@heroicons/react/24/outline";
import { createContext, useState } from "react";
import Badge from "./Badge";
import { CategoryContext } from "./CategoryContext";

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt. Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Leadership', href: '#' },
  },
  {
    id: 2,
    title: "The Benefits of Yoga for Mind and Body",
    href: '#',
    description:
      "Yoga is a great way to improve both your physical and mental well-being. Studies have shown that regular practice can reduce stress, anxiety, and depression, as well as improve flexibility, strength, and balance. Learn more about the benefits of yoga in this article.",
    imageUrl:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    date: "Aug 5, 2021",
    datetime: "2021-08-05",
    category: { title: "Engineering", href: '#' }
  },
  {
    id: 3,
    title: "The Future of Remote Work",
    href: '#',
    description:
      "The COVID-19 pandemic forced many companies to adopt remote work policies, but what will happen when things return to 'normal?' This article explores whether remote work is here to stay, the benefits and challenges of working from home, and what the future might hold for remote workers.",
    imageUrl:
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1839&q=80",
    date: "Sep 15, 2021",
    datetime: "2021-09-15",
    category: { title: "Leadership", href: '#' }
  }
]




export default function Blog() {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<'Engineering' | 'Leadership' | 'ALL'>('ALL');

  function loadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  function toggleCategory(clickedCategory: 'Engineering' | 'Leadership') {
    console.log('toggleCategory', clickedCategory);
    if (category === 'ALL') {
      setCategory(clickedCategory);
      return;
    }

    if (category === clickedCategory) {
      setCategory('ALL');
      return;
    }

    setCategory(clickedCategory);
  }

  return (
    <CategoryContext.Provider value={{ category, toggleCategory }}>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mixed Blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              This blog is a mix of articles about engineering and leadership. You can filter the category
              by clicking either <Badge category="Engineering" /> or <Badge category="Leadership" />.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <Badge category={post.category.title}></Badge>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button
                onClick={loadMore}
                type="button"
                className="rounded-full bg-indigo-600
                px-4 py-2.5 text-sm font-semibold
                text-white shadow-sm hover:bg-indigo-500
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                transition-all ease-in-out duration-200"
              >
                {isLoading ? <ArrowPathIcon className="h-5 w-5 animate-spin"></ArrowPathIcon> : 'Load More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </CategoryContext.Provider>
  )
}
