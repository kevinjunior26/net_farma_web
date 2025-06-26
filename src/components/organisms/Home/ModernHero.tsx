'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/src/components/atoms/button';
import { Shield, Star, Truck, Award } from 'lucide-react';
import Link from 'next/link';
import Headline from "@/src/components/molecules/Headline/Headline";

export function ModernHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-soft"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6"
                        >
                            <Shield className="w-4 h-4 mr-2" />
                            Proteção Certificada N95
                        </motion.div>

                        <Headline
                            title={'Máscaras KN95 de Alta Qualidade'}
                            description={'Proteja-se e sua família com nossas máscaras KN95 certificadas. Filtração superior de 95% de partículas, conforto garantido e entrega rápida.'}
                            highlights={["KN95"]}
                            size={'lg'}
                        />

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 mb-12"
                        >
                            <Link href="/products">
                                <Button size="lg" className="bg-health-gradient hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    Comprar Agora
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300">
                                Saiba Mais
                            </Button>
                        </motion.div>

                        {/* Trust indicators */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                                    <Shield className="w-6 h-6 text-emerald-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Certificado</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                    <Star className="w-6 h-6 text-blue-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">5 Estrelas</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                                    <Truck className="w-6 h-6 text-purple-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Entrega Rápida</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                                    <Award className="w-6 h-6 text-yellow-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Qualidade</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right content - Product image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Background circle */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full transform rotate-6 scale-110 opacity-20"></div>
                            
                            {/* Product image container */}
                            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                                <img 
                                    src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Máscara KN95 de alta qualidade"
                                    className="w-full h-auto rounded-2xl"
                                />
                                
                                {/* Floating badges */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 0.5 }}
                                    className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                                >
                                    95% Filtração
                                </motion.div>
                                
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, duration: 0.5 }}
                                    className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                                >
                                    Certificado N95
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}