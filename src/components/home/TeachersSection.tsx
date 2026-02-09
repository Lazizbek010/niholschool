import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const teachers = [
  {
    id: 1,
    name: "Nilufar Karimova",
    subject: "Boshlang'ich sinf o'qituvchisi",
    experience: "12 yil tajriba",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Rustam Ahmedov",
    subject: "Matematika",
    experience: "8 yil tajriba",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Malika Saidova",
    subject: "Ingliz tili",
    experience: "10 yil tajriba",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sherzod Yusupov",
    subject: "Jismoniy tarbiya",
    experience: "6 yil tajriba",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
];

export function TeachersSection() {
  return (
    <section className="section-padding bg-secondary/30">
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
            Bizning jamoa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Tajribali o'qituvchilar
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional va mehribon pedagoglar jamoasi bolalaringiz ta'limiga
            baxtiyor bo'lishadi
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-soft-md card-hover">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent">
                  <h3 className="font-heading font-bold text-lg text-white mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-1">{teacher.subject}</p>
                  <p className="text-primary text-sm font-medium">{teacher.experience}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/teachers">
              Barcha o'qituvchilar
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
