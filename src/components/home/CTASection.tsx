import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const PHONE_NUMBER = "+998901234567";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Farzandingiz kelajagini{" "}
            <span className="text-accent">bugundan</span> boshlang
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Bizning maktabda farzandingiz bilim oladi, do'stlar topadi va
            hayotiy ko'nikmalarni egallaydi. Hoziroq bog'laning!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground btn-accent-glow"
            >
              <Link to="/contact">
                Ro'yxatdan o'tish
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-base px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="mr-2 w-5 h-5" />
                Qo'ng'iroq qilish
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
