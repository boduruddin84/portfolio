import React from 'react';

const Philosophy = () => {
  return (
    <section className="px-margin-safe max-w-4xl mx-auto my-section-gap relative">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-fixed/20 organic-blob blur-2xl -z-10"></div>
      <h2 className="font-headline-lg text-headline-lg mb-gutter text-center">Design Philosophy</h2>
      <div className="space-y-gutter">
        <div className="flex items-start gap-4 p-8 bg-surface-container-low rounded-3xl border border-outline-variant/20 hover:bg-surface-container transition-colors">
          <div className="p-3 bg-primary/10 rounded-full">
            <span className="material-symbols-outlined text-primary">nature</span>
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md text-on-surface">Organic Precision</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Balancing the rigidity of code with the fluidity of human experience. Code is the architecture; design is the soul.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-8 bg-surface-container-low rounded-3xl border border-outline-variant/20 hover:bg-surface-container transition-colors">
          <div className="p-3 bg-secondary/10 rounded-full">
            <span className="material-symbols-outlined text-secondary">visibility</span>
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md text-on-surface">Aesthetic Clarity</h4>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Visual breathing room is not wasted space. It is the intentional focus required for complex cognitive tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
