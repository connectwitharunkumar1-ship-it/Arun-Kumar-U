import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { KeyHighlights } from "@/src/components/KeyHighlights";
import { Curriculum } from "@/src/components/Curriculum";
import { TrustBar } from "@/src/components/TrustBar";
import { ProgramOverview } from "@/src/components/ProgramOverview";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. Features Section */}
        <KeyHighlights />
        
        {/* 3. Courses Section */}
        <Curriculum />
        
        {/* 4. Partners Section */}
        <TrustBar />
        
        {/* 5. About Preview */}
        <ProgramOverview />
        
        {/* 6. Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
