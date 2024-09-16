import ContactForm from "@/sections/ContactForm";

export default function Home() {
    const faqs = [
        {
            question: "How can I contact support?",
            answer: "You can contact us through the form on the right or by sending an email to support@example.com."
        },
        {
            question: "What is the response time?",
            answer: "Our team typically responds within 24-48 hours."
        },
    ];

    return (
        <div>
            <ContactForm faqs={faqs} />
        </div>
    );
}
