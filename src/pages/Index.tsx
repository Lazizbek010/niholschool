import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { TeachersSection } from "@/components/home/TeachersSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { RegistrationForm } from "@/components/home/RegistrationForm";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Nur Maktab - Xususiy Boshlang'ich Maktab | Toshkent</title>
        <meta
          name="description"
          content="Nur Maktab - 1-4 sinf o'quvchilari uchun zamonaviy xususiy boshlang'ich maktab. Tajribali o'qituvchilar, zamonaviy ta'lim, xavfsiz muhit."
        />
        <meta
          name="keywords"
          content="xususiy maktab, boshlang'ich maktab, Toshkent maktab, bolalar ta'limi, primary school Tashkent"
        />
        <link rel="canonical" href="https://nurmaktab.uz" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Nur Maktab - Xususiy Boshlang'ich Maktab" />
        <meta
          property="og:description"
          content="1-4 sinf o'quvchilari uchun zamonaviy xususiy maktab. Farzandingiz kelajagini biz bilan boshlang!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="uz_UZ" />
      </Helmet>

      <main>
        <HeroSection />
        <AboutPreview />
        <StatsSection />
        <TeachersSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <RegistrationForm />
        <CTASection />
      </main>
    </Layout>
  );
};

export default Index;
