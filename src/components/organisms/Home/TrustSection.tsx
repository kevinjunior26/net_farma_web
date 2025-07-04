'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Truck } from 'lucide-react';
import Headline from "@/src/components/molecules/Headline/Headline";

const stats = [
    {
        icon: Users,
        number: "50.000+",
        label: "Clientes Satisfeitos",
        description: "Famílias protegidas em toda a nossa ilha"
    },
    {
        icon: Shield,
        number: "95%",
        label: "Eficiência Comprovada",
        description: "Filtração de partículas certificada"
    },
    {
        icon: Award,
        number: "5 Anos",
        label: "No Mercado",
        description: "Experiência em proteção respiratória"
    },
    {
        icon: Truck,
        number: "24h",
        label: "Entrega Expressa",
        description: "Para capitais e regiões metropolitanas"
    }
];

const certifications = [
    {
        name: "ANVISA",
        logo: "https://via.placeholder.com/120x60/10b981/ffffff?text=ANVISA",
        description: "Aprovado pela Agência Nacional de Vigilância Sanitária"
    },
    {
        name: "INMETRO",
        logo: "https://via.placeholder.com/120x60/3b82f6/ffffff?text=INMETRO",
        description: "Certificado pelo Instituto Nacional de Metrologia"
    },
    {
        name: "ISO 9001",
        logo: "https://via.placeholder.com/120x60/8b5cf6/ffffff?text=ISO+9001",
        description: "Sistema de gestão da qualidade certificado"
    },
    {
        name: "CE",
        logo: "https://via.placeholder.com/120x60/f59e0b/ffffff?text=CE",
        description: "Conformidade Europeia para dispositivos médicos"
    }
];

export function TrustSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Headline
                    title={'Números que Inspiram Confiança'}
                    description={' Nossa trajetória é marcada pela excelência e pela confiança de milhares de clientes.'}
                    highlights={["Inspiram Confiança"]}
                    size={'md'}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 bg-health-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="w-8 h-8 text-blue-500" />
                                </div>
                                
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {stat.number}
                                </div>
                                
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {stat.label}
                                </h3>
                                
                                <p className="text-gray-600 text-sm">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Section */}
                <Headline
                    title={'Certificações e Aprovações'}
                    description={'Nossos produtos atendem aos mais rigorosos padrões de qualidade e segurança.'}
                    highlights={["Aprovações"]}
                    size={'md'}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                                <img 
                                    src={cert.logo}
                                    alt={cert.name}
                                    className="mx-auto mb-4 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                                
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    {cert.name}
                                </h4>
                                
                                <p className="text-sm text-gray-600">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}