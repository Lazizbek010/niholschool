import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: heroImage1,
    title: "Kelajak bilimdan boshlanadi",
    subtitle: "1–4 sinf o'quvchilari uchun zamonaviy xususiy maktab",
  },
  {
    image: heroImage2,
    title: "Ijodkorlik va ilm birligi",
    subtitle: "Har bir bolaning iste'dodini kashf etamiz",
  },
  {
    image: heroImage3,
    title: "Xavfsiz va quvnoq muhit",
    subtitle: "Bolalar uchun eng yaxshi ta'lim muhiti",
  },
];

const PHONE_NUMBER = "+998901234567";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-foreground/70" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto container-padding">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                  >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                      {slide.subtitle}
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
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
                        className="rounded-full text-base px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                      >
                        <a href={`tel:${PHONE_NUMBER}`}>
                          <Phone className="mr-2 w-5 h-5" />
                          Bog'lanish
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
