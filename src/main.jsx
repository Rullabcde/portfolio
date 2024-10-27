import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import FloatingCTA from "./components/FloatingCTA";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Skill />
    <Project />
    <FloatingCTA />
    <Footer />
    <ChatBot />
  </StrictMode>
);
