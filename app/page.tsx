import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedOpportunities from "@/components/FeaturedOpportunities";
import HowItWorks from "@/components/HowItWorks";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-space-dark">
      <Header />
      <Hero />
      <About />
      <FeaturedOpportunities />
      <HowItWorks />
      <ApplicationForm />
      <Footer />
    </div>
  );
}