import React from "react";

const Project = () => {
  const projects = [
    {
      title: "PSLounge",
      description:
        "PSLounge is a profile website about Playstation rental that provides several features.",
      image: "/project1.png",
      deployedLink: "https://pslounge.vercel.app/",
      githubLink: "https://github.com/Rullabcde/pslounge",
      isComingSoon: false,
    },
    {
      title: "RGames",
      description:
        "RGames is a game collection website whose data comes from the Rapid API. has search features, genre filtering and pagination.",
      image: "/project2.png",
      deployedLink: "https://rullgames.vercel.app/",
      githubLink: "https://github.com/Rullabcde/rgames",
      isComingSoon: false,
    },
    {
      title: "IoT Data Center",
      description:
        "IoT Monitoring Data Center with DHT11 and PZEM sensors and provides output in the form of Blynk, Buzzer and LED.",
      image: "/project3.jpg",
      deployedLink: "#",
      githubLink: "https://github.com/Rullabcde/monitoring_data_center",
      isComingSoon: false,
    },
    {
      title: "NusaTrip",
      description: "NusaTrip is a website that provides tours to various tourist attractions in Indonesia",
      image: "/project4.png",
      deployedLink: "https://nusatrip.vercel.app/",
      githubLink: "https://github.com/Rullabcde/nusa_trip",
      isComingSoon: false,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      image: "/comming.jpg",
      deployedLink: "#",
      githubLink: "#",
      isComingSoon: true,
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      image: "/comming.jpg",
      deployedLink: "#",
      githubLink: "#",
      isComingSoon: true,
    },
  ];

  return (
    <section id="project">
      <div className="max-w-6xl px-4 pt-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">Projects.</h2>
          <div className="w-24 h-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative mx-4 overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2 md:mx-0">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100"></div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Links */}
                {!project.isComingSoon && (
                  <div className="flex items-center space-x-4">
                    {project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-white transition-colors duration-200 bg-gray-900 rounded-lg hover:bg-gray-800">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.deployedLink !== "#" && (
                      <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 space-x-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}

                {project.isComingSoon && (
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                    <span className="w-2 h-2 mr-2 bg-gray-400 rounded-full"></span>
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
