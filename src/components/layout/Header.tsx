import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Bosh sahifa", href: "/" },
  { name: "Maktab haqida", href: "/about" },
  { name: "O'qituvchilar", href: "/teachers" },
  { name: "Natijalar", href: "/results" },
  { name: "Yangiliklar", href: "/news" },
  { name: "Aloqa", href: "/contact" },
];

const PHONE_NUMBER = "+998901234567";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"uz" | "ru">("uz");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(language === "uz" ? "ru" : "uz");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-heading font-bold text-xl">
                N
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className={cn(
                "font-heading font-bold text-lg leading-tight transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}>
                Nur Maktab
              </h1>
              <p className={cn(
                "text-xs transition-colors",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}>
                Xususiy boshlang'ich maktab
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative font-medium text-sm transition-colors hover:text-primary",
                  location.pathname === link.href
                    ? "text-primary"
                    : isScrolled
                    ? "text-foreground/80"
                    : "text-white/90",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100",
                  location.pathname === link.href && "after:scale-x-100"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:bg-primary/10",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Phone Button - Desktop */}
            <Button
              asChild
              variant="default"
              className="hidden md:flex items-center gap-2 rounded-full btn-glow"
            >
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="w-4 h-4" />
                <span>Qo'ng'iroq</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-xl transition-colors",
                isScrolled
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto container-padding py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "block py-3 px-4 rounded-xl font-medium transition-colors",
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4"
              >
                <Button asChild className="w-full rounded-xl btn-glow" size="lg">
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Qo'ng'iroq qilish
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
