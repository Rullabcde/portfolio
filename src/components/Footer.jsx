import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-center text-gray-400 md:text-left">
            © 2024 Muhammad Choirul Rasyid. All rights reserved.
          </p>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <a
              href="https://github.com/Rullabcde"
              target="_blank"
              className="text-gray-400 transition-colors hover:text-blue-500"
              aria-label="Github">
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Rullabcde"
              target="_blank"
              className="text-gray-400 transition-colors hover:text-blue-500"
              aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/rullabcd"
              target="_blank"
              className="text-gray-400 transition-colors hover:text-blue-500"
              aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:choirulrasyid09@gmail.com"
              target="_blank"
              className="text-gray-400 transition-colors hover:text-blue-500"
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
