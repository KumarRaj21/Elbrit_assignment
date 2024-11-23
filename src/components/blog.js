'use client';

import BlogCard from "./blogcard";

export default function Blog() {
    return (
        <div className="flex-col w-full my-5">
            <h2 className='w-full text-center text-md font-semibold text-primary my-2'>our blog</h2>
            <h1 className='w-full text-center text-2xl font-bold text-primary my-2'>Latest News</h1>
            <div className="w-full h-[200vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] px-5 flex lg:flex-row flex-col justify-between items-center">

                <div className="w-full h-[25%] sm:hidden lg:flex lg:w-[25%]  flex-col p-2 gap-2 flex items-center justify-between lg:h-full">
                    <BlogCard width={100} height={70} imageUrl="/blog1.png">
                        The Covid-19 Epidemic In 2022 Is Back
                    </BlogCard>
                    <BlogCard width={100} height={30} imageUrl="/blog2.png">
                        The Covid-19 Epidemic In 2022 Is Back
                    </BlogCard>
                </div>
                <div className="w-full h-[25%] sm:hidden lg:flex lg:w-[25%] p-2 gap-2 flex-col flex items-center justify-between lg:h-full">
                    <BlogCard width={100} height={30} imageUrl="/blog1.png">
                        The Covid-19 Epidemic In 2022 Is Back
                    </BlogCard>
                    <BlogCard width={100} height={70} imageUrl="/blog2.png">
                        The Covid-19 Epidemic In 2022 Is Back
                    </BlogCard>
                </div>
                <div className="w-full h-[25%] sm:hidden lg:flex lg:w-[25%] p-2 gap-2 flex-col flex items-center justify-between lg:h-full">
                    <BlogCard width={100} height={70} imageUrl="/blog1.png">
                        The Covid-19 Epidemic In 2022 Is Back
                    </BlogCard>
                    <BlogCard width={100} height={30} imageUrl="/blog2.png">
                        The Covid-19 Epidemic In 2022 Is Back
                    </BlogCard>
                </div>
                <div className="w-full h-[25%] sm:hidden lg:flex lg:w-[25%] p-2 gap-2 flex-col flex items-center justify-between lg:h-full">
                    <BlogCard width={100} height={30} imageUrl="/blog1.png">
                        The Covid-19 Epidemic In 2022 Is Back
                    </BlogCard>
                    <BlogCard width={100} height={70} imageUrl="/blog2.png">
                        The Covid-19 Epidemic In 2022 Is Back
                    </BlogCard>
                </div>

                <div className="h-full w-full justify-between items-center hidden sm:flex lg:hidden">
                    <div className="h-full w-[50%] flex-col p-2 gap-2 flex items-center justify-between">
                        <BlogCard width={100} height={70} imageUrl="/blog1.png">
                            The Covid-19 Epidemic In 2022 Is Back
                        </BlogCard>
                        <BlogCard width={100} height={30} imageUrl="/blog2.png">
                            The Covid-19 Epidemic In 2022 Is Back
                        </BlogCard>
                    </div>
                    <div className="h-full w-[50%] p-2 gap-2 flex-col flex items-center justify-between">
                        <BlogCard width={100} height={30} imageUrl="/blog1.png">
                            The Covid-19 Epidemic In 2022 Is Back
                        </BlogCard>
                        <BlogCard width={100} height={70} imageUrl="/blog2.png">
                            The Covid-19 Epidemic In 2022 Is Back
                        </BlogCard>
                    </div>
                </div>
                <div className="h-full w-full justify-between items-center hidden sm:flex lg:hidden">
                    <div className="w-[50%] h-full p-2 gap-2 flex-col flex items-center justify-between">
                        <BlogCard width={100} height={70} imageUrl="/blog1.png">
                            The Covid-19 Epidemic In 2022 Is Back
                        </BlogCard>
                        <BlogCard width={100} height={30} imageUrl="/blog2.png">
                            The Covid-19 Epidemic In 2022 Is Back
                        </BlogCard>
                    </div>
                    <div className="h-full w-[50%] p-2 gap-2 flex-col flex items-center justify-between">
                        <BlogCard width={100} height={30} imageUrl="/blog1.png">
                            The Covid-19 Epidemic In 2022 Is Back
                        </BlogCard>
                        <BlogCard width={100} height={70} imageUrl="/blog2.png">
                            The Covid-19 Epidemic In 2022 Is Back
                        </BlogCard>
                    </div>
                </div>
            </div>
        </div>
    )
}