'use client'
import { HeroCarousel} from "@/src/components/organisms/Home/Carousel";
import {CarouselSize} from "@/src/components/organisms/Home/CarouseelBar";
import {PartnerInfoSectionComponent} from "@/src/components/organisms/Home/PartnerInfoSection";
import {FeaturedItems} from "@/src/components/organisms/Home/FeaturedItems";
import {SpecialOfferSection} from "@/src/components/organisms/Home/SpecialOfferSection";
import * as React from "react";
import {HealthCampaing} from "@/src/components/organisms/Home/HealthCampaingSection";
import {RecenteProductSection} from "@/src/components/organisms/Home/RecenteProductSection";
import {HealthPromoSection} from "@/src/components/organisms/Home/HealthPromoSection";
import {TrendingProductsSection} from "@/src/components/organisms/Home/TrendingProductsSection";
import {bannerData} from "@/src/services/getDataMenu/data";

export function HomeTemplate(){
    return (
        <section className="">
            <HeroCarousel slidesData={bannerData}/>
            <CarouselSize/>
            <PartnerInfoSectionComponent/>
            <FeaturedItems/>
            <SpecialOfferSection/>
            <HealthCampaing/>
            <RecenteProductSection/>
            <HealthPromoSection/>
            <TrendingProductsSection/>
        </section>

    )
}