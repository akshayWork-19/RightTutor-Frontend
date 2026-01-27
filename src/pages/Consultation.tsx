import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, User, Phone, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
  "7:00 PM", "8:00 PM", "9:00 PM"
];

const Consultation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !date || !time) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to book a consultation.",
        variant: "destructive"
      });
      return;
    }

    // Validate phone (basic validation)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitted(true);

    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";
      const response = await fetch(`${API_BASE_URL}/consultation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          date: date.toISOString(),
          time,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to book consultation");
      }

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setName("");
        setPhone("");
        setDate(undefined);
        setTime("");
      }, 3000);
    } catch (error) {
      console.error("Error booking consultation:", error);
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
      setIsSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 lg:pt-32">
        <section className="py-16 lg:py-24 hero-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                      Book Your <span className="text-gradient">Free</span> Consultation
                    </h1>
                    <p className="text-lg text-muted-foreground">
                      Start with a conversation. No sales pitch, no pressure – just genuine guidance to help your child succeed.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 bg-card rounded-2xl p-4 shadow-soft">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">30-Minute Session</h3>
                        <p className="text-sm text-muted-foreground">Focused discussion about your child's learning needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-card rounded-2xl p-4 shadow-soft">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Academic Advisor</h3>
                        <p className="text-sm text-muted-foreground">Speak with an expert, not a salesperson</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 bg-card rounded-2xl p-4 shadow-soft">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Quick Response</h3>
                        <p className="text-sm text-muted-foreground">We'll reach out within 24 hours to schedule</p>
                      </div>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>100% Free</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>No Obligation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Zero Spam</span>
                    </div>
                  </div>
                </div>

                {/* Form - Aligned with ConsultationModal */}
                <div className="bg-card rounded-2xl shadow-elevated w-full overflow-hidden">
                  {/* Header */}
                  <div className="bg-primary px-6 py-5 relative">
                    <h2 className="text-xl font-heading font-bold text-primary-foreground">
                      Book Free Consultation
                    </h2>
                    <p className="text-primary-foreground/80 text-sm mt-1">
                      Get personalized tutor recommendations
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="text-center py-8"
                        >
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Booking Confirmed!</h3>
                          <p className="text-muted-foreground text-sm">
                            We'll call you at {phone} on {date && format(date, "PPP")} at {time}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="space-y-4"
                        >
                          {/* Name */}
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground font-medium">
                              Your Name
                            </Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                                className="pl-10"
                                maxLength={100}
                              />
                            </div>
                          </div>

                          {/* Phone */}
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-foreground font-medium">
                              Phone Number
                            </Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                placeholder="Enter 10-digit number"
                                className="pl-10"
                              />
                            </div>
                          </div>

                          {/* Date */}
                          <div className="space-y-2">
                            <Label className="text-foreground font-medium">Select Date</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                  )}
                                >
                                  <Calendar className="mr-2 h-4 w-4" />
                                  {date ? format(date, "PPP") : "Pick a date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  disabled={(date) => date < new Date() || date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                                  initialFocus
                                  className="p-3 pointer-events-auto"
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          {/* Time */}
                          <div className="space-y-2">
                            <Label className="text-foreground font-medium">Select Time</Label>
                            <div className="grid grid-cols-3 gap-2">
                              {timeSlots.map((slot) => (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setTime(slot)}
                                  className={cn(
                                    "px-3 py-2 rounded-lg text-sm font-medium transition-all",
                                    "border-2 hover:border-primary/50",
                                    time === slot
                                      ? "bg-primary text-primary-foreground border-primary"
                                      : "bg-background text-foreground border-border hover:bg-accent"
                                  )}
                                >
                                  <Clock className="w-3 h-3 inline-block mr-1" />
                                  {slot}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Submit */}
                          <Button type="submit" variant="hero" size="lg" className="w-full mt-6">
                            Confirm Booking
                          </Button>

                          <p className="text-xs text-muted-foreground text-center">
                            No payment required • 100% Free consultation
                          </p>

                          <p className="text-[10px] text-muted-foreground text-center mt-3">
                            By booking, you agree to our{" "}
                            <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a>
                            {" "}and{" "}
                            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                          </p>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
