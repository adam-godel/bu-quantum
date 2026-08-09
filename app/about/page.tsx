import Link from 'next/link'
import React from 'react'
import MemberProfile from '../components/memberprofile'
import InfoBox from '../components/infobox'

export const metadata = {
  title: 'About',
  description: 'Learn more about BU Quantum.',
}

export default function About() {
    return (
        <div className="mb-24">
            <p className="eyebrow mb-5">About</p>
            <h1 className="display mb-12">A community for quantum computing at BU.</h1>

            <div className="flex flex-col gap-12">
                <InfoBox
                    eyebrow="What is this?"
                    title="About Us"
                    info="Established in Fall 2025, BU Quantum aims to foster a community around quantum computing, on campus. We’re building a space for interested students to learn more about the field and discuss the research they have been working on."
                />
                <InfoBox
                    eyebrow="What are we doing?"
                    title="Our Work"
                    info={
                        <ol className="list-decimal pl-6 space-y-3 marker:text-faint">
                            <li>We help beginners get started with quantum computing: from learning basic linear alebra and building their first quantum circuit, to eventually breaking RSA encryption with Shor's algorithm. We do this through bootcamp-style workshops and lesson aimed at undergraduates.</li>
                            <li>We host events for faculty and fellow students to explain and discuss their research, providing broad coverage of ideas at the forefront of the field at a graduate level.</li>
                            <li>We host quantum programming workshops, meant to survery broad of quantum hardware solutions and focused on software implementation of the algorithms. These are accessible to beginners and experts alike.</li>
                        </ol>
                    }
                />
                <InfoBox
                    eyebrow="When are the events?"
                    title="Our Schedule"
                    info={
                         <p>
                            We meet every week: alternating between general, lesson-style events aimed at undergraduates and specialized, seminar-style events aimed at graduates and dedicated undergrads. <br /><br />
                            Event order, meeting locations, and other details TBA. <br /><br />
                            
                            Check our full list of events on the{' '}
                            <Link href="/schedule" className="accent">
                                schedule page
                            </Link>
                        </p>
                    }
                />
            </div>

            <section className="rule pt-10 mt-16">
                <p className="eyebrow mb-4">Who are we?</p>
                <h2 className="section-title mb-10">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <MemberProfile name="Adam Godel" imageUrl="/adam.jpg" website="https://adamgodel.me/" bio="Mathematics & Computer Science @ BU '27."/>
                    <MemberProfile name="Yebin Song" imageUrl="/yebin.jpg" website="https://www.linkedin.com/in/yebin-song-11158232a" bio="Data Science @ BU '28."/>
                    <MemberProfile name="Allen Chen" imageUrl="/allen.jpg" website="https://www.linkedin.com/in/allenchen28" bio="Electrical Engineering @ BU '28."/>
                    <MemberProfile name="Artem Arefev" imageUrl="/artem.jpg" website="https://www.linkedin.com/in/artem-arefev-0789563a5" bio="Mathematics & Physics @ BU '29."/>
                    <MemberProfile name="Alex Poremba" imageUrl="/alex.jpg" website="https://scc1.bu.edu/poremba/" bio="Professor @ BU CS & Physics."/>
                </div>
            </section>
        </div>
    )
}
