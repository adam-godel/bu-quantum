import MeetingCard, { type Meeting } from '../components/meeting'

export const metadata = {
  title: 'Schedule',
  description: 'Upcoming BU Quantum meetings, with slides, notes, and resources.',
}

// Add a meeting by adding an entry here (display order is by date, newest
// first). `resources` has three states:
//   resources: [{...}]  -> a row of link buttons
//   resources: []       -> "Resources will be posted here after the meeting."
//   (key omitted)       -> nothing, for a past meeting that had no resources
const meetings: Meeting[] = [
  {
    date: '2026-09-04',
    title: 'The Variational Quantum Eigensolver',
    description:
      'Learn about an important quantum algorithm for optimization, which is largely functional even on the very small-scale, noisy quantum computers that exist today. No prior experience in quantum computing is required!',
    time: '3-5pm',
    location: 'CDS 701',
    presenter: {
      name: 'Adam Godel',
      affiliation: 'Boston University',
      bio: 'Adam Godel is a senior undergraduate studying mathematics and computer science at Boston University. The primary goal of his research is to make computers run interesting and complex workloads under heavily constrained computational environments. He currently works on systems for quantum computation as well as secure computation.',
    },
    resources: [{ label: 'Slides', href: '/vqe-slides.pdf' }],
  },
  {
    date: '2026-09-11',
    title: 'Quantum Computing Basics Workshop',
    description:
      'Learn about single qubit gates, two qubit gates, their mathematical representations, and how they can be applied.',
    time: '3-5pm',
    location: 'CDS 701',
    presenter: {
      name: 'Yebin Song',
      affiliation: 'Boston University',
      bio: 'Yebin Song is a junior undergraduate studying data science at Boston University.',
    },
    resources: [{ label: 'Notebook', href: 'https://colab.research.google.com/drive/1BEtW_ilZALCUJILxh1IIkVfV25IJ95LD?usp=sharing'}],
  },
  {
    date: '2026-09-18',
    title: 'VQE for Quantum Chemistry',
    description:
      'Learn about the implementation of the Variational Quantum Eigensolver for processing many-electron molecules. The talk will cover the Hartree-Fock method, second quantization, and the Jordan-Wigner mapping; we will get into the weeds! Some linear algebra and quantum experience is recommended.',
    time: '3-5pm',
    location: 'CDS 701',
    presenter: {
      name: 'Artem Arefev',
      affiliation: 'Boston University',
      bio: 'Artem Arefev is a sophomore undergraduate studying mathematics and physics at Boston University.',
    },
    resources: [{ label: 'Slides', href: '/quantum-chemistry-slides.pdf' }],
  },
  {
    date: '2026-09-25',
    title: 'From Quantum Curiosity to Quantum Utility: Roadmap to Real-World Impact',
    description:
      "How does a technology evolve from scientific curiosity to practical utility? This session explores IBM's vision for quantum computing, recent advances in quantum hardware and error correction, and the path toward large-scale, fault-tolerant quantum systems. Attendees will gain a practical understanding of the current state of the technology, the challenges that remain, and how quantum computing may transform scientific discovery and industry in the years ahead.",
    time: '3-5pm',
    location: 'CDS 701',
    presenter: {
      name: 'Chris Wildgoose',
      affiliation: 'IBM',
      bio: "Chris Wildgoose is an IBM Quantum Ambassador and technologist with more than 20 years of experience in artificial intelligence, data, and emerging technologies. His career has included leadership roles at IBM, Hewlett Packard, and Deloitte, as well as founding and growing AI and analytics startups. At IBM, Chris works with organizations applying data and AI while collaborating with IBM Research and the broader quantum ecosystem to advance understanding of quantum computing and quantum-centric supercomputing. He is a member of IBM's Financial Services Quantum Guild, engaging with researchers, technologists, and industry practitioners on emerging quantum applications. Chris holds a bachelor's degree in Physics from St. Olaf College and a master's degree in Physics from Boston University. His work focuses on bridging scientific innovation and practical application across AI and quantum computing.",
    },
    resources: [],
  },
  {
    date: '2026-10-02',
    title: 'Runtime Lower Bounds for Quantum State Transfer with Imperfect Initialization',
    description:
      'Quantum state transfer, the primitive of transporting an unknown state from one site of a lattice to another, is a crucial step in many quantum information processing tasks. Recent protocols use the intermediate lattice sites as ancillas to achieve fast state transfer. Understanding state transfer\'s fundamental limits in the presence of practical imperfections and developing protocols to overcome these imperfections remain pressing open questions. We initiate the study of state transfer\'s robustness to errors in the initial ancilla state. In the Heisenberg picture, state transfer grows operators supported on the final site such that they no longer commute with all operators on the starting site. We prove that increased robustness necessitates larger Schatten p-norms of the commutators between initial- and final-site operators. This generalizes the previously known cases of infinite p and p=2, which govern complete ancilla-state-dependence and independence; intermediate values of p govern partially ancilla-state-dependent transport. We exhibit saturating protocols establishing the tightness of our bounds. In 1D power-law systems, our commutator bounds combined with existing light cones give exponentially stronger runtime bounds in certain regimes. For thermal ancilla states, we observe a phase transition in state transfer runtimes with temperature. We also introduce new robust state transfer protocols, charting the landscape between complete state-dependence and state-independence.',
    time: '3-5pm',
    location: 'CDS 701',
    presenter: {
      name: 'Twesh Upadhyaya',
      affiliation: 'University of Maryland',
      bio: 'Twesh is a physics doctoral student advised by Nicole Yunger Halpern. He was a QuICS Lanczos Graduate Fellow from 2021 to 2023.',
    },
    resources: [],
  },
]

export default function Schedule() {
  // Newest first, so the latest meeting sits at the top.
  const sorted = [...meetings].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="w-full mb-24">
      <p className="eyebrow mb-5">Schedule</p>
      <h1 className="display mb-5">Come to a meeting.</h1>
      <p className="lede mb-12">
        Every meeting we host is listed here. Slides, notes, and any other
        resources for a meeting get posted below once it has taken place.
      </p>

      {sorted.length === 0 ? (
        <p className="rule pt-10 text-muted measure">
          Nothing scheduled yet — check back soon.
        </p>
      ) : (
        <div className="flex flex-col gap-6 measure">
          {sorted.map((m) => (
            <MeetingCard key={m.date + m.title} meeting={m} />
          ))}
        </div>
      )}
    </div>
  )
}
