export default function infoBox({ title, info }) {
    return (
        <div className="rounded-lg my-4">
            <h2 className="text-2xl font-semibold mb-2 ">{title}</h2>
            <div className="text-xl text-white text-justify">
                {info}
            </div>
        </div>
    )
}
