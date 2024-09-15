import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qg2wvs2",
        "template_dwioknf",
        form.current,
        "Rf_JV3bPCJlaUGXXy"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-2xl rounded-lg p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Contact Me
        </h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter your message"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-5 bg-blue-600 text-white font-medium text-sm rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
