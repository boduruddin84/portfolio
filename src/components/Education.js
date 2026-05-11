

const Education = () => {
  const educationItems = [
    {
      period: '2013 - 2015 Chourapara Fdil Madrasah',
      degree: 'SSC',
      description: '4.89 out of 5',
      side: 'left'
    },
    {
      period: '2015 - 2017 / Nachole College, Nawabganj',
      degree: "HSC",
      description: '3.25 out of 5',
      side: 'right'
    },
    {
      period: '2018 - 2022 Varendra University',
      degree: 'B. Sc. in CSE',
      description: '3.14 out of 4',
      side: 'left'
    }
  ];

  return (
    <section className="space-y-12" id="education">
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-center">Education</h2>
      <div className="max-w-3xl mx-auto space-y-12 relative before:content-[''] before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-outline-variant">
        {educationItems.map((item, index) => (
          <div key={index} className={`relative pl-12 md:pl-0 md:w-1/2 group ${item.side === 'right' ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right'}`}>
            <div className={`absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(201,198,197,0.5)] transition-transform group-hover:scale-150 ${item.side === 'left' ? 'md:left-auto md:right-[-5px]' : 'md:left-[-5px]'}`}></div>
            <div className="space-y-2">
              <span className="inline-block px-4 py-1 bg-surface-container-highest text-primary-fixed rounded-full font-label-mono text-label-mono">{item.period}</span>
              <h3 className="font-headline-md text-headline-md">{item.degree}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
