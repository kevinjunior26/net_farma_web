import {
    Menubar, MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {Facebook, Instagram, Twitter} from "lucide-react"

const menu = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Medicamentos",
        href: "/about",
        submenu:[
            {
                name: "Sem Receita",
                href: "/semreceita",
            },
            {
                name: "Com Receita",
                href: "/comreceita",
            },
            {
                name: "Listas Medicamentos",
                href: "/listasmedicamentos",
            },
            {
                name: "Minhas Listas",
                href: "/minhaslistas",
            }
        ]
    },
    {
        name: "Suplementos",
        href: "/suplementos",
        submenu:[
            {
                name: "Cosmeticos",
                href: "/cosmeticos",
            },
            {
                name: "Vitaminas",
                href: "/vitaminas",
            },
            {
                name: "Proteinas",
                href: "/proteinas",
            }
        ]
    },
    {
        name: "Medica Shop",
        href: "/medicashop",
    },
    {
        name: "Contacto",
        href: "/contacto",
    },
    {
        name: "Sobre Nós",
        href: "/sobrenetfarma",
    }
]

export function MenubarDemo() {
    return (
        <header className="grid fixed top-0 left-0 z-30 w-full p-2 gap-y-6">
            {/* Div de teste "olla" */}
            <div className="flex justify-center gap-x-[800px] col-span-full w-full text-center border-b-2">
                <p><span className="text-[#149572]">NeTFarma</span> <strong>uma solução para todos.</strong></p>

                <div className="flex space-x-2">
                    <Facebook size={20}/>
                    <Twitter size={20}/>
                    <Instagram size={20}/>

                    <p>PT</p>
                </div>
            </div>

            {/* Menubar */}
            <div className="flex justify-center">
                <Menubar>
                    <MenubarMenu>
                        <div className="flex items-center justify-between w-full px-4">
                            {/* Logo à esquerda */}
                            <div className="overflow-hidden w-[107px] flex-shrink-0 h-auto -mt-4">
                                <img src="../../logo.png" alt="Logo NetFarma" className="h-auto w-full"/>
                            </div>

                            {/* Menus e ícones à direita */}
                            <div className="flex items-center space-x-6">
                                {menu.map((item) => (
                                    <div key={item.name} className="flex items-center">
                                        <MenubarMenu>
                                            {item.submenu && item.submenu.length > 0 ? (
                                                <div>
                                                    <MenubarTrigger>{item.name}</MenubarTrigger>
                                                    <MenubarContent>
                                                        <ul>
                                                            {item.submenu.map((submenu) => (
                                                                <li key={submenu.name}>
                                                                    <MenubarItem>{submenu.name}</MenubarItem>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </MenubarContent>
                                                </div>
                                            ) : (
                                                <MenubarTrigger>{item.name}</MenubarTrigger>
                                            )}
                                        </MenubarMenu>
                                    </div>
                                ))}
                                {/* Ícones */}
                                <img src="../../profile.svg" alt="Profile" className="h-6 w-6"/>
                                <img src="../../car.svg" alt="Car" className="h-6 w-6"/>
                                <img src="../../menuBar.svg" alt="Menu Bar" className="h-12 w-12"/>
                            </div>
                        </div>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    )
}