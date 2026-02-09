import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Barchasi", "Yangiliklar", "Tadbirlar", "Qabul", "E'lonlar"];

const newsItems = [
  {
    id: 1,
    title: "2024-2025 o'quv yiliga qabul boshlandi",
    excerpt:
      "Yangi o'quv yiliga qabul boshlandi. 1-4 sinflarga o'quvchilar qabul qilinmoqda. Batafsil ma'lumot uchun bog'laning.",
    category: "Qabul",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Navro'z bayrami tadbirlari",
    excerpt:
      "Maktabimizda Navro'z bayrami munosabati bilan qiziqarli tadbirlar tashkil etildi. Bolalar milliy raqslar ijro etdilar.",
    category: "Tadbirlar",
    date: "2024-03-21",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Matematika olimpiadasi natijalari",
    excerpt:
      "Respublika matematika olimpiadasida o'quvchilarimiz yuqori natijalar ko'rsatdilar. 3 ta oltin, 5 ta kumush medal.",
    category: "Yangiliklar",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 4,
    title: "Ota-onalar yig'ilishi",
    excerpt:
      "Navbatdagi ota-onalar yig'ilishi 25-mart kuni soat 18:00 da bo'lib o'tadi. Barcha ota-onalarni taklif etamiz.",
    category: "E'lonlar",
    date: "2024-03-18",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Yangi sport zali ochildi",
    excerpt:
      "Maktabimizda zamonaviy sport zali ochildi. Endi bolalar yanada qulayroq sharoitda sport bilan shug'ullanishlari mumkin.",
    category: "Yangiliklar",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Yozgi lager dasturi",
    excerpt:
      "Yozgi ta'til davomida bolalar uchun maxsus lager dasturi tashkil etiladi. Ingliz tili, sport va ijodiy mashg'ulotlar.",
    category: "Tadbirlar",
    date: "2024-03-01",
    image: "https://images.unsplash.com/photo-1472745942893-4b9f730c7668?w=600&h=400&fit=crop",
    featured: false,
  },
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");

  const filteredNews =
    selectedCategory === "Barchasi"
      ? newsItems
      : newsItems.filter((n) => n.category === selectedCategory);

  const featuredNews = newsItems.filter((n) => n.featured);

  return (
    <Layout>
      <Helmet>
        <title>Yangiliklar - Nur Maktab</title>
        <meta
          name="description"
          content="Nur Maktab yangiliklari - tadbirlar, e'lonlar, qabul ma'lumotlari va boshqalar."
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
              Yangiliklar
            </h1>
            <p className="text-lg sm:text-xl text-white/80">
              Maktab hayotidan so'nggi yangiliklar va e'lonlar
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {featuredNews.slice(0, 2).map((news, index) => (
              <div
                key={news.id}
                className="group relative rounded-3xl overflow-hidden h-80 shadow-soft-lg"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-3">
                    {news.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-2">
                    {news.title}
                  </h2>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(news.date).toLocaleDateString("uz-UZ")}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* News Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-3xl overflow-hidden shadow-soft-md card-hover"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium">
                      <Tag className="w-3.5 h-3.5" />
                      {news.category}
                    </span>
                    <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(news.date).toLocaleDateString("uz-UZ")}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {news.excerpt}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent">
                    Batafsil
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
