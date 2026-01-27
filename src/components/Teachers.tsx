import { Award, BookOpen, ShieldCheck, Video, Heart, Users, MessageSquare, Lightbulb } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const qualifications = [
  {
    title: "5–10+ Years Experience",
    description: "Minimum 5 years of dedicated teaching experience",
    icon: Award,
  },
  {
    title: "Subject-Matter Experts",
    description: "Deep knowledge in their respective domains",
    icon: BookOpen,
  },
  {
    title: "Verified & Background Checked",
    description: "Thorough credential verification process",
    icon: ShieldCheck,
  },
  {
    title: "1:1 Online Teaching Trained",
    description: "Specialized in personalized online instruction",
    icon: Video,
  },
];

const parentLoves = [
  { text: "Same teacher continuity", icon: Users },
  { text: "Clear communication", icon: MessageSquare },
  { text: "Focus on concepts, not rote learning", icon: Lightbulb },
];

const Teachers = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 warm-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
            Who Teaches on RightTutor?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Our teachers are experienced professionals, not fresh graduates or part-timers.
          </p>
        </ScrollAnimation>

        {/* Qualifications Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {qualifications.map((qual, index) => (
            <ScrollAnimation key={qual.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-card hover:shadow-elevated transition-all duration-300 h-full"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                >
                  <qual.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </motion.div>
                <h3 className="text-sm sm:text-base lg:text-lg font-heading font-bold mb-1 sm:mb-2">{qual.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{qual.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* What Parents Love */}
        <ScrollAnimation delay={0.4} className="max-w-3xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-elevated"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-heading font-bold">What Parents Love</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {parentLoves.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2.5 sm:gap-3 bg-secondary rounded-lg sm:rounded-xl p-3 sm:p-4"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
              <p className="text-muted-foreground italic text-center text-sm sm:text-base">
                "The personalized approach made all the difference for my child."
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground text-center mt-2">
                — Parent of Class 9 Student
              </p>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Teachers;
