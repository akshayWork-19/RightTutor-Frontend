import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-1 mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl font-logo font-bold text-background">Right</span>
              <span className="text-xl sm:text-2xl font-logo font-bold text-primary">Tutor</span>
            </Link>
            <p className="text-background/70 max-w-md mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
              India's most trusted platform for finding the right tutor for your child. 
              Personalized learning, expert guidance, and lifetime support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/about" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors text-xs sm:text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm sm:text-lg mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-background/70 text-xs sm:text-sm">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-background/70 text-xs sm:text-sm break-all">hello@righttutor.in</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-xs sm:text-sm">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-background/50 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} RightTutor. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link to="/privacy" className="text-background/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
