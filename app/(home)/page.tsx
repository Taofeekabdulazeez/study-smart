import Footer from "@/components/pages/home/footer";
import Header from "@/components/pages/home/header";
import SectionFAQs from "@/components/pages/home/section-FAQs";
import SectionCTA from "@/components/pages/home/section-cta";
import SectionFeatures from "@/components/pages/home/section-features";
import SectionHero from "@/components/pages/home/section-hero";
import SectionPricing from "@/components/pages/home/section-pricing";
import SectionTestimonials from "@/components/pages/home/section-testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionFeatures />
      <SectionFAQs />
      <SectionPricing />
      <SectionTestimonials />
      <SectionCTA />
      <Footer />
    </>
  );
}
