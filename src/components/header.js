import Image from 'next/image';

export default function Header(){
  return (
    <div className="w-full flex justify-center items-center px-20 bg-white">
        <div className="w-full justify-start items-start">
        <Image src={'/logo.png'} alt='logo' width={160} height={32}/>
        </div>
    </div>
  )
}

