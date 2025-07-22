import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getAuthenticatedUser } from "../actions/authenticated";
import { AuthProvider } from "../components/providers/auth.provider";
import GoogleTagManager from "@/lib/GoogleTagManager";
import { ToastProvider } from "@/components/providers/toast-provider";

// import { SessionProvider } from "@/components/providers/session.provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Caardify - Carry Less | Connect More",
  description: "Smart, eco-friendly NFC business cards allow you to share contacts, customize designs, and go paperless. Upgrade your networking today!",
  keywords: ["NFC business cards", "Digital business cards", "Smart business cards", "Eco-friendly business cards", "Customizable NFC cards", "NFC business cards Bangladesh", "Paperless business cards", "Instant contact sharing NFC", "Affordable NFC business cards", "Tech-savvy networking cards"],
  robots: "index, follow",
  facebook: {
    appId: "429401216934123"
  },
  openGraph: {
    title: "Caardify - Carry Less | Connect More",
    description: "Smart, eco-friendly NFC business cards allow you to share contacts, customize designs, and go paperless. Upgrade your networking today!",
    url: "https://www.caardify.com",
    type: "website",
    images: [
      {
        url: "https://www.caardify.com/og_image.jpg",
        width: 800,
        height: 600,
        alt: "Caardify - Smart, eco-friendly NFC business cards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@caardify",
    title: "Caardify - Carry Less | Connect More",
    description: "Smart, eco-friendly NFC business cards allow you to share contacts, customize designs, and go paperless. Upgrade your networking today!",
    images: "https://www.caardify.com/og_image.jpg",
  },

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authenticatedUser = await getAuthenticatedUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJRQJTB3"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <GoogleTagManager />
        <AuthProvider user={authenticatedUser}>
        <ToastProvider />
          {children}</AuthProvider>
      </body>
    </html>
  );
}
