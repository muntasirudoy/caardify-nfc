"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"


const steps = [
    { title: "Company Information", fields: ["companyName", "contactName", "designation"] },
    { title: "Contact Details", fields: ["email", "phone"] },
    { title: "Order Information", fields: ["cardsRequired", "comments"] },
]

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0)
    const [formData, setFormData] = useState({
        companyName: "",
        contactName: "",
        designation: "",
        email: "",
        phone: "",
        cardsRequired: "",
        comments: "",
    })
    const { toast } = useToast()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1)
        }
    }

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically handle the form submission
        console.log(formData)
        toast({
            title: "Thank you for your inquiry!",
            description:
                "Your details have been successfully submitted. Our team will review your request and get back to you shortly.",
        })
        // Reset form after submission
        setFormData({
            companyName: "",
            contactName: "",
            designation: "",
            email: "",
            phone: "",
            cardsRequired: "",
            comments: "",
        })
        setCurrentStep(0)
    }

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-8">Corporate Inquiry Form</h2>
                <div className="mb-8">
                    <div className="flex justify-between items-center">
                        {steps.map((step, index) => (
                            <div key={step.title} className="flex flex-col items-center">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? "bg-black text-white" : "bg-gray-200 text-gray-600"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                                <span className="text-sm mt-2">{step.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="h-2 bg-gray-200 mt-4 rounded-full">
                        <div
                            className="h-full bg-black rounded-full transition-all duration-300 ease-in-out"
                            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    {steps[currentStep].fields.map((field) => (
                        <div key={field} className="mb-4">
                            <Label htmlFor={field} className="block mb-2">
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}
                            </Label>
                            {field === "comments" ? (
                                <Textarea
                                    id={field}
                                    name={field}
                                    value={formData[field as keyof typeof formData]}
                                    onChange={handleInputChange}
                                    className="w-full"
                                />
                            ) : (
                                <Input
                                    id={field}
                                    name={field}
                                    type={
                                        field === "email"
                                            ? "email"
                                            : field === "phone"
                                                ? "tel"
                                                : field === "cardsRequired"
                                                    ? "number"
                                                    : "text"
                                    }
                                    value={formData[field as keyof typeof formData]}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full"
                                />
                            )}
                        </div>
                    ))}
                    <div className="flex justify-between mt-8">
                        {currentStep > 0 && (
                            <Button type="button" onClick={handlePrevious} variant="outline">
                                Previous
                            </Button>
                        )}
                        {currentStep < steps.length - 1 ? (
                            <Button type="button" onClick={handleNext} className="ml-auto">
                                Next
                            </Button>
                        ) : (
                            <Button type="submit" className="ml-auto">
                                Submit Inquiry
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    )
}

