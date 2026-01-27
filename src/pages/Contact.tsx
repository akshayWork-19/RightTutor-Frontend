import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { API_BASE_URL } from "@/config";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Added

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      // toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message");
      }

      // toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      // toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210",
      subtext: "Mon-Sat, 9am-7pm",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@righttutor.in",
      subtext: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Mumbai, Maharashtra",
      subtext: "India",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat",
      subtext: "9:00 AM - 7:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 hero-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Contact <span className="text-gradient">RightTutor</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Have questions? We're here to help you find the perfect tutor for your child.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <ScrollAnimation key={info.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-foreground font-medium text-sm">{info.details}</p>
                  <p className="text-muted-foreground text-xs mt-1">{info.subtext}</p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 lg:py-20 warm-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Form */}
            <ScrollAnimation direction="left">
              <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-elevated">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form and we'll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Your Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Subject
                      </label>
                      <Input
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Your Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your child's learning needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" variant="hero" size="lg" className="w-full group">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </div>
            </ScrollAnimation>

            {/* Info Panel */}
            <ScrollAnimation direction="right">
              <div className="space-y-6">
                <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-elevated">
                  <h3 className="text-xl font-heading font-bold mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Get personalized tutor recommendations",
                      "Learn about our matching process",
                      "Discuss special learning needs",
                      "Explore pricing options",
                      "Schedule a free consultation",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Quick Response Badge */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-primary/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="font-semibold text-foreground mb-1">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 2-4 hours during business hours
                  </p>
                </motion.div>

                {/* WhatsApp CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-2xl p-6 shadow-card cursor-pointer"
                  onClick={() => window.open('https://wa.aisensy.com/+917975649383', '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Prefer WhatsApp?</h4>
                      <p className="text-sm text-muted-foreground">
                        Chat with us directly for quick answers
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
