"use client";
import { useState } from "react";
import Icon from "./Icons";
import {SearchGlobal} from "@/src/components/organisms/Header/components/SearchGlobal";

export function SearchGlobalBtn() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button className="hover:text-primary" onClick={() => setOpen(true)}>
                <Icon name="search" />
            </button>
            <SearchGlobal open={open} setOpen={setOpen} />
        </>
    );
}
