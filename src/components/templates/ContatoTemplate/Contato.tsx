'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/src/components/atoms/button';
import { Input } from '@/src/components/atoms/input';
import Headline from "@/src/components/molecules/Headline/Headline";
import toast from 'react-hot-toast';

const contactInfo = [
    {
        icon: Phone,
        title: "Telefone",
        details: "(+238) 5978254",
        description: "Ligue para nós durante o horário comercial"
    },
    {
        icon: Mail,
        title: "Email",
        details: "netfarma.cv@.nf",
        description: "Envie-nos um email a qualquer momento"
    },
    {
        icon: MapPin,
        title: "Endereço",
        details: "Praia, Cabo Verde",
        description: "Visite nossa loja principal"
    },
    {
        icon: Clock,
        title: "Horário",
        details: "Seg - Sex: 8h às 18h",
        description: "Sáb: 8h às 14h"
    }
];

const islands = [
    "Santiago", "São Vicente", "Santo Antão", "Fogo", "Maio", 
    "Boavista", "Sal", "São Nicolau", "Brava"
];

interface FormData {
    nome: string;
    email: string;
    telefone: string;
    ilha: string;
    assunto: string;
    mensagem: string;
}

export function ContatoTemplate() {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        telefone: '',
        ilha: '',
        assunto: '',
        mensagem: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validação básica
        if (!formData.nome || !formData.email || !formData.mensagem) {
            toast.error('Por favor, preencha todos os campos obrigatórios.');
            setIsSubmitting(false);
            return;
        }

        // Simular envio do formulário
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            
            // Limpar formulário
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                ilha: '',
                assunto: '',
                mensagem: ''
            });
        } catch (error) {
            toast.error('Erro ao enviar mensagem. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-overlay filter blur-xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Entre em Contato
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Estamos aqui para ajudar com suas necessidades de saúde
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => (
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
                                        <info.icon className="w-8 h-8 text-blue-500" />
                                    </div>
                                    
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {info.title}
                                    </h3>
                                    
                                    <p className="text-xl font-bold text-blue-600 mb-2">
                                        {info.details}
                                    </p>
                                    
                                    <p className="text-gray-600 text-sm">
                                        {info.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-3xl shadow-xl p-8">
                                <Headline
                                    title={'Envie sua Mensagem'}
                                    description={'Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.'}
                                    highlights={["Mensagem"]}
                                    size={'md'}
                                    align={'left'}
                                />

                                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nome Completo *
                                            </label>
                                            <Input
                                                type="text"
                                                id="nome"
                                                name="nome"
                                                value={formData.nome}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Seu nome completo"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="seu@email.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Telefone
                                            </label>
                                            <Input
                                                type="tel"
                                                id="telefone"
                                                name="telefone"
                                                value={formData.telefone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="(+238) 000 0000"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="ilha" className="block text-sm font-medium text-gray-700 mb-2">
                                                Ilha
                                            </label>
                                            <select
                                                id="ilha"
                                                name="ilha"
                                                value={formData.ilha}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                            >
                                                <option value="">Selecione sua ilha</option>
                                                {islands.map((island) => (
                                                    <option key={island} value={island}>
                                                        {island}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                                            Assunto
                                        </label>
                                        <Input
                                            type="text"
                                            id="assunto"
                                            name="assunto"
                                            value={formData.assunto}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Qual o motivo do seu contato?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mensagem *
                                        </label>
                                        <textarea
                                            id="mensagem"
                                            name="mensagem"
                                            value={formData.mensagem}
                                            onChange={handleInputChange}
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                            placeholder="Descreva sua dúvida ou necessidade..."
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-health-gradient hover:opacity-90 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 mr-2" />
                                                Enviar Mensagem
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="bg-white rounded-3xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Por que nos escolher?
                                </h3>
                                
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Atendimento Personalizado",
                                            description: "Nossa equipe está sempre pronta para oferecer orientação especializada."
                                        },
                                        {
                                            title: "Entrega Rápida",
                                            description: "Cobertura em todas as ilhas de Cabo Verde com logística eficiente."
                                        },
                                        {
                                            title: "Produtos Certificados",
                                            description: "Trabalhamos apenas com produtos aprovados e de alta qualidade."
                                        },
                                        {
                                            title: "Suporte Contínuo",
                                            description: "Acompanhamento pós-venda e suporte técnico especializado."
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckCircle className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                                <h3 className="text-xl font-bold text-red-800 mb-4">
                                    Contato de Emergência
                                </h3>
                                <p className="text-red-700 mb-4">
                                    Para situações urgentes relacionadas a medicamentos ou equipamentos médicos:
                                </p>
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-red-600" />
                                    <span className="font-semibold text-red-800">
                                        (+238) 5978254
                                    </span>
                                </div>
                                <p className="text-sm text-red-600 mt-2">
                                    Disponível 24/7 para emergências
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Headline
                        title={'Nossa Localização'}
                        description={'Visite nossa loja principal em Praia, Cabo Verde.'}
                        highlights={["Localização"]}
                        size={'md'}
                    />

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl h-96 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Mapa Interativo
                                </h3>
                                <p className="text-gray-600">
                                    Em breve: Mapa interativo com nossa localização exata
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}