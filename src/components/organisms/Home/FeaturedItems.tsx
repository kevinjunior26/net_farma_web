'use client'
import {CircleChevronRight} from "lucide-react";
import {Button} from "@/src/components/atoms/button";

export function FeaturedItems() {
    function OnClick() {
        alert("Em Construção")
    }

    return (
        <section className="flex justify-center gap-5 mb-24">
            <div className="bg-[#DCEDFD] w-[370px] h-[440px] flex-shrink-0 p-8 overflow-hidden">
                <div className="flex flex-col gap-y-3">
                    <span className="text-xs text-[#0A9A73] font-semiboldbold">HOT SALES</span>
                    <h1 className="text-2xl font-semiboldbold">Grande Promoção</h1>
                </div>

                <div className="h-[320px] relative">
                    <div className="w-[160px] flex items-center justify-center py-9 absolute top-0 -left-7 gap-x-1 z-5">
                        <Button onClick={OnClick}
                                className="hover:bg-transparent hover:border-y-green-400 text-xs font-light cursor-pointer bg-transparent text-black shadow-none border-b-2 border-black">
                            Comprar Agora <CircleChevronRight cursor={"pointer"} size={15}/>
                        </Button>
                    </div>
                    <div
                        className="w-[250px] h-[250px] flex flex-col justify-center items-center gap-y-9 absolute bottom-0 right-0 z-10">
                        <div className="w-[400px] m-20 bg-red-400 relative">
                            <div
                                className="bg-[#FFF] opacity-65 rounded-full w-[200px] h-[200px] absolute -top-16 left-32 transition duration-300 hover:scale-[120%]">
                                <img
                                    className="w-[400px] h-[200px] object-cover -mt-8 -ml-0 z-40"
                                    src="../../img/termometro-digital-atual-removebg-preview.png"
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#E3EFED] w-[370px] h-[440px] flex-shrink-0 p-8 overflow-hidden">
                <div className="flex flex-col gap-y-3">
                    <span className="text-xs text-[#0A9A73] font-semiboldbold">SANITZER</span>
                    <h1 className="text-xl font-semiboldbold">Poupe 20% em cada encomenda</h1>
                </div>

                <div className="h-[320px] relative">
                    <div className="w-[160px] flex items-center justify-center py-9 absolute top-0 -left-7 gap-x-1 z-5">
                        <Button onClick={OnClick}
                                className="hover:bg-transparent hover:border-y-green-400 text-xs font-light cursor-pointer bg-transparent text-black shadow-none border-b-2 border-black">
                            Comprar Agora <CircleChevronRight cursor={"pointer"} size={15}/>
                        </Button>
                    </div>
                    <div
                        className="w-[250px] h-[250px] flex flex-col justify-center items-center gap-y-9 absolute bottom-0 right-0 z-10">
                        <div className="w-[400px] m-20 bg-red-400 relative">
                            <div
                                className="bg-[#FFF] opacity-65 rounded-full w-[200px] h-[200px] absolute -top-16 left-32 transition duration-300 hover:scale-[120%]">
                                <img
                                    className="w-[400px] h-[200px] object-cover -mt-8 -ml-0 z-40"
                                    src="../../img/alcool-gel_500-ml-1-1024x1024-removebg-preview.png"
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#DCEDFD] w-[370px] h-[440px] flex-shrink-0 p-8 overflow-hidden">
                <div className="flex flex-col gap-y-3">
                    <span className="text-xs text-[#0A9A73] font-semiboldbold">SANITZER</span>
                    <h1 className="text-xl font-semiboldbold">Poupe 20% em cada encomenda</h1>
                </div>

                <div className="h-[320px] relative">
                    <div className="w-[160px] flex items-center justify-center py-9 absolute top-0 -left-7 gap-x-1 z-5">
                        <Button onClick={OnClick}
                                className="hover:bg-transparent hover:border-y-green-400 text-xs font-light cursor-pointer bg-transparent text-black shadow-none border-b-2 border-black">
                            Comprar Agora <CircleChevronRight cursor={"pointer"} size={15}/>
                        </Button></div>
                    <div
                        className="w-[250px] h-[250px] flex flex-col justify-center items-center gap-y-9 absolute bottom-0 right-0 z-10">
                        <div className="w-[400px] m-20 bg-red-400 relative">
                            <div
                                className="bg-[#FFF] opacity-65 rounded-full w-[200px] h-[200px] absolute -top-16 left-32 transition duration-300 hover:scale-[120%]">
                                <img
                                    className="w-[400px] h-[200px] object-cover -mt-8 -ml-0 z-40"
                                    src="../../img/216e4b6bfa498b4379a3412415671d5b.png"
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}