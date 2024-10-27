import React, { useState } from "react";
import { X, Send, User } from "lucide-react";

const FloatingCTA = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleBookClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const waMessage =
      `*Message from ${name}* ✉️\n\n` +
      `*Message:* ${message}\n\n` +
      `Thank you for your message! 🙏\n`;

    const waUrl = `https://wa.me/6281225121872?text=${encodeURIComponent(
      waMessage
    )}`;
    window.open(waUrl, "_blank");
    setShowForm(false);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center p-4 md:p-16">
      <div className="flex items-center justify-center w-full pt-10">
        <div className="relative w-full max-w-6xl p-8 mx-4 overflow-hidden text-center shadow-xl bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 translate-x-32 -translate-y-32 rounded-full opacity-10 bg-gradient-to-br from-white to-transparent" />
          <div className="absolute bottom-0 left-0 w-64 h-64 -translate-x-32 translate-y-32 rounded-full opacity-10 bg-gradient-to-tr from-white to-transparent" />

          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-100 md:text-xl">
            I'm currently available for freelance work. If you have a project
            that you want to get started, think you need my help with something
            or just fancy saying hey, then get in touch.
          </p>
          <div className="relative z-10">
            <button
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out rounded-full shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:shadow-2xl hover:from-green-600 hover:to-emerald-700 group"
              onClick={handleBookClick}>
              <span>Send Message</span>
              <Send className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeModal}>
          <div
            className="w-full max-w-md transition-all duration-300 transform animate-slideUp"
            onClick={(e) => e.stopPropagation()}>
            <div className="relative p-8 bg-white shadow-2xl rounded-2xl">
              <button
                onClick={closeModal}
                className="absolute p-1 transition-colors duration-200 rounded-full top-4 right-4 hover:bg-gray-100">
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <h2 className="text-2xl font-bold text-gray-800">
                Send a Message
              </h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleFormSubmit} className="mt-6 space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <User className="w-4 h-4 mr-2" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 text-gray-700 transition-shadow duration-200 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500"
                    placeholder="Rasyid"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <Send className="w-4 h-4 mr-2" />
                    Your Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 text-gray-700 transition-shadow duration-200 bg-gray-100 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500"
                    placeholder="I want to collaborate with you"
                    rows="4"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors duration-200 bg-gray-100 rounded-lg hover:bg-gray-200">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FloatingCTA;
