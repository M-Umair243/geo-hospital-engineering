import AboutCategories from "@/components/about/about-categories";
import AboutCta from "@/components/about/about-cta";
import AboutHero from "@/components/about/about-hero";
import AboutIntro from "@/components/about/about-intro";
import AboutMissionVision from "@/components/about/about-mission-vision";
import AboutWhyChooseUs from "@/components/about/about-why-choose-us";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutIntro />
      <AboutMissionVision />
      <AboutWhyChooseUs />
      <AboutCategories />
      <AboutCta />
    </main>
  );
}
