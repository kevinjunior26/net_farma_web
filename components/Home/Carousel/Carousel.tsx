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
import {Button} from "@/components/ui/button";

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    function OnClick(){
        alert("Em Construção")
    }

    const banner = [
        {
            id: 1,
            desc: "100% Genuine Products",
            img: "https://res.cloudinary.com/dm6rzfggr/image/upload/v1733625000/mack_rmapky.png",
            title: "Obtenha 20% de desconto na máscara N95",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            button: "Compre Agora"
        },
        {
            id: 2,
            desc: "20% Desconto em Termomeetros",
            img: "https://res.cloudinary.com/dm6rzfggr/image/upload/v1733625000/termometro-digital-atual-removebg-preview_oarlgl.png",
            title: "Obtenha 20% de desconto em Termomeetros",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            button: "Compre Agora"
        },
        {
            id: 3,
            desc: "20% Desconto em Mascara de Segurança",
            img: "https://res.cloudinary.com/dm6rzfggr/image/upload/v1733625000/61bQoUFVMjL._SL1500_-removebg-preview_a9nv5z.png",
            title: "Obtenha 20% de desconto em Termomeetros",
            subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing",
            button: "Compre Agora"
        },
    ]
    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full h-auto -mt-4 overflow-hidden"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {banner.map(item => (
                    <CarouselItem key={item.id}>
                        <div className="p-1 w-full">
                            <Card className="border shadow-none">
                                <CardContent className="flex w-screen bg-[#F2F5F7]">
                                    <div className="w-1/2 min-h-screen flex flex-col items-center justify-center relative">
                                        <img className="absolute top-60 left-40" src="../../shape.svg" alt=""/>

                                        <div className="flex flex-col gap-y-10">
                                        <span className="bg-white rounded-3xl p-1 text-[#0A9A73] w-[200px] text-center animate-fadeInUpSmooth delay-[9000ms]">
                                            {item.desc}
                                        </span>
                                            <h1 className="w-[510px] h-[175px] flex-shrink-0 text-[#071C1F] font-josefin text-[60px] font-bold leading-none animate-fadeInUpSmooth delay-[12000ms]">
                                                {item.title}
                                            </h1>
                                            <p className="animate-fadeInUpSmooth delay-[15000ms]">
                                                {item.subtitle}
                                            </p>
                                            <Button
                                                onClick={OnClick}
                                                className="max-w-44 h-12 rounded bg-[#0A9A73] text-white hover:bg-[#087C5C] animate-fadeInUpSmooth delay-[18000ms] transition duration-300">
                                                {item.button}
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="w-1/2 flex items-center justify-center">
                                        <img src={item.img} alt=""/>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}