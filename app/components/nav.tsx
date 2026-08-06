import Link from 'next/link'
import Image from 'next/image'
import Marquee from "react-fast-marquee"

const navItems = {
  '/': {
    name: 'Home',
  },
  '/about': {
    name: 'About',
  },
  '/schedule': {
    name: 'Schedule',
  },
  '/crash-course': {
    name: 'Crash Course',
  },
}

const scrollingText = "First meeting · September 11, 2026"

export function Navbar() {
  return (
    <header className="mb-16">
      <div className="full-bleed border-b border-line bg-surface hover:cursor-default">
        <Marquee speed={28} gradient={false} className="py-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center text-[11px] uppercase tracking-[0.18em] text-muted"
            >
              <span>{scrollingText}</span>
              <span className="mx-4 text-crimson">◆</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="pt-7 lg:sticky lg:top-0 lg:z-20 lg:bg-ink">
        <nav
          className="flex flex-row items-center justify-between gap-4 border-b border-line pb-4"
          id="nav"
        >
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="BU Quantum"
              width={100}
              height={100}
              className="h-10 w-10 object-contain"
            />
            <span className="hidden text-sm uppercase tracking-[0.2em] text-text sm:inline">
              BU Quantum
            </span>
          </Link>
          <div className="flex flex-row items-center gap-3.5 sm:gap-7">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link key={path} href={path} className="nav-link">
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
