'use client'
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type FavoritesContextType = {
    favorites: string[];
    toggleFavorite: (slug: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>([]);

    // Carrega favoritos do localStorage ao iniciar
    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) setFavorites(JSON.parse(stored));
    }, []);

    // Salva no localStorage sempre que favoritos mudarem
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (slug: string) => {
        setFavorites((prev) =>
            prev.includes(slug) ? prev.filter((fid) => fid !== slug) : [...prev, slug]
        );
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error("useFavorites must be used within FavoritesProvider");
    return context;
}
