import React, { useState } from "react";

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
      <div className="pt-10 items-center justify-center flex">
        <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-lg w-full max-w-6xl mx-4 text-center">
          <h1 className="text-3xl md:text-4xl text-white mb-4 font-bold">
            Contact Me
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-4">
            I'm currently available for freelance work. If you have a project
            that you want to get started, think you need my help with something
            or just fancy saying hey, then get in touch.
          </p>
          <div>
            <button
              className="transition-transform transform hover:scale-105 inline-block px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700"
              onClick={handleBookClick}>
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800">
              Send a Message
            </h2>
            <form onSubmit={handleFormSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2 text-sm"
                  rows="4"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FloatingCTA;
