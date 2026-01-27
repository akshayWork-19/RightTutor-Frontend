import { CheckCircle } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const pricingPoints = [
  "Pricing shared after understanding the requirement",
  "No pushy sales or forced packages",
  "Pay only if the demo meets expectations",
  "Flexible plans based on learning needs",
];

const Pricing = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
            Our Pricing Philosophy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            First we understand the child. Pricing comes later.
          </p>
        </ScrollAnimation>

        {/* Pricing Points */}
        <ScrollAnimation delay={0.1} className="max-w-2xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-elevated"
          >
            <div className="space-y-3 sm:space-y-4">
              {pricingPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-foreground font-medium text-sm sm:text-base">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Pricing;
