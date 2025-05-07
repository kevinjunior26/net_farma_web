import { Heart } from "lucide-react";
import { useFavorites } from "@/src/context/FavoritesContext";

export function FavoritesIcon() {
    const { favorites } = useFavorites();

    return (
        <div className="relative">
            <Heart size={25} strokeWidth={1.2}/>
            {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {favorites.length}
                </span>
            )}
        </div>
    );
}
