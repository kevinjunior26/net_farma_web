'use client'
import {CircleChevronRight} from "lucide-react";
import {Button} from "@/src/components/atoms/button";
import {CardProduct} from "@/src/components/atoms/card_product";

export function SpecialOfferSection() {
    function OnClick() {
        alert("Em Construção")
    }
    return (
        <section className="flex flex-col justify-center gap-5 mb-24">
            <h1 className="text-4xl font-bold text-black text-center">Produtos em destaque</h1>

                <div className="flex justify-center p-5 gap-5">
                    <div className="grid grid-cols-1 gap-y-4">
                        <div className="bg-[#DCEDFD] w-[270px] h-[340px] flex-shrink-0 rounded p-8 overflow-hidden">
                            <div className="flex flex-col gap-y-3 cursor-pointer">
                                <span className="text-xs text-[#0A9A73] font-semiboldbold">HOT SALES</span>
                                <h1 className="text-2xl font-semiboldbold">Grande Promoção</h1>
                            </div>

                            <div className="h-[220px] relative">
                                <div className="w-[160px] flex items-center justify-center py-9 absolute -top-7 -left-7 gap-x-1 z-5">
                                    <Button onClick={OnClick}
                                            className="hover:bg-transparent hover:border-y-green-400 text-xs font-light cursor-pointer bg-transparent text-black shadow-none border-b-2 border-black">
                                        Comprar Agora <CircleChevronRight cursor={"pointer"} size={15}/>
                                    </Button>
                                </div>
                                <div
                                    className="w-[150px] h-[150px] flex flex-col justify-center items-center absolute bottom-0 right-0 z-10">
                                    <div className="w-[400px] m-20 bg-red-400 relative">
                                        <div
                                            className="bg-[#FFF] opacity-65 rounded-full w-[150px] h-[150px] absolute -top-16 left-32 transition duration-300 hover:scale-[120%]">
                                            <img
                                                className="w-[400px] h-[200px] object-cover -mt-8 -ml-0 z-40"
                                                src='../../img/termometro-digital-atual-removebg-preview.png'
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#DCEDFD] w-[270px] h-[440px] flex-shrink-0 rounded p-8 overflow-hidden">
                            <div className="flex flex-col gap-y-3">
                                <span className="text-xs text-[#0A9A73] font-semiboldbold">HOT SALES</span>
                                <h1 className="text-2xl font-semiboldbold">Grande Promoção</h1>
                            </div>

                            <div className="h-[220px] relative">
                                <div
                                    className="w-[160px] flex items-center justify-center py-9 absolute -top-7 -left-7 gap-x-1 z-5">
                                    <Button onClick={OnClick}
                                            className="hover:bg-transparent hover:border-y-green-400 text-xs font-light cursor-pointer bg-transparent text-black shadow-none border-b-2 border-black">
                                        Comprar Agora <CircleChevronRight cursor={"pointer"} size={15}/>
                                    </Button>
                                </div>
                                <div
                                    className="w-[350px] h-[250px] flex flex-col justify-center items-center absolute -bottom-32 -left-10 z-10 overflow-hidden">
                                    <img
                                        className="w-[250px] h-[250px] mt-0 mr-5 object-cover z-40"
                                        src="../../img/11-removebg-preview.png"
                                        alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-x-5">
                        {/* Card de produto 01 */}
                        {Array.from({length: 6}).map((__, index) => (
                            <div key={index}>
                                <CardProduct/>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    )
}