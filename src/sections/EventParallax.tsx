"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import events2 from "@/assets/events2.jpg";
import events3 from "@/assets/events3.jpg";
import events4 from "@/assets/events4.jpg";
import events5 from "@/assets/events5.jpg";
import events6 from "@/assets/events6.jpg";
export function EventParallax() {
    return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail: events6,
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            events2,
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            events3,
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            events4,
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            events5,
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            events6,
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            events2,
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            events3,
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            events4,
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            events5,
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            events6,
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            events2,
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            events4,
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            events5,
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            events3,
    },
];



export default EventParallax