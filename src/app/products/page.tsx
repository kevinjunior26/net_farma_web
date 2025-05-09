import {getAllCardProducts} from "@/src/services/getAllProduct";
import {Headline} from "@/src/components/atoms/headline";
import {CardProduct} from "@/src/components/atoms/card_product";

export default async function Produtos() {
    const allData = await getAllCardProducts();
    return (
        <div className='mt-40 flex flex-col gap-y-10'>
            <Headline title="Todos os Produtos" align={'center'}/>

            <div className="flex justify-center p-5 gap-5">
                <div className="grid grid-cols-4 gap-x-5">
                    {allData.map((item) => (
                        <CardProduct key={item.slug} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}