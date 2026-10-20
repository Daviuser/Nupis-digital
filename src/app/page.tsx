import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <ProblemsSection />
        <SolutionsSection />
        <MethodSection />
        <DifferentialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
