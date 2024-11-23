import Image from "next/image";
import IngredientCard from "./IngredientCard";

export default function Ingredients() {
    return (
        <div className="h-[70vh] xl:h-[80vh] flex justify-between items-center w-full sm:w-[90%] xl:w-[85%] flex-col my-5 py-2 gap-3">
            <div className="h-full md:h-[50%] w-full justify-center md:justify-between flex lg:flex-row flex-col items-center">
                <div className="lg:h-full h-[35%] w-full lg:w-[35%] flex justify-start items-start flex-col gap-3">
                    <p className="text-left text-primary font-semibold text-[12px] sm:text-sm">INGREDIENTS</p>
                    <h1 className="text-left text-primary font-bold text-md md:text-3xl">Better Ingredients</h1>
                    <p className="text-left text-primary text-xs w-[95%]">Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p>
                </div>
                <div className="lg:h-full h-[65%] w-full lg:w-[65%] flex justify-between items-center p-1 gap-2">
                    <IngredientCard imageUrl={'/vit_c.png'} width={50} height={100} head={'Vitamin C'} dis={'Vitamin C as ascorbic acid'} />
                    <IngredientCard imageUrl={'/vit_b3.png'} width={50} height={100} head={'Vitamin B3'} dis={'Niacin for healthy gut and skin'} />
                </div>
            </div>
            <div className="h-[50%] w-full justify-between md:flex-row flex-col items-center md:flex hidden">
                <div className="h-full w-full md:w-[90%] justify-between items-center gap-2 md:flex hidden">
                    <IngredientCard imageUrl={'/magnisium.png'} width={33} height={100} head={'Magnesium'} dis={'Boost energy and support muscle function'} />
                    <IngredientCard imageUrl={'/hylac_acid.png'} width={33} height={100} head={'Hyaluronic Acid'} dis={'For smooth, supple and soft skin!'} />
                    <IngredientCard imageUrl={'/lacto.png'} width={33} height={100} head={'Lactobacillus'} dis={'Invigorate your gut microbiome'} />
                </div>
                <div className="h-full w-[10%] justify-center items-start gap-2 hidden md:flex">
                    <Image
                        src={'/ingredents_end.png'}
                        height={30}
                        width={100}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

