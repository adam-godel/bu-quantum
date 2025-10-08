import Link from 'next/link'
import Image from 'next/image'
import Marquee from "react-fast-marquee"

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/notes': {
    name: 'notes',
  },
  '/contact': {
    name: 'contact',
  },
}

const scrollingText = "week 6: oct 22, 2025 @ 6pm in cas 208"

export function Navbar() {
  return (
    <aside className="-mt-6 -ml-[8px] mb-12 tracking-tight">
      <div className="absolute left-0 w-screen overflow-hidden hover:cursor-default">
        <Marquee className="w-full">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className="flex items-center font-stretch-expanded">
              <span>{scrollingText}</span>
              <span className="mx-2">•</span>
            </span>
          ))}
        </Marquee>
      </div>
      <div className="mt-6 lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade overflow-visible scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex">
            <Image 
              src="/logo.png"
              alt="BU Quantum"
              width={100}
              height={100}
              className="flex align-middle relative px-2 scale-150"
            />
          </div>
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  // blur hover effect still too subtle, will come back to it later
                  className="text-2xl transition-all hover:text-neutral-200 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
