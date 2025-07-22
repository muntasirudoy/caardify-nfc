"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log("Signing up with email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-50 mb-4 font-primary">
              Caardify
            </h2>
            <p className="mb-4">
              Revolutionizing networking with smart, digital business cards.
              Connect instantly, share effortlessly.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.facebook.com/caardify"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.twitter.com/caardify/"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Youtube className="h-7 w-7" />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link
                href="https://www.instagram.com/caardify/"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/caardify/"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/company"
                  className="hover:text-gray-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="hover:text-gray-300 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-gray-300 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.caardify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/media-kit" className="hover:text-gray-300 transition-colors">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  NFC Business Cards
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  Caardify Profiles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/user-menual"
                  className="hover:text-gray-300 transition-colors"
                >
                  User Manual
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/feature-request"
                  className="hover:text-gray-300 transition-colors"
                >
                  Feature Request
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-200">Contact Us</h3>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-gray-100" />
              <span>support@caardify.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-gray-100" />
              <span>+88 01854661111</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-gray-100 " />
              <span className="max-w-[400px]">
                4th Floor - A, Bhuiyan Mention, Hazi Nodu Mia Sarak, West Ukil
                Para, Feni - 3900, Bangladesh
              </span>
            </div>
          </div>
          <div className="w-full md:w-[350px] ml-auto">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-950 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} NFC Cards. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link
              href="#"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/policy/terms-of-service"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Shipping Policy
            </Link>
            <Link
              href="/policy/refund-policy"
              className="text-sm hover:text-gray-300 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
