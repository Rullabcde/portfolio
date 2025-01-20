import React, { useState } from "react";

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("DevOps");

  const skills = [
    { id: 1, src: "/bash.png", alt: "Bash", category: "DevOps" },
    { id: 2, src: "/docker.png", alt: "Docker", category: "DevOps" },
    { id: 3, src: "/kubernetes.png", alt: "Kubernetes", category: "DevOps" },
    { id: 4, src: "/aws.png", alt: "AWS", category: "DevOps" },
    { id: 5, src: "/html.png", alt: "HTML", category: "Other" },
    { id: 6, src: "/css.png", alt: "CSS", category: "Other" },
    { id: 7, src: "/javascript.png", alt: "JavaScript", category: "Other" },
    { id: 8, src: "/python.png", alt: "Python", category: "Other" },
    { id: 9, src: "/react.png", alt: "React", category: "Other" },
    { id: 10, src: "/linux.png", alt: "Linux", category: "OS" },
    { id: 11, src: "/windows.png", alt: "Windows", category: "OS" },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];
  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  // Calculate optimal columns based on number of items
  const getGridCols = (itemCount) => {
    if (itemCount <= 3) return `grid-cols-${itemCount}`;
    if (itemCount === 4) return "grid-cols-2 md:grid-cols-4";
    if (itemCount === 5) return "grid-cols-3 md:grid-cols-5";
    return "grid-cols-3 md:grid-cols-4 lg:grid-cols-6";
  };

  return (
    <section id="skill" className="py-20 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">Skills.</h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div
          className={`grid ${getGridCols(
            filteredSkills.length
          )} gap-6 justify-center max-w-fit mx-auto`}>
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="flex justify-center">
              <div className="relative flex flex-col items-center transition-transform duration-300 transform group hover:-translate-y-2">
                <div className="relative flex items-center justify-center p-4 transition-all duration-300 bg-white shadow-md w-28 h-28 rounded-2xl group-hover:shadow-lg">
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="object-contain w-full h-full transition-transform duration-300 transform group-hover:scale-110"
                  />
                </div>

                <div className="absolute px-3 py-1 text-sm text-white transition-opacity duration-300 transform -translate-x-1/2 bg-gray-900 rounded-lg opacity-0 -bottom-12 left-1/2 group-hover:opacity-100 whitespace-nowrap">
                  <div className="absolute w-2 h-2 transform rotate-45 -translate-x-1/2 bg-gray-900 -top-1 left-1/2"></div>
                  {skill.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
