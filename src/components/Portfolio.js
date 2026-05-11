
import Image from 'next/image';

const Portfolio = () => {
  return (
    <section className="px-margin-safe max-w-7xl mx-auto space-y-section-gap">
      {/* Project 1 */}
      <div className="flex flex-col md:flex-row items-center gap-content-gap group">
        <div className="w-full md:w-3/5 order-2 md:order-1">
          <div className="bg-surface-container-high p-4 organic-blob-alt overflow-hidden border border-outline-variant/30">
            <div className="relative w-full h-[400px] organic-blob-alt overflow-hidden">
              <Image 
                src="/KeenKeeper.jpeg"
                alt="KeenKeeper"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 order-1 md:order-2 md:pl-gutter">
          <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/10 px-3 py-1 rounded-full">KeenKeeper</span>
          <h3 className="font-headline-lg text-headline-lg mt-4 mb-2">Friendship tracking app</h3>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            A friendship tracking app that helps you stay connected with your friends..
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col md:flex-row items-center gap-content-gap group">
        <div className="w-full md:w-2/5 md:pr-gutter text-right order-1">
          <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/10 px-3 py-1 rounded-full ml-auto">Dev Tools</span>
          <h3 className="font-headline-lg text-headline-lg mt-4 mb-2">Prism Code</h3>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            A focused code editor environment that removes all distractions, leaving only the developer and their logic in a sanctuary of clay tones.
          </p>
        </div>
        <div className="w-full md:w-3/5 order-2">
          <div className="bg-surface-container-high p-4 organic-blob overflow-hidden border border-outline-variant/30">
            <div className="relative w-full h-[400px] organic-blob overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5s_tNARcWUx_C8ehLA_BD2C__qU62Tw_j4aNUUdznyXkadkdkc2NYbqGMDCT0mklxJ63OP1-dhVeblllk4EWfGoF2sIbeq9NjHs88y_Qj43dyYQy2e9YtzEMFy_ACqgRNMUq9iiCPGIdwsAG1_ii3mdgQ2eYYFskQvzqmDyFXSgMJx8CZSb6uMjV868z9097NuPKcUKDu--OJu4pam435haly2E6vFcGxtj1RQzExSeB3wZQv7bwIGKCVu-7_Pj3iARADnGYBtUw2"
                alt="Prism Code"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
