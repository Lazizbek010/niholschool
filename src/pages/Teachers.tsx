import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

const subjects = [
  "Barchasi",
  "Boshlang'ich sinf",
  "Matematika",
  "Ingliz tili",
  "Rus tili",
  "Jismoniy tarbiya",
  "Musiqa",
  "Tasviriy san'at",
];

const teachers = [
  {
    id: 1,
    name: "Nilufar Karimova",
    subject: "Boshlang'ich sinf",
    experience: "12 yil tajriba",
    education: "Toshkent Davlat Pedagogika Universiteti",
    bio: "Boshlang'ich ta'lim bo'yicha yuqori toifali o'qituvchi. 500 dan ortiq o'quvchini o'qitgan.",
    achievements: ["Eng yaxshi pedagog 2023", "100+ olimpiada g'oliblari tayyorlagan"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Rustam Ahmedov",
    subject: "Matematika",
    experience: "8 yil tajriba",
    education: "O'zbekiston Milliy Universiteti",
    bio: "Matematika fanidan mutaxassis. Olimpiada g'oliblarini tayyorlashda katta tajribaga ega.",
    achievements: ["Respublika olimpiadasi g'oliblari murabbiysi", "Ilmiy maqolalar muallifi"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Malika Saidova",
    subject: "Ingliz tili",
    experience: "10 yil tajriba",
    education: "Jahon tillari universiteti",
    bio: "IELTS 8.0, Cambridge sertifikatli o'qituvchi. Kommunikativ metodika asosida dars beradi.",
    achievements: ["Cambridge sertifikati", "200+ o'quvchi ingliz tilini o'rgangan"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sherzod Yusupov",
    subject: "Jismoniy tarbiya",
    experience: "6 yil tajriba",
    education: "O'zbekiston Davlat Jismoniy Tarbiya Instituti",
    bio: "Professional sport murabbiysi. Bolalar sport bo'yicha ko'plab musobaqalar g'oliblarini tayyorlagan.",
    achievements: ["Sport ustasi", "Shahar chempionligi g'oliblari murabbiysi"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Dilfuza Rahmonova",
    subject: "Boshlang'ich sinf",
    experience: "15 yil tajriba",
    education: "Toshkent Davlat Pedagogika Universiteti",
    bio: "Tajribali pedagog, metodist. Yangi o'qitish usullarini joriy etishda faol ishtirok etadi.",
    achievements: ["Faxriy yorliq sohibi", "Metodist-pedagog"],
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Aziz Nazarov",
    subject: "Rus tili",
    experience: "7 yil tajriba",
    education: "Mirzo Ulug'bek nomidagi O'zMU",
    bio: "Rus tili va adabiyoti mutaxassisi. Interaktiv dars berish metodikasi bo'yicha mutaxassis.",
    achievements: ["Til olimpiadasi g'oliblari murabbiysi"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 7,
    name: "Zarina Alimova",
    subject: "Musiqa",
    experience: "9 yil tajriba",
    education: "Davlat Konservatoriyasi",
    bio: "Professional musiqachi, fortepiano o'qituvchisi. Bolalarda musiqiy did tarbiyalashda tajribali.",
    achievements: ["Konservatoriya diplomanti", "Bolalar ansambli rahbari"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 8,
    name: "Bobur Karimov",
    subject: "Tasviriy san'at",
    experience: "5 yil tajriba",
    education: "Kamoliddin Behzod nomidagi milliy rassomlik va dizayn instituti",
    bio: "Professional rassom va dizayner. Bolalarda ijodiy qobiliyatlarni rivojlantirish bo'yicha mutaxassis.",
    achievements: ["Ko'rgazma ishtirokchisi", "Bolalar rassom to'garagi rahbari"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

const Teachers = () => {
  const [selectedSubject, setSelectedSubject] = useState("Barchasi");
  const [selectedTeacher, setSelectedTeacher] = useState<typeof teachers[0] | null>(null);

  const filteredTeachers =
    selectedSubject === "Barchasi"
      ? teachers
      : teachers.filter((t) => t.subject === selectedSubject);

  return (
    <Layout>
      <Helmet>
        <title>O'qituvchilar - Nur Maktab</title>
        <meta
          name="description"
          content="Nur Maktab o'qituvchilari - tajribali va professional pedagoglar jamoasi. Har bir fan bo'yicha malakali mutaxassislar."
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
              O'qituvchilarimiz
            </h1>
            <p className="text-lg sm:text-xl text-white/80">
              Professional va mehribon pedagoglar jamoasi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {subjects.map((subject) => (
              <Button
                key={subject}
                variant={selectedSubject === subject ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
              </Button>
            ))}
          </motion.div>

          {/* Teachers Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedTeacher(teacher)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-card shadow-soft-md card-hover">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 via-foreground/60 to-transparent">
                    <h3 className="font-heading font-bold text-lg text-white mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-1">{teacher.subject}</p>
                    <p className="text-primary text-sm font-medium">
                      {teacher.experience}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Modal */}
      <Dialog open={!!selectedTeacher} onOpenChange={() => setSelectedTeacher(null)}>
        <DialogContent className="max-w-2xl">
          {selectedTeacher && (
            <>
              <DialogHeader>
                <DialogTitle className="sr-only">{selectedTeacher.name}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedTeacher.image}
                    alt={selectedTeacher.name}
                    className="w-full rounded-2xl"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                    {selectedTeacher.name}
                  </h2>
                  <p className="text-primary font-medium mb-1">{selectedTeacher.subject}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {selectedTeacher.experience}
                  </p>
                  <p className="text-muted-foreground mb-4">{selectedTeacher.bio}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Ta'lim:</h4>
                    <p className="text-muted-foreground text-sm">
                      {selectedTeacher.education}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Yutuqlar:</h4>
                    <ul className="space-y-1">
                      {selectedTeacher.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Teachers;
