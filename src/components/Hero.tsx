import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Users, CheckCircle, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ChatBubbleAnimation from "./ChatBubbleAnimation";
import ConsultationModal from "./ConsultationModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 overflow-hidden bg-background">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
              {/* Stats badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">4.9 Rating</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">12000+ Reviews</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground whitespace-nowrap">5000+</span>
                  <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">Expert Tutors</span>
                </div>
              </motion.div>


              {/* Main headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="space-y-4"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
                  The Right{" "}
                  <span className="text-primary">Tutor</span>
                  <br />
                  For Your Child
                </h1>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex justify-center lg:justify-start"
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="group rounded-full px-5 sm:px-6 md:px-8 text-sm sm:text-base"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="whitespace-nowrap">No sales pitch</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="whitespace-nowrap">Verified tutors only</span>
                </div>
              </motion.div>

              {/* Parent faces */}
            </div>

            {/* Right Content - Chat Animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-first lg:order-last max-w-md mx-auto lg:max-w-none w-full"
            >
              <ChatBubbleAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
