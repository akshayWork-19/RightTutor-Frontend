import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Database, Settings, Share2, UserCheck, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      intro: "We may collect:",
      items: [
        "Name, email address, phone number",
        "Location and address details for home sessions",
        "Student academic details (grade, subjects, school board)",
        "Tutor qualifications and background",
        "Session feedback and usage data"
      ]
    },
    {
      icon: Settings,
      title: "How We Use Your Information",
      items: [
        "To connect students with suitable tutors",
        "To improve our services and personalize user experience",
        "For communication related to classes, billing, or support",
        "To ensure safety, compliance, and service quality"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: "We implement appropriate technical and organizational safeguards to secure your personal data. However, no method is 100% secure."
    },
    {
      icon: Share2,
      title: "Data Sharing",
      intro: "We do not sell your information. We may share data only with:",
      items: [
        "Verified tutors/students for matching purposes",
        "Payment partners and backend service providers",
        "Authorities if required by law"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      intro: "You can request to:",
      items: [
        "Access or correct your data",
        "Delete your account and related information",
        "Opt out of marketing communication"
      ]
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
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              At RightTutor, we value your privacy and are committed to protecting the personal information you share with us.
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
                        {section.intro && (
                          <p className="text-sm sm:text-base text-muted-foreground mb-2">
                            {section.intro}
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

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-6 sm:mt-8"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-foreground font-medium mb-1">
                      Have questions about your privacy?
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Contact us at:{" "}
                      <a 
                        href="mailto:connect@righttutor.in" 
                        className="text-primary hover:underline font-medium"
                      >
                        connect@righttutor.in
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

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

export default PrivacyPolicy;
