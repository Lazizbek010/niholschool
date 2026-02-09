import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, User, Calendar, Phone } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(2, "Ism kamida 2 ta harfdan iborat bo'lishi kerak").max(50),
  age: z.string().min(1, "Yoshni kiriting"),
  phone: z.string().trim().min(9, "Telefon raqamini to'liq kiriting").max(20),
});

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      formSchema.parse(formData);
      setIsSubmitting(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Arizangiz muvaffaqiyatli yuborildi!", {
        description: "Tez orada siz bilan bog'lanamiz.",
      });

      setFormData({ name: "", age: "", phone: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Ro'yxatdan o'tish
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Farzandingizni{" "}
                <span className="text-primary">ro'yxatdan o'tkazing</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Arizangizni qoldiring va bizning mutaxassislarimiz siz bilan
                tez orada bog'lanadi. Qabul jarayoni haqida to'liq ma'lumot
                beramiz.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-success/20 text-success flex items-center justify-center text-sm">
                    ✓
                  </span>
                  Bepul maslahat
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-success/20 text-success flex items-center justify-center text-sm">
                    ✓
                  </span>
                  Maktab sayohati
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-success/20 text-success flex items-center justify-center text-sm">
                    ✓
                  </span>
                  Sinov darsi
                </li>
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-3xl p-8 shadow-soft-lg"
              >
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Farzandingiz ismi
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ism kiriting"
                        className={`pl-12 h-12 rounded-xl ${
                          errors.name ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Age Field */}
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-foreground font-medium">
                      Yoshi
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={`w-full pl-12 h-12 rounded-xl border bg-background text-foreground appearance-none cursor-pointer ${
                          errors.age ? "border-destructive" : "border-input"
                        }`}
                      >
                        <option value="">Yoshni tanlang</option>
                        <option value="6">6 yosh</option>
                        <option value="7">7 yosh</option>
                        <option value="8">8 yosh</option>
                        <option value="9">9 yosh</option>
                        <option value="10">10 yosh</option>
                        <option value="11">11 yosh</option>
                      </select>
                    </div>
                    {errors.age && (
                      <p className="text-sm text-destructive">{errors.age}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Telefon raqamingiz
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+998 90 123 45 67"
                        className={`pl-12 h-12 rounded-xl ${
                          errors.phone ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-xl btn-glow"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Yuborilmoqda...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Ariza yuborish
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
