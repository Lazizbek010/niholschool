import { motion } from "framer-motion";
import {
  MonitorPlay,
  Users,
  Shield,
  UserCheck,
  Palette,
  Bus,
} from "lucide-react";

const advantages = [
  {
    icon: MonitorPlay,
    title: "Zamonaviy sinfxonalar",
    description: "Interaktiv doskalar va zamonaviy jihozlar",
  },
  {
    icon: Users,
    title: "Tajribali ustozlar",
    description: "Yuqori malakali o'qituvchilar jamoasi",
  },
  {
    icon: Shield,
    title: "Xavfsiz muhit",
    description: "24/7 qo'riqlash va kuzatish tizimi",
  },
  {
    icon: UserCheck,
    title: "Individual yondashuv",
    description: "Har bir bolaga alohida e'tibor",
  },
  {
    icon: Palette,
    title: "Qo'shimcha to'garaklar",
    description: "Sport, san'at, musiqa va boshqa to'garaklar",
  },
  {
    icon: Bus,
    title: "Transport xizmati",
    description: "Qulay va xavfsiz transport xizmati",
  },
];

export function AdvantagesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Afzalliklar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Nega aynan biz?
          </h2>
          <p className="text-lg text-muted-foreground">
            Farzandingiz uchun eng yaxshi ta'lim muhitini yaratish uchun biz
            barchasini qilamiz
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-3xl bg-card shadow-soft-md hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <advantage.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
