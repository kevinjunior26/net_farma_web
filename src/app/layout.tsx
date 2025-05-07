import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import {HeaderTemplates} from "@/src/components/templates/HeaderTemplate/HeaderTemplates";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: '--font-poppins'
});

// Metadata da página
export const metadata: Metadata = {
    title: "NetFarma",
    description: "Farmácia online com soluções para todos",
    icons: {
        icon: '../../logo.png',
    },
};

// Layout raiz para envolver todas as páginas
export default function RootLayout({
    children,
   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={poppins.variable}>
        <body className={`${poppins.className}`}>
        {/* Menubar será fixo em todas as páginas */}
        {/*<MenubarDemo />*/}
        <HeaderTemplates/>
        <main>{children}</main>
        </body>
        </html>
    );
}
