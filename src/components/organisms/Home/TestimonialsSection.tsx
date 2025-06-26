'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Maria Silva",
        role: "Enfermeira",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Uso essas máscaras no hospital há 6 meses. A qualidade é excepcional e o conforto durante longas jornadas é incomparável. Recomendo para todos os profissionais de saúde."
    },
    {
        id: 2,
        name: "João Santos",
        role: "Pai de Família",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Comprei para toda a família. Meus filhos usam sem reclamar e eu tenho a tranquilidade de saber que estão protegidos. Entrega foi super rápida!"
    },
    {
        id: 3,
        name: "Ana Costa",
        role: "Professora",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Trabalho em sala de aula e preciso de proteção confiável. Essas máscaras me dão segurança total. O ajuste é perfeito e não machuca as orelhas."
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        O que nossos <span className="text-transparent bg-clip-text bg-health-gradient">clientes</span> dizem
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Milhares de pessoas confiam em nossas máscaras para sua proteção diária. 
                        Veja alguns depoimentos reais de quem já experimentou.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full relative">
                                {/* Quote icon */}
                                <div className="absolute -top-4 left-8">
                                    <div className="w-8 h-8 bg-health-gradient rounded-full flex items-center justify-center">
                                        <Quote className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-4 pt-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Testimonial text */}
                                <p className="text-gray-700 leading-relaxed mb-6 italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Author info */}
                                <div className="flex items-center">
                                    <img 
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust indicators */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
                        <div className="flex items-center justify-center space-x-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                                <div className="text-sm text-gray-600">Avaliação Média</div>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">2.847</div>
                                <div className="text-sm text-gray-600">Avaliações</div>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">98%</div>
                                <div className="text-sm text-gray-600">Recomendariam</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}