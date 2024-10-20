import React from "react";
const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="text-center relative">
          <h2 className="text-4xl font-bold mb-10 text-black lg:text-6xl md:text-5xl">
            Transforming Ideas into <br /> Digital Reality.
          </h2>
        </div>

        <div className="absolute bottom-5 right-0 left-0 w-full flex flex-col gap-3 md:flex-row md:justify-around items-center">
          <div className="space-x-3 text-center">
            <span className="font-bold">Muhammad Choirul Rasyid</span>
            <span>/</span>
            <span className="font-semibold block md:inline-block">Student</span>
          </div>
          <div>
            <a
              href="#contact"
              className="bg-indigo-600 text-white font-bold px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border-black border-2 transition duration-300 cursor-pointer hover:scale-90">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
