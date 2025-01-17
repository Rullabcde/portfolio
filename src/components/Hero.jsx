import React from "react";

const Hero = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/cvrevisi.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV Muhammad Choirul Rasyid.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="flex items-center justify-center h-screen">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="relative text-center">
          <h2 className="mb-10 text-4xl font-bold text-black lg:text-6xl md:text-5xl">
            Transforming Ideas into <br /> Digital Reality.
          </h2>
        </div>

        <div className="absolute left-0 right-0 flex flex-col items-center w-full gap-3 bottom-5 md:flex-row md:justify-around">
          <div className="space-x-3 text-center">
            <span className="font-bold">Muhammad Choirul Rasyid</span>
            <span>/</span>
            <span className="block font-semibold md:inline-block">Student</span>
          </div>
          <div>
            <button
              onClick={handleDownloadCV}
              className="px-4 py-2 font-bold text-white transition duration-300 bg-blue-600 border-2 rounded-md cursor-pointer hover:bg-transparent hover:text-black hover:border-black hover:scale-90">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
