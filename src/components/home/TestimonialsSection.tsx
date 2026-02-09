import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Dilnoza Rahimova",
    role: "3-sinf o'quvchisi onasi",
    content:
      "Farzandim bu maktabda o'qishni boshlagan kundan beri juda katta o'zgarishlar ko'rdim. O'qituvchilar juda mehribon va professional. Tavsiya qilaman!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Alisher Toshmatov",
    role: "2-sinf o'quvchisi otasi",
    content:
      "Maktabning zamonaviy jihozlari va individual yondashuvi menga juda yoqadi. O'g'lim har kuni maktabga quvonch bilan boradi.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Sevara Karimova",
    role: "1-sinf o'quvchisi onasi",
    content:
      "Bu maktab bola tarbiyasiga juda katta e'tibor beradi. O'qituvchilar har bir bolaga alohida yondashadi. Juda minnatdorman!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Jamshid Ergashev",
    role: "4-sinf o'quvchisi otasi",
    content:
      "O'g'lim olimpiadalarda yaxshi natijalarga erishdi. Bu maktab ustozlariga rahmat! Professional jamoa va ajoyib natijalar.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            Fikr-mulohazalar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Ota-onalar fikrlari
          </h2>
          <p className="text-lg text-muted-foreground">
            Bizning maktab haqida ota-onalarning samimiy fikrlari
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-card rounded-3xl p-8 shadow-soft-md h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6 flex-1">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
