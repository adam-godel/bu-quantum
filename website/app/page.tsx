export default function Page() {
  return (
    <section className="min-h-[calc(100vh-288px)] flex items-center">
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* text content */}
        <div className="lg:w-1/2 lg:pr-16">
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl leading-relaxed font-bold mb-3">this is bu quantum.</h1>
            <p className="text-2xl lg:text-3xl leading-relaxed font-light">
              we're a community of students at boston university passionate about quantum computing, from both a theory and computational perspective. we host lessons, share resources, and collaborate on projects at the cutting edge of the field.
            </p>
          </div>
          
          {/* icons */}
          <div className="flex space-x-6">
            <a href="/about" className="transition-opacity hover:opacity-70">
              <img
                className="w-12 h-12"
                src="/information.png"
                alt="About"
              />
            </a>
            <a href="/notes" className="transition-opacity hover:opacity-70">
              <img
                className="w-12 h-12"
                src="/writing.png"
                alt="Notes"
              />
            </a>
            <a href="/contact" className="transition-opacity hover:opacity-70">
              <img
                className="w-12 h-12"
                src="/email.png"
                alt="Contact"
              />
            </a>
          </div>
        </div>
        
        {/* logo and tagline */}
        <div className="relative lg:w-1/2 flex flex-col items-center lg:items-end mt-16 lg:mt-0 p-8">
          <div
            className="absolute -inset-16 bg-cover bg-center opacity-30 -z-10"
            style={{ backgroundImage: `url('/brick.jpg')` }}
          />
          <div
            className="absolute -inset-16 pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.9) 90%)',
            }}
          />
          <div className="group [box-shadow:0_0.1vw_0.4vw_#fff7f7,0_0.4vw_0.6vw_#e97272,0_0_4vw_0.4vw_#cc0000,inset_0_0_1.5vw_0.4vw_#cc0000,inset_0_0_0.4vw_0.2vw_#e97272,inset_0_0_0.5vw_0.2vw_#fff7f7] rounded-3xl px-12 pt-12 pb-6 hover:animate-[flicker_9.66s_linear_infinite]">
              <img
                src="/logo.png"
                alt="BU Quantum"
                width={400}
                height={400}
                className="mb-6 group-hover:animate-[flicker_3.51s_linear_infinite]"
              />
          </div>
        </div>
      </div>
    </section>
  )
}
