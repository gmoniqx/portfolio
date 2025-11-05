import Navbar from "@/components/Navbar";
import Picture from "@/components/Picture";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Picture />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Connect />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Index;
