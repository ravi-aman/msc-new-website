'use client'

// Faq.tsx

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; // Ensure the path is correct

// FAQ Data Array
const faqs = [
    {
        question: "Who is MSC?",
        answer: "MSC (Microsoft Student Chapter) is a widespread coding community with over 7500+ active coders nationwide. It was started by three 1st-year coding enthusiasts with the main objective to create a transparent community where sharing of ideas and helping others is the main goal. MSC boasts various hackathon-winning teams, 6 independent institutes with MSC chapters, and so much more.",
    },
    {
        question: "How to Become a Community Partner for MSC?",
        answer: "To become a community partner for MSC, one will only need to fill up a Google form without any charging fee. Since we at MSC are committed to building a transparent and free community, community partnerships are greatly appreciated, and one can expect the best experience.",
    },
    {
        question: "How to Connect with MSC?",
        answer: "You can connect with MSC via our social media handles (Instagram, LinkedIn, Email, WhatsApp). No, you don't need any fees to join MSC. You simply fill the Google form, give the interview, and if considered applicable, you shall be selected in a free and fair manner.",
    },
    {
        question: "What makes MSC Unique?",
        answer: "Our vast connections, a widespread community of over 7500+ coders nationwide, conduction of successful hackathons and events, boasting multi-hackathon winning teams comprised purely of MSC members, a philosophy of a community of coders, for coders, and by coders, and a transparent community where anyone can start coding easily. MSC is a unique trendsetter built for the upliftment of the Indian coding community.",
    },
    {
        question: "What events does MSC organize?",
        answer: "MSC organizes a variety of events, including coding competitions, hackathons, workshops, and seminars on the latest technologies. We also host guest lectures by industry experts and offer mentorship to help members improve their skills.",
    },
    {
        question: "How can I become a member of MSC?",
        answer: "You can become a member of MSC by filling out our registration form on the official MSC website. After completing the form, you will be contacted for a short interview process, following which you will be added to the chapter if selected.",
    },
    {
        question: "What benefits do MSC members receive?",
        answer: "MSC members get access to exclusive workshops, coding competitions, hackathons, and networking opportunities with industry professionals. Members also receive mentorship, guidance on career development, and the opportunity to collaborate on projects with other talented individuals.",
    },
    {
        question: "Does MSC provide mentorship opportunities?",
        answer: "Yes, MSC provides mentorship programs where experienced coders and professionals guide newer members. These programs help members with career advice, project development, coding skills, and personal growth.",
    },
];

// FAQ Component
export function FAQ() {
    return (
        <div className="faq-section">
            <h1 className="text-5xl font-bold my-8">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default FAQ;
