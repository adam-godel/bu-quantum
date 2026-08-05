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
                    eyebrow="Overview"
                    title="About Us"
                    info="Established in Fall 2025, BU Quantum aims to foster a community around quantum computing, on campus. We’re building a space for interested students to get the resources they need, collaborate with each other, and connect with faculty."
                />
                <InfoBox
                    eyebrow="Our work"
                    title="What We’re Doing"
                    info={
                        <ol className="list-decimal pl-6 space-y-3 marker:text-faint">
                            <li>We help beginners get started with quantum computing: from learning basic linear alebra and building their first quantum circuit, to eventually breaking RSA encryption with Shor's algorithm.</li>
                            <li>We host hands-on workshops, nearly every week: focusing on software implementation, across a variety of hardware platforms.</li>
                            <li>We host events for faculty and fellow students to discuss their research, providing broad coverage of ideas at the forefront of the field.</li>
                            <li>We form teams and organize trips to quantum computing hackathons, at least once a semester.</li>
                        </ol>
                    }
                />
            </div>

            <section className="rule pt-10 mt-16">
                <p className="eyebrow mb-4">Our Team</p>
                <h2 className="section-title mb-10">Who We Are</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <MemberProfile name="Yebin Song" imageUrl="/yebin.jpg" linkedin="https://www.linkedin.com/in/yebin-song-11158232a" bio="Placeholder description. Replace this with a short bio."/>
                    <MemberProfile name="Adam Godel" imageUrl="/adam.png" linkedin="https://www.linkedin.com/in/adam-godel" bio="Placeholder description. Replace this with a short bio."/>
                    <MemberProfile name="Allen Chen" imageUrl="/allen.jpg" linkedin="https://www.linkedin.com/in/allenchen28" bio="Placeholder description. Replace this with a short bio."/>
                    <MemberProfile name="Artem Arefev" imageUrl="/artem.jpg" linkedin="https://www.linkedin.com/in/artem-arefev-0789563a5" bio="Placeholder description. Replace this with a short bio."/>
                </div>
            </section>
        </div>
    )
}
