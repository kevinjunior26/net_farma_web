import type { Metadata } from "next";
import "./globals.css";
import { MenubarDemo } from "@/components/MenuBar/NavigationMenu";
import CustomCursorBanner from "@/components/CustomCursorBanner/CustomCursorBanner";

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
        <html lang="en">
        <body className="bg-white">
        <CustomCursorBanner />
        {/* Menubar será fixo em todas as páginas */}
        <MenubarDemo />

        {/* Conteúdo das páginas será renderizado aqui */}
        <main>{children}</main>
        </body>
        </html>
    );
}
