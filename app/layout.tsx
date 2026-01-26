import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Omnify — AI-Powered CRM for Contractors | Join Waitlist",
  description: "Never miss another lead. AI that answers calls, texts, and chat 24/7. Join the waitlist and get 50% off for life.",
  keywords: ["AI CRM", "contractor software", "lead management", "AI receptionist", "service contractors"],
  authors: [{ name: "Omnify" }],
  openGraph: {
    title: "Omnify — Never miss another lead",
    description: "AI-powered CRM for contractors. Join the waitlist for 50% off.",
    type: "website",
    locale: "en_US",
    siteName: "Omnify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omnify — Never miss another lead",
    description: "AI-powered CRM for contractors. Join the waitlist for 50% off.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
