export default function Page() {
  return (
    <section className="flex items-center mb-24">
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
        {/* text content */}
        <div className="lg:w-1/2 lg:pr-12">
          <p className="eyebrow mb-5">Boston University · Student Organization</p>
          <h1 className="display mb-6">This is BU Quantum.</h1>
          <p className="lede mb-9">
            We're a community of students at Boston University passionate about quantum computing: from both a theory and computational perspective. We host lessons, share resources, and collaborate on projects at the cutting edge of the field.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/notes" className="btn">
              Explore the crash course
            </a>
            <a href="/contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </div>

        {/* neon sign */}
        <div className="relative lg:w-1/2 min-w-0 flex flex-col items-center lg:items-end mt-4 lg:mt-0 p-4 sm:p-8">
          <div
            className="absolute -inset-y-10 sm:-inset-y-16 -inset-x-4 sm:-inset-x-6 bg-cover bg-center opacity-20 saturate-50 -z-10"
            style={{
              backgroundImage: `url('/brick.jpg')`,
              maskImage:
                'radial-gradient(circle at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0) 88%)',
              WebkitMaskImage:
                'radial-gradient(circle at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.55) 62%, rgba(0,0,0,0) 88%)',
            }}
          />
          <div className="neon-sign [box-shadow:0_0.1vw_0.4vw_#fff7f7,0_0.4vw_0.6vw_#e97272,0_0_4vw_0.4vw_#cc0000,inset_0_0_1.5vw_0.4vw_#cc0000,inset_0_0_0.4vw_0.2vw_#e97272,inset_0_0_0.5vw_0.2vw_#fff7f7] rounded-3xl w-full max-w-[24rem] px-8 pt-8 pb-4 sm:px-12 sm:pt-12 sm:pb-6">
            <img
              src="/logo.png"
              alt="BU Quantum"
              width={400}
              height={400}
              className="w-full h-auto -mt-2 mb-6 sm:mb-9 scale-125 sm:scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
