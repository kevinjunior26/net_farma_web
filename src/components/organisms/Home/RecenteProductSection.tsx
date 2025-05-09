'use client'

import { CardProduct } from "@/src/components/atoms/card_product";
import { Headline } from "@/src/components/atoms/headline";
import { useEffect, useState } from "react";
import { CardProductProps } from "@/src/services/getAllProduct/type";
import { getAllCardProducts } from "@/src/services/getAllProduct";
import {PaginationComponent} from "@/src/components/atoms/PaginationComponent";

function filterRecentProducts(products: CardProductProps[], days: number = 17): CardProductProps[] {
    const dateLimit = new Date();
    dateLimit.setDate(dateLimit.getDate() - days); // Calcula a data limite

    return products.filter(product => {
        // Garantir que a data do produto não seja undefined
        const productDate = product.date ? new Date(product.date) : new Date(0); // Se `product.date` for undefined, usa a data "zero"
        return productDate >= dateLimit;
    });
}


export function RecenteProductSection() {
    const [data, setData] = useState<CardProductProps[]>([]);

    const registerPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalCountOfRegisters = data.length;
    const startIndex = (currentPage - 1) * registerPerPage;
    const endIndex = startIndex + registerPerPage;

    const currentItems = data.slice(startIndex, endIndex);

    useEffect(() => {
        async function fetchData() {
            const allData = await getAllCardProducts(); // Obtém todos os produtos
            const recentData = filterRecentProducts(allData); // Filtra os produtos dos últimos 7 dias
            setData(recentData); // Atualiza o estado com os produtos recentes
        }

        fetchData();
    }, []);

    if (!data) {
        return (
            <section className="w-full flex justify-center py-16">
                <p className="text-gray-500">Carregando produtos recentes...</p>
            </section>
        );
    }

    return (
        <section className="w-full flex flex-col justify-center py-16 gap-2 mb-24">
            <Headline
                title="Produtos Mais Recentes"
                description="Descubra as últimas novidades adicionadas ao nosso catálogo. Produtos fresquinhos esperando por você!"
            />

            <div className="flex flex-col justify-center p-5 gap-5 mt-10">
                <div className="flex justify-center p-5 gap-5">
                    <div className="grid grid-cols-4 gap-x-5">
                        {currentItems.map((item) => (
                            <CardProduct key={item.slug} {...item} />
                        ))}
                    </div>
                </div>

                <PaginationComponent
                    totalCountOfRegisters={totalCountOfRegisters}
                    registerPerPage={registerPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </section>
    );
}
