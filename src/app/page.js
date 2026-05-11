"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HorizontalProjects from "@/components/animations/HorizontalProjects";
import Stacks from "@/components/Stacks";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import SectionReveal from "@/components/animations/SectionReveal";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]"
        style={{ scaleX }}
      />

      <Header />
      
      <main className="relative">
        <Hero />
        
        {/* Spacer for transition */}
        <div className="h-32 md:h-48" />
        
        <HorizontalProjects />
        
        <div className="px-6 max-w-7xl mx-auto space-y-section-gap py-24">
          <SectionReveal>
            <Stacks />
          </SectionReveal>
          
          <SectionReveal>
            <AboutMe />
          </SectionReveal>
          
          <SectionReveal>
            <Education />
          </SectionReveal>
        </div>
      </main>

      <Footer />
      <BottomNav />
    </>
  );
}
