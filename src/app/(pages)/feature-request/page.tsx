"use client";

import type React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";
import { useState } from "react";

export default function Component() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      // 5MB limit
      setSelectedFile(file);
    } else if (file) {
      alert("File size must be less than 5MB");
    }
  };

  return (
    <div className="min-h-screen p-4 py-8 ">
      <div className="mx-auto container">
        <Card className="shadow-none border-0">
          <CardHeader className="text-center space-y-4 pb-8">
            <CardTitle className="text-3xl font-bold font-secondary">
              Request a Feature. Shape the Future
            </CardTitle>
            <CardDescription
              className="text-base 
            font-secondary text-muted-foreground max-w-lg mx-auto"
            >
              Your feedback drives our innovation. If you have an idea that
              could enhance the Caardify experience, let us know. We&apos;re
              always looking to improve and grow with your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="mb-4 font-secondary font-medium"
                >
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="User's full name"
                  required
                  className="h-11 font-secondary font-medium"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="mb-4 font-secondary font-medium"
                >
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="User's email address for follow-up"
                  required
                  className="h-11 font-secondary font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="feature-title"
                className="mb-4 font-secondary font-medium"
              >
                Feature Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="feature-title"
                placeholder="Ex: dark mode for Caardify profiles"
                required
                className="h-11 font-secondary font-medium"
              />
              <p className="text-xs font-secondary text-muted-foreground">
                A short title for the feature request.
              </p>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="problem"
                className="mb-4 font-secondary font-medium"
              >
                What Problem Does It Solve?{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="problem"
                placeholder="Helps people use the site at night without eye strain."
                required
                className="min-h-[100px] resize-none font-secondary font-medium"
              />
              <p className="text-xs font-secondary text-muted-foreground">
                Describe the problem the feature solves.
              </p>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="mb-4 font-secondary font-medium"
              >
                Detailed Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Provide full details of how the feature should work..."
                required
                className="min-h-[120px] resize-none font-secondary font-medium"
              />
              <p className="text-xs font-secondary text-muted-foreground">
                Full details of how the feature should work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="priority"
                  className="mb-4 font-secondary font-medium"
                >
                  Priority Level
                </Label>
                <Select>
                  <SelectTrigger
                    id="priority"
                    className="h-11 font-secondary font-medium "
                  >
                    <SelectValue placeholder="Select priority level" />
                  </SelectTrigger>
                  <SelectContent className="font-secondary font-medium">
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="category"
                  className="mb-4 font-secondary font-medium"
                >
                  Category
                </Label>
                <Select>
                  <SelectTrigger
                    id="category"
                    className="h-11 font-secondary font-medium"
                  >
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="font-secondary font-medium">
                    <SelectItem value="ui-ux">UI/UX</SelectItem>
                    <SelectItem value="profile-customization">
                      Profile Customization
                    </SelectItem>
                    <SelectItem value="order-delivery">
                      Order/Delivery
                    </SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="file-upload"
                className="mb-4 font-secondary font-medium"
              >
                Attach File
              </Label>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors">
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden "
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">
                    {selectedFile
                      ? selectedFile.name
                      : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Images or PDF files (Max 5MB)
                  </p>
                </label>
              </div>
              <p className="text-xs font-secondary text-muted-foreground">
                Allow image or PDF upload (e.g., sketch or screenshot).
              </p>
            </div>

            <div className="pt-4">
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium font-secondary"
                type="submit"
              >
                Submit Feature Request
                {/* {mutation.isLoading ? "Loading..." : "   Submit Feature Request"} */}
                <BottomGradient />
              </button>
            </div>

            <p className="text-xs text-muted-foreground font-secondary text-center">
              <span className="text-red-500">*</span> Required fields
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
