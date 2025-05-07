import {menuGroups, siteInfo} from "@/src/services/getDataMenu/data";
import {HeaderContainer} from "@/src/components/organisms/Header/HeaderContainer";
import React from "react";

export function Header(){
    return <HeaderContainer menuGroups={menuGroups} logo={siteInfo.logo} logo_white={siteInfo.logo_white} site_name={siteInfo.site_name}/>
}