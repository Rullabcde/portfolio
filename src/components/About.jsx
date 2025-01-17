import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-6xl p-4 pt-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center overflow-hidden bg-white shadow-lg rounded-3xl md:flex-row md:items-start">
          <div className="items-center justify-center hidden w-full p-6 md:flex lg:p-12 md:w-1/2">
            <img
              data-src="/about.png"
              alt="Profil"
              className="object-contain w-3/4 h-auto bg-gray-100 rounded-lg shadow-lg lg:max-w-full"
              loading="lazy"
              src="/about.png"
            />
          </div>

          <div className="w-full p-8 md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:mt-8">
              About Me
            </h2>
            <p className="mb-6 text-base md:text-lg">
              Muhammad Choirul Rasyid, I am a student at SMK Negeri 2
              Yogyakarta, majoring in Network Information Systems and
              Applications. As someone passionate about information technology,
              I am eager to develop my skills in DevOps and System
              Administration.
            </p>

            <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold md:text-3xl">
                  <span>1</span>±
                </h3>
                <p className="text-xs md:text-sm">Experience</p>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold md:text-3xl">
                  <span>10</span>+
                </h3>
                <p className="text-xs md:text-sm">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
