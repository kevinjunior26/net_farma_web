'use client'
import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Remove o cursor padrão da página
        document.body.style.cursor = 'none';

        const handleMouseMove = (event: MouseEvent) => {
            if (cursor) {
                const cursorX = event.clientX;
                const cursorY = event.clientY;

                cursor.style.left = `${cursorX}px`;
                cursor.style.top = `${cursorY}px`;
            }
        };

        const handleMouseEnter = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains('cursor-pointer')) {
                document.body.style.cursor = 'pointer'; // Mantém o cursor padrão de pointer
            } else {
                document.body.style.cursor = 'none'; // Garante que o cursor personalizado seja mostrado
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseEnter); // Verifica quando o mouse passa sobre um elemento

        // Limpa o listener ao desmontar o componente
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseEnter);
            document.body.style.cursor = 'auto'; // Restaura o cursor original
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed w-10 h-10 bg-no-repeat bg-center bg-contain pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
            style={{
                backgroundImage: "url('/img/cursor-removebg-preview.png')", // Caminho correto da imagem
            }}
        ></div>
    );
};

export default CustomCursor;
