import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import LiveMetrics from "@/components/LiveMetrics";
import ExpertiseDashboard from "@/components/ExpertiseDashboard";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationTimeline from "@/components/EducationTimeline";
import TechStackGrid from "@/components/TechStackGrid";
import CaseStudy from "@/components/CaseStudy";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen bg-background text-foreground dark">
    <GridBackground />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <ExecutiveSummary />
      <LiveMetrics />
      <ExpertiseDashboard />
      <ArchitectureFlow />
      <ExperienceTimeline />

      {/* 🔥 ADD EDUCATION HERE */}
      <EducationTimeline />

      <TechStackGrid />
      <CaseStudy />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
