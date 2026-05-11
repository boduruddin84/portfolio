

const Stacks = () => {
  const stacks = [
    { name: 'HTML & CSS', icon: 'html' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'React', icon: 'cycle' },
    { name: 'Node.js', icon: 'hub' },
    { name: 'Vite.js', icon: 'bolt' },
    { name: 'Next.js', icon: 'layers' },
  ];

  return (
    <section className="space-y-12" id="technologies">
      <div className="space-y-2">
        <span className="font-label-mono text-label-mono text-primary tracking-[0.3em] uppercase">Stacks</span>
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg">Technologies I Work With</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stacks.map((stack) => (
          <div key={stack.name} className="bg-surface-container-low border border-outline-variant/30 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-primary transition-colors group">
            <span className="material-symbols-outlined text-4xl text-primary transition-transform group-hover:scale-110">{stack.icon}</span>
            <span className="font-label-mono text-label-mono text-on-surface-variant text-center">{stack.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stacks;
