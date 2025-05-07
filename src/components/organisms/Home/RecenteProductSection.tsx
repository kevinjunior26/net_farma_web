'use client'
import {CardProduct} from "@/src/components/atoms/card_product";
import {Headline} from "@/src/components/atoms/headline";
import {CardPromo} from "@/src/components/atoms/card-promo";
import {cardPromoRecente} from "@/src/services/getProdutPromo";
import {cardProductsRecent} from "@/src/services/getProductRecente";

export function RecenteProductSection() {

    return (
        <section className=" w-full flex flex-col justify-center py-16 gap-2 mb-24">
            <Headline title={'Produtos Mais Recentes'}/>

            <div className="flex justify-center p-5 gap-5 mt-10">
                <div className="grid grid-cols-1 gap-y-4">
                    {cardPromoRecente?.map(item => (
                        <CardPromo key={item?.id} data={item}/>
                    ))}
                </div>

                <div className="flex justify-center p-5 gap-5">
                    <div className="grid grid-cols-3 gap-x-5">
                        {cardProductsRecent.map((item) => (
                            <CardProduct key={item.id} {...item} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}