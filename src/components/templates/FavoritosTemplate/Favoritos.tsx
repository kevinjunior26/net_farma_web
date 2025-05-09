'use client'

import {Headline} from "@/src/components/atoms/headline";
import {CardProduct} from "@/src/components/atoms/card_product";
import {CardProductProps} from "@/src/services/getAllProduct/type";
import {useFavorites} from "@/src/context/FavoritesContext";
import { NoItemsFound } from "../../molecules/NotItemsFound/NoItemsFound";

export function FavoritosTempalte({data} : { data: CardProductProps[]}){
    const { favorites } = useFavorites();

    const isFavorito = data.length > 0;

    const dataFav = favorites.map(fav => data.find(prod => prod.slug === fav));

    return (
        <div className="container mx-auto px-4 py-8 mt-32">
            <div className="mb-10">
                <Headline title="Meus Favoritos" description={'Acompanhe seus produtos favoritos em um só lugar. Veja os itens que você marcou como favoritos e acesse rapidamente os que mais te interessam.'}/>
            </div>

            {dataFav.length === 0 ? (
                <NoItemsFound title={'Nenhum produto favoritado.'}/>
            ) : (
                <>
                    <div className="flex justify-center p-5 gap-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
                            {dataFav.map((product) => (
                                product ? ( // Check if product is defined
                                    <CardProduct
                                        key={product.id}
                                        {...product}
                                        showFavoriteIcon={!isFavorito}
                                    />
                                ) : null
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}