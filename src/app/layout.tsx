import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { Header } from "../components/templates/HeaderTemplate/HeaderTemplates";
import {FavoritesProvider} from "@/src/context/FavoritesContext";
import {Toaster} from "react-hot-toast";

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
                <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
            </FavoritesProvider>
        </Suspense>
        </body>
        </html>
    );
}
