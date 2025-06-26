'use client'
import { ModernHero } from "@/src/components/organisms/Home/ModernHero";
import { FeaturesSection } from "@/src/components/organisms/Home/FeaturesSection";
import { ProductShowcase } from "@/src/components/organisms/Home/ProductShowcase";
import { TrustSection } from "@/src/components/organisms/Home/TrustSection";
import {TestemunhosSection} from "@/src/components/organisms/Home/TestimonialsSection";
import { CTASection } from "@/src/components/organisms/Home/CTASection";
import * as React from "react";

export function HomeTemplate(){
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <ModernHero />
            <FeaturesSection />
            <ProductShowcase />
            <TrustSection />
            <TestemunhosSection />
            <CTASection />
        </div>
    )
}