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
    date: '2026-09-04',
    title: 'Seminar: The Variational Quantum Eigensolver',
    description:
      'Learn about an important quantum algorithm for optimization, which is largely functional even on the very small-scale, noisy quantum computers that exist today. No prior experience in quantum computing is required!',
    time: '3-5pm',
    location: 'CDS 701',
    presenter: 'Adam Godel (Boston University)',
    resources: [{ label: 'Slides', href: '/vqe-slides.pdf' }],
  },
  {
    date: '2026-09-11',
    title: 'Workshop: Quantum Computing Basics',
    description:
      'Learn about single qubit gates, two qubit gates, their mathematical representations, and how they can be applied.',
    time: '3-5pm',
    location: 'CDS 701',
    presenter: 'Yebin Song (Boston University)',
    resources: [{ label: 'Notebook', href: 'https://colab.research.google.com/drive/1BEtW_ilZALCUJILxh1IIkVfV25IJ95LD?usp=sharing'}],
  },
  {
    date: '2026-09-18',
    title: 'Seminar: VQE for Quantum Chemistry',
    description:
      'Learn about the implementation of the Variational Quantum Eigensolver for processing many-electron molecules. The talk will cover the Hartree-Fock method, second quantization, and the Jordan-Wigner mapping; we will get into the weeds! Some linear algebra and quantum experience is recommended.',
    time: '3-5pm',
    location: 'CDS 701',
    presenter: 'Artem Arefev (Boston University)',
    resources: [],
  },
  {
    date: '2026-09-25',
    title: 'Workshop: The IBM Quantum Landscape',
    description:
      'Get an overview of what IBM Quantum is currently up to, what their latest hardware looks like, and their current research and experimental focuses.',
    time: '3-5pm',
    location: 'CDS 701',
    presenter: 'Chris Wildgoose (IBM)',
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
