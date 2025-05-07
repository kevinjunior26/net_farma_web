export function PartnerInfoSectionComponent() {
    return (
        <section className="container w-full flex justify-center py-16 mb-24">
            <div className="flex container">
                <div className=" flex justify-center w-[50%]">
                    <img src="../../phat.svg" alt=""/>
                </div>

                <div className="w-[50%]">
                    <h1 className="text-[#071C1F] font-[Josefin Sans] text-[44px] font-bold leading-normal">
                        Seu parceiro confiável em produtos médicos e cosméticos.
                    </h1>
                    <p className="w-[552px] h-[50px] flex-shrink-0 text-[#6D7580] font-[Josefin Sans] text-[16px] font-normal leading-normal py-5">
                        Não importa o quanto sabe sobre um determinado profissional de saúde da área médica, tem sempre
                        de
                        pensar sobre o que é?
                    </p>

                    <ul className="py-10 flex flex-col gap-y-5">
                        <li className="text-[#071C1F] text-[15px] font-bold leading-normal flex gap-x-4 font-[Josefin Sans]">
                            <img src="../../check.svg" alt=""/> Melhor segurança para a privacidade e informação do paciente.
                        </li>
                        <li className="text-[#071C1F] text-[15px] font-bold leading-normal flex gap-x-4 font-[Josefin Sans]">
                            <img src="../../check.svg" alt=""/> Mais produtos a preços mais baixos.
                        </li>
                        <li className="text-[#071C1F] text-[15px] font-bold leading-normal flex gap-x-4 font-[Josefin Sans]">
                            <img src="../../check.svg" alt=""/> Conectar os clientes com o poder do comércio eletrónico.
                        </li>
                    </ul>

                    <div className="flex justify-center border-t-2 p-2">
                        <div className="w-[50%] p-2 border-r-2">
                            <strong>NetFarma</strong>
                            <p className="font-light">Plataforma de Prestação de Serviço em área de Saude</p>
                        </div>

                        <div className="w-[50%]">
                            <div className="flex p-4 flex-shrink-0 gap-x-2">
                                <img src="../../phone.svg" alt=""/>
                                <div className="flex flex-col overflow-hidden w-[153px] h-[50px]">
                                    <p>Suporte</p>
                                    <strong>+2385978254</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}