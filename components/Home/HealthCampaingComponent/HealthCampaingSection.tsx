import * as React from "react";

export function  HealthCampaing(){
    return (
        <section className="w-full h- flex justify-center py-16 bg-[#F2F6F7] h-[623px]">
            <div className="absolute left-5 w-24 h-24">
                <img src="../../shape1.svg" alt=""/>
            </div>
            <div className="flex container">

                <div className="w-[50%] p-4">
                    <h1 className="text-[#071C1F] font-[Josefin Sans] text-[44px] font-bold leading-normal">
                        Vacina Covid-19 Gratuita Bilhete de Campanha
                    </h1>
                    <p className="w-[552px] h-[50px] flex-shrink-0 text-[#546375] font-[Josefin Sans] text-[16px] font-normal leading-normal py-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>

                    <div className="gap-x-5 gap-y-24 mt-14 flex">
                        <div>
                            <div className="w-16 h-14 text-[#0A9A73] bg-white flex justify-center items-center">02</div>
                            <span className="text-sm font-extralight">Dia</span>
                        </div>
                        <div>
                            <div className="w-16 h-14 text-[#0A9A73] bg-white flex justify-center items-center">14</div>
                            <span className="text-sm font-extralight">Hora</span>
                        </div>
                        <div>
                            <div className="w-16 h-14  text-white bg-[#0A9A73] flex justify-center items-center">42</div>
                            <span className="text-sm font-extralight">Minutos</span>
                        </div>
                        <div>
                            <div className="w-16 h-14 text-[#0A9A73] bg-white flex justify-center items-center">59</div>
                            <span className="text-sm font-extralight">Segundos</span>
                        </div>
                    </div>

                    <div className="flex gap-x-5 mt-10">
                        <button
                            className="max-w-44 p-4 rounded bg-[#0A9A73] text-white hover:bg-[#087C5C] animate-fadeInUpSmooth delay-[18000ms] transition duration-300">
                            Compre Agora
                        </button>
                        <span className="bg-transparent p-4 rounded-md text-[#0A9A73] underline cursor-pointer">Oferta do dia</span>
                    </div>
                </div>

                <div className="flex justify-center w-[50%]">
                    <img className="w-11/12" src="../../ilastration.svg" alt=""/>
                </div>
            </div>
        </section>
    )
}