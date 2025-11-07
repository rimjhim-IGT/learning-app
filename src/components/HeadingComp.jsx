
const HeadingComp = ({title,description}) => {
    return (
        <div className="text-center mb-4 md:mb-10">
            <h2 className="text-3xl font-bold font-sourceSans">
                {title}
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                {description}
            </p>
        </div>
    )
}

export default HeadingComp