import Hero from "../components/hero/Hero";
import AboutSection from "../components/about/AboutSection";
import WhyChoose from "../components/whyChoose/WhyChoose";
import CoursesPreview from "../components/courses/CoursesPreview";
import TrainingMethodology from "../components/trainingMethodology/TrainingMethodology";
import FAQ from "../components/faq/FAQ";
import CTA from "../components/cta/CTA";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChoose />
      <CoursesPreview />
      <TrainingMethodology />
      <FAQ />
      <CTA />
    </>
  );
}

export default Home;