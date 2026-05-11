"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/animations/Preloader";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Cursor from "@/components/animations/Cursor";

export default function AppWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for actual load
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling after preloader
      document.body.style.cursor = "none"; // Hide default cursor
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScrollProvider>
      <Cursor />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>
      <div className="noise-overlay" />
      {children}
    </SmoothScrollProvider>
  );
}
