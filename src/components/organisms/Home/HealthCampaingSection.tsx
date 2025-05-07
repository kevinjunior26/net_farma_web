'use client'
import React, { useEffect, useState } from "react";
export function HealthCampaing() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date('2025-01-29T00:00:00').getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full flex justify-center py-16 bg-[#F2F6F7] h-[623px] mb-24">
            <div className='container flex justify-center'>
                <div className="absolute left-5 w-24 h-24">
                    <img src="../../shape1.svg" alt=""/>
                </div>
                <div className="flex">

                    <div className="container w-[50%] p-4">
                        <h1 className="text-[#071C1F] font-[Josefin Sans] text-[44px] font-bold leading-normal">
                            Vacina Covid-19 Gratuita Bilhete de Campanha
                        </h1>
                        <p className="w-[552px] h-[50px] flex-shrink-0 text-[#546375] font-[Josefin Sans] text-[16px] font-normal leading-normal py-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry`s standard dummy text ever since the 1500s
                        </p>

                        <div className="gap-x-5 gap-y-24 mt-14 flex">
                            <div>
                                <div className="w-16 h-14 text-[#0A9A73] bg-white flex justify-center items-center">
                                    {timeLeft.days}
                                </div>
                                <span className="text-sm font-extralight">Dia</span>
                            </div>
                            <div>
                                <div className="w-16 h-14 text-[#0A9A73] bg-white flex justify-center items-center">
                                    {timeLeft.hours}
                                </div>
                                <span className="text-sm font-extralight">Hora</span>
                            </div>
                            <div>
                                <div className="w-16 h-14 text-white bg-[#0A9A73] flex justify-center items-center">
                                    {timeLeft.minutes}
                                </div>
                                <span className="text-sm font-extralight">Minutos</span>
                            </div>
                            <div>
                                <div className="w-16 h-14 text-[#0A9A73] bg-white flex justify-center items-center">
                                    {timeLeft.seconds}
                                </div>
                                <span className="text-sm font-extralight">Segundos</span>
                            </div>
                        </div>

                        <div className="flex gap-x-5 mt-10">
                            <button
                                className="max-w-44 p-4 rounded bg-[#0A9A73] text-white hover:bg-[#087C5C] animate-fadeInUpSmooth delay-[18000ms] transition duration-300">
                                Inscreva-se Agora
                            </button>
                            {/*<span className="bg-transparent p-4 rounded-md text-[#0A9A73] underline cursor-pointer">Oferta do dia</span>*/}
                        </div>
                    </div>

                    <div className="flex justify-center w-[50%]">
                        <img
                            className="w-11/12"
                            src="https://res.cloudinary.com/dm6rzfggr/image/upload/v1733622418/ilastration_drcvlw.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
