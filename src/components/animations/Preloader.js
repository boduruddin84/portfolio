"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react"";

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [count, setCount] = useState(0);

  const words = ["Welcome", "Bienvenue", "Benvenuto", "Bienvenido", "Karibu", "Tervetuloa", "नमस्ते", "Boduruddin"];

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1200 : index === words.length - 2 ? 800 : 150
    );
    return () => clearTimeout(timeout);
  }, [index, words.length]);

  const initialPath = dimension.width > 0 ? `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0` : "";
  const targetPath = dimension.width > 0 ? `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0` : "";

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  const opacity = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  }

  return (
    <motion.div
      initial={{ top: 0 }}
      exit={{ top: "-100vh", transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      {dimension.width > 0 && (
        <>
          <motion.div
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex flex-col items-center absolute z-10"
          >
            <div className="flex items-center text-primary text-4xl md:text-6xl font-medium tracking-tight mb-4">
              <motion.span 
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="block w-4 h-4 bg-primary rounded-full mr-6 shadow-[0_0_20px_rgba(201,198,197,0.5)]"
              ></motion.span>
              {words[index]}
            </div>
            <div className="h-px w-48 bg-outline-variant/30 relative overflow-hidden">
               <motion.div 
                 className="absolute inset-0 bg-primary origin-left"
                 initial={{ scaleX: 0 }}
                 animate={{ scaleX: count / 100 }}
                 transition={{ ease: "linear" }}
               />
            </div>
          </motion.div>
          
          <div className="absolute bottom-12 right-12 text-on-surface text-8xl md:text-[12rem] font-display-lg opacity-[0.03] select-none pointer-events-none">
            {count}%
          </div>
          
          <svg className="absolute top-0 w-full h-[calc(100%+300px)] fill-background">
            <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
