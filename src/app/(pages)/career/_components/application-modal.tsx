"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Upload, FileText, CheckCircle } from 'lucide-react'
import { useState } from "react"

interface JobPosition {
    id: number
    title: string
    department: string
    location: string
    type: string
    experience: string
    salary: string
}

interface ApplicationModalProps {
    isOpen: boolean
    onClose: () => void
    job: JobPosition | null
}

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    experience: string
    currentRole: string
    currentCompany: string
    expectedSalary: string
    availableDate: string
    coverLetter: string
    portfolio: string
    linkedin: string
    github: string
    cv: File | null
    agreedToTerms: boolean
}

export default function ApplicationModal({ isOpen, onClose, job }: ApplicationModalProps) {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        experience: "",
        currentRole: "",
        currentCompany: "",
        expectedSalary: "",
        availableDate: "",
        coverLetter: "",
        portfolio: "",
        linkedin: "",
        github: "",
        cv: null,
        agreedToTerms: false,
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [dragActive, setDragActive] = useState(false)

    if (!isOpen || !job) return null

    const handleInputChange = (field: keyof FormData, value: string | boolean | File | null) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleFileUpload = (file: File) => {
        if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
            handleInputChange("cv", file)
        } else {
            alert("Please upload a PDF file only")
        }
    }

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files[0])
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.agreedToTerms) {
            alert("Please agree to the terms and conditions")
            return
        }

        if (!formData.cv) {
            alert("Please upload your CV")
            return
        }

        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds and close modal
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                location: "",
                experience: "",
                currentRole: "",
                currentCompany: "",
                expectedSalary: "",
                availableDate: "",
                coverLetter: "",
                portfolio: "",
                linkedin: "",
                github: "",
                cv: null,
                agreedToTerms: false,
            })
            onClose()
        }, 3000)
    }

    const getRequiredFieldsForRole = (department: string) => {
        const baseFields = ["firstName", "lastName", "email", "phone", "cv"]

        switch (department.toLowerCase()) {
            case "engineering":
                return [...baseFields, "github", "experience"]
            case "design":
                return [...baseFields, "portfolio", "experience"]
            case "product":
                return [...baseFields, "linkedin", "experience"]
            default:
                return [...baseFields, "experience"]
        }
    }

    const requiredFields = getRequiredFieldsForRole(job.department)

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-enter">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl font-bold text-black mb-2">Apply for {job.title}</h2>
                            <p className="text-gray-600">{job.department} • {job.location}</p>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                            className="hover:bg-gray-100 rounded-full p-2"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Success State */}
                {isSubmitted && (
                    <div className="p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-black mb-2">Application Submitted!</h3>
                        <p className="text-gray-600">
                            Thank you for your interest. We`ll review your application and get back to you within 5-7 business days.
                        </p>
                    </div>
                )}

                {/* Form */}
                {!isSubmitted && (
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {/* Personal Information */}
                        <div>
                            <h3 className="text-lg font-semibold text-black mb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName" className="text-black">
                                        First Name *
                                    </Label>
                                    <Input
                                        id="firstName"
                                        value={formData.firstName}
                                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="lastName" className="text-black">
                                        Last Name *
                                    </Label>
                                    <Input
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-black">
                                        Email Address *
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="phone" className="text-black">
                                        Phone Number *
                                    </Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="location" className="text-black">
                                        Current Location
                                    </Label>
                                    <Input
                                        id="location"
                                        value={formData.location}
                                        onChange={(e) => handleInputChange("location", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                        placeholder="City, State/Country"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="experience" className="text-black">
                                        Years of Experience *
                                    </Label>
                                    <Select onValueChange={(value) => handleInputChange("experience", value)}>
                                        <SelectTrigger className="mt-1 border-gray-300 focus:border-black focus:ring-black">
                                            <SelectValue placeholder="Select experience" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0-1">0-1 years</SelectItem>
                                            <SelectItem value="2-3">2-3 years</SelectItem>
                                            <SelectItem value="4-5">4-5 years</SelectItem>
                                            <SelectItem value="6-8">6-8 years</SelectItem>
                                            <SelectItem value="9+">9+ years</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>

                        {/* Professional Information */}
                        <div>
                            <h3 className="text-lg font-semibold text-black mb-4">Professional Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="currentRole" className="text-black">
                                        Current Role
                                    </Label>
                                    <Input
                                        id="currentRole"
                                        value={formData.currentRole}
                                        onChange={(e) => handleInputChange("currentRole", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                        placeholder="e.g. Senior Developer"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="currentCompany" className="text-black">
                                        Current Company
                                    </Label>
                                    <Input
                                        id="currentCompany"
                                        value={formData.currentCompany}
                                        onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="expectedSalary" className="text-black">
                                        Expected Salary
                                    </Label>
                                    <Input
                                        id="expectedSalary"
                                        value={formData.expectedSalary}
                                        onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                        placeholder="e.g. $120,000"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="availableDate" className="text-black">
                                        Available Start Date
                                    </Label>
                                    <Input
                                        id="availableDate"
                                        type="date"
                                        value={formData.availableDate}
                                        onChange={(e) => handleInputChange("availableDate", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Role-specific fields */}
                        <div>
                            <h3 className="text-lg font-semibold text-black mb-4">Additional Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {(job.department.toLowerCase() === "engineering" || job.department.toLowerCase() === "infrastructure") && (
                                    <div>
                                        <Label htmlFor="github" className="text-black">
                                            GitHub Profile {requiredFields.includes("github") && "*"}
                                        </Label>
                                        <Input
                                            id="github"
                                            value={formData.github}
                                            onChange={(e) => handleInputChange("github", e.target.value)}
                                            className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                            placeholder="https://github.com/username"
                                            required={requiredFields.includes("github")}
                                        />
                                    </div>
                                )}

                                {job.department.toLowerCase() === "design" && (
                                    <div>
                                        <Label htmlFor="portfolio" className="text-black">
                                            Portfolio URL {requiredFields.includes("portfolio") && "*"}
                                        </Label>
                                        <Input
                                            id="portfolio"
                                            value={formData.portfolio}
                                            onChange={(e) => handleInputChange("portfolio", e.target.value)}
                                            className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                            placeholder="https://yourportfolio.com"
                                            required={requiredFields.includes("portfolio")}
                                        />
                                    </div>
                                )}

                                <div>
                                    <Label htmlFor="linkedin" className="text-black">
                                        LinkedIn Profile {requiredFields.includes("linkedin") && "*"}
                                    </Label>
                                    <Input
                                        id="linkedin"
                                        value={formData.linkedin}
                                        onChange={(e) => handleInputChange("linkedin", e.target.value)}
                                        className="mt-1 border-gray-300 focus:border-black focus:ring-black"
                                        placeholder="https://linkedin.com/in/username"
                                        required={requiredFields.includes("linkedin")}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* CV Upload */}
                        <div>
                            <Label className="text-black text-lg font-semibold">Resume/CV *</Label>
                            <div
                                className={`mt-2 border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 ${dragActive
                                    ? "border-black bg-gray-50"
                                    : formData.cv
                                        ? "border-green-500 bg-green-50"
                                        : "border-gray-300 hover:border-gray-400"
                                    }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                {formData.cv ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <FileText className="h-6 w-6 text-green-600" />
                                        <span className="text-green-600 font-medium">{formData.cv.name}</span>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleInputChange("cv", null)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                ) : (
                                    <div>
                                        <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                                        <p className="text-gray-600 mb-2">Drag and drop your CV here, or click to browse</p>
                                        <p className="text-sm text-gray-500">PDF files only, max 5MB</p>
                                        <Input
                                            type="file"
                                            accept=".pdf"
                                            onChange={(e) => e.target.files && handleFileUpload(e.target.files[0])}
                                            className="hidden"
                                            id="cv-upload"
                                        />
                                        <Label
                                            htmlFor="cv-upload"
                                            className="inline-block mt-2 px-4 py-2 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                                        >
                                            Choose File
                                        </Label>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Cover Letter */}
                        <div>
                            <Label htmlFor="coverLetter" className="text-black">
                                Cover Letter
                            </Label>
                            <Textarea
                                id="coverLetter"
                                value={formData.coverLetter}
                                onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                                className="mt-1 border-gray-300 focus:border-black focus:ring-black min-h-[120px]"
                                placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                            />
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start space-x-2">
                            <Checkbox
                                id="terms"
                                checked={formData.agreedToTerms}
                                onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
                                className="mt-1"
                            />
                            <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                                I agree to the{" "}
                                <a href="#" className="text-black hover:underline">
                                    Terms and Conditions
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-black hover:underline">
                                    Privacy Policy
                                </a>
                                . I consent to the processing of my personal data for recruitment purposes.
                            </Label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex gap-4 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onClose}
                                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                                disabled={isSubmitting}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="flex-1 bg-black hover:bg-gray-800 text-white"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </Button>
                        </div>
                    </form>
                )}
            </div>

            <style jsx>{`
        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-modal-enter {
          animation: modal-enter 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    )
}
