import Image from 'next/image'
import NightSwitch from './NightSwitch'

const navigation = [
  { name: 'Blog', href: '/' },
  { name: 'About Me', href: '/about' },
]

export default function HeaderMenu() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-purple-900">
      <nav className="mx-auto flex max-w-2xl lg:max-w-4xl items-center justify-between py-6 px-6 md:px-0" aria-label="Global">
        <div className="flex">
          <a href="/" className="-m-1.5 flex flex-row items-center gap-4">
            <div className="relative p-6">
              <Image fill src={"/raspberry.png"} alt="raspberry logo" />
            </div>
          </a>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-8">
          {/* <NightSwitch /> */}
          <a href="https://github.com/petomalina" target="_blank">
            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="fill-white">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  )
}
