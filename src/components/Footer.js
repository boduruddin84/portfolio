import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-6 py-24 bg-surface dark:bg-background border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <span className="font-headline-lg text-headline-lg text-secondary">Digital Sanctuary</span>
        <div className="flex gap-12">
          <a className="font-body-md text-body-md text-on-surface-variant opacity-60 hover:text-secondary transition-colors" href="#">Journal</a>
          <a className="font-body-md text-body-md text-on-surface-variant opacity-60 hover:text-secondary transition-colors" href="#">Archive</a>
          <a className="font-body-md text-body-md text-on-surface-variant opacity-60 hover:text-secondary transition-colors" href="#">Privacy</a>
        </div>
        <p className="font-body-md text-body-md text-tertiary dark:text-tertiary-fixed-dim">
          © 2024 Organic Minimalist. Built for Focus.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
