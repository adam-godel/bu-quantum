"use client"

export default function MemberProfile({ name, role, imageUrl, bio, linkedin }) {
    return (
        <div className="max-w-sm overflow-hidden text-center flex-1">
            <div className="px-6 py-4 flex flex-col items-center text-center">
                <img onClick={() => window.open(linkedin, '_blank')} className="w-24 h-24 border-4 border-red-400 rounded-full mx-auto mb-4 object-cover drop-shadow-[0_0_7px_rgba(224,92,92,0.6)] duration-150 hover:scale-105 hover:cursor-pointer" src={imageUrl} alt={name} />
                <div className="font-bold text-xl mb-2 drop-shadow-[0_0_7px_rgba(224,92,92,0.9)]">{name}</div>
                <p className="text-red-400 font-bold">{role}</p>
                <p className="text-white text-center mt-2 w-48">{bio}</p>
            </div>
        </div>
    )
}
