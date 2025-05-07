import {Button} from "@/src/components/atoms/button";
import {Heart, ShoppingCart, ZoomIn} from "lucide-react";

export function CardProduct() {
    return (
        <div className="w-auto h-[390px] flex-shrink-0 overflow-hidden rounded relative group">
            <div className="bg-[#F2F5F7] h-[300px] overflow-hidden">
                <img
                    src="../../img/2.png"
                    alt=""
                    className="h-full w-auto object-cover"
                />
            </div>
            <div className="h-[200px] px-2 py-2 flex flex-col gap-y-2">
                <strong>Antiseptic Spray</strong>
                <p> $38.00 <span className="text-red-600 text-sm line-through">$45.00</span></p>
            </div>

            {/* Ícones que aparecem no hover com transição suave */}
            <div
                className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex gap-4">
                <Button className="bg-white text-black rounded-full p-3 hover:text-green-500">
                    <ShoppingCart size={36}/>
                </Button>
                <Button className="bg-white text-black rounded-full p-3 hover:text-green-500">
                    <ZoomIn size={36}/>
                </Button>
                <Button className="bg-white text-black rounded-full p-3 hover:text-green-500">
                    <Heart size={36}/>
                </Button>
            </div>
        </div>
    )
}