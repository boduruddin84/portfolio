"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import Magnetic from "./Magnetic";

const projects = [
  {
    title: "Expert Notes",
    category: "AI / Notes",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfdnEi7LXPRk-otHaJW7ZYT8zH-RKkbTK15OgQ6v79efUfyGNlB41YHS117DCDozacZr7FDGKmrD7iC126cyUtfr9BxHxGKKnYaVWOoPc4-4n4wsWiwraUQlT0po6TcksUOJLL-r-PeK0NFe-15Srur1TEPhNK4jz8lkcPc8zhIVyxxydPv1fGKb6KBGcUaVmdJ0yWqPFqvaa4mQBZ8_JsvYiogEXJTyMA7V-4-CL3hH77s4rjHhZD1p-yGsoaPOKZn1SIs5wZN6dL",
  },
  {
    title: "Zen Store",
    category: "E-Commerce",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB0tQPO-wU0UP6pWkn1SBi33WY_RZy_22eREcGIAK46AWGyvtuwiDsllVOp6B10sHaLIqHJDGjyCZHv5Grl72IyXSh70vh5o3x7xmFTuyywUqR6mxHHWMG1_tNABwI-P-k32nkJjHYMTJa5Fki6p1PNddLhCIxGMJN4DZr4ndTNwlHH7OLuRso9L2DdRpCJ8KW31hZPrBw-frpzINnh_E5CHHC6QsEJngM1SPd-Lu9jxPj_Ndnzt0DQWt8ZmNAzC1HCD8PxTj7wY4Y",
  },
  {
    title: "Prism Code",
    category: "DevTools",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5s_tNARcWUx_C8ehLA_BD2C__qU62Tw_j4aNUUdznyXkadkdkc2NYbqGMDCT0mklxJ63OP1-dhVeblllk4EWfGoF2sIbeq9NjHs88y_Qj43dyYy2e9YtzEMFy_ACqgRNMUq9iiCPGIdwsAG1_ii3mdgQ2eYYFskQvzqmDyFXSgMJx8CZSb6uMjV868z9097NuPKcUKDu--OJu4pam435haly2E6vFcGxtj1RQzExSeB3wZQv7bwIGKCVu-7_Pj3iARADnGYBtUw2",
  },
];

export default function HorizontalProjects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: "-200vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        }
      );

      // Inner parallax for images
      gsap.utils.toArray(".project-image").forEach((img) => {
        gsap.to(img, {
          x: "15%",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=3000",
            scrub: true,
          },
        });
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-background">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[300vw] flex flex-row relative">
          {projects.map((project, index) => (
            <div key={index} className="h-screen w-screen flex items-center justify-center p-8 md:p-24 relative overflow-hidden">
              <div className="relative w-full h-full group overflow-hidden rounded-[2rem] md:rounded-[4rem] border border-outline-variant/10 bg-surface-container-low shadow-2xl">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="project-image object-cover opacity-60 scale-125 transition-opacity duration-1000 group-hover:opacity-100"
                    unoptimized
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-12 left-12 md:bottom-24 md:left-24 z-10 max-w-2xl">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-4"
                  >
                    <span className="font-label-mono text-xs md:text-sm text-primary tracking-[0.3em] uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-display-lg text-5xl md:text-8xl text-white tracking-tighter leading-none">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-6 mt-8">
                       <Magnetic>
                          <button className="bg-white text-black px-8 py-4 rounded-full font-headline-md text-sm hover:bg-primary hover:text-on-primary transition-all duration-500">
                            View Case Study
                          </button>
                       </Magnetic>
                       <a href="#" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group/link">
                          <span>Live Site</span>
                          <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                       </a>
                    </div>
                  </motion.div>
                </div>
                
                <div className="absolute top-12 right-12 md:top-24 md:right-24 text-white/5 text-[10rem] md:text-[20rem] font-display-lg select-none pointer-events-none">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
