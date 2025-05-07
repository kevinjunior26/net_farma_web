import React from "react";
import Image from "next/image";
import {cn} from "@/src/lib/utils";

interface HeadlineProps {
  title?: string;
  highlight?: string;
  description?: string;
  logo?: {
    mobile?: string;
    desktop: string;
  };
  align?: "left" | "center" | "right";
  highlightType?: "gradient" | "tag" | "underline";
  className?: string;
}

export function Headline({
  title,
  highlight,
  description,
  align = "center",
  highlightType = "gradient",
  logo,
  className
}: HeadlineProps) {
  const highlightStyles = {
    gradient: "bg-gradient-to-r from-[#61C3A8] to-[#0454A0] bg-clip-text text-transparent",
    tag: "bg-primary text-white px-2 py-1 rounded-md",
    underline: "border-b-4 border-primary pb-1",
  };

  let titleParts = title ? [title] : [];
  if (highlight && title?.includes(highlight)) {
    titleParts = title.split(highlight);
  }

  return (
    <div className={cn("w-full flex flex-col md:items-center", align === "center" && "text-left lg:text-center", align === "right" && "text-right", className)}>
      <h2 className="text-2xl md:text-4xl xl:text-[3.25rem] xl:leading-[3.75rem] font-semibold text-[#344256] max-w-[1154px] ">

        {logo && (
          <div>
            {logo?.mobile && <Image src={logo.mobile} alt="logo" width={264} height={40} className="object-contain md:hidden" />}
            {logo?.desktop && <Image src={logo.desktop} alt="logo" width={626} height={94} className="object-contain hidden md:block mb-8" />}
          </div>
        )}

        {titleParts[0]}
        {highlight && titleParts.length > 1 && (
          <span className={cn(highlightStyles[highlightType], "mx-1")}>{highlight}</span>
        )}
        {titleParts.length > 1 ? titleParts[1] : ""}
      </h2>

      {description && <p className="mt-4 lg:max-w-[1395px] md:mx-auto">{description}</p>}
    </div>
  );
}
