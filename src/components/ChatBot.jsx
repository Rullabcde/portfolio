import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaComments } from "react-icons/fa";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="fixed flex flex-col items-center space-y-4 bottom-6 right-6">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.a
              href="https://wa.me/6281225121872"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 h-12 text-white bg-green-500 rounded-full shadow-lg">
              <FaWhatsapp size={24} />
            </motion.a>
            <motion.a
              href="mailto:choirulrasyid09@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center justify-center w-12 h-12 text-white bg-red-600 rounded-full shadow-lg">
              <FaEnvelope size={24} />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Chatbot Button */}
      <button
        onClick={toggleChatBot}
        aria-label="Toggle chat bot" // Adding accessible name for screen readers
        className="flex items-center justify-center w-16 h-16 text-white bg-blue-600 rounded-full shadow-lg">
        <FaComments size={28} />
      </button>
    </div>
  );
};

export default ChatBot;
