import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © 2024 Muhammad Choirul Rasyid. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/Rullabcde"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Github">
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Rullabcde"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/rullabcd"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:choirulrasyid09@gmail.com"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Email">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
