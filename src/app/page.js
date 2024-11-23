'use client';

import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '@/components/hero';
import Blog from '@/components/blog';
import Ingredients from '@/components/Ingredients';
import Image from 'next/image';

const info = [
  {
    img: '/clinically-studied.png',
    head: 'Clinically Studied',
    des: 'All products that we offer have undergone lab and safety tests'
  },
  {
    img: '/veg-friendly.png',
    head: 'Vegetarian Friendly',
    des: 'We have a wide selection of vegetarian products to meet your needs'
  },
  {
    img: '/made-in-india.png',
    head: 'Made in India',
    des: 'Shop local and explore health products made right here in India'
  },
  {
    img: '/Freeshipping.png',
    head: 'Free shipping',
    des: 'We deliver to your door with no shipping costs on your orders'
  },
  {
    img: '/NoRisk.png',
    head: 'No Risk',
    des: 'We ensure that all products are safe and within their use-by date'
  },
  {
    img: '/GMOfree.png',
    head: 'GMO free',
    des: 'Natural, no modified products and derivatives for those who need it'
  },
]

export default function Page() {
  return (
    <div className="min-h-screen relative bg-background flex-col text-primary h-full w-full justify-between items-center flex">
      <div className="h-full flex-col px-10 py-2 w-full flex justify-between items-center overflow-visible relative">
        <Header />
        <Hero />
        <Ingredients />
        <Blog />
      </div>
      <Footer />
      <div className="flex h-[150vh] sm:h-[110vh] md:h-[90vh] lg:h-[60vh] xl:h-[45vh] absolute top-[110vh] lg:top-[75vh] sm:left-[14%] xl:left-[18%] bg-primary w-[80%] sm:w-[75%] md:w-[80%] lg:w-[800px] xl:w-[850px] rounded-[45px]">
      </div>
      <div className="h-auto absolute top-[105vh] lg:top-[70vh] left-[8%] xl:left-[20%] flex flex-col lg:flex-row w-[90%] xl:w-[850px] flex-wrap gap-5 justify-center items-center">
        {info.map((itm, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center h-[150px] w-[100%] lg:w-[30%] gap-2 text-background"
              key={index}
            >
              <Image
                src={itm.img}
                alt={itm.head}
                height={70}
                width={70}
              />
              <p className="text-center w-full text-sm font-bold">{itm.head}</p>
              <p className="text-center text-[11px] font-thin w-[70%]">
                {itm.des}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

