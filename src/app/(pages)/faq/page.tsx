import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Accordion } from "@radix-ui/react-accordion"

const groupedFaqs = [
    {
        group: "General Questions",
        faqs: [
            {
                id: 1,
                question: "What is Caardify Business Card?",
                answer: "Caardify Business Card is a digital card embedded with NFC technology, allowing instant sharing of contact details with a tap.",
            },
            {
                id: 2,
                question: "How does it work?",
                answer: "Simply tap the card on an NFC-enabled device to share your contact information, links, or social media profiles.",
            },
            {
                id: 3,
                question: "Which devices are compatible?",
                answer: "Our card works with most smartphones that support NFC or QR code scanning: NFC-enabled phones (iPhones 7+, Android devices such as Samsung Galaxy S7+, Google Pixel 3+, and more). Non-NFC phones can use the QR code.",
            },
            {
                id: 4,
                "question": "Can I update my card details?",
                "answer": "Yes, you can edit your information anytime through your profile dashboard."
            },
            {
                id: 5,
                "question": "Do I need an internet connection for it to work?",
                "answer": "An internet connection is required for accessing links shared through the card."
            },
            {
                id: 6,
                "question": "Is my info secure?",
                "answer": "Yes, your information is protected. We use secure servers and encryption to ensure your data is safe. You have full control over what information is shared and can update or remove it at any time. For more details, refer to our Privacy Policy."
            },
            {
                id: 7,
                "question": "Can I use Caardify services without purchasing a card?",
                "answer": "Yes, you can use Caardify without owning a Caardify card. However, you will need to maintain an active monthly subscription to continue using your profile. Your data privacy will be protected just like our regular card users."
            }

        ],
    },
    {
        group: "Profile and Subscriptions",
        faqs: [
            {
                id: 4,
                question: "Is my profile free to use?",
                answer: "Yes, your profile is free to use for the first month. After that, a subscription is required to keep it active.",
            },
            {
                id: 5,
                question: "What happens if I miss subscription payment?",
                answer: "If you miss a subscription payment after the free month, your profile will become invisible until the payment is made.",
            },
        ],
    },
    {
        group: "Card Customizations",
        faqs: [
            {
                id: 6,
                question: "Can I customize my card design?",
                answer: "Yes, users can customize their card design by choosing from our design section. To use your own design, please contact us directly.",
            },
            {
                id: 7,
                question: "Can I update my profile?",
                answer: "Yes, users can update their profile picture at any time through their dashboard.",
            },
        ],
    },
    {
        group: "Payment Question",
        faqs: [
            {
                id: 11,
                "question": "What payment methods are available?",
                "answer": "Currently, we offer bKash and Nagad as our primary payment methods."
            }
        ],
    },
    {
        group: "Support Questions",
        faqs: [
            {
                "question": "Do you offer bulk offers for businesses?",
                "answer": "Yes, we offer special pricing for businesses. Please visit our Corporate section and fill out the form. We will contact you to discuss and finalize the details."
            }
        ]
    },
    {
        group: "Shipping and Delivery",
        faqs: [
            {
                "question": "What is the delivery charge inside Feni?",
                "answer": "Delivery within Feni is free of charge."
            }
        ]
    }
];

export default function FAQAccordion() {
    return (
        <div className="max-w-[700px] mx-auto my-20 px-4 md:px-0">
            {groupedFaqs.map((group, groupIndex) => (
                <Accordion key={groupIndex} type="single" collapsible>
                    <h3 className="text-xl font-bold mt-10">{group.group}</h3>
                    {group.faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            ))}
        </div>
    );
}
