export type Resource = {
  label: string
  href: string
}

export type Workshop = {
  /** ISO date, e.g. '2026-09-11'. Parsed as local time, not UTC. */
  date: string
  title: string
  description: string
  location?: string
  resources?: Resource[]
}

function formatWorkshopDate(iso: string) {
  // Append a time so the string isn't parsed as UTC and shifted a day back.
  const d = new Date(`${iso}T00:00:00`)
  return {
    weekday: d.toLocaleDateString('en-US', { weekday: 'long' }),
    full: d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: d.toLocaleDateString('en-US', { day: 'numeric' }),
  }
}

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  const { weekday, full, month, day } = formatWorkshopDate(workshop.date)
  const resources = workshop.resources ?? []

  return (
    <article className="workshop">
      <div className="workshop-date" aria-hidden="true">
        <span className="workshop-date-month">{month}</span>
        <span className="workshop-date-day">{day}</span>
      </div>

      <div className="workshop-body">
        <p className="eyebrow mb-2">
          <span className="sr-only">Scheduled for </span>
          {weekday}, {full}
          {workshop.location && <> · {workshop.location}</>}
        </p>
        <h2 className="workshop-title">{workshop.title}</h2>
        <p className="workshop-description">{workshop.description}</p>

        {resources.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-5">
            {resources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-sm"
              >
                {r.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="meta mt-5">Resources will be posted here.</p>
        )}
      </div>
    </article>
  )
}
