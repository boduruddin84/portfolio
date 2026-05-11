"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import Magnetic from './animations/Magnetic';

const Projects = () => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      x: x * 20,
      y: y * 20,
      scale: 1.1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section className="space-y-16 py-24" id="projects">
      <div className="text-center space-y-4">
        <span className="font-label-mono text-sm text-primary tracking-[0.4em] uppercase opacity-70">Case Study</span>
        <h2 className="font-display-lg text-5xl md:text-7xl tracking-tighter">Featured Engineering</h2>
      </div>

      <div 
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="bg-surface-container-low border border-outline-variant/10 rounded-[3rem] p-8 md:p-16 group hover:border-primary/20 transition-all duration-700 perspective-1000"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-video bg-surface-container rounded-2xl overflow-hidden shadow-3xl border border-white/5">
              <Image 
                ref={imageRef}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfdnEi7LXPRk-otHaJW7ZYT8zH-RKkbTK15OgQ6v79efUfyGNlB41YHS117DCDozacZr7FDGKmrD7iC126cyUtfr9BxHxGKKnYaVWOoPc4-4n4wsWiwraUQlT0po6TcksUOJLL-r-PeK0NFe-15Srur1TEPhNK4jz8lkcPc8zhIVyxxydPv1fGKb6KBGcUaVmdJ0yWqPFqvaa4mQBZ8_JsvYiogEXJTyMA7V-4-CL3hH77s4rjHhZD1p-yGsoaPOKZn1SIs5wZN6dL"
                alt="Expert Notes Project"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 scale-105"
                unoptimized
              />
            </div>
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
          </div>

          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
               <h3 className="font-display-lg text-4xl md:text-6xl text-primary tracking-tight">Expert Notes</h3>
               <div className="flex flex-wrap gap-3">
                 {['TYPESCRIPT', 'NEXT.JS', 'AI/ML'].map(tag => (
                   <span key={tag} className="px-4 py-1.5 bg-surface-container-highest border border-outline-variant/30 rounded-full font-label-mono text-[10px] tracking-wider opacity-60">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>

            <p className="font-body-lg text-lg text-on-surface-variant/80 leading-relaxed max-w-lg">
              A high-performance audio-to-text processing engine built with modern browser APIs. Features real-time streaming, local storage persistence, and advanced speech recognition with minimal latency.
            </p>

            <div className="flex flex-wrap items-center gap-10">
               <Magnetic>
                 <a className="flex items-center gap-3 bg-on-surface text-surface px-8 py-4 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-500 group/btn" href="#">
                    <span className="material-symbols-outlined text-xl">code</span>
                    <span className="font-headline-md text-sm">View Source</span>
                 </a>
               </Magnetic>
               
               <Magnetic>
                 <a className="flex items-center gap-3 text-primary hover:text-on-surface transition-colors group/link" href="#">
                    <span className="font-headline-md text-sm">Live Experience</span>
                    <span className="material-symbols-outlined group-hover/link:translate-x-2 transition-transform">arrow_forward_ios</span>
                 </a>
               </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
