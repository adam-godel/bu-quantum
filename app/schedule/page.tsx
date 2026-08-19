import WorkshopCard, { type Workshop } from '../components/workshop'

export const metadata = {
  title: 'Schedule',
  description: 'Upcoming BU Quantum workshops, with slides, notes, and resources.',
}

// Add a workshop by appending an entry here. `resources` has three states:
//   resources: [{...}]  -> a row of link buttons
//   resources: []       -> "Resources will be posted here after the meeting."
//   (key omitted)       -> nothing, for a past meeting that had no resources
const workshops: Workshop[] = [
  {
    date: '2026-09-11',
    title: 'Seminar: The Variational Quantum Eigensolver',
    description:
      'Learn about an important quantum algorithm for optimization, which is largely functional even on the very small-scale, noisy quantum computers that exist today. No prior experience in quantum computing is required!',
    location: '701 CDS',
    resources: [],
  },
  {
    date: '2026-09-18',
    title: 'Workshop: Quantum Computing Basics',
    description:
      'Learn about single qubit gates, two qubit gates, their mathematical representations, and how they can be applied.',
    location: '701 CDS',
    resources: [],
  },
]

export default function Schedule() {
  const upcoming = [...workshops].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <div className="w-full mb-24">
      <p className="eyebrow mb-5">Schedule</p>
      <h1 className="display mb-5">Come to a meeting</h1>
      <p className="lede mb-12">
        Every meeting we host is listed here. Slides, notes, and any other
        resources for a meeting get posted below once it has taken place.
      </p>

      {upcoming.length === 0 ? (
        <p className="rule pt-10 text-muted measure">
          Nothing scheduled yet — check back soon.
        </p>
      ) : (
        <div className="flex flex-col gap-6 measure">
          {upcoming.map((w) => (
            <WorkshopCard key={w.date + w.title} workshop={w} />
          ))}
        </div>
      )}
    </div>
  )
}
