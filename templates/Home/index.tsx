import {CarouselPlugin} from "@/components/Home/Carousel/Carousel";
import {CarouselSize} from "@/components/Home/CarouselBar/CarouseelBar";
import {PartnerInfoSectionComponent} from "@/components/Home/PartnerInfoSectionComponent/PartnerInfoSection";
import {FeaturedItems} from "@/components/Home/FeaturedItemsComponent/FeaturedItems";
import {SpecialOfferSection} from "@/components/Home/SpecialOfferSectionComponent/SpecialOfferSection";
import * as React from "react";
import {HealthCampaing} from "@/components/Home/HealthCampaingComponent/HealthCampaingSection";
import {RecenteProductSection} from "@/components/Home/RecentProductSectionComponent/RecenteProductSection";

export function Home(){
    return (
        <section className=" w-full h-full min-h-screen">
            <CarouselPlugin/>
            <CarouselSize/>
            <div className="flex justify-center items-center">
                <hr className="bg-[#E5E7E9] w-[1200px] h-[2px]"/>
            </div>
            <PartnerInfoSectionComponent/>
            <FeaturedItems/>
            <SpecialOfferSection/>
            <HealthCampaing/>
            <RecenteProductSection/>
        </section>

    )
}