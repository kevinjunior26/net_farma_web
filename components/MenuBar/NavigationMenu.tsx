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
        name: "Sobre NetFarma",
        href: "/sobrenetfarma",
    }
]

export function MenubarDemo() {
    return (
       <header className="grid justify-center w-full py-4">
           <Menubar>
               <MenubarMenu>
                   <div className=" w-[107px] h-[76px] flex-shrink-0 -mt-8 bg-white">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src="../../logo.png" alt="Logo NetFarma"/>
                   </div>
                   <div className="flex justify-end col-span-10 px-10">
                       <Menubar>
                           {menu.map((item) => (
                               <MenubarMenu key={item.name}>
                                   {item.submenu && item.submenu.length > 0 ? (
                                       <div>
                                           <MenubarTrigger>
                                               {item.name}
                                           </MenubarTrigger>
                                           <MenubarContent>
                                               <ul>
                                                   {item.submenu.map((submenu) => (
                                                       <li key={submenu.name}>
                                                           <MenubarItem>
                                                               {submenu.name}
                                                           </MenubarItem>
                                                       </li>
                                                   ))}
                                               </ul>
                                           </MenubarContent>
                                       </div>
                                   ) : (
                                       <MenubarTrigger>
                                           {item.name}
                                       </MenubarTrigger>
                                   )}
                               </MenubarMenu>
                           ))}
                       </Menubar>
                   </div>
               </MenubarMenu>
           </Menubar>
       </header>
    )
}