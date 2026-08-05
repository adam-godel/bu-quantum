export default function infoBox({ eyebrow, title, info }) {
    return (
        <section className="rule pt-10">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            <h2 className="section-title mb-4">{title}</h2>
            <div className="body-copy">
                {info}
            </div>
        </section>
    )
}
