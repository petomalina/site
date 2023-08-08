import Image from 'next/image'

const timeline = [
  {
    name: 'Worked with multiple startups',
    description:
      'I\'ve always loved startups for their fast-paced, impact driven environment. At the start of my career, I\'ve had a chance to work for a few.',
    date: 'Nov 2013',
    dateTime: '2013-11',
  },
  {
    name: 'Founded CityIdeas',
    description:
      'Building on my previous experience, I\'ve co-founded a startup that was helping cities gather ideas from their citizens to improve the city life.',
    date: 'Jan 2016',
    dateTime: '2016-01',
  },
  {
    name: 'Founded FlowUp',
    description:
      'Later, I\'ve co-founded a software agency that was helping startups build their products using latest cloud technologies.',
    date: 'Jan 2017',
    dateTime: '2017-01',
  },
  {
    name: 'Joined Kiwi.com',
    description:
      'I am currently working at Kiwi, leading a team of 80 engineers and product managers within our Platform and QA teams.',
    date: 'Jun 2021',
    dateTime: '2021-06',
  },
]

const images = [
  {
    src: '/flowup_img.jpeg',
    rotation: 'rotate-2',
  },
  {
    src: '/containers.png',
    rotation: '-rotate-1',
  },
  {
    src: '/meetup.jpg',
    rotation: 'rotate-1',
  },
  {
    src: '/speaking.jpeg',
    rotation: 'rotate-2',
  },
  {
    src: '/github.png',
    rotation: '-rotate-2',
  },
]

export const generateMetadata = async () => {
  return {
    title: 'About Peter Malina',
    description: 'About Page',
  }
}

export default function About() {
  return (
    <main className="isolate">
      <div className="max-w-2xl lg:max-w-4xl px-6 mx-auto relative isolate -z-10 overflow-hidden bg-gradient-to-b">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-1xl text-4xl font-bold tracking-tight sm:text-6xl lg:col-span-2 xl:col-auto">
            Hi! I am Peter. <br />
            <span className="text-2xl">Leader by the day, Engineer during the night.</span>
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8">
              As you can tell from my blog, I love the combination of technology and people. As a person with many ideas
              and a head in the future, I have always strived to make impact in lives of others. I believe that the best way to do so is to
              combine great leadership with outstanding engineering.
            </p>
          </div>
          <Image src="profile_pic.jpg" alt="Picutre of the author" width={500} height={500}
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
              >
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight">{item.name}</p>
              <p className="mt-1 text-base leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-8 mt-16 mx-8 -scroll-mr-40 overflow-hidden overflow-x-scroll">
        {images.map((image) => (
          <div key={image.src} className="relative flex w-64 h-64 aspect-[9/10]">
            <Image
              fill
              src={image.src}
              alt=""
              className={`h-full w-full rounded-2xl bg-gray-50 object-cover ${image.rotation}`}
            />
          </div>
        ))}
      </div>

      <div className="max-w-2xl lg:max-w-4xl mx-auto mt-16">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="flex flex-col">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The things I&apos;ve worked on</h2>
              <p className="mt-6 text-xl leading-8">
                Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem
                minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.
              </p>
              <p className="mt-6 text-base leading-7">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
