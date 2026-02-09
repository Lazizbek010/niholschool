import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Trophy, Medal, Award, Star } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "Respublika matematika olimpiadasi",
    place: "1-o'rin",
    student: "Aziza Rahimova, 4-sinf",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    year: "2024",
    title: "Shahar ingliz tili tanlovi",
    place: "2-o'rin",
    student: "Jasur Karimov, 3-sinf",
    icon: Medal,
    color: "text-gray-400",
  },
  {
    year: "2023",
    title: "Viloyat ona tili olimpiadasi",
    place: "1-o'rin",
    student: "Madina Tosheva, 4-sinf",
    icon: Trophy,
    color: "text-yellow-500",
  },
  {
    year: "2023",
    title: "Respublika sport musobaqasi",
    place: "3-o'rin",
    student: "Amir Yusupov, 4-sinf",
    icon: Award,
    color: "text-amber-600",
  },
];

const stats = [
  { value: "120+", label: "Olimpiada g'oliblari" },
  { value: "50+", label: "Sertifikatlar" },
  { value: "98%", label: "Muvaffaqiyatli bitiruvchilar" },
  { value: "15+", label: "Xalqaro tanlovlar" },
];

const successStories = [
  {
    name: "Aziza Rahimova",
    achievement: "Respublika matematika olimpiadasi g'olibi",
    story:
      "Aziza 1-sinfdan boshlab bizning maktabda o'qiydi. Matematikaga bo'lgan qiziqishi va o'qituvchilar yordami tufayli respublika olimpiadasida birinchi o'rinni egalladi.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Jasur Karimov",
    achievement: "Ingliz tili bo'yicha shahar chempioni",
    story:
      "Jasur 3 yil davomida ingliz tilini o'rganib, shahar tanlovida ikkinchi o'rinni qo'lga kiritdi. Hozir u xalqaro imtihonlarga tayyorgarlik ko'rmoqda.",
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=300&h=300&fit=crop&crop=face",
  },
];

const certificates = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=400&h=300&fit=crop",
];

const Results = () => {
  return (
    <Layout>
      <Helmet>
        <title>Natijalar - Nur Maktab</title>
        <meta
          name="description"
          content="Nur Maktab o'quvchilarining yutuqlari - olimpiada g'oliblari, sertifikatlar, muvaffaqiyat tarixi."
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
              Bizning natijalar
            </h1>
            <p className="text-lg sm:text-xl text-white/80">
              O'quvchilarimizning muvaffaqiyatlari biz uchun eng katta mukofot
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card shadow-soft-sm"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Yutuqlar
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              So'nggi muvaffaqiyatlar
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-card shadow-soft-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <achievement.icon className={`w-7 h-7 ${achievement.color}`} />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">
                    {achievement.year}
                  </span>
                  <h3 className="font-heading font-bold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">{achievement.place}</p>
                  <p className="text-sm text-muted-foreground">{achievement.student}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Muvaffaqiyat tarixi
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              O'quvchilarimiz haqida
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-3xl bg-secondary/50"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-1">
                    {story.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {story.achievement}
                  </p>
                  <p className="text-muted-foreground text-sm">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Galereya
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Sertifikatlar va diplomlar
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-soft-md hover:shadow-soft-lg transition-shadow"
              >
                <img
                  src={cert}
                  alt={`Sertifikat ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Results;
