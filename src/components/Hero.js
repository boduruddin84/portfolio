"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Magnetic from "./animations/Magnetic";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const blobRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Title animation
      const titleWords = titleRef.current.innerText.split(" ");
      titleRef.current.innerHTML = titleWords
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`
        )
        .join(" ");

      // Subtitle animation
      const subtitleWords = subtitleRef.current.innerText.split(" ");
      subtitleRef.current.innerHTML = subtitleWords
        .map(
          (word) =>
            `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`
        )
        .join(" ");

      tl.from(titleRef.current.querySelectorAll("span > span"), {
        y: "100%",
        duration: 1.2,
        stagger: 0.08,
        ease: "power4.out",
      })
        .from(
          subtitleRef.current.querySelectorAll("span > span"),
          {
            y: "100%",
            duration: 1,
            stagger: 0.04,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .from(
          imageContainerRef.current,
          {
            scale: 1.1,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1"
        )
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1"
        );

      // Only blob animation
      gsap.to(blobRef.current, {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="px-margin-base max-w-7xl mx-auto mb-section-gap min-h-[90vh] flex items-center relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-gutter relative w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative z-10 flex justify-center md:justify-start perspective-1000">
          <div ref={imageContainerRef} className="relative p-8">
            <div
              ref={blobRef}
              className="absolute inset-0 bg-secondary-container/20 organic-blob-alt -z-10 blur-3xl scale-150"
            ></div>

            <div className="relative w-80 h-[28rem] overflow-hidden organic-blob shadow-2xl border border-outline-variant/10 bg-surface-container group">
              <Image
                src="/hero-portrait.jpg"
                alt="Boduruddin"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 mt-gutter md:mt-0 text-center md:text-left space-y-10 z-20">
          <div className="space-y-4">
            <h1
              ref={titleRef}
              className="font-display-lg text-display-lg-mobile md:text-7xl text-primary leading-tight tracking-tighter"
            >
              Hello, I'm Boduruddin
            </h1>

            <h2
              ref={subtitleRef}
              className="font-display-md text-3xl md:text-5xl text-on-surface-variant font-light tracking-tight opacity-90"
            >
              Frontend Developer
            </h2>
          </div>

          <div ref={descriptionRef} className="max-w-xl">
            <p className="font-body-lg text-lg md:text-xl text-on-surface-variant/80 leading-relaxed">
              Developing modern web applications with a focus on{" "}
              <span className="text-primary italic font-medium">
                aesthetics
              </span>
              , functionality and accessibility.
            </p>
          </div>

          <div
            ref={ctaRef}
            className="flex flex-wrap justify-center md:justify-start gap-10 items-center pt-6"
          >
            <Magnetic>
              <button className="bg-primary hover:bg-primary-fixed text-on-primary px-12 py-6 rounded-full font-headline-md text-xl transition-all duration-500 shadow-2xl shadow-primary/20 relative group overflow-hidden active:scale-95">
                <span className="relative z-10">
                  <Link href="/contact-form">Contact me</Link>
                </span>

                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </Magnetic>

            <div className="flex items-center gap-2">
              <Magnetic>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group p-2"
                  href="https://www.linkedin.com/in/boduruddin"
                  target="_blank"
                >
                  <Image
                    src={"/linkedIn.png"}
                    alt="LinkedIn image"
                    loading="eager"
                    width={40}
                    height={40}
                    className="object-cover rounded-full group-hover:scale-125 transition-transform"
                  />
                </Link>
              </Magnetic>

              <Magnetic>
                <Link
                  className="text-on-surface-variant hover:text-primary transition-all duration-300 cursor-pointer group p-2"
                  href="https://github.com/boduruddin84"
                  target="_blank"
                >
                  <Image
                    src={"/gitHub.png"}
                    alt="GitHub image"
                    loading="eager"
                    width={40}
                    height={40}
                    className="object-cover rounded-full group-hover:scale-125 transition-transform"
                  />
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;