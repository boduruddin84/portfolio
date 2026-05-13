"use client";

import Hero from "@/components/Hero";
import Stacks from "@/components/Stacks";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import BottomNav from "@/components/BottomNav";
import SectionReveal from "@/components/animations/SectionReveal";
import { motion, useScroll, useSpring } from "motion/react";
import ProjectPage from "./projects/page";
import ContactForm from "@/components/ContactForm";

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

  
      
      <main className="relative">
        
        
        {/* Spacer for transition */}
        
        
        {/* <HorizontalProjects /> */}
        
        
        <div className="px-6 max-w-7xl mx-auto space-y-section-gap pt-24">
          <SectionReveal>
            <Hero />
          </SectionReveal>
          <SectionReveal>
            <ProjectPage />
          </SectionReveal>
          <SectionReveal>
            <Stacks />
          </SectionReveal>
          
          <SectionReveal>
            <AboutMe />
          </SectionReveal>
          
          <SectionReveal>
            <Education />
          </SectionReveal>
          <SectionReveal>
            <ContactForm />
          </SectionReveal>
        </div>
      </main>

    
      <BottomNav />
    </>
  );
}
