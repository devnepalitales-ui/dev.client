import type { Metadata } from "next";
import { OurStorySection } from "@/components/about/OurStorySection";
import { MomoGharStorySection } from "@/components/about/MomoGharStorySection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    "The journey of Nepali Tales: from Momo Ghar and Indo-Bhutan family kitchens to authentic handcrafted momo and artisanal chilli oil in Thane.",
  openGraph: {
    title: `About Us - ${siteConfig.name}`,
    description:
      "What started in family kitchens in Jaigaon became a dream of bringing that same simple, soulful taste to every plate.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `About Us - ${siteConfig.name}`,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <OurStorySection />
      <MomoGharStorySection />
    </main>
  );
}
