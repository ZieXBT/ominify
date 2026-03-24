import type { Metadata } from "next";
import "./ewiai-theme.css";

export const metadata: Metadata = {
  title: "Elevate With AI — #1 AI Voice Agent Systems | Book a Call",
  icons: {
    icon: "/ewiai-logo.avif",
    apple: "/ewiai-logo.avif",
  },
  description: "Book 30% more appointments with our AI Sales System. Revolutionizing businesses through automated customer acquisition and support using AI Voice Agents.",
  keywords: ["AI voice agents", "AI sales system", "automated appointments", "AI customer acquisition", "voice AI"],
  authors: [{ name: "Elevate With AI" }],
  openGraph: {
    title: "Elevate With AI — Book 30% More Appointments",
    description: "AI Voice Agent Systems that automate 80% of your sales in 14 days.",
    type: "website",
    locale: "en_US",
    siteName: "Elevate With AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate With AI — #1 AI Voice Agent Systems",
    description: "Book 30% more appointments with our AI Sales System.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EWIAILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
