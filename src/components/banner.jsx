function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Build Your Ideal <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-lg">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 hover:opacity-90">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-lg font-medium border-2 border-gray-200 hover:border-gray-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="./assets/banner-stack.png" alt="Stack" className="w-full max-w-md" />
      </div>
    </section>
  );
}

export default Banner;