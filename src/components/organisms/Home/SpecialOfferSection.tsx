/*
"use client";

import { CardProduct } from "@/src/components/atoms/card_product";
import { Headline } from "@/src/components/atoms/headline";
import { PaginationComponent } from "@/src/components/atoms/PaginationComponent";
import { useEffect, useState } from "react";
import { getAllCardProducts } from "@/src/services/getAllProduct";
import { CardProductProps } from "@/src/services/getAllProduct/type";

export function  SpecialOfferSection() {
    const [data, setData] = useState<CardProductProps[]>([]);

    const registerPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalCountOfRegisters = data.length;
    const startIndex = (currentPage - 1) * registerPerPage;
    const endIndex = startIndex + registerPerPage;

    const currentItems = data.slice(startIndex, endIndex);

    useEffect(() => {
        async function fetchData() {
            const allData = await getAllCardProducts();
            setData(allData);
        }

        fetchData();
    }, []);

    return (
        <section className="flex flex-col justify-center gap-5 mb-24">
            <Headline
                title="Produtos em destaque"
                description="Confira nossa seleção exclusiva de produtos com ofertas especiais. Aproveite condições imperdíveis por tempo limitado!"
            />

            <div className="flex justify-center p-5 gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
                    {currentItems.map((item) => (
                        <CardProduct key={item.id} {...item} />
                    ))}
                </div>
            </div>

            <PaginationComponent
                totalCountOfRegisters={totalCountOfRegisters}
                registerPerPage={registerPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </section>
    );
}
*/
"use client";

import { CardProduct } from "@/src/components/atoms/card_product";
import { Headline } from "@/src/components/atoms/headline";
import { useEffect, useState } from "react";
import { getAllCardProducts } from "@/src/services/getAllProduct";
import { CardProductProps } from "@/src/services/getAllProduct/type";
import Link from "next/link";

export function SpecialOfferSection() {
    const [data, setData] = useState<CardProductProps[]>([]);

    useEffect(() => {
        async function fetchData() {
            const allData = await getAllCardProducts();
            setData(allData);
        }

        fetchData();
    }, []);

    // Apenas os 12 primeiros produtos
    const visibleItems = data.slice(0, 12);

    return (
        <section className="flex flex-col justify-center gap-5 mb-24">
            <Headline
                title="Produtos em destaque"
                description="Confira nossa seleção exclusiva de produtos com ofertas especiais. Aproveite condições imperdíveis por tempo limitado!"
            />

            <div className="flex justify-center p-5 gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
                    {visibleItems.map((item) => (
                        <CardProduct key={item.id} {...item} />
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <Link href="/products">
                    <button className="bg-[#2370BB] text-white px-6 py-2 rounded-xl hover:opacity-90 transition">
                        Ver todos
                    </button>
                </Link>
            </div>
        </section>
    );
}
