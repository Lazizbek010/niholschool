import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Zamonaviy ta'lim",
    description: "Eng ilg'or o'qitish metodlari",
  },
  {
    icon: Users,
    title: "Kichik sinflar",
    description: "Har bir o'quvchiga alohida e'tibor",
  },
  {
    icon: Trophy,
    title: "Yuqori natijalar",
    description: "Olimpiada g'oliblari tayyorlaymiz",
  },
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Biz haqimizda
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Bolangiz kelajagi uchun{" "}
              <span className="text-primary">eng yaxshi tanlov</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nur Maktab — 2015-yildan beri faoliyat yuritayotgan zamonaviy xususiy
              boshlang'ich maktab. Biz har bir bolaning individual qobiliyatlarini
              rivojlantirish va mustahkam ta'lim poydevorini yaratishga intilamiz.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tajribali o'qituvchilar jamoamiz, zamonaviy o'quv dasturlari va
              qulay ta'lim muhiti farzandingizning muvaffaqiyatli kelajagi uchun
              barcha sharoitlarni yaratadi.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/about">
                Batafsil
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-card shadow-soft-md hover:shadow-soft-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
