import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import PopularSubjects from "@/components/sections/PopularSubjects";
import Certifications from "@/components/sections/Certifications";
import StatsCounter from "@/components/sections/StatsCounter";
import FranchiseBanner from "@/components/sections/FranchiseBanner";
import HowItWorks from "@/components/sections/HowItWorks";
import ExpertConsultation from "@/components/sections/ExpertConsultation";
import Testimonials from "@/components/sections/Testimonials";
import TeacherConversion from "@/components/sections/TeacherConversion";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PopularSubjects />
      <Certifications />
      <StatsCounter />
      <FranchiseBanner />
      <HowItWorks />
      <ExpertConsultation />
      <Testimonials />
      <TeacherConversion />
      <Footer />
    </main>
  );
}
