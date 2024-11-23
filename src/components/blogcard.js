'use client';

export default function BlogCard({ width, height, imageUrl, children }) {
    return (
        <div
            className={`bg-cover bg-no-repeat rounded-xl relative`}
            style={{
                width: `${width}%`,
                height: `${height}%`,
                backgroundImage: `url(${imageUrl})`
            }}
        >
            <div className="absolute top-2 left-0 bg-primary w-[100px] h-[30px] text-background text-xs pl-6 flex justify-start items-center  rounded-r-full">
                20 Apr
            </div>
            <p className="text-left pl-6 pt-14 w-[75%] text-background text-xs">{children}</p>
        </div>

    );
}
