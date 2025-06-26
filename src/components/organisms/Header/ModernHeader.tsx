'use client'
import React, {useState, useEffect, useRef} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/src/components/atoms/button';
import { Separator } from '@/src/components/atoms/separator';
import {ShoppingCart, Search, Menu, X, Phone, CircleUser} from 'lucide-react';
import { FavoritesIcon } from '@/src/components/organisms/Favorites/Favorites';

export function ModernHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Início', href: '/' },
        { name: 'Produtos', href: '/products' },
        { name: 'Sobre', href: '/sobre' },
        { name: 'Contato', href: '/contato' }
    ];

    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleToggle = () => setShowInput((prev) => !prev);

    // Foca o input ao abrir
    useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput]);

    // Fecha ao clicar fora
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
                setShowInput(false);
            }
        };
        if (showInput) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showInput]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                           {/* <span className="text-white font-bold text-lg">NF</span>*/}
                            <img src="/logo.png" alt=""/>
                        </div>
                        <span className="text-xl font-semibold text-gray-900">NetFarma</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side actions */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <button
                            onClick={handleToggle}
                            className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            <Search className="w-5 h-5"/>
                        </button>

                        <AnimatePresence>
                            {showInput && (
                                <motion.input
                                    key="search-input"
                                    ref={inputRef}
                                    initial={{width: 0, opacity: 0, x: -20}}
                                    animate={{width: 200, opacity: 1, x: 0}}
                                    exit={{width: 0, opacity: 0, x: -20}}
                                    transition={{duration: 0.3, ease: 'easeInOut'}}
                                    type="text"
                                    placeholder="Buscar..."
                                    className="py-1 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            )}
                        </AnimatePresence>

                        {/* Favorites */}
                        <Link href="/favoritos"
                              className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                            <FavoritesIcon/>
                        </Link>

                        {/* Cart */}
                        <button
                            className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative">
                            <ShoppingCart className="w-5 h-5"/>
                            <span
                                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>


                        {/* User */}
                        <button
                            className="p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 relative border-l-[1px] h-[25px] flex items-center">
                            <CircleUser className="w-6 h-6" strokeWidth={1}/>
                        </button>

                        {/* Contact button - Desktop */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4"/>
                                <span>(+238) 5978254</span>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        className="lg:hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-200">
                                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                                    <Phone className="w-4 h-4" />
                                    <span>(11) 9999-9999</span>
                                </div>
                                <Button className="w-full bg-health-gradient hover:opacity-90 text-white py-3 rounded-lg">
                                    Comprar Agora
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}