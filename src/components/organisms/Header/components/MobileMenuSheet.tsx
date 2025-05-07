/*
"use client";

import * as React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../../atoms/sheet";
import { ScrollArea } from "../../../atoms/scroll-area";
import Link from "next/link";
import Image from "next/image";
import Icon from "./Icons";
import {IMenuGroup} from "@/src/services/getDataMenu/data";

interface MobileMenuSheetProps {
    menuGroups?: IMenuGroup[];
}

export function MobileMenuSheet({ menuGroups }: MobileMenuSheetProps) {
    const [open, setOpen] = React.useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="inline-flex items-center justify-center p-2 lg:hidden">
                <Icon name="menu" color="#0454A0" />
            </SheetTrigger>

            <SheetContent side="top" className="w-full p-0">
                <SheetHeader>
                    <SheetTitle className="text-lg font-bold sr-only">Menu</SheetTitle>
                    <Link href="/public" className="ml-4 mt-8" onClick={handleLinkClick}>
                        <Image
                            width={171}
                            height={48}
                            sizes="200px"
                            src="/logotipos.svg"
                            alt="logo"
                        />
                    </Link>
                </SheetHeader>

                <ScrollArea maxH="76vh" className="!h-auto pl-4 ">
                    {menuGroups?.map((group, idx) => (
                        <div key={idx} className="py-6">
                            {group.url ? (
                                <Link
                                    href={group.url}
                                    className="block py-2 text-base font-semibold text-main-black hover:text-primary"
                                    onClick={handleLinkClick}
                                >
                                    {group.name}
                                </Link>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <p className="py-2 text-base font-semibold text-main-black">
                                        {group.name}
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-6 w-full">
                                        {group.menus?.map((menu) => (
                                            <div key={menu.name}>
                                                <p className="font-medium text-main-black mb-4">
                                                    {menu.name}
                                                </p>
                                                <ul className="space-y-1 pb-6">
                                                    {menu.submenus.map((sub) => (
                                                        <li key={sub.name}>
                                                            <Link
                                                                href={sub.url}
                                                                className="block hover:text-primary"
                                                                onClick={handleLinkClick}
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}
*/
