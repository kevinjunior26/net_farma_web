import { Button } from "@/src/components/atoms/button";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import { CardProductProps } from "@/src/services/getAllProduct/type";
import { useFavorites } from "@/src/context/FavoritesContext";

export function CardProduct({
    id,
    imageSrc,
    title,
    price,
    oldPrice,
    showFavoriteIcon = true,
}: CardProductProps & { id: string }) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorited = favorites.includes(id);

    return (
        <div className="w-auto h-[390px] flex-shrink-0 overflow-hidden rounded relative group">
            <div className="bg-[#F2F5F7] h-[300px] overflow-hidden">
                <img
                    src={imageSrc}
                    alt=""
                    className="h-full w-auto object-cover"
                />
            </div>
            <div className="h-[200px] px-2 py-2 flex flex-col gap-y-2">
                <strong>{title}</strong>
                <p> {price} <span className="text-red-600 text-sm line-through">{oldPrice}</span></p>
            </div>

            <div
                className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex gap-4">
                <Button className="bg-white w-[40px] h-[40px] text-black rounded-full p-3 hover:text-green-500">
                    <ShoppingCart size={26} />
                </Button>
                <Button className="bg-white w-[40px] h-[40px] text-black rounded-full p-3 hover:text-green-500">
                    <ZoomIn size={26} />
                </Button>
                {showFavoriteIcon && (
                    <Button
                        onClick={() => toggleFavorite(id)}
                        className={`bg-white w-[40px] h-[40px] rounded-full p-3 ${isFavorited ? 'text-red-500' : 'text-black'} hover:text-red-600`}
                    >
                        <Heart size={20} />
                    </Button>
                )}

            </div>
        </div>
    )
}
