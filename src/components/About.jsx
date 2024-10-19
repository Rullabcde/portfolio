import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto pt-16 p-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          <div className="hidden md:flex justify-center items-center p-6 lg:p-12 w-full md:w-1/2">
            <img
              data-src="/public/nfs.webp"
              alt="Profil"
              className="w-3/4 h-auto object-contain lg:max-w-full rounded-lg bg-gray-100 shadow-lg"
              loading="lazy"
              src="/public/about.png"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mt-8">
              About Me
            </h2>
            <p className="text-base md:text-lg mb-6">
              Muhammad Choirul Rasyid, I am currently studying at SMK Negeri 2
              Yogyakarta majoring in "Sistem Informasi Jaringan dan Aplikasi".
              This major equips students with the knowledge and skills to build,
              manage and secure computer networks, as well as develop software
              applications.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span>3</span>+
                </h3>
                <p className="text-xs md:text-sm">Experience</p>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span>30</span>+
                </h3>
                <p className="text-xs md:text-sm">Project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
