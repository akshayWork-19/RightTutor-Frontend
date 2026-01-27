import { Calculator, FlaskConical, Atom, Leaf, Trophy } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const subjects = [
  { name: "Mathematics", icon: Calculator },
  { name: "Chemistry", icon: FlaskConical },
  { name: "Physics", icon: Atom },
  { name: "Biology", icon: Leaf },
  { name: "Competitive Exams", icon: Trophy },
];

const grades = [
  {
    title: "Class 6–10",
    description: "CBSE / ICSE / State Boards",
  },
  {
    title: "Class 11–12",
    description: "Science & Commerce",
  },
  {
    title: "Competitive Foundation",
    description: "Olympiads, NTSE, etc.",
  },
];

const Subjects = () => {
  return (
    <section className="py-12 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollAnimation className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
            Subjects & Grades We Cover
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            If you have a custom requirement, we'll build a plan for it.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 sm:gap-3 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <subject.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="font-medium text-foreground text-sm sm:text-base">{subject.name}</span>
              </motion.div>
            ))}
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {grades.map((grade, index) => (
            <ScrollAnimation key={grade.title} delay={0.2 + index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-card"
              >
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-1 sm:mb-2">{grade.title}</h3>
                <p className="text-muted-foreground text-sm">{grade.description}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
