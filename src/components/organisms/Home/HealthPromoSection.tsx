import {Button} from "@/src/components/atoms/button";
import {CircleChevronRight} from "lucide-react";
import {Headline} from "@/src/components/atoms/headline";

export function HealthPromoSection() {
    return (
        <section className="w-full flex justify-center py-16 bg-[#F2F5F7] mb-24">
            <div className="flex container">
                <div className=" flex justify-center w-[50%]">
                    <img src="../../img/maskcovid.png" alt=""/>
                </div>

                <div className="w-[50%]">
                    <Headline
                        align={'left'}
                        title={'Máscaras de segurança de grau A. À venda. Apresse-se!'}
                        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'}
                    />


                    <ul className="py-14 grid grid-cols-2 gap-y-5">
                        <li className="text-[#071C1F] text-[15px] font-bold leading-normal flex gap-x-4 items-center font-[Josefin Sans]">
                            <img src="../../iconengrnagem.svg" alt=""/> Carvão Ativado
                        </li>
                        <li className="text-[#071C1F] text-[15px] font-bold leading-normal flex gap-x-4 items-center font-[Josefin Sans]">
                            <img src="../../icon.svg" alt=""/> Valvula de respiração
                        </li>
                        <li className="text-[#071C1F] text-[15px] font-bold leading-normal flex gap-x-4 items-center font-[Josefin Sans]">
                            <img src="../../icon1.svg" alt=""/>Filtragem de 6 camadas
                        </li>
                        <li className="text-[#071C1F] text-[15px] font-bold leading-normal flex gap-x-4 items-center font-[Josefin Sans]">
                            <img src="../../icon3.svg" alt=""/> Relavagens e reutilizaveis
                        </li>
                    </ul>

                    <Button className="bg-[#0A9A73]">
                        Ver Produtos <CircleChevronRight size={24} className="bg-[#0A9A73] text-white rounded-full"/>
                    </Button>
                </div>
            </div>
        </section>
    )
}