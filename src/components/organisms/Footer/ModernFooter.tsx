'use client'
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Shield } from 'lucide-react';

export function ModernFooter() {
    const footerSections = [
        {
            title: "Produtos",
            links: [
                { name: "Máscaras KN95", href: "/products/kn95" },
                { name: "Máscaras Infantis", href: "/products/infantil" },
                { name: "Máscaras Profissionais", href: "/products/profissional" },
                { name: "Acessórios", href: "/products/acessorios" }
            ]
        },
        {
            title: "Empresa",
            links: [
                { name: "Sobre Nós", href: "/sobre" },
                { name: "Nossa História", href: "/historia" },
                { name: "Certificações", href: "/certificacoes" },
                { name: "Trabalhe Conosco", href: "/carreiras" }
            ]
        },
        {
            title: "Suporte",
            links: [
                { name: "Central de Ajuda", href: "/ajuda" },
                { name: "Como Usar", href: "/como-usar" },
                { name: "Trocas e Devoluções", href: "/trocas" },
                { name: "Garantia", href: "/garantia" }
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Política de Privacidade", href: "/privacidade" },
                { name: "Termos de Uso", href: "/termos" },
                { name: "Política de Cookies", href: "/cookies" },
                { name: "LGPD", href: "/lgpd" }
            ]
        }
    ];

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Youtube, href: "#", label: "YouTube" }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Company info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-health-gradient rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">K</span>
                            </div>
                            <span className="text-xl font-bold">KN95 Premium</span>
                        </Link>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Especialistas em proteção respiratória, oferecendo máscaras KN95 
                            de alta qualidade para sua segurança e de sua família.
                        </p>

                        {/* Contact info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-emerald-400" />
                                <span className="text-gray-300">(11) 9999-9999</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-emerald-400" />
                                <span className="text-gray-300">contato@kn95premium.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-emerald-400" />
                                <span className="text-gray-300">São Paulo, SP - Brasil</span>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer sections */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trust badges */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-6 mb-4 md:mb-0">
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm text-gray-300">Compra 100% Segura</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <img src="https://via.placeholder.com/60x30/10b981/ffffff?text=SSL" alt="SSL" className="h-6" />
                                <img src="https://via.placeholder.com/60x30/3b82f6/ffffff?text=VISA" alt="Visa" className="h-6" />
                                <img src="https://via.placeholder.com/60x30/f59e0b/ffffff?text=MC" alt="Mastercard" className="h-6" />
                                <img src="https://via.placeholder.com/60x30/8b5cf6/ffffff?text=PIX" alt="PIX" className="h-6" />
                            </div>
                        </div>
                        
                        <div className="text-sm text-gray-400">
                            © 2024 KN95 Premium. Todos os direitos reservados.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}