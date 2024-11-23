'use client';

import Image from "next/image";

const info = [
  {
    head: "Vitamins",
    dis: "Increased Vitamins and minerals in your diet",
    Icon: "/vitamins.png"
  },
  {
    head: "Weight Loss",
    dis: " Weight Loss Find scientifically proven solutions",
    Icon: "/weightloss.png"
  },
  {
    head: "Functional Foods",
    dis: "Functional Foods From protein powers to baby formula",
    Icon: "/functionalfoods.png"
  },
]

export default function Hero() {
  return (
    <div className="lg:h-[90vh] min-h-[60vh] relative px-4 sm:px-10 md:px-20 lg:px-30 xl:px-52 py-10 gap-3 lg:gap-0 md:py-8 lg:py-4 rounded-sm w-full flex justify-center items-center lg:items-start bg-secondary mb-[150vh] sm:mb-[110vh] md:mb-[90vh] lg:mb-[60vh] xl:mb-40">
      <div className="flex flex-col relative justify-center items-center h-[85%] lg:h-[70%] w-full">
        <h1 className="w-full text-center text-primary font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-6xl lg:mt-4 mb-4 lg:mb-0">Essential Vitamins</h1>
        <div className="flex justify-start items-center flex-col h-full w-full">
          <div className="w-full justify-between flex-col lg:flex-row flex items-center h-full ">
            <div className="lg:w-[30%] w-[100%] flex flex-col justify-start lg:justify-end items-start gap-3 h-[30%] lg:h-full lg:pb-8 my-3 lg:my-0">
              <p className="text-sm text-primary text-left w-full">Online Medical Supplies</p>
              <h1 className="text-lg sm:text-xl md:text-2xl text-primary text-left w-full font-bold">Get Your Vitamins & Minerals</h1>
              <button className="text-sm text-background bg-primary rounded-2xl h-[34px] w-[120px]">
                Explore
              </button>
            </div>
            <Image
              src={'/rectangle.png'}
              height={200}
              width={200}
              alt=""
              className="lg:flex hidden"
            />
            <Image
              src={'/probitics.png'}
              height={230}
              width={230}
              alt=""
              className="absolute lg:top-24 xl:top-12  lg:left-[34%] xl:left-[36%] lg:flex hidden"
            />
            <div className="my-2 flex relative justify-center items-center lg:hidden">
              <Image
                src={'/rectangle.png'}
                height={200}
                width={200}
                alt=""
                className="flex relative justify-center items-center lg:hidden"
              />
              <Image
                src={'/probitics.png'}
                height={230}
                width={230}
                alt=""
                className="absolute top-0 left-0 flex lg:hidden"
              />
            </div>
            <div className="lg:w-[30%] w-[100%] flex flex-col justify-center items-center lg:justify-end lg:items-start gap-3 h-[30%] lg:h-full ">
              {info.map((itm, index) => {
                return <div key={index} className="h-[50px] w-full flex justify-end gap-2 items-center">
                  <Image
                    src={itm.Icon}
                    height={40}
                    width={40}
                    alt={itm.head}
                  />
                  <div className="w-full flex-col gap-1">
                    <p className="text-sm text-primary text-left w-full font-bold">{itm.head}</p>
                    <p className="text-[10px] text-primary text-left w-[90%]">{itm.dis}</p>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start gap-2 mt-10 w-full">
          <Image
            src={'/rs-arrow.png'}
            height={20}
            width={20}
            alt=""
          />
          <Image
            src={'/rs-arrow.png'}
            height={20}
            width={20}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

