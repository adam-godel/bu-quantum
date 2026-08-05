import WorkshopCard, { type Workshop } from '../components/workshop'

export const metadata = {
  title: 'Schedule',
  description: 'Upcoming BU Quantum workshops, with slides, notes, and resources.',
}

// Add a workshop by appending an entry here. `resources` renders as a row of
// buttons; leave it off (or empty) before a session and fill it in afterwards.
const workshops: Workshop[] = [
  {
    date: '2026-09-11',
    title: 'Workshop title',
    description:
      'A short description of what this workshop covers and who it is for. Replace this text once the session is planned.',
    location: 'Location TBA',
    resources: [],
  },
]

export default function Schedule() {
  const upcoming = [...workshops].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <div className="max-w-3xl mx-auto w-full mb-24">
      <p className="eyebrow mb-5">Schedule</p>
      <h1 className="display mb-5">Come to a workshop.</h1>
      <p className="lede mb-12">
        Every session we run is listed here. Slides, notes, and any other
        resources get posted to the workshop below once it has taken place.
      </p>

      {upcoming.length === 0 ? (
        <p className="rule pt-10 text-muted">
          Nothing scheduled yet — check back soon.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {upcoming.map((w) => (
            <WorkshopCard key={w.date + w.title} workshop={w} />
          ))}
        </div>
      )}
    </div>
  )
}
