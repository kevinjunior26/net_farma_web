'use client'
import * as React from "react"

import { Card, CardContent } from "@/src/components/atoms/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/src/components/atoms/carousel"
import Autoplay from "embla-carousel-autoplay";

export function CarouselSize() {
    function Click(){
        alert("Em Construção")
    }
    return (
        <section className="flex flex-col justify-center items-center bg-white mb-24">
            <Carousel
                opts={{
                    loop: true,
                    containScroll: "keepSnaps", // Mantém os snaps ajustados
                    slidesToScroll: 1,          // Rola um slide por vez
                }}
                plugins={[Autoplay({delay: 3000, stopOnInteraction: false})]}
                className="w-full max-w-full flex justify-center items-center"
            >
                <div className="relative group w-full flex justify-center ">
                    <CarouselContent className="w-[1200px] flex z-10 p-2">
                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/patch.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/dental.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/capsula.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/stroller.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/toilet.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/patch.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/dental.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/capsula.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/stroller.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/5 lg:basis-1/5 -z-50">
                            <Card
                                className="cursor-pointer border-none shadow-none h-[100px] flex flex-col justify-center hover:text-[#0A9A73] transition duration-300 hover:scale-[90%]">
                                <CardContent onClick={Click}
                                             className="flex flex-col aspect-square items-center justify-center p-3">
                                    <div className=" p-3">
                                        <img
                                            className="w-[60px] h-[60px] cursor-pointer hover:fill-[#0A9A73] transition duration-300"
                                            src="../../carouselbar/toilet.svg"
                                            alt=""
                                            style={{fill: 'currentColor'}} // permite que o fill seja controlado pelo hover:text
                                        />
                                    </div>
                                    <span className="text-[12px] p-3">Produtos Dental</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                </div>
            </Carousel>
            <div className="flex justify-center items-center">
                <hr className="bg-[#E5E7E9] w-[1200px] h-[2px]"/>
            </div>
        </section>
    )
}
