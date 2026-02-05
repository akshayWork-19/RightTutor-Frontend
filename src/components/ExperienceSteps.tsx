import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone, Users, HeartHandshake } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";
import ConsultationModal from "./ConsultationModal";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Get Expert Guidance",
    description: "Talk to academic experts instead of salespeople, with a guaranteed no-spam consultation.",
    features: ["30-Min consultation", "Zero Cost", "Zero Spam"],
    icon: Phone,
    cta: true,
  },
  {
    number: "02",
    title: "End-to-End Assistance",
    description: "Get complete handholding from RightTutor – from the moment you book a call to the moment your child starts learning.",
    features: [
      "Understand learning gaps",
      "Compare tutor options",
      "Clarify doubts",
      "Finalize the right tutor",
      "Schedule demo class",
    ],
    icon: Users,
    cta: false,
  },
  {
    number: "03",
    title: "Lifetime Learning Support",
    description: "With RightTutor's expert team at your disposal, you and your child will always receive the support you deserve.",
    features: [],
    icon: HeartHandshake,
    cta: false,
  },
];

const ExperienceSteps = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
            The RightTutor{" "}
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            A consultation-first approach designed for meaningful academic partnerships.
          </p>
        </ScrollAnimation>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
          {steps.map((step, index) => (
            <ScrollAnimation key={step.number} delay={index * 0.15}>
              <motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-10 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    >
                      <span className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base">{step.description}</p>

                    {step.features.length > 0 && (
                      <ul className="flex flex-wrap gap-2 sm:gap-3">
                        {step.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: featureIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-secondary-foreground"
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {step.cta && (
                      <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
                        <Button
                          variant="hero"
                          size="default"
                          className="group/btn w-full sm:w-auto text-sm"
                          onClick={() => setIsModalOpen(true)}
                        >
                          Book a free call now
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                          variant="heroOutline"
                          size="default"
                          className="w-full sm:w-auto text-sm bg-white text-black hover:text-primary hover:border-primary hover:bg-white shadow-sm"
                          onClick={() => window.open('https://wa.aisensy.com/+917975649383', '_blank')}
                        >
                          <MessageCircle className="w-4 h-4" />
                          Chat on WhatsApp
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default ExperienceSteps;
