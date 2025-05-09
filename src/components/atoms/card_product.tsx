'use client';
import { useState } from "react";
import { CardProductProps } from "@/src/services/getAllProduct/type";
import { useFavorites } from "@/src/context/FavoritesContext";
import {ImageModal} from "@/src/components/templates/Modal";
import {CardProductActions} from "@/src/components/templates/HomeTemplates/action";
import Link from "next/link";

export function CardProduct({
    slug,
    imageSrc,
    title,
    price,
    oldPrice,
    showFavoriteIcon = true,
}: CardProductProps & { slug: string }) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorited = favorites.includes(slug);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="w-auto h-[390px] flex-shrink-0 overflow-hidden rounded-2xl relative group">
                <div className="bg-[#F2F5F7] w-[300px] h-[300px] flex justify-center items-center overflow-hidden px-2">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="h-[250px] object-cover mix-blend-multiply"
                    />
                </div>
                <div className="h-[200px] px-2 py-2 flex flex-col gap-y-2">
                    <strong>{title}</strong>
                    <div className='flex justify-between'>
                        <p className='flex gap-2'>
                            {price}
                            <span className="text-red-600 text-sm line-through">
                            {oldPrice}
                        </span>
                        </p>
                        <Link href={`/products/${slug}`} className='underline cursor-pointer'>Ver mais...</Link>
                    </div>
                </div>

                <CardProductActions
                    isFavorited={isFavorited}
                    showFavoriteIcon={showFavoriteIcon}
                    onToggleFavorite={() => toggleFavorite(slug)}
                    onZoomIn={() => setIsModalOpen(true)}
                />

            </div>

            <ImageModal
                imageSrc={imageSrc}
                altText={title}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
