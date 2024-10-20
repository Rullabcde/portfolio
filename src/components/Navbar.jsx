import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Show, Hide Navbar
      if (scrollY > prevScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(scrollY);

      const sections = ["#home", "#about", "#project", "#contact"];
      const sectionOffsets = sections.map((section) => {
        const element = document.querySelector(section);
        return element ? element.offsetTop - 50 : 0;
      });

      const currentIndex = sectionOffsets.findIndex(
        (offset, index) =>
          scrollY >= offset && scrollY < (sectionOffsets[index + 1] || Infinity)
      );

      setActiveSection(sections[currentIndex]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const isActive = (section) => activeSection === section;

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-auto z-1000 transition-all duration-300 ease-in-out rounded-full
      ${isScrolled ? "bg-white shadow-lg" : "bg-white shadow-lg"} 
      ${isVisible ? "translate-y-0" : "-translate-y-16"}`}
      style={{
        marginTop: "1rem",
        fontFamily: "Montserrat, sans-serif",
        zIndex: 1000,
      }}>
      <div className="flex py-3 px-6 rounded-full">
        {[
          { section: "#home", label: "Home" },
          { section: "#about", label: "About" },
          { section: "#project", label: "Project" },
          { section: "#contact", label: "Contact" },
        ].map(({ section, label }) => (
          <div key={label} className="relative mx-4 group">
            <Link
              to={section.slice(1)}
              href={section}
              smooth={true}
              duration={500}
              className={`font-semibold transition-all duration-300 ${
                isActive(section) ? "text-blue-700" : "text-gray-700"
              }`}
              aria-label={`Navigasi ${label}`}>
              {label}
            </Link>
            <span
              className={`absolute left-0 right-0 bottom-0 h-0.5 bg-gray-700 transform scale-x-0 transition-transform duration-300 
                group-hover:scale-x-100 ${
                  isActive(section) ? "scale-x-0" : ""
                }`}
            />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
