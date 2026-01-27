import { User, RefreshCw, BookOpen, Rocket } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const audiences = [
  {
    title: "Students who need personal attention",
    description: "One-on-one focus that group classes can't provide",
    icon: User,
  },
  {
    title: "Parents tired of trial-and-error tutors",
    description: "End the cycle of frequent tutor changes",
    icon: RefreshCw,
  },
  {
    title: "Students struggling with concepts",
    description: "Build strong foundations, not just exam scores",
    icon: BookOpen,
  },
  {
    title: "High-performing students aiming for top scores",
    description: "Push boundaries with expert guidance",
    icon: Rocket,
  },
];

const TargetAudience = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 warm-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
            Who Is RightTutor For?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            If quality matters, RightTutor is for you.
          </p>
        </ScrollAnimation>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <ScrollAnimation key={audience.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-card hover:shadow-elevated transition-all duration-300 group h-full"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                  >
                    <audience.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-heading font-bold mb-1 sm:mb-2">{audience.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{audience.description}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
