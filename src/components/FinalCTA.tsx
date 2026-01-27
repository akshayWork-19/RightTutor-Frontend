import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";
import ConsultationModal from "./ConsultationModal";
import { useState } from "react";

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-12 sm:py-16 lg:py-24 warm-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-elevated text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mb-3 sm:mb-4"
            >
              Give Your Child the Teacher They Deserve
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-5 sm:mb-8 max-w-2xl mx-auto"
            >
              Start with a conversation. We'll guide you from there.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-8"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="lg"
                  className="group w-full sm:w-auto text-sm sm:text-base"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book a Free Diagnostic Session
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Speak to an Advisor
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground"
            >
              {[
                "Free & obligation-free",
                "No sales pitch",
                "Limited slots",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-1.5 sm:gap-2"
                >
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ScrollAnimation>
      </div>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default FinalCTA;
