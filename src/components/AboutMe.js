import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-[3rem] p-8 md:p-16 relative overflow-hidden" id="about-me">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-2/3 space-y-8 z-10">
          <div className="flex items-center gap-4">
            <span className="text-primary font-label-mono text-2xl">#</span>
            <h2 className="font-display-lg text-display-lg-mobile text-primary">about-me</h2>
            <div className="h-[1px] flex-grow bg-outline-variant"></div>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            <p>Hello, I'm Boduruddin!</p>
            <p>
              I'm a self-taught front-end developer based in a digital world. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p>
              I am passionate about improving my coding skills & developing applications & websites. I always strive to learn about the newest technologies and frameworks to maintain the technical edge.
            </p>
          </div>
          <button className="flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all">
            <span className="font-headline-md text-headline-md">Resume</span>
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi9ZIanxSC_TQ0eYjaV848nk1zeA0olIztTlpKCySsvOGFD5jUr-qnAU8yNC9MFJIa2VzDGXqqKIRQUuPr24FoQqCL2gmj76F8lgRYqxr3eatny5acGr73taB3zbTqqLzf-oNgKOp9uug0J3CcSt5k3JmibUdRnq7XyiJWKxm5_400x19EoDPw_R6aR1VhMCZJD6FHP8v5G_16_Wo3fSVGbJwWfgwZU62-cgmYICPVUK5xswpfnnzVoWMaGRpi_-lkjcuaoFibiOSH"
              alt="Developer Illustration"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
