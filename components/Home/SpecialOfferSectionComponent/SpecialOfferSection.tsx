import {CircleChevronRight} from "lucide-react";

export function SpecialOfferSection() {
    return (
        <section className="w-full flex flex-col justify-center py-16 gap-2">
            <h1 className="text-4xl font-bold text-black text-center">Produtos em destaque</h1>

                <div className="flex justify-center p-5 gap-5">
                    <div className="grid grid-cols-1 gap-y-4">
                        <div className="bg-[#DCEDFD] w-[270px] h-[340px] flex-shrink-0 rounded p-8 overflow-hidden">
                            <div className="flex flex-col gap-y-3">
                                <span className="text-xs text-[#0A9A73] font-semiboldbold">HOT SALES</span>
                                <h1 className="text-2xl font-semiboldbold">Grande Promoção</h1>
                            </div>

                            <div className="h-[220px] relative">
                                <div
                                    className="w-[160px] flex items-center justify-center py-2 absolute top-0 -left-7 gap-x-1 z-5">
                                    <span className="text-xs font-light cursor-pointer"> Comprar Agora </span>
                                    <CircleChevronRight
                                        cursor={"pointer"} size={15}/>
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
                                    className="w-[160px] flex items-center justify-center py-2 absolute top-0 -left-7 gap-x-1 z-5">
                                    <span className="text-xs font-light cursor-pointer"> Comprar Agora </span>
                                    <CircleChevronRight
                                        cursor={"pointer"} size={15}/>
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
                        <div className="w-[270px] h-[390px] flex-shrink-0 overflow-hidden rounded">
                            <div className="bg-[#F2F5F7] h-[300px] w-full overflow-hidden">
                                <img
                                    src="../../img/termometro-digital-atual-removebg-preview.png"
                                    alt=""
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                            <div className="bg-white h-[200px] py-2 flex flex-col gap-y-2">
                                <strong>Antiseptic Spray</strong>
                                <p> $38.00 <span className="text-red-600 text-sm line-through">$45.00</span></p>
                            </div>
                        </div>

                        {/* Card de produto 02 */}
                        <div className="w-[270px] h-[390px] flex-shrink-0 overflow-hidden rounded">
                            <div className="bg-[#F2F5F7] h-[300px] w-full overflow-hidden">
                                <img
                                    src="../../img/2.png"
                                    alt=""
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                            <div className="h-[200px] py-2 flex flex-col gap-y-2">
                                <strong>Antiseptic Spray</strong>
                                <p> $38.00 <span className="text-red-600 text-sm line-through">$45.00</span></p>
                            </div>
                        </div>

                        {/* Card de produto 03 */}
                        <div className="w-[270px] h-[390px] flex-shrink-0 overflow-hidden rounded">
                            <div className="bg-[#F2F5F7] h-[300px] w-full overflow-hidden">
                                <img
                                    src="../../img/4.png"
                                    alt=""
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                            <div className="bg-white h-[200px] py-2 flex flex-col gap-y-2">
                                <strong>Antiseptic Spray</strong>
                                <p> $38.00 <span className="text-red-600 text-sm line-through">$45.00</span></p>
                            </div>
                        </div>

                        {/* Card de produto 04 */}
                        <div className="w-[270px] h-[390px] flex-shrink-0 overflow-hidden rounded">
                            <div className="bg-[#F2F5F7] h-[300px] w-full overflow-hidden">
                                <img
                                    src="../../img/3.png"
                                    alt=""
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                            <div className="h-[200px] py-2 flex flex-col gap-y-2">
                                <strong>Antiseptic Spray</strong>
                                <p> $38.00 <span className="text-red-600 text-sm line-through">$45.00</span></p>
                            </div>
                        </div>

                        {/* Card de produto 05 */}
                        <div className="w-[270px] h-[390px] flex-shrink-0 overflow-hidden rounded">
                            <div className="bg-[#F2F5F7] h-[300px] w-full overflow-hidden">
                                <img
                                    src="../../img/1.png"
                                    alt=""
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                            <div className="bg-white h-[200px] py-2 flex flex-col gap-y-2">
                                <strong>Antiseptic Spray</strong>
                                <p> $38.00 <span className="text-red-600 text-sm line-through">$45.00</span></p>
                            </div>
                        </div>

                        {/* Card de produto 06 */}
                        <div className="w-[270px] h-[390px] flex-shrink-0 overflow-hidden rounded">
                            <div className="bg-[#F2F5F7] h-[300px] w-full overflow-hidden">
                                <img
                                    src="../../img/6.png"
                                    alt=""
                                    className="h-full w-auto object-cover"
                                />
                            </div>
                            <div className="h-[200px] py-2 flex flex-col gap-y-2">
                                <strong>Antiseptic Spray</strong>
                                <p> $38.00 <span className="text-red-600 text-sm line-through">$45.00</span></p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}