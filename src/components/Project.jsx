import React from "react";
import { FiArrowRight } from "react-icons/fi";
import "../index.css";

const Project = () => {
  const projects = [
    {
      title: "PSLounge",
      description:
        "PSLounge is a profile website about Playstation rental that provides several features.",
      image: "/project1.png",
      link: "https://pslounge.vercel.app/",
    },
    {
      title: "RGames",
      description:
        "RGames is a game collection website whose data comes from the Rapid API. has search features, genre filtering and pagination.",
      image: "/project2.png",
      link: "https://rullgames.vercel.app/",
    },
    {
      title: "IoT Data Center",
      description:
        "IoT Monitoring Data Center with DHT11 and PZEM sensors and provides output in the form of Blynk, Buzzer and LED.",
      image: "/project3.jpg",
      link: "https://github.com/Rullabcde/monitoring_data_center",
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      image: "/comming.jpg",
      link: "#",
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      image: "/comming.jpg",
      link: "#",
    },
  ];

  return (
    <section id="project">
      <div className="max-w-6xl mx-auto pt-16 p-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Projects.
        </h2>
        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden rounded-xl border border-gray-800 shadow-2xl transition hover:border-gray-500 hover:shadow-gray-500/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-900 hover:text-gray-600">
                  View Project
                  <FiArrowRight className="w-4 h-4 ml-2 mt-1 arrow-animation" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
