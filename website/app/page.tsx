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
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end mt-16 lg:mt-0">
          {/*<div className="text-center">
            <img
              src="/logo.png"
              alt="BU Quantum"
              width={400}
              height={400}
              className="mb-6 hover:scale-105 transition-transform duration-300"
            />
          </div>*/}
          <div className="[box-shadow:0_0.1vw_0.4vw_#fff7f7,0_0.4vw_0.6vw_#e97272,0_0_4vw_0.4vw_#cc0000,inset_0_0_1.5vw_0.4vw_#cc0000,inset_0_0_0.4vw_0.2vw_#e97272,inset_0_0_0.5vw_0.2vw_#fff7f7] rounded-3xl px-12 pt-12 pb-6" style={{ overflow: "visible" }}>
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
