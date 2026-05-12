import Image from "next/image";
import Link from "next/link";

const Projects = () => {
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
          <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/10 px-3 py-1 rounded-full">
            KeenKeeper
          </span>
          <h3 className="font-headline-lg text-headline-lg mt-4 mb-2">
            Friendship tracking app
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            A friendship tracking app that helps you stay connected with your
            friends.
          </p>
          <div className="my-5 flex gap-5">
            <Link
              href="https://github.com/boduruddin84/keenKeeper/tree/main"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View on GitHub
            </Link>
            <Link
              href="https://keenkeeper-p.netlify.app/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View Live Site
            </Link>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col md:flex-row items-center gap-content-gap group">
        <div className="w-full md:w-2/5 md:pr-gutter text-right order-1">
          <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/10 px-3 py-1 rounded-full ml-auto">
            QurbaniHat
          </span>
          <h3 className="font-headline-lg text-headline-lg mt-4 mb-2">
            QurbaniHat online livestock
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            QurbaniHat is a trusted online livestock marketplace where you can
            easily find and book cows and goats for Qurbani. আমরা আপনাকে সহজ,
            নিরাপদ এবং নির্ভরযোগ্য সেবা প্রদান করি।
          </p>
          <div className="my-5 flex gap-5">
            <Link
              href="https://github.com/boduruddin84/qurbani-hat"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View on GitHub
            </Link>
            <Link
              href="https://qurbani-hat-iaw9.vercel.app/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View Live Site
            </Link>
          </div>
        </div>
        <div className="w-full md:w-3/5 order-2">
          <div className="bg-surface-container-high p-4 organic-blob overflow-hidden border border-outline-variant/30">
            <div className="relative w-full h-[400px] organic-blob overflow-hidden">
              <Image
                src="QurbaniHat.PNG"
                alt="QurbaniHat"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="flex flex-col md:flex-row items-center gap-content-gap group">
        <div className="w-full md:w-3/5 order-2 md:order-1">
          <div className="bg-surface-container-high p-4 organic-blob-alt overflow-hidden border border-outline-variant/30">
            <div className="relative w-full h-[400px] organic-blob-alt overflow-hidden">
              <Image
                src="/DigiTool.jpeg"
                alt="DigiTool"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 order-1 md:order-2 md:pl-gutter">
          <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/10 px-3 py-1 rounded-full">
            DigiTool
          </span>
          <h3 className="font-headline-lg text-headline-lg mt-4 mb-2">
            Job tracking app
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            Digi Tools Hub is a powerful and user-friendly platform designed for job seekers. It provides essential tools like resume building, job tracking, and interview preparation to make the job search process easier and more efficient.
          </p>
          <div className="my-5 flex gap-5">
            <Link
              href="https://github.com/boduruddin84/digi-tools"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View on GitHub
            </Link>
            <Link
              href="https://digi-tools-project.netlify.app/"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
            >
              View Live Site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
