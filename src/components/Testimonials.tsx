import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: "RightTutor helped my child regain confidence in Maths. The personalized approach made all the difference. The teacher takes time to understand where my daughter struggles.",
    author: "Priya Sharma",
    role: "Parent of Class 9 Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "The tutor matching was excellent. They really understood my son's learning style and found someone who could connect with him. Grades improved within 2 months!",
    author: "Amit Patel",
    role: "Parent of Class 11 Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "What I love most is the ongoing support. Even after classes started, the team checks in regularly to ensure everything is going smoothly.",
    author: "Sunita Reddy",
    role: "Parent of Class 7 Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "My daughter was struggling with Physics. RightTutor matched her with a tutor who explains concepts through real-life examples. She now loves the subject!",
    author: "Rajesh Kumar",
    role: "Parent of Class 12 Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "The consultation call was so helpful. They didn't try to sell, they genuinely understood our needs first. Rare to find such honest service.",
    author: "Meera Iyer",
    role: "Parent of Class 6 Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "We tried 3 different tutoring platforms before RightTutor. This is the only one where we felt heard and supported throughout the journey.",
    author: "Vikram Singh",
    role: "Parent of Class 10 Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "The tutor they matched for Chemistry is phenomenal. My son's marks went from 65 to 92 in just one term. Couldn't be happier!",
    author: "Anita Desai",
    role: "Parent of Class 11 Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "What sets RightTutor apart is their follow-up. They check every month if we're happy. This level of care is unmatched.",
    author: "Sanjay Gupta",
    role: "Parent of Class 8 Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "My twins have different learning styles. RightTutor matched each with a different tutor suited to their needs. Brilliant approach!",
    author: "Kavitha Menon",
    role: "Parent of Class 5 Students",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  },
  {
    text: "From booking to the first class, everything was seamless. The team guided us at every step. Highly recommend to all parents!",
    author: "Nikhil Joshi",
    role: "Parent of Class 9 Student",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      slidesToScroll: 1,
      dragFree: true,
      containScroll: "trimSnaps",
      duration: 30,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-10 sm:py-12 lg:py-24 warm-gradient overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-3 sm:mb-4">
            What Parents Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Join thousands of happy parents who found the right tutor for their child
          </p>
        </ScrollAnimation>

        {/* Stats Card */}
        <ScrollAnimation delay={0.1} className="max-w-sm mx-auto mb-8 lg:mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-elevated text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="bg-primary/10 px-3 py-1 rounded-full">
                <span className="text-xs font-semibold text-primary">Google Reviews</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-foreground mb-1"
            >
              4.9
            </motion.div>
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold text-foreground">12,000+</span> reviews
            </p>
          </motion.div>
        </ScrollAnimation>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={scrollPrev}
              className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card rounded-full shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card rounded-full shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-x" ref={emblaRef}>
            <div className="flex gap-3 sm:gap-4 lg:gap-6 ml-0 touch-pan-x" style={{ touchAction: 'pan-x' }}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  className="flex-shrink-0 w-[80%] sm:w-[45%] lg:w-[32%] select-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-card hover:shadow-elevated transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Rating Stars */}
                    <div className="flex items-center gap-0.5 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />
                      ))}
                    </div>
                    
                    <Quote className="w-6 h-6 text-primary/20 mb-2 flex-shrink-0" />
                    <p className="text-foreground text-sm leading-relaxed flex-grow mb-4">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-primary/20"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.author)}&background=random`;
                        }}
                      />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-6 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  selectedIndex === index 
                    ? "bg-primary w-6" 
                    : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Faces Row - Social Proof */}
        <ScrollAnimation delay={0.3} className="mt-10 lg:mt-16">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center -space-x-3">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <motion.img
                  key={testimonial.author}
                  src={testimonial.avatar}
                  alt=""
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-background object-cover"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  loading="lazy"
                />
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold border-2 border-background"
              >
                +5K
              </motion.div>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              Trusted by <span className="font-semibold text-foreground">5,000+</span> happy parents across India
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Testimonials;