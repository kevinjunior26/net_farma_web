"use client";

import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import {SearchGlobalBtn} from "./components/SearchGlobalBtn";
import {ScrollArea} from "../../atoms/scroll-area";
import { IMenuData, ISiteInfo } from "@/src/types/InterfaceMenuData/type";
import {FavoritesIcon} from "@/src/components/organisms/Favorites/Favorites";

interface IHeaderContainerProps extends IMenuData, ISiteInfo {}

export function HeaderContainer({menuGroups, logo}: IHeaderContainerProps) {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [headerVisible, setHeaderVisible] = useState(true);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const prevScrollY = useRef(0);

    const handleMouseEnter = (idx: number) => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setOpenMenu(idx);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 50);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 50);

            if (currentScrollY === 0) {
                setHeaderVisible(true);
            } else if (currentScrollY < prevScrollY.current) {
                setHeaderVisible(true);
            } else if (currentScrollY > prevScrollY.current) {
                setHeaderVisible(false);
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    return (
        <motion.header
            initial={{height: 120, backgroundColor: "rgba(255,255,255,0)", y: 0}}
            animate={{
                height: scrolled ? 98 : 120,
                backgroundColor: scrolled || openMenu !== null ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
                y: headerVisible ? 0 : -120,
            }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
            }}
            className={`fixed top-0 left-0 w-full z-50`}
        >
            <div className="relative w-full h-full">
                <div className="container mx-auto flex items-center justify-between gap-6 h-full">
                    {logo?.url && (
                        <Link
                            href="/">
                            <Image width={100} height={30} src={logo?.url} alt="logo"/>
                        </Link>
                    )}

                    <nav className="hidden lg:flex">
                        <ul className="flex items-center space-x-6">
                            {menuGroups?.map((group, idx) => {
                                const isHovered = openMenu === idx;

                                const finalClass = isHovered && "text-primary"

                                return (
                                    <li
                                        key={idx}
                                        onMouseEnter={() => group?.menus && group?.menus?.length > 0 ? handleMouseEnter(idx) : {}}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {group?.url ? (
                                            <Link href={group.url}>
                                            <span
                                                className={`font-poppins font-normal hover:text-[#61C3A8] text-[16px] leading-[100%] tracking-[0.03em] text-center uppercase text-[#334155] ${finalClass}`}>
                                              {group.name}
                                            </span>
                                            </Link>
                                        ) : (
                                            <span
                                                className={`font-poppins font-normal hover:text-[#61C3A8] text-[16px] leading-[100%] tracking-[0.03em] text-center uppercase text-[#334155] ${finalClass}`}>
                                                {group.name}
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Deve manter porque é mobile*/}
                    <div className="flex items-center space-x-4">
                        <Link href={'/favoritos'} className='cursor-pointer'>
                            <FavoritesIcon/>
                        </Link>
                        <SearchGlobalBtn/>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {openMenu !== null &&
                        menuGroups[openMenu]?.menus &&
                        menuGroups[openMenu].menus.length > 0 && (
                            <motion.div
                                onMouseEnter={() => {
                                    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                                }}
                                onMouseLeave={handleMouseLeave}
                                initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: -10}}
                                transition={{
                                    type: "spring",
                                    damping: 25,
                                    stiffness: 200,
                                    duration: 0.2,
                                }}
                                className="absolute top-[80%] left-0 w-full bg-white shadow-[0_3px_8px_rgba(0,0,0,0.05)] z-50"
                                style={{marginTop: "-1px"}}
                            >
                                <ScrollArea maxH="76vh" className="!h-auto">
                                    <div
                                        className="container mx-auto grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16 px-8 pt-16 pb-24">
                                        {menuGroups[openMenu].menus.map((menu, mIdx) => (
                                            <div key={mIdx} className="w-full">
                                                <h3 className="mb-6 font-semibold text-[#0D1421] font-poppins text-[15px] uppercase">
                                                    {menu.name}
                                                </h3>
                                                <ul className="space-y-4">
                                                    {menu?.submenus?.map((sub, sIdx) => (
                                                        <li key={sIdx} onClick={() => setOpenMenu(null)}
                                                            className="flex flex-col gap-4">
                                                            <Link href={sub.url}>
                                                            <span className="block hover:text-[#61C3A8] transition font-poppins font-normal text-[15px] text-[#334155]">
                                                              {sub.name}
                                                            </span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </motion.div>
                        )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
