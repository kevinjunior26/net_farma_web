import {
    Menubar, MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

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
        <header className="grid justify-center w-full py-4">
            <Menubar>
                <MenubarMenu>
                    <div className="flex items-center justify-between w-full">
                        {/* Logo à esquerda */}
                        <div className="overflow-hidden w-[107px] flex-shrink-0 h-auto -mt-4">
                            <img src="../../logo.png" alt="Logo NetFarma" className="h-auto w-full"/>
                        </div>

                        {/* Menus à direita */}
                        <div className="flex space-x-3">
                            {menu.map((item) => (
                                <div key={item.name}>
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
                                <img src="../../profile.svg" alt=""/>
                                <img src="../../car.svg" alt=""/>
                                <img src="../../menuBar.svg" alt=""/>
                        </div>
                    </div>
                </MenubarMenu>
            </Menubar>
        </header>
    )
}