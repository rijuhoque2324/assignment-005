import HeroImg from '../assets/banner-stack.png'

const Hero = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto flex flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:px-4">

        {/* Left Content */}
        <div className="w-2/5 text-center lg:w-1/2 lg:text-left">

          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Build Your Ideal{" "}
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

           {/* Buttons */}
          <div className="mt-10 flex w-full items-center justify-center gap-4 lg:justify-start">

            <button className="w-1/2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-4 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto sm:px-8">
              Explore Technologies
            </button>

            <button className="w-1/2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:w-auto sm:px-10">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-3/5 flex items-center justify-start lg:justify-end">

          <img
            src={HeroImg}
            alt="Development Stack"
            className="w-full max-w-[280px] object-contain sm:max-w-[350px] lg:max-w-[450px]"
          />

        </div>
      </div>
    </div>
  );
};

export default Hero;