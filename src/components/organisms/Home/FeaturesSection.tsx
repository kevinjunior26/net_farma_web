'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wind, Clock, Heart, CheckCircle, Users } from 'lucide-react';
import Headline from "@/src/components/molecules/Headline/Headline";

// Define as cores permitidas
type Color = 'emerald' | 'blue' | 'purple' | 'pink' | 'green' | 'orange';

// Tipagem do array de features
const features: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    color: Color;
}[] = [
    {
        icon: Shield,
        title: "Proteção Máxima",
        description: "Filtração de 95% de partículas aéreas, incluindo vírus e bactérias",
        color: "emerald"
    },
    {
        icon: Wind,
        title: "Respirabilidade",
        description: "Design ergonômico que permite respiração confortável por horas",
        color: "blue"
    },
    {
        icon: Clock,
        title: "Durabilidade",
        description: "Máscaras reutilizáveis com até 40 horas de uso efetivo",
        color: "purple"
    },
    {
        icon: Heart,
        title: "Conforto",
        description: "Material hipoalergênico e ajuste perfeito ao rosto",
        color: "pink"
    },
    {
        icon: CheckCircle,
        title: "Certificação",
        description: "Aprovado por órgãos reguladores internacionais",
        color: "green"
    },
    {
        icon: Users,
        title: "Para Toda Família",
        description: "Tamanhos disponíveis para adultos e crianças",
        color: "orange"
    }
];

// Define os estilos por cor com tipagem segura
const colorClasses: Record<Color, string> = {
    emerald: "bg-emerald-100 text-emerald-600",
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600"
};

export function FeaturesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Headline
                    title={'Por que escolher nossas máscaras KN95'}
                    description={'Desenvolvidas com tecnologia avançada para oferecer a melhor proteção sem comprometer o conforto e a praticidade do dia a dia.'}
                    highlights={["máscaras KN95"]}
                    size={'md'}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
                                <div className={`w-16 h-16 rounded-2xl ${colorClasses[feature.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
