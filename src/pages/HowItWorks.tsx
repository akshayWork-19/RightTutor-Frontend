import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceSteps from "@/components/ExperienceSteps";
import ConsultationModal from "@/components/ConsultationModal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const HowItWorks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 hero-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                How <span className="text-gradient">RightTutor</span> Works
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                A simple, consultation-first approach to finding the perfect tutor for your child.
                No guesswork, no trial-and-error.
              </p>
              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Steps */}
        <ExperienceSteps />

        {/* Additional Info */}
        <section className="py-16 lg:py-24 warm-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-3xl p-8 shadow-elevated">
                  <h3 className="text-2xl font-heading font-bold mb-4">What Makes Us Different?</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">1</span>
                      </span>
                      <span>We understand your child's needs before suggesting tutors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">2</span>
                      </span>
                      <span>Academic experts, not sales teams, guide your journey</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary text-sm font-bold">3</span>
                      </span>
                      <span>Continuous support even after classes begin</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/5 border-2 border-primary/20 rounded-3xl p-8">
                  <h3 className="text-2xl font-heading font-bold mb-4">Frequently Asked</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">How long does the process take?</h4>
                      <p className="text-sm text-muted-foreground">Most families find their perfect tutor within 2-3 days of the initial consultation.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">What if the tutor isn't a good fit?</h4>
                      <p className="text-sm text-muted-foreground">We offer free re-matching until you find the right fit. No questions asked.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Is the consultation really free?</h4>
                      <p className="text-sm text-muted-foreground">Yes, 100% free with no obligation to proceed. We believe in earning your trust first.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HowItWorks;
