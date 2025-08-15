"use client"
import React from 'react'
import MemberProfile from '../components/memberprofile'
import InfoBox from '../components/infobox'
import { useRef } from 'react'

export default function About() {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div>
            <InfoBox title="about us" info="bu quantum is a student organization at boston university dedicated to promoting quantum computing and quantum information science. we aim to provide resources, workshops, and networking opportunities for students interested in the field." />
            <br />
            <InfoBox title="what we do" info="we organize talks, workshops, and hackathons to educate and engage students in quantum technologies. we also collaborate with industry professionals and researchers to provide insights into the latest advancements in the field." />
            <br />
            <InfoBox title="our mission" info="our mission is to foster a community of students passionate about quantum technologies, facilitate learning and collaboration, and connect students with industry professionals and researchers in the field. we believe that by empowering students with knowledge and resources, we can contribute to the advancement of quantum science and its applications." />
            <br />
            <br />
            <br />
            <div 
                ref={cardRef}
                className="bg-gradient-to-br from-black via-neutral-900 to-black rounded-lg p-6 border-2 border-red-400 transition-transform duration-200 ease-out"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                
                <h1 className="text-2xl text-center justify-center font-bold drop-shadow-[0_0_7px_rgba(224,92,92,0.8)]">our team</h1>
                <div className="flex flex-row justify-center flex-wrap">
                    <MemberProfile name="John Doe" role="CEO" imageUrl="/snorlaxpfp.jpg" linkedin="https://www.linkedin.com/feed/" bio="John is the president of a small country." />
                    <MemberProfile name="Jane Smith" role="Vice President" imageUrl="/pipluppfp.jpg" linkedin="https://www.linkedin.com/feed/" bio="Jane is the vice president of a small country." />
                    <MemberProfile name="Alice Johnson" role="Cool Guy" imageUrl="/wooperpfp.jpg" linkedin="https://www.linkedin.com/feed/" bio="Alice is the treasurer of a small country." />
                </div>
            </div>
        </div>
    )
}
