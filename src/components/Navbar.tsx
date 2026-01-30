import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/10"
        : "bg-background border-b border-border/20"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-14 sm:h-16 lg:h-16" : "h-16 sm:h-18 lg:h-[72px]"
          }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <span className={`font-logo font-bold text-foreground transition-all duration-300 ${isScrolled ? "text-lg sm:text-xl lg:text-2xl" : "text-xl sm:text-2xl"
              }`}>Right</span>
            <span className={`font-logo font-bold text-primary transition-all duration-300 ${isScrolled ? "text-lg sm:text-xl lg:text-2xl" : "text-xl sm:text-2xl"
              }`}>Tutor</span>
          </Link>

          {/* Tablet Navigation - Compact */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm xl:text-[15px] font-medium transition-colors duration-200 ${isActive(link.href)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Tablet CTA */}
          <div className="hidden md:flex lg:hidden items-center gap-2">
            <Link to="/consultation">
              <Button
                variant="default"
                size="sm"
                className={`rounded-full font-medium transition-all duration-300 ${isScrolled ? "px-4 h-8 text-xs" : "px-5 h-9 text-sm"
                  }`}
              >
                Book Demo
              </Button>
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button
                variant="outline"
                size="sm"
                className={`rounded-full border-border hover:bg-muted/50 font-medium transition-all duration-300 ${isScrolled ? "px-5 h-9" : "px-6 h-10"
                  }`}
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/consultation">
              <Button
                variant="default"
                size="sm"
                className={`rounded-full bg-primary hover:bg-primary/90 font-medium transition-all duration-300 ${isScrolled ? "px-5 h-9" : "px-6 h-10"
                  }`}
              >
                Book Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground rounded-full hover:bg-muted/50 transition-colors z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-14 sm:top-16 bg-background z-40"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex flex-col h-full px-4 sm:px-6 pt-6 sm:pt-8 pb-6 sm:pb-8"
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-0.5 sm:gap-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 + 0.1, duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      to={link.href}
                      className={`block text-base sm:text-lg font-medium py-3 sm:py-4 px-3 sm:px-4 rounded-xl transition-all duration-200 ${isActive(link.href)
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:bg-muted/50"
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="h-px bg-border/30 my-4 sm:my-6 origin-left"
              />

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.3 }}
                className="flex flex-col gap-2 sm:gap-3"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-full text-sm sm:text-base h-10 sm:h-12 border-border font-medium"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link to="/consultation" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full rounded-full text-sm sm:text-base h-10 sm:h-12 bg-primary hover:bg-primary/90 font-medium"
                  >
                    Book Free Demo
                  </Button>
                </Link>
              </motion.div>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.3 }}
                className="mt-auto text-center"
              >
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Premium 1-on-1 Online Tutoring
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
