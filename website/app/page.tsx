export default function Page() {
  return (
    <section className="pt-16 lg:pt-32">
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* text content */}
        <div className="lg:w-1/2 lg:pr-16">
          <div className="mb-12">
            <p className="text-2xl lg:text-3xl leading-relaxed font-light">
              We're a community of students at Boston University
              passionate about quantum physics, computing,
              and communication. We host talks, share resources,
              and collaborate on projects at the cutting edge of science.
            </p>
          </div>
          
          {/* icons */}
          <div className="flex space-x-6">
            <a href="/about" className="transition-opacity hover:opacity-70">
              <img
                className="w-12 h-12"
                src="/information (2).png"
                alt="About"
              />
            </a>
            <a href="/notes" className="transition-opacity hover:opacity-70">
              <img
                className="w-12 h-12"
                src="/writing (1).png"
                alt="Notes"
              />
            </a>
            <a href="/contact" className="transition-opacity hover:opacity-70">
              <img
                className="w-12 h-12"
                src="/email (1).png"
                alt="Contact"
              />
            </a>
          </div>
        </div>
        
        {/* logo and tagline */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end mt-16 lg:mt-0">
          <div className="text-center">
            <img
              src="/logo.png"
              alt="BU Quantum"
              width={400}
              height={400}
              className="mb-6 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
