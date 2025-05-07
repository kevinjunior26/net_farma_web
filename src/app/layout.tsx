import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { Header } from "../components/templates/HeaderTemplate/HeaderTemplates";
import {FavoritesProvider} from "@/src/context/FavoritesContext";

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
        <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.className}  antialiased`}>
        <Suspense
            fallback={
                <div className="flex flex-col items-center justify-center h-screen space-y-4">
                    <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"/>
                </div>
            }
        >
            <FavoritesProvider>
                <Header/>
                <main>{children}</main>
            </FavoritesProvider>

        </Suspense>
        </body>
        </html>
    );
}
