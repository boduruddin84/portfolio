import Link from "next/link";


const Footer = () => {
  return (
    <footer className="w-full px-6 py-24 bg-surface dark:bg-background border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <span className="font-headline-lg text-headline-lg text-secondary">Boduruddin</span>
        <div className="flex gap-5 flex-wrap md:gap-12">
          <Link className="font-body-md text-body-md text-on-surface-variant opacity-60 hover:text-secondary transition-colors" href="/">Home</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant opacity-60 hover:text-secondary transition-colors" href="/projects">Projects</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant opacity-60 hover:text-secondary transition-colors" href="/skills">Skills</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant opacity-60 hover:text-secondary transition-colors" href="/about-me">About Me</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant opacity-60 hover:text-secondary transition-colors" href="/education">Education</Link>
        </div>
        <p className="font-body-md text-body-md text-tertiary dark:text-tertiary-fixed-dim">
          © 2026 All rights reserved by Boduruddin.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
