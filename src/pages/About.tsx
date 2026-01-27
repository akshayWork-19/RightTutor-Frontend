import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Users, Award } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import { useState } from "react";

const values = [
  {
    title: "Student First",
    description: "Every decision we make starts with what's best for the student's learning journey.",
    icon: Heart,
  },
  {
    title: "Quality Over Quantity",
    description: "We work with fewer, highly qualified tutors rather than having thousands of unvetted options.",
    icon: Award,
  },
  {
    title: "Personalized Approach",
    description: "No two students are alike. We believe in customized learning paths for every child.",
    icon: Target,
  },
  {
    title: "Family Partnership",
    description: "We partner with families throughout the learning journey, not just at the start.",
    icon: Users,
  },
];

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 hero-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                About <span className="text-gradient">RightTutor</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're on a mission to transform how parents find the right tutor for their children.
                No more trial and error. No more frustration. Just the right match, every time.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    RightTutor was born from a simple observation: finding a good tutor shouldn't feel like a lottery.
                    Too many parents were spending months trying different tutors, wasting time and money.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We built a platform that puts consultation first – understanding the student's needs before
                    recommending tutors. Our team of academic experts handpicks tutors based on teaching style,
                    experience, and compatibility.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we've helped over 12,000 families find their perfect tutor match, with a 4.9-star
                    rating from satisfied parents.
                  </p>
                </div>
                <div className="bg-card rounded-3xl p-8 shadow-elevated">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">12K+</div>
                      <p className="text-sm text-muted-foreground">Happy Families</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">5K+</div>
                      <p className="text-sm text-muted-foreground">Expert Tutors</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">4.9</div>
                      <p className="text-sm text-muted-foreground">Star Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">95%</div>
                      <p className="text-sm text-muted-foreground">Match Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 warm-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground">The principles that guide everything we do.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card rounded-2xl p-6 shadow-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Ready to Find the Right Tutor?</h2>
              <p className="text-muted-foreground mb-8">
                Start with a free consultation. No sales pitch, just genuine guidance.
              </p>
              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() => setIsModalOpen(true)}
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Footer />
    </div>
  );
};

export default About;
