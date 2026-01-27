import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TutoringExperience from "@/components/TutoringExperience";
import ExperienceSteps from "@/components/ExperienceSteps";
import Testimonials from "@/components/Testimonials";
import Subjects from "@/components/Subjects";
import Teachers from "@/components/Teachers";
import PersonalizedLearning from "@/components/PersonalizedLearning";
import TargetAudience from "@/components/TargetAudience";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TutoringExperience />
        <ExperienceSteps />
        <Testimonials />
        <Pricing />
        <Subjects />
        <Teachers />
        <PersonalizedLearning />
        <TargetAudience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
