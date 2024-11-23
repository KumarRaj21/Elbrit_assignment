'use client';

import Image from "next/image";

const cards = [
    {
        img: "/phone_icon.png",
        head: "Phone number",
        dis: "+974 3118 1843"
    },
    {
        img: "/email_icon.png",
        head: "Email Address",
        dis: "Elbrithcqhr@gmail.com"
    },
    {
        img: "/location_icon.png",
        head: "Office Location",
        dis: "Ambassador Street, Zone 61,"
    },
];

export default function Footer() {
    return (
        <div className="w-full px-5 lg:px-20 xl:px-48 py-10 bg-primary text-background flex flex-col gap-10">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5">
                {cards.map((itm, index) => {
                    return (
                        <div
                            key={index}
                            className="w-full md:w-[30%] bg-footercard text-background rounded-xl flex flex-row justify-start items-center gap-3 p-3"
                        >
                            <div className="flex-shrink-0">
                                <Image src={itm.img} alt={itm.head} height={30} width={30} />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-semibold text-left">{itm.head}</p>
                                <p className="text-xs text-left">{itm.dis}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-5">
                <div className="flex-shrink-0">
                    <Image src={'/logo.png'} alt="logo" height={20} width={200} />
                </div>
                <div className="text-left lg:pl-10">
                    <p className="text-xs text-background">
                        Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
                    </p>
                </div>
            </div>
            <div className="w-full text-left">
                <p className="text-xs">
                    Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
                </p>
            </div>
        </div>
    );
}
