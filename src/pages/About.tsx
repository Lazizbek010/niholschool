import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Target,
  Eye,
  Award,
  Users,
  ArrowRight,
  Quote,
} from "lucide-react";

const facilities = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop",
];

const values = [
  {
    icon: BookOpen,
    title: "Sifatli ta'lim",
    description: "Davlat standartlariga mos va zamonaviy o'quv dasturlari",
  },
  {
    icon: Users,
    title: "Individual yondashuv",
    description: "Har bir bolaning qobiliyatlarini rivojlantirish",
  },
  {
    icon: Award,
    title: "Professional jamoa",
    description: "Yuqori malakali va tajribali o'qituvchilar",
  },
];

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>Maktab haqida - Nur Maktab</title>
        <meta
          name="description"
          content="Nur Maktab - 2015-yildan beri faoliyat yuritayotgan zamonaviy xususiy boshlang'ich maktab. Missiya, qadriyatlar va ta'lim metodologiyasi."
        />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="container mx-auto container-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Biz haqimizda
            </h1>
            <p className="text-lg sm:text-xl text-white/80">
              2015-yildan beri minglab bolalarga sifatli ta'lim berib kelmoqdamiz
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Bizning tarix
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
                10 yillik tajriba va <span className="text-primary">ishonch</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nur Maktab 2015-yilda Toshkent shahrida tashkil etilgan. Bizning
                maqsadimiz — har bir bolaga sifatli ta'lim va tarbiya berish,
                ularning qobiliyatlarini rivojlantirish va kelajakka mustahkam
                poydevor yaratish.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bugungi kunda bizning maktabda 450 dan ortiq o'quvchi tahsil
                olmoqda. Ularning ko'pchiligi turli olimpiada va tanlovlarda
                yuqori natijalarni ko'rsatmoqda.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-2xl bg-secondary/50">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Yil tajriba</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-secondary/50">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">450+</div>
                  <div className="text-sm text-muted-foreground">O'quvchilar</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-secondary/50">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">O'qituvchilar</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {facilities.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className={`rounded-3xl overflow-hidden shadow-soft-md ${
                    index === 0 ? "col-span-2" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`Maktab binosi ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-primary text-white"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Missiyamiz</h3>
              <p className="text-white/80 leading-relaxed">
                Har bir bolaga yuqori sifatli ta'lim berish, ularning
                intellektual, ijodiy va jismoniy rivojlanishini ta'minlash,
                jamiyatga foydali, mustaqil fikrlaydigan shaxslarni tarbiyalash.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-accent text-accent-foreground"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Qarashimiz</h3>
              <p className="opacity-90 leading-relaxed">
                O'zbekistonning eng yetakchi xususiy boshlang'ich maktabiga
                aylanish, xalqaro standartlarga mos ta'lim berish va har bir
                bitiruvchining muvaffaqiyatli kelajagini ta'minlash.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Qadriyatlarimiz
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Bizning asosiy tamoyillarimiz
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-card shadow-soft-md text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Director Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/50 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop&crop=face"
                  alt="Direktor"
                  className="w-full max-w-[280px] mx-auto rounded-3xl shadow-soft-lg"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-2">
                <Quote className="w-12 h-12 text-primary/30 mb-6" />
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  "Biz har bir bolani o'z farzandimiz kabi ko'ramiz. Bizning
                  maqsadimiz — nafaqat bilim berish, balki bolalarni hayotga
                  tayyorlash, ularda ijodkorlik, mustaqil fikrlash va
                  mas'uliyatlilik hislarini rivojlantirish."
                </p>
                <div>
                  <h4 className="font-heading font-bold text-xl text-foreground">
                    Gulnora Rashidova
                  </h4>
                  <p className="text-muted-foreground">Maktab direktori</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
            Maktabimizga tashrif buyuring
          </h2>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link to="/contact">
              Bog'lanish
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
