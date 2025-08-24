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
            <InfoBox title="about us" info="bu quantum is a student organization at boston university dedicated to promoting quantum computing and quantum information science. we aim to provide resources, workshops, and networking opportunities for students interested in the field." />
            <br />
            <InfoBox title="what we do" info="we organize talks, workshops, and hackathons to educate and engage students in quantum technologies. we also collaborate with industry professionals and researchers to provide insights into the latest advancements in the field." />
            <br />
            <InfoBox title="our mission" info="our mission is to foster a community of students passionate about quantum technologies, facilitate learning and collaboration, and connect students with industry professionals and researchers in the field. we believe that by empowering students with knowledge and resources, we can contribute to the advancement of quantum science and its applications." />
            <div 
                className="bg-gradient-to-br from-black via-neutral-900 to-black rounded-lg p-6 mt-16 mb-8 border-2 border-red-400 transition-transform duration-200 ease-out"
            >
                <h1 className="text-4xl text-center justify-center mb-4 font-bold drop-shadow-[0_0_7px_rgba(224,92,92,0.8)]">our team</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
                    <MemberProfile name="adam godel" role="director" imageUrl="/adam.png" linkedin="https://www.linkedin.com/in/adam-godel" bio={<>passionate about quantum computing.<br/>qsl fellow @ wiser/nnl.<br/>awards @ iquhack & qrise.<br/>not fault-tolerant myself.</>}/>
                    <MemberProfile name="nico jackson" role="vice director" imageUrl="/nico.png" linkedin="https://www.linkedin.com/in/nicola-jackson-64b22833b" bio={<>passionate about web dev and swe.<br/>big fan of gta v and bears.<br/>"6’2".</>}/>
                    <MemberProfile name="travis meyer" role="head of finance" imageUrl="/travis.png" linkedin="https://www.linkedin.com/in/travis-meyer-2b313a299" bio={<>passionate about something.<br/>swe & excel victim.<br/>5'8.</>}/>
                    <div className="flex-col md:flex-row md:col-span-3 flex justify-center gap-8">
                        <MemberProfile name="jacky lin" role="head of operations" imageUrl="/jacky.png" linkedin="https://www.linkedin.com/in/lin-jacky" bio={<>passionate about boba.<br/>badminton/tv enthusiast.<br/>always exploring new domains.<br/>i love birds.</>}/>
                        <MemberProfile name="timothy wright" role="head of pedagogy" imageUrl="/timothy.png" linkedin="https://www.linkedin.com/in/timmyjr11" bio={<>passionate about robots.<br/>lead swe and start-up founder.<br/>quantum shill.<br/>existing is chill.</>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
