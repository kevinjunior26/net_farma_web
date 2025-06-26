'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/src/components/atoms/button';
import { Shield, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                            <Shield className="w-4 h-4 mr-2" />
                            Proteção Garantida
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Proteja sua família hoje mesmo
                        </h2>

                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Não espere mais para garantir a segurança de quem você ama. 
                            Nossas máscaras KN95 oferecem a proteção que você precisa com o conforto que merece.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link href="/products">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    Comprar Agora
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Falar com Especialista
                            </Button>
                        </div>

                        {/* Contact info */}
                        <div className="flex flex-col sm:flex-row gap-6 text-blue-100">
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-2" />
                                <span>(+238) 5978254</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-2" />
                                <span>netfarma.cv@.nf</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right content - Benefits */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {[
                            {
                                title: "Entrega Grátis",
                                description: "Para compras acima de 5.000$ em todas as ilhas de Cabo Verde",
                                icon: "🚚"
                            },
                            {
                                title: "Garantia de Qualidade",
                                description: "30 dias para troca ou devolução sem complicações",
                                icon: "✅"
                            },
                            {
                                title: "Suporte 24/7",
                                description: "Atendimento especializado sempre que precisar",
                                icon: "💬"
                            },
                            {
                                title: "Pagamento Seguro",
                                description: "Pague com cartão, depósito ou transferência bancária",
                                icon: "🔒"
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                            >
                                <div className="text-2xl">{benefit.icon}</div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-blue-100">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}