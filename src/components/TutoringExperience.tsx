import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight, MessageCircle, User } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import ConsultationModal from "./ConsultationModal";
import { useState } from "react";

const comparisonData = [
  {
    title: "Shortlisting",
    description: "Identifying a tutor that best suits your child's learning needs",
    rightTutor: "Get 2-3 carefully selected teacher recommendations, backed by clear explanations tailored to your child",
    others: "Minimal or no human guidance, with tutors recommended based on availability",
  },
  {
    title: "Demo Class",
    description: "The most critical step – ensuring the right fit",
    rightTutor: "Expert assistance with demo scheduling, style matching, and detailed feedback",
    others: "No guidance provided, higher risk of mismatch",
  },
  {
    title: "Ongoing Support",
    description: "After classes begin",
    rightTutor: "Regular progress reviews, doubt clearing sessions, and parent updates",
    others: "No support for progress tracking, re-matching is slow and tedious",
  },
];

const TutoringExperience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-12 lg:py-24 warm-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
            Tutoring Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            What parents experience throughout their tutoring journey with RightTutor versus other platforms
          </p>
        </ScrollAnimation>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          {/* Header - Mobile Stacked */}
          <ScrollAnimation delay={0.1}>
            <div className="hidden md:grid grid-cols-3 gap-4 mb-2">
              <div />
              <div className="bg-primary text-primary-foreground rounded-2xl p-4 lg:p-6 text-center shadow-glow">
                <h3 className="text-lg lg:text-xl font-heading font-bold">RightTutor</h3>
              </div>
              <div className="bg-muted rounded-2xl p-4 lg:p-6 text-center">
                <h3 className="text-lg lg:text-xl font-heading font-bold text-muted-foreground">Other Platforms</h3>
              </div>
            </div>
            {/* Trust Indicators Below Headers */}
            <div className="hidden md:grid grid-cols-3 gap-4 mb-8">
              <div />
              <div className="flex items-center justify-center -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/150?img=33"
                    alt="Teacher 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
                  <img
                    src="https://i.pravatar.cc/150?img=47"
                    alt="Teacher 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center -space-x-3">
                <div className="w-10 h-10 rounded-full bg-muted-foreground/20 border-2 border-muted-foreground/30 flex items-center justify-center">
                  <User className="w-5 h-5 text-muted-foreground/40" />
                </div>
                <div className="w-10 h-10 rounded-full bg-muted-foreground/20 border-2 border-muted-foreground/30 flex items-center justify-center">
                  <User className="w-5 h-5 text-muted-foreground/40" />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Comparison Rows */}
          <div className="space-y-4 sm:space-y-6">
            {comparisonData.map((item, index) => (
              <ScrollAnimation key={item.title} delay={0.15 + index * 0.1}>
                {/* Mobile View - Stacked */}
                <div className="md:hidden space-y-3">
                  <div className="bg-card rounded-xl p-4 shadow-card">
                    <h4 className="font-heading font-bold text-base mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-3">
                      <p className="text-[10px] font-semibold text-primary mb-1">RightTutor</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-[11px] text-foreground leading-relaxed">{item.rightTutor}</p>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-3">
                      <p className="text-[10px] font-semibold text-muted-foreground mb-1">Others</p>
                      <div className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <p className="text-[11px] text-muted-foreground leading-relaxed">{item.others}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop View - Grid */}
                <div className="hidden md:grid grid-cols-3 gap-4">
                  <div className="bg-card rounded-2xl p-5 lg:p-6 shadow-card">
                    <h4 className="font-heading font-bold text-base lg:text-lg mb-2">{item.title}</h4>
                    <p className="text-xs lg:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-5 lg:p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs lg:text-sm text-foreground">{item.rightTutor}</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-2xl p-5 lg:p-6">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <p className="text-xs lg:text-sm text-muted-foreground">{item.others}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollAnimation delay={0.5} className="mt-8 lg:mt-16 text-center">
            <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-elevated">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-3 sm:mb-4">
                Give Your Child the Teacher They Deserve
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                Start with a conversation. We'll guide you from there.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="group w-full sm:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book a Free Diagnostic Session
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  type="button"
                  asChild
                >
                  <a href="https://wa.aisensy.com/+917975649383" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Speak to an Advisor
                  </a>
                </Button>
              </div>
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Free & obligation-free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No sales pitch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Limited slots</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default TutoringExperience;
