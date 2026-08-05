export default function MemberProfile({ name, imageUrl, bio, website }) {
    return (
        <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-line rounded-[4px] p-5 transition-colors hover:border-crimson"
        >
            <img
                className="aspect-square w-full rounded-[4px] object-cover mb-5 grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                src={imageUrl}
                alt={name}
            />
            <div className="text-base font-medium text-text mb-2">{name}</div>
            <p className="text-sm leading-relaxed text-muted">{bio}</p>
        </a>
    )
}
