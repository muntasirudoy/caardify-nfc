// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Button } from "@/components/ui/button";
// import SectionTitle from "@/components/ui/section-title";
// import Link from "next/link";
// import React from "react";

// export default function Faq() {
//   return (
//     <div className="mt-4 mb-20 faq">
//       <div className="container">
//         <SectionTitle
//           title="Frequently Asked Questions"
//           subTitle="We have answers to your questions"
//         >
//           FAQ
//         </SectionTitle>
//         <Accordion
//           type="single"
//           collapsible
//           className="max-w-[700px] mx-auto mt-20"
//         >
//           <AccordionItem value="item-1">
//             <AccordionTrigger>
//               What are Caardify Business Cards?
//             </AccordionTrigger>
//             <AccordionContent>
//               Caardify Business Cards are digital cards embedded with NFC
//               technology, allowing instant sharing of contact details with a
//               tap.
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-2">
//             <AccordionTrigger>How does it work?</AccordionTrigger>
//             <AccordionContent>
//               Simply tap the card on an NFC-enabled device to share your contact
//               information, links, or social media profiles.
//             </AccordionContent>
//           </AccordionItem>
//           {/* <AccordionItem value="item-3">
//             <AccordionTrigger>Which devices are compatible?</AccordionTrigger>
//             <AccordionContent>
//               Yes. It&apos;s animated by default, but you can disable it if you
//               prefer.
//             </AccordionContent>
//           </AccordionItem> */}
//           <AccordionItem value="item-3">
//             <AccordionTrigger>Which devices are compatible?</AccordionTrigger>
//             <AccordionContent>
//               <p>
//                 Our card works with most smartphones that support NFC or QR code
//                 scanning:
//               </p>
//               <ul className="list-disc pl-5 mt-2 space-y-2">
//                 <li>
//                   <span className=" font-bold">NFC-enabled phones:</span> iPhones (iPhone 7 and
//                   newer), Android devices (Samsung Galaxy S7+, Google Pixel 3+,
//                   Huawei, OnePlus, Oppo, and more).
//                 </li>
//                 <li>
//                   <span className="font-bold">Non-NFC phones:</span> Use the QR code to access
//                   your details, making the card universally compatible with any
//                   device that has a camera.
//                 </li>
//               </ul>
//             </AccordionContent>
//           </AccordionItem>

//           <AccordionItem value="item-4">
//             <AccordionTrigger>
//               Can I update my profile details?
//             </AccordionTrigger>
//             <AccordionContent>
//               Yes, you can update your profile information anytime through your
//               dashboard. However, card details cannot be changed once printed.
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-5">
//             <AccordionTrigger>
//               Do I need an internet connection for it to work?
//             </AccordionTrigger>
//             <AccordionContent>
//               An internet connection is required for accessing links shared
//               through the card.
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-6">
//             <AccordionTrigger>Is my info secure?</AccordionTrigger>
//             <AccordionContent>
//               Yes, your data is secure. We use encryption and secure servers to
//               protect your information. You have full control to update or
//               remove it anytime. For details, see our Privacy Policy.
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-7">
//             <AccordionTrigger>
//               Can I use Caardify services without purchasing a card?
//             </AccordionTrigger>
//             <AccordionContent>
//               Yes, you can use the Caardify services without purchasing an NFC
//               card by subscribing to a monthly plan. Your profile will remain
//               active as long as the subscription is renewed.
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>

//         <div className=" w-full flex justify-center mt-10">
//           <Link href="/faq" className="mx-auto text-center">
//             <Button variant="outline" className="">
//               See more
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/section-title";
import Link from "next/link";
import React from "react";

const faqItems = [
  {
    value: "item-1",
    question: "What are Caardify Business Cards?",
    answer: (
      <p>
        Caardify Business Cards are digital cards embedded with NFC technology,
        allowing instant sharing of contact details with a tap.
      </p>
    ),
  },
  {
    value: "item-2",
    question: "How does it work?",
    answer: (
      <p>
        Simply tap the card on an NFC-enabled device to share your contact
        information, links, or social media profiles.
      </p>
    ),
  },
  {
    value: "item-3",
    question: "Which devices are compatible?",
    answer: (
      <div>
        <p>
          Our card works with most smartphones that support NFC or QR code
          scanning:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li>
            <span className="font-bold">NFC-enabled phones:</span> iPhones
            (iPhone 7 and newer), Android devices (Samsung Galaxy S7+, Google
            Pixel 3+, Huawei, OnePlus, Oppo, and more).
          </li>
          <li>
            <span className="font-bold">Non-NFC phones:</span> Use the QR code
            to access your details, making the card universally compatible with
            any device that has a camera.
          </li>
        </ul>
      </div>
    ),
  },
  {
    value: "item-4",
    question: "Can I update my profile details?",
    answer: (
      <p>
        Yes, you can update your profile information anytime through your
        dashboard. However, card details cannot be changed once printed.
      </p>
    ),
  },
  {
    value: "item-5",
    question: "Do I need an internet connection for it to work?",
    answer: (
      <p>
        An internet connection is required for accessing links shared through
        the card.
      </p>
    ),
  },
  {
    value: "item-6",
    question: "Is my info secure?",
    answer: (
      <p>
        Yes, your data is secure. We use encryption and secure servers to
        protect your information. You have full control to update or remove it
        anytime. For details, see our Privacy Policy.
      </p>
    ),
  },
  {
    value: "item-7",
    question: "Can I use Caardify services without purchasing a card?",
    answer: (
      <p>
        Yes, you can use the Caardify services without purchasing an NFC card by
        subscribing to a monthly plan. Your profile will remain active as long
        as the subscription is renewed.
      </p>
    ),
  },
];

export default function Faq() {
  return (
    <div className="mt-4 mb-20 px-4 md:px-0 faq">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          subTitle="We have answers to your questions"
        >
          FAQ
        </SectionTitle>

        <Accordion
          type="single"
          collapsible
          className="max-w-[700px] mx-auto mt-20"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="w-full flex justify-center mt-10">
          <Link href="/faq" className="mx-auto text-center">
            <Button variant="outline">See more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
