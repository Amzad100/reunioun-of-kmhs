export default function SectionTitle({ heading, subHeading }) {
    return (
        <div className="mx-auto text-center md:w-2/12 my-4">
            <p className="text-yellow-600 mb-1">{subHeading}</p>
            <h3 className="text-2xl uppercase border-y-2 py-2">{heading}</h3>
        </div>
    )
}
