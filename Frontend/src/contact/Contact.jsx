import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    setSubmitted(true);
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:py-10 px-4">
        {/* Heading */}
        <div className="mt-28 text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Contact <span className="text-pink-500">Us</span>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-300">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-10 max-w-md mx-auto bg-base-200 dark:bg-slate-800 p-6 rounded-lg shadow-md">
          
          {/* Success Message */}
          {submitted && (
            <p className="mb-4 text-green-600 text-center font-medium">
              ✅ Data submitted successfully!
            </p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                required
                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-900"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 duration-300"
            >
              Submit
            </button>
          </form>

          {/* Back to Home */}
          <Link to="/">
            <button className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
