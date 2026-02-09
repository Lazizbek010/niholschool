import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Trophy, Heart, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 450,
    suffix: "+",
    label: "O'quvchilar soni",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Trophy,
    value: 120,
    suffix: "+",
    label: "Olimpiada g'oliblari",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Heart,
    value: 98,
    suffix: "%",
    label: "Ota-onalar ishonchi",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Calendar,
    value: 10,
    suffix: "+",
    label: "Tajriba yillari",
    color: "text-info",
    bgColor: "bg-info/10",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/80 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
