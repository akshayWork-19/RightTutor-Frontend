import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import { useState } from "react";

const moreTestimonials = [
  {
    text: "We tried 3 different tutoring platforms before RightTutor. The difference is night and day. Finally, someone who actually understands what my son needs.",
    author: "Rahul Menon",
    role: "Parent of Class 10 Student",
    rating: 5,
  },
  {
    text: "The consultation process was so thorough. They asked questions I hadn't even thought of. The tutor they matched us with is perfect.",
    author: "Kavitha Nair",
    role: "Parent of Class 8 Student",
    rating: 5,
  },
  {
    text: "My daughter went from dreading Physics to actually enjoying it. The tutor explains concepts in a way that clicks with her learning style.",
    author: "Deepak Kumar",
    role: "Parent of Class 12 Student",
    rating: 5,
  },
  {
    text: "What I appreciate most is the ongoing support. Even after 6 months, they still check in to ensure everything is going well.",
    author: "Anita Joshi",
    role: "Parent of Class 6 Student",
    rating: 5,
  },
];

const TestimonialsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 hero-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-primary fill-primary" />
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Trusted by <span className="text-gradient">12,000+</span> Parents
              </h1>
              <p className="text-lg text-muted-foreground">
                Don't just take our word for it. Here's what parents are saying about their RightTutor experience.
              </p>
            </div>
          </div>
        </section>

        {/* Main Testimonials Component */}
        <Testimonials />

        {/* More Testimonials */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">More Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {moreTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className="bg-card rounded-2xl p-6 shadow-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-heading font-bold text-primary">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 warm-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Join Thousands of Happy Parents</h2>
              <p className="text-muted-foreground mb-8">
                Experience the RightTutor difference. Start with a free consultation today.
              </p>
              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() => setIsModalOpen(true)}
              >
                Book Your Free Consultation
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

export default TestimonialsPage;
