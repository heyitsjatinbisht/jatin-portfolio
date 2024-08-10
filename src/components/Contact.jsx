import React from "react";

const Contact = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto bg-black py-10 px-4 sm:py-20 sm:px-6"
      id="contact"
    >
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight primary">
          Contact Me
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="bg-[#161616] rounded-xl">
          <div className="p-6 sm:p-8">
            <form action="https://getform.io/f/avrepqma" method="POST">
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-[#161616] w-full px-4 py-3 text-gray-300 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-[#161616] w-full px-4 py-3 text-gray-300 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="bg-[#161616] w-full px-4 py-3 text-gray-300 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                  rows="6"
                ></textarea>
                <button
                  type="submit"
                  className="text-lg sm:text-xl w-full py-3 mt-4 font-semibold text-white bg-primary rounded-md hover:bg-pink-600 transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
