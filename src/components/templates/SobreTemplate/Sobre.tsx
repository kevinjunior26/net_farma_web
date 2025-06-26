'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Heart, Target, Eye, CheckCircle } from 'lucide-react';
import Headline from "@/src/components/molecules/Headline/Headline";

const stats = [
    {
        icon: Users,
        number: "50.000+",
        label: "Clientes Atendidos",
        description: "Famílias protegidas em Cabo Verde"
    },
    {
        icon: Shield,
        number: "15+",
        label: "Anos de Experiência",
        description: "Tradição em produtos farmacêuticos"
    },
    {
        icon: Award,
        number: "500+",
        label: "Produtos Disponíveis",
        description: "Medicamentos e equipamentos médicos"
    },
    {
        icon: Heart,
        number: "24/7",
        label: "Suporte Disponível",
        description: "Atendimento quando você precisar"
    }
];

const values = [
    {
        icon: Shield,
        title: "Qualidade Garantida",
        description: "Todos os nossos produtos passam por rigoroso controle de qualidade e são certificados pelos órgãos competentes."
    },
    {
        icon: Heart,
        title: "Cuidado Humanizado",
        description: "Acreditamos que cada cliente merece atenção personalizada e cuidado especial em sua jornada de saúde."
    },
    {
        icon: Target,
        title: "Foco no Cliente",
        description: "Nossas decisões são sempre tomadas pensando no bem-estar e satisfação dos nossos clientes."
    },
    {
        icon: CheckCircle,
        title: "Confiabilidade",
        description: "Construímos relacionamentos duradouros baseados na confiança e transparência em todos os nossos serviços."
    }
];

const team = [
    {
        name: "Dr. João Silva",
        role: "Farmacêutico Responsável",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "15 anos de experiência em farmácia clínica e gestão farmacêutica."
    },
    {
        name: "Dra. Maria Santos",
        role: "Especialista em Equipamentos Médicos",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Especialista em equipamentos hospitalares com certificação internacional."
    },
    {
        name: "Carlos Mendes",
        role: "Gerente de Operações",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Responsável pela logística e distribuição em todas as ilhas de Cabo Verde."
    }
];

export function SobreTemplate() {
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
                            Sobre a NetFarma
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Sua parceira de confiança em saúde e bem-estar em Cabo Verde
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                </div>
            </section>

            {/* Nossa História */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Headline
                                title={'Nossa História'}
                                description={'Fundada com o propósito de democratizar o acesso a produtos farmacêuticos e equipamentos médicos de qualidade em Cabo Verde, a NetFarma nasceu da visão de profissionais da saúde comprometidos com o bem-estar da população cabo-verdiana.'}
                                highlights={["História"]}
                                size={'md'}
                                align={'left'}
                            />

                            <div className="space-y-6 mt-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Compromisso com a Qualidade</h4>
                                        <p className="text-gray-600">Trabalhamos apenas com fornecedores certificados e produtos que atendem aos mais altos padrões internacionais.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Cobertura Nacional</h4>
                                        <p className="text-gray-600">Atendemos todas as ilhas de Cabo Verde com logística eficiente e entrega rápida.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Inovação Constante</h4>
                                        <p className="text-gray-600">Investimos continuamente em tecnologia para melhorar nossos serviços e experiência do cliente.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Farmácia moderna"
                                    className="relative w-full h-auto rounded-3xl shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Missão e Visão */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Headline
                        title={'Missão e Visão'}
                        description={'Nossos valores fundamentais que guiam cada decisão e ação da NetFarma.'}
                        highlights={["Missão", "Visão"]}
                        size={'md'}
                    />

                    <div className="grid md:grid-cols-2 gap-12 mt-16">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8"
                        >
                            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Fornecer produtos farmacêuticos e equipamentos médicos de alta qualidade, 
                                garantindo acesso fácil e seguro à saúde para toda a população de Cabo Verde, 
                                com excelência no atendimento e compromisso com o bem-estar de nossos clientes.
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8"
                        >
                            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Ser a empresa líder em distribuição farmacêutica e equipamentos médicos em Cabo Verde, 
                                reconhecida pela excelência, inovação e contribuição significativa para a melhoria 
                                da qualidade de vida e saúde da população cabo-verdiana.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Headline
                        title={'Nossos Valores'}
                        description={'Os princípios que norteiam todas as nossas ações e decisões.'}
                        highlights={["Valores"]}
                        size={'md'}
                    />

                    <div className="grid md:grid-cols-2 gap-8 mt-16">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-health-gradient rounded-xl flex items-center justify-center mb-6">
                                    <value.icon className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipe */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Headline
                        title={'Nossa Equipe'}
                        description={'Profissionais qualificados e comprometidos com a sua saúde.'}
                        highlights={["Equipe"]}
                        size={'md'}
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="relative mb-6">
                                        <img 
                                            src={member.image}
                                            alt={member.name}
                                            className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full transform scale-110 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {member.name}
                                    </h3>
                                    
                                    <p className="text-blue-600 font-semibold mb-4">
                                        {member.role}
                                    </p>
                                    
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}