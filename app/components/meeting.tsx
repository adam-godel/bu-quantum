import { Fragment, useId } from 'react'

export type Resource = {
  label: string
  href: string
}

export type Presenter = {
  name: string
  /** Rendered in parentheses after the name, outside the bio hover target. */
  affiliation?: string
  /** Shown in a bubble above the name on hover or keyboard focus. */
  bio?: string
}

export type Meeting = {
  /** ISO date, e.g. '2026-09-11'. Parsed as local time, not UTC. */
  date: string
  title: string
  description: string
  /** Time of day, e.g. '3-5pm'. Rendered before the location. */
  time?: string
  location?: string
  /**
   * Rendered as "Presenter: Name" above the description, or "Presenters: A, B"
   * when given several. Omit (or pass an empty array) for none.
   */
  presenter?: Presenter | Presenter[]
  /**
   * Omit entirely for a meeting that simply has no resources — nothing renders.
   * Set to `[]` to promise resources later ("will be posted here").
   */
  resources?: Resource[]
}

function formatMeetingDate(iso: string) {
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

// Pure CSS hover/focus bubble, so the schedule page stays a server component.
function PresenterName({ presenter }: { presenter: Presenter }) {
  const id = useId()
  const affiliation = presenter.affiliation && (
    <strong> ({presenter.affiliation})</strong>
  )
  if (!presenter.bio) {
    return (
      <>
        <strong>{presenter.name}</strong>
        {affiliation}
      </>
    )
  }

  return (
    <>
      <span className="presenter" tabIndex={0} aria-describedby={id}>
        <strong>{presenter.name}</strong>
        <span id={id} role="tooltip" className="presenter-bio">
          {presenter.bio}
        </span>
      </span>
      {affiliation}
    </>
  )
}

export default function MeetingCard({ meeting }: { meeting: Meeting }) {
  const { weekday, full, month, day } = formatMeetingDate(meeting.date)
  // Deliberately not defaulted: `undefined` (no resources, nothing to say) and
  // `[]` (resources pending) render differently.
  const { resources } = meeting
  const presenters = [meeting.presenter ?? []].flat()

  return (
    <article className="meeting">
      <div className="meeting-date" aria-hidden="true">
        <span className="meeting-date-month">{month}</span>
        <span className="meeting-date-day">{day}</span>
      </div>

      <div className="meeting-body">
        <p className="eyebrow mb-2">
          <span className="sr-only">Scheduled for </span>
          {[`${weekday}, ${full}`, meeting.time, meeting.location]
            .filter(Boolean)
            .join(' · ')}
        </p>
        <h2 className="meeting-title">{meeting.title}</h2>
        {presenters.length > 0 && (
          <p className="meeting-presenter">
            {presenters.length > 1 ? 'Presenters' : 'Presenter'}:{' '}
            {presenters.map((p, i) => (
              <Fragment key={p.name}>
                {i > 0 && ', '}
                <PresenterName presenter={p} />
              </Fragment>
            ))}
          </p>
        )}
        <p className="meeting-description">{meeting.description}</p>

        {resources === undefined ? null : resources.length > 0 ? (
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
          <p className="meta mt-5">Resources will be posted here after the meeting.</p>
        )}
      </div>
    </article>
  )
}
