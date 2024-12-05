'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-auto -mt-4 overflow-hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1 w-full">
                        <Card className="border shadow-none">
                            <CardContent className="flex w-screen bg-[#F2F5F7]">
                                <div className="w-1/2 min-h-screen flex flex-col items-center justify-center relative">
                                    <img className="absolute top-60 left-40" src="../../shape.svg" alt=""/>

                                    <div className="flex flex-col gap-y-10">
                                        <span className="bg-white rounded-3xl p-1 text-[#0A9A73] w-[200px] text-center animate-fadeInUpSmooth delay-[9000ms]">
                                            100% genuine Products
                                        </span>
                                        <h1 className="w-[510px] h-[175px] flex-shrink-0 text-[#071C1F] font-josefin text-[60px] font-bold leading-none animate-fadeInUpSmooth delay-[12000ms]">
                                            Obtenha 20% de desconto na máscara N95
                                        </h1>
                                        <p className="animate-fadeInUpSmooth delay-[15000ms]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                        </p>
                                        <button
                                            className="max-w-44 h-12 rounded bg-[#0A9A73] text-white hover:bg-[#087C5C] animate-fadeInUpSmooth delay-[18000ms] transition duration-300">
                                            Compre Agora
                                        </button>
                                    </div>
                                </div>

                                <div className="w-1/2 flex items-center justify-center">
                                    <img src="../../img/mack.png" alt=""/>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}