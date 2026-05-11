
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB0tQPO-wU0UP6pWkn1SBi33WY_RZy_22eREcGIAK46AWGyvtuwiDsllVOp6B10sHaLIqHJDGjyCZHv5Grl72IyXSh70vh5o3x7xmFTuyywUqR6mxHHWMG1_tNABwI-P-k32nkJjHYMTJa5Fki6p1PNddLhCIxGMJN4DZr4ndTNwlHH7OLuRso9L2DdRpCJ8KW31hZPrBw-frpzINnh_E5CHHC6QsEJngM1SPd-Lu9jxPj_Ndnzt0DQWt8ZmNAzC1HCD8PxTj7wY4Y"
                alt="The Zen Store"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 order-1 md:order-2 md:pl-gutter">
          <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/10 px-3 py-1 rounded-full">E-Commerce</span>
          <h3 className="font-headline-lg text-headline-lg mt-4 mb-2">The Zen Store</h3>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            A headless commerce solution built for high-end artisanal brands focusing on tactile experience through digital screens.
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
