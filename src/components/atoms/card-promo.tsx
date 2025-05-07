import {Button} from "@/src/components/atoms/button";
import {CircleChevronRight} from "lucide-react";
import {ICardPromo} from "@/src/services/getProdutPromo/type";

export function CardPromo({ data } : {data: ICardPromo}){
    function OnClick() {
        alert("Em Construção")
    }

    return (
        <div className=''>
                <div key={data?.id} className="bg-[#DCEDFD] w-[370px] h-[440px] flex flex-col p-4 overflow-hidden rounded">
                    <div className="flex flex-col mb-12">
                        <span className="text-xs text-[#0A9A73] font-semiboldbold">{data?.badge}</span>
                        <h1 className="text-2xl font-semiboldbold">{data?.title}</h1>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-y-3'>

                        <div className="bg-blue-100 bg-blend-multiply transition duration-300 hover:scale-[120%] mb-10">
                            <img
                                src={data?.imageUrl}
                                className="mix-blend-multiply w-[200px] h-[200px]"
                            />
                        </div>

                        <div className='flex justify-center'>
                            <Button onClick={OnClick} variant={"isSimulador"}>
                                <span>Comprar Agora</span>
                                <CircleChevronRight cursor={"pointer"} size={20}/>
                            </Button>
                        </div>
                    </div>
                </div>
        </div>
    )
}