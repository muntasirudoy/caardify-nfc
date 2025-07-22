"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Search } from "lucide-react";

const sections = [
  {
    title: "Getting Started",
    content: [
      {
        title: "Sign Up and Login",
        content:
          "To begin using Caardify, follow these steps:\n1. Visit the Caardify Website.\n2. Click the Sign-Up button and register with your email or Google account.\n3. After successful registration, verify your email address.\n4. Log in to your account using your credentials.",
      },
    ],
  },
  {
    title: "Profile Creation and Design Selection",
    content: [
      {
        title: "Create Your Profile",
        content:
          "Once logged in, you will need to set up your profile. Here's how:\n1. Add your information (name, title, company logo, address, social media links, phone number, and website.)\n2. Upload your profile picture.\n3. You can preview your profile before making it live. If everything looks great, proceed.",
      },
      {
        title: "Design Selection",
        content:
          "After setting up your profile, you can choose a design for your Caardify NFC enabled business card:\n1. Visit the Design Section on our website.\n2. Browse through our collection of available designs.\n3. Select a design you like, or if you prefer, you can upload your design.",
      },
    ],
  },
  {
    title: "Payment and Subscription",
    content: [
      {
        title: "Buy a Card",
        content:
          "After setting up your profile you need to buy a card to keep your profile active. You can buy any type of card you want. Currently, we have PVC, Metal, and Wooden NFC Enabled Business Cards. Without buying a card you cannot use our service. After 7 days your account will be automatically deleted.",
      },
      {
        title: "Subscription Fee",
        content:
          "Our service is subscription-based:\n- The cost is 9 BDT per month.\n- You must pay the subscription fee to keep your profile active.",
      },
      {
        title: "Subscription Renewal Notifications",
        content:
          "You will receive notifications about your subscription status:\n- 1 week before the subscription expires.\n- 1 day before the subscription expires.\n- On the day of expiry, your profile will become inactive if the payment is not made.",
      },
      {
        title: "Making Payments",
        content:
          "To continue using Caardify services:\n- You can pay the subscription fee via Bkash or Nagad.\n- If payment is missed, your profile will be marked inactive but will not be deleted.",
      },
    ],
  },
  {
    title: "Receiving Your Card",
    content: [
      {
        title: "Card Production and Delivery",
        content:
          "Once you have completed your profile and design selection, your Caardify NFC business card will be produced:\n- Your card will arrive at your address within 7-10 days.\n- If there is any issue with the card, please read our Refund and Return policy.",
      },
      {
        title: "Troubleshooting",
        content:
          "If your card has any issues:\n- Contact our support team at the Contact Us page.",
      },
    ],
  },
  {
    title: "Editing Your Profile",
    content: [
      {
        title: "Modifying Profile Information",
        content:
          "You can edit your profile at any time:\n1. Log in to your Caardify account.\n2. Navigate to your profile settings.\n3. Modify your name, title, logo, contact info, and design.\n4. Save changes, and the updates will reflect instantly on your profile.",
      },
    ],
  },
  {
    title: "Support and Contact",
    content: [
      {
        title: "Contact Information",
        content:
          "If you have any questions or issues, you can reach out to us through:\n- Email: support@caardify.com\n- Phone: 01854661111\n- WhatsApp: 01854661111\n- Or Visit our Contact Us page.",
      },
    ],
  },
];

const Section = ({
  title,
  content,
  isOpen,
  toggleOpen,
}: {
  title: string;
  content: { title: string; content: string }[];
  isOpen: boolean;
  toggleOpen: () => void;
}) => (
  <div className="mb-4">
    <Button
      variant="ghost"
      className="w-full justify-start text-lg font-semibold mb-2"
      onClick={toggleOpen}
    >
      {isOpen ? (
        <ChevronDown className="mr-2 h-4 w-4" />
      ) : (
        <ChevronRight className="mr-2 h-4 w-4" />
      )}
      {title}
    </Button>
    {isOpen &&
      content.map((item, index) => (
        <div key={index} className="ml-6 mb-4">
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-sm whitespace-pre-line">{item.content}</p>
        </div>
      ))}
  </div>
);

function UserManualPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.some(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center font-secondary">
        Caardify User Manual
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <Card className="w-full md:w-1/4 h-fit sticky top-[100px]">
          <CardContent className="p-4">
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
              <Search className="absolute top-[1.2rem] right-8 h-4 w-4 text-gray-400" />
            </div>
            <nav>
              {filteredSections.map((section, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-sm mb-2"
                  onClick={() => toggleSection(section.title)}
                >
                  {section.title}
                </Button>
              ))}
            </nav>
          </CardContent>
        </Card>
        <Card className="w-full md:w-3/4">
          <CardContent className="p-4">
            {filteredSections.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                content={section.content}
                isOpen={openSections[section.title] || false}
                toggleOpen={() => toggleSection(section.title)}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default UserManualPage;
