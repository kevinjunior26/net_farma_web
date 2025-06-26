"use client";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { ModernHeader } from "../components/organisms/Header/ModernHeader";
import { ModernFooter } from "../components/organisms/Footer/ModernFooter";
import {FavoritesProvider} from "@/src/context/FavoritesContext";
import {Toaster} from "react-hot-toast";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: '--font-poppins'
});

export default function RootLayout({
    children,
   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <head>
            <title>KN95 Premium - Máscaras de Proteção de Alta Qualidade</title>
            <meta name="description" content="Máscaras KN95 certificadas com 95% de filtração. Proteção superior, conforto garantido e entrega rápida para toda família." />
            <link rel="icon" href="/logo.png" />
        </head>
        <body className={`${poppins.className} antialiased`}>
        <Suspense
            fallback={
                <div className="flex flex-col items-center justify-center h-screen space-y-4">
                    <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500"/>
                </div>
            }
        >
            <FavoritesProvider>
                <ModernHeader/>
                <main className="min-h-screen">{children}</main>
                <ModernFooter/>
                <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
            </FavoritesProvider>
        </Suspense>
        </body>
        </html>
    );
}