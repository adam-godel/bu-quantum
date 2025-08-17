export default function Page() {
  return (
    <section className="min-h-[calc(100vh-288px)] flex items-center mb-8">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </a>
            <a href="/notes" className="transition-opacity hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notebook-pen-icon lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
            </a>
            <a href="/contact" className="transition-opacity hover:opacity-70">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
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
