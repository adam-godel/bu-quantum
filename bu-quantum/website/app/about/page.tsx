import React from 'react'
import MemberProfile from '../components/memberprofile'
import InfoBox from '../components/infobox'

export const metadata = {
  title: 'About',
  description: 'Learn more about BU Quantum.',
}

export default function About() {
    return (
        <div className="lg:min-h-[calc(100vh-288px)] mb-8 flex flex-col justify-center">
            <InfoBox title="About Us" info="Established in Fall 2025, BU Quantum aims to foster a community around quantum computing, on campus. We’re building a space for interested students to get the resources they need, collaborate with each other, and connect with faculty." />
            <br />
            <InfoBox
                title="What We’re Doing:"
                info={
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>We help beginners get started with quantum computing: from learning basic linear alebra and building their first quantum circuit, to eventually breaking RSA encryption with Shor's algorithm.</li>
                        <li>We host hands-on workshops, nearly every week: focusing on software implementation, across a variety of hardware platforms.</li>
                        <li>We host events for faculty and fellow students to discuss their research, providing broad coverage of ideas at the forefront of the field.</li>
                        <li>We form teams and organize trips to quantum computing hackathons, at least once a semester.</li>
                    </ol>
                }
            />
            <br />
            <div 
                className="bg-gradient-to-br from-black via-neutral-900 to-black rounded-lg p-6 mt-16 mb-8 border-2 border-red-400 transition-transform duration-200 ease-out"
            >
                <h1 className="text-4xl text-center justify-center mb-4 font-bold drop-shadow-[0_0_7px_rgba(224,92,92,0.8)]">Our Team</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center">
                    <MemberProfile name="Yebin Song" role="Director" imageUrl="/yebin.jpg" linkedin="https://www.linkedin.com/in/yebin-song-11158232a" bio={<>Data science major.<br/>Vision model explainability research.<br/>Baited by Richard Feynman.</>}/>
                    <MemberProfile name="Adam Godel" role="Founder" imageUrl="/adam.png" linkedin="https://www.linkedin.com/in/adam-godel" bio={<>Passionate about quantum computing.<br/>QSL fellow @ Wiser/NNL.<br/>Awards @ iQuHack & QRISE.<br/>Not fault-tolerant myself.</>}/>
                    <MemberProfile name="Allen Chen" role="Head of Operations" imageUrl="/allen.jpg" linkedin="https://www.linkedin.com/in/allenchen28" bio={<>passionate about something.<br/></>}/>
                    <MemberProfile name="Artem Arefev" role="Head of Physics" imageUrl="/artem.jpg" linkedin="https://www.linkedin.com/in/artem-arefev-0789563a5" bio={<>Passionate about physics in tech.<br/>Awards at iQuHack.<br/>Working on VQE and NQS!<br/>"6'2"</>}/>
                </div>
            </div>
        </div>
    )
}
