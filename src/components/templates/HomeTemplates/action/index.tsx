"use client";

import { Button } from "@/src/components/atoms/button";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import toast from "react-hot-toast";

interface CardProductActionsProps {
    isFavorited: boolean;
    showFavoriteIcon: boolean;
    onToggleFavorite: () => void;
    onZoomIn: () => void;
}

export function CardProductActions({
   isFavorited,
   showFavoriteIcon,
   onToggleFavorite,
   onZoomIn,
}: CardProductActionsProps) {
    const handleToggleFavorite = () => {
        onToggleFavorite();
        toast.success(isFavorited ? "Removido dos favoritos" : "Adicionado aos favoritos");
    };

    return (
        <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex gap-4">
            <Button className="bg-white w-[40px] h-[40px] text-black rounded-full p-3 hover:text-green-500">
                <ShoppingCart size={26} />
            </Button>
            <Button
                className="bg-white w-[40px] h-[40px] text-black rounded-full p-3 hover:text-green-500"
                onClick={onZoomIn}
            >
                <ZoomIn size={26} />
            </Button>
            {showFavoriteIcon && (
                <Button
                    onClick={handleToggleFavorite}
                    className={`bg-white w-[40px] h-[40px] rounded-full p-3 ${isFavorited ? 'text-red-500' : 'text-black'} hover:text-red-600`}
                >
                    <Heart size={20} />
                </Button>
            )}
        </div>
    );
}
