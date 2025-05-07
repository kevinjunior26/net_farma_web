// ✅ data/menu.ts
import {IBanner, IMenuGroup, ISiteInfo} from "@/src/types/InterfaceMenuData/type";

export const menuGroups: IMenuGroup[] = [
    {
        name: "Início",
        url: "/",
    },
    {
        name: "Produtos",
        url: "/produtos",
        menus: [
            {
                name: "Medicamentos",
                submenus: [
                    { name: "Genéricos", url: "/produtos/medicamentos/genericos" },
                    { name: "Controlados", url: "/produtos/medicamentos/controlados" },
                    { name: "Fitoterápicos", url: "/produtos/medicamentos/fitoterapicos" },
                ],
            },
            {
                name: "Suplementos",
                submenus: [
                    { name: "Vitaminas", url: "/produtos/suplementos/vitaminas" },
                    { name: "Proteínas", url: "/produtos/suplementos/proteinas" },
                ],
            },
            {
                name: "Equipamentos Hospitalares",
                submenus: [
                    { name: "Aparelhos Médicos", url: "/produtos/equipamentos/aparelhos" },
                    { name: "Cadeiras e Macas", url: "/produtos/equipamentos/cadeiras-macas" },
                ],
            },
        ],
    },
    {
        name: "Serviços",
        url: "/servicos",
        menus: [
            {
                name: "Entrega Rápida",
                submenus: [
                    { name: "Farmácias", url: "/servicos/entrega/farmacias" },
                    { name: "Suprimentos Hospitalares", url: "/servicos/entrega/suprimentos" },
                ],
            },
            {
                name: "Assistência Técnica",
                submenus: [
                    { name: "Equipamentos Médicos", url: "/servicos/assistencia/equipamentos" },
                    { name: "Consultoria Farmacêutica", url: "/servicos/assistencia/consultoria" },
                ],
            },
        ],
    },
    {
        name: "Sobre Nós",
        url: "/sobre",
        menus: [
            {
                name: "Nossa História",
                submenus: [
                    { name: "Quem Somos", url: "/sobre/quem-somos" },
                    { name: "Nossa Missão", url: "/sobre/missao" },
                ],
            },
            {
                name: "Equipe",
                submenus: [
                    { name: "Farmacêuticos", url: "/sobre/equipe/farmaceuticos" },
                    { name: "Especialistas", url: "/sobre/equipe/especialistas" },
                ],
            },
        ],
    },
    {
        name: "Contato",
        url: "/contato",
    },
];

export const siteInfo: ISiteInfo = {
    logo: {
        url: "/logo.png",
    },
    site_name: "Example Site",
};

export const bannerData: IBanner[] = [
    {
        title: "Promoção Especial",
        description: "Aproveite a nossa super promoção e ganhe descontos exclusivos!",
        image: { url: "https://res.cloudinary.com/dm6rzfggr/image/upload/v1733625000/mack_rmapky.png", alt: "Promoção Especial" },
        button: { label: "Saiba mais", onClick: () => alert('Clique em Saiba Mais') },
        abrir_simulador: true,
    },
    {
        title: "Novidades da Temporada",
        description: "Confira as novidades incríveis que preparamos para você!",
        image: { url: "https://res.cloudinary.com/dm6rzfggr/image/upload/v1733625000/termometro-digital-atual-removebg-preview_oarlgl.png", alt: "Novidades da Temporada" },
        button: { label: "Veja Agora", onClick: () => alert('Veja Agora') },
    },
    {
        title: "Lançamento Exclusivo",
        description: "Descubra o nosso lançamento exclusivo e aproveite as condições especiais!",
        image: { url: "https://res.cloudinary.com/dm6rzfggr/image/upload/v1733625000/61bQoUFVMjL._SL1500_-removebg-preview_a9nv5z.png", alt: "Lançamento Exclusivo" },
        button: { label: "Confira", onClick: () => alert('Confira') },
    }
];
