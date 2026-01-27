import { FileText, Target, CalendarCheck, HelpCircle, TrendingUp } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const features = [
  { text: "Academic diagnostic report", icon: FileText },
  { text: "Custom study plan", icon: Target },
  { text: "Weekly goal setting", icon: CalendarCheck },
  { text: "Continuous doubt clearing", icon: HelpCircle },
  { text: "Monthly progress review", icon: TrendingUp },
];

const PersonalizedLearning = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
            Personalized Learning Model
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            No two students follow the same plan.
          </p>
        </ScrollAnimation>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Features List */}
            <ScrollAnimation direction="left">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-card">
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-4 sm:mb-6">Every student gets:</h3>
                <div className="space-y-2.5 sm:space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 sm:gap-4 bg-secondary rounded-lg sm:rounded-xl p-3 sm:p-4"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                      >
                        <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </motion.div>
                      <span className="font-medium text-foreground text-sm sm:text-base">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Doubt Clearing Highlight */}
            <ScrollAnimation direction="right">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-primary/5 border-2 border-primary/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 flex flex-col justify-center h-full"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                >
                  <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 sm:mb-4">
                  Doubt Clearing – Not an Afterthought
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Dedicated doubt-clearing sessions, instant doubt support, and concept re-teaching if required. 
                  Learning doesn't stop when the class ends.
                </p>
              </motion.div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedLearning;
