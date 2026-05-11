"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './animations/Magnetic';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/80 backdrop-blur-2xl py-4 shadow-xl" : "bg-transparent py-10"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-margin-base max-w-7xl mx-auto">
        <Magnetic>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <span className="material-symbols-outlined text-primary group-hover:rotate-180 transition-transform duration-700" style={{ fontSize: '32px' }}>spa</span>
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
            </div>
            <span className="font-headline-md text-2xl tracking-tighter text-primary font-medium">Boduruddin</span>
          </div>
        </Magnetic>
        
        <div className="hidden md:flex gap-12 items-center">
          {['Work', 'Archive', 'Journal'].map((item) => (
            <Magnetic key={item}>
              <a 
                className="font-headline-md text-lg text-on-surface-variant hover:text-primary transition-colors relative group py-2" 
                href="#"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 ease-out group-hover:w-full"></span>
              </a>
            </Magnetic>
          ))}
          <Magnetic>
            <button className="bg-on-surface text-surface px-6 py-3 rounded-full font-headline-md text-sm hover:bg-primary hover:text-on-primary transition-all duration-500 active:scale-95">
              Let's Talk
            </button>
          </Magnetic>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
