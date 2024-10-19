import React from "react";
const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="text-center relative">
          <h2 className="text-4xl font-bold mb-10 text-black lg:text-6xl md:text-5xl">
            Transforming Ideas into <br /> Digital Reality.
          </h2>
          <a
            href="#contact"
            className="bg-indigo-600 text-white font-bold px-4 py-2 rounded-md hover:bg-transparent hover:text-black hover:border-black border-2 transition duration-300 cursor-pointer md:px-6 md:py-3 md:ml-4">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
