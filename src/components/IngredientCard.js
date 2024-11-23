export default function IngredientCard({ width, height, imageUrl, head, dis }) {
    return (
        <div
            className={`bg-cover bg-no-repeat rounded-xl flex justify-between flex-col items-start py-6 px-2`}
            style={{
                width: `${width}%`,
                height: `${height}%`,
                backgroundImage: `url(${imageUrl})`
            }}
        >
            <div className="h-[60%] w-full flex-col flex justify-start items-start gap-2">
                <h1 className="text-left pl-2 lg:pl-6 w-full lg:w-[75%] text-primary text-md lg:text-xl font-semibold">{head}</h1>
                <p className="text-left pl-2 lg:pl-6 w-full lg:w-[75%] text-primary text-xs font-semibold">{dis}</p>
            </div>
            <div className="pl-2 lg:pl-6">
                <button className="text-primary font-semibold text-xs border-b-[1px] border-primary">
                    SEE MORE
                </button>
            </div>
        </div>
    )
}