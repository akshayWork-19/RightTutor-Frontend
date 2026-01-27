import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Users, CreditCard, Calendar, XCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "Service Overview",
      content: "We connect students and parents with verified tutors for personalized one-on-one sessions, either offline at home or online."
    },
    {
      icon: Users,
      title: "User Responsibilities",
      items: [
        "Students and parents must provide accurate information.",
        "Tutors are expected to maintain professional conduct, punctuality, and curriculum integrity.",
        "Users must not misuse the platform for purposes outside educational engagement."
      ]
    },
    {
      icon: CreditCard,
      title: "Payment & Fees",
      items: [
        "A one-time service charge and hourly rate may apply.",
        "Payment terms (advance, monthly, or post-session) will be communicated transparently.",
        "All disputes will be addressed within a reasonable timeframe."
      ]
    },
    {
      icon: Calendar,
      title: "Session Cancellations",
      items: [
        "Any class cancellations should be informed at least 24 hours in advance.",
        "Frequent last-minute cancellations may affect continued service."
      ]
    },
    {
      icon: XCircle,
      title: "Termination",
      content: "We reserve the right to suspend or terminate accounts that violate these terms."
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer",
      content: "We do not guarantee academic performance. Success depends on the joint effort of students, tutors, and families."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4 sm:mb-6">
              <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
              Terms & Conditions
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Welcome to RightTutor. By using our platform, you agree to the following terms.
            </p>
          </motion.div>

          <div className="space-y-4 sm:space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-border/50 hover:border-primary/30 transition-colors duration-300 hover:shadow-md">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                          {index + 1}. {section.title}
                        </h2>
                        {section.content && (
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {section.content}
                          </p>
                        )}
                        {section.items && (
                          <ul className="space-y-2">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground"
          >
            <p>Last updated: January 2025</p>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
