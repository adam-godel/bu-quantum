// Shared by the brick texture and its vignette so the two layers stay aligned.
const BLEED =
  'absolute -inset-y-10 sm:-inset-y-16 -inset-x-4 sm:-inset-x-6'

// Hold the texture near-fully opaque through the middle, then fall away hard
// only in the last stretch, so the brick reads clearly around the sign and the
// darkening is concentrated at the edges.
const BRICK_MASK =
  'radial-gradient(ellipse farthest-side at center, rgba(0,0,0,1) 48%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.35) 88%, rgba(0,0,0,0) 100%)'

// rgb(11,11,12) is --color-ink; gradients can't read CSS vars through `url()`-free
// inline styles reliably across the mask/background pair, so it's written out.
const BRICK_VIGNETTE =
  'radial-gradient(ellipse farthest-side at center, rgba(11,11,12,0) 50%, rgba(11,11,12,0.12) 70%, rgba(11,11,12,0.55) 87%, rgba(11,11,12,1) 100%)'

export default function Page() {
  return (
    <section className="flex items-center mb-24">
      <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
        {/* text content */}
        <div className="lg:w-1/2 lg:pr-12">
          <p className="eyebrow mb-5">Quantum Seminars · Quantum Workshops</p>
          <h1 className="display mb-6">We are BU Quantum.</h1>
          <p className="lede mb-9">
            We're a community of students at Boston University passionate about quantum computing, from both a theory and computational perspective. We host seminars and workshops for students and faculty alike to learn more about the field and discuss their research.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/schedule" className="btn">
              View our schedule
            </a>
            <a href="/crash-course" className="btn-ghost">
              Explore the crash course
            </a>
          </div>
        </div>

        {/* neon sign */}
        <div className="relative lg:w-1/2 min-w-0 flex flex-col items-center lg:items-end mt-4 lg:mt-0 p-4 sm:p-8">
          {/* Brick texture. The mask must be an `ellipse farthest-side` so it
              reaches full transparency exactly at every edge — a `circle` is
              sized to the farthest corner, so on a non-square box it is still
              partly opaque where the box ends and leaves a hard seam. */}
          <div
            className={`${BLEED} bg-cover bg-center opacity-20 saturate-50 -z-10`}
            style={{
              backgroundImage: `url('/brick.jpg')`,
              maskImage: BRICK_MASK,
              WebkitMaskImage: BRICK_MASK,
            }}
          />
          {/* Vignette on top of the brick, fading to the page colour so the
              texture sinks into the background rather than ending on an edge. */}
          <div
            className={`${BLEED} pointer-events-none -z-10`}
            style={{ background: BRICK_VIGNETTE }}
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
