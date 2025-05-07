import {CardPromo} from "@/src/components/atoms/card-promo";
import {cardPromoData} from "@/src/services/getProdutPromo";

export function FeaturedItems() {
    return (
        <section className="flex gap-5 justify-center mb-24">
            {cardPromoData?.map(item => (
                <CardPromo key={item?.id} data={item}/>
            ))}
        </section>
    )
}