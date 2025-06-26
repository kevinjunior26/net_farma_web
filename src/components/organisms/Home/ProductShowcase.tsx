'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/src/components/atoms/button';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';

const products = [
    {
        id: 1,
        name: "KN95 Premium Pack",
        price: "R$ 89,90",
        originalPrice: "R$ 119,90",
        rating: 4.9,
        reviews: 1247,
        image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Mais Vendido",
        features: ["Pack com 20 unidades", "Certificação N95", "Entrega grátis"]
    },
    {
        id: 2,
        name: "KN95 Infantil Colorida",
        price: "R$ 59,90",
        originalPrice: "R$ 79,90",
        rating: 4.8,
        reviews: 892,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Novo",
        features: ["Pack com 15 unidades", "Tamanho infantil", "Cores divertidas"]
    },
    {
        id: 3,
        name: "KN95 Profissional",
        price: "R$ 149,90",
        originalPrice: "R$ 199,90",
        rating: 5.0,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1603398938795-b7a4b0b8b6e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        badge: "Premium",
        features: ["Pack com 50 unidades", "Uso profissional", "Máxima proteção"]
    }
];

export function ProductShowcase() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nossos <span className="text-transparent bg-clip-text bg-health-gradient">Produtos</span> em Destaque
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Escolha o pack ideal para suas necessidades. Todos os produtos com garantia de qualidade e entrega rápida.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200">
                                {/* Product Image */}
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    
                                    {/* Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {product.badge}
                                        </span>
                                    </div>
                                    
                                    {/* Favorite button */}
                                    <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors duration-200">
                                        <Heart className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {product.name}
                                    </h3>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center mb-3">
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600 ml-2">
                                            {product.rating} ({product.reviews} avaliações)
                                        </span>
                                    </div>
                                    
                                    {/* Features */}
                                    <ul className="space-y-1 mb-4">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {/* Price */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <span className="text-2xl font-bold text-gray-900">
                                                {product.price}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through ml-2">
                                                {product.originalPrice}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Add to cart button */}
                                    <Button className="w-full bg-health-gradient hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center">
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Adicionar ao Carrinho
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/products">
                        <Button variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300">
                            Ver Todos os Produtos
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}