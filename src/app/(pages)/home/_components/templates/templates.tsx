'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionTitle from "@/components/ui/section-title";

const templates = [
  {
    id: 1,
    title: "Professional",
    description: "A sleek and modern template for business professionals.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Creative",
    description: "Show off your artistic side with this vibrant template.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Minimalist",
    description: "A clean and simple template for a focused presentation.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export function Templates() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Choose a Template"
          subTitle="Select from our collection of professional templates."
        >
          Templates
        </SectionTitle>
        <div className="grid grid-cols-1 mt-14 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{template.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <Image
                  src={template.image}
                  alt={`${template.title} template preview`}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <p className="text-sm text-gray-600">{template.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Use Template</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
