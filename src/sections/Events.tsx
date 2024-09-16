"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import events2 from "@/assets/events2.jpg";
import events3 from "@/assets/events3.jpg";
import events4 from "@/assets/events4.jpg";
import events5 from "@/assets/events5.jpg";
import events6 from "@/assets/events6.jpg";


export function Events() {
    const cards = data.map((card, index) => (
        <Card key={index} card={card} index={index} />
    ));

    return (
        <div id="events" className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-6xl font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text dark:text-neutral-200 font-sans">
                Checkout Our Events
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {Array(3).fill(1).map((_, index) => {
                return (
                    <div
                        key={"dummy-content-" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="/assets/macbook.png" // Ensure the file is in the public directory
                            alt="Macbook mockup from Aceternity UI"
                            height={500}
                            width={500}
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Artificial Intelligence",
        title: "You can do more with AI.",
        src: events6,
        content: <DummyContent />,
    },
    {
        category: "Productivity",
        title: "Enhance your productivity.",
        src: events2,
        content: <DummyContent />,
    },
    {
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: events3,
        content: <DummyContent />,
    },
    {
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: events4,
        content: <DummyContent />,
    },
    {
        category: "iOS",
        title: "Photography just got better.",
        src: events5,
        content: <DummyContent />,
    },
    {
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer",
        src: events6,
        content: <DummyContent />,
    },
];

export default Events;
