import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-5 mb-10  max-w-screen-2xl mx-auto md:px-7 lg:px-16 px-2 md:py-1 ">
      <div
        /* bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] */
        className=" flex items-center justify-center md:px-4 md:py-10 bg-gray-200 rounded-2xl"
        id="contact"
      >
        <div className="max-w-6xl w-full bg-[#1E293B] rounded-2xl shadow-xl border border-cyan-500 p-8 md:p-16 grid md:grid-cols-2 gap-10 text-white">
          {/* className="max-w-6xl w-full bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-500 p-8 md:p-16 grid md:grid-cols-2 gap-10 text-white" */}
          {/* Left - Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-cyan-400">Contact Me</h2>
            <p className="text-gray-300">
              Feel free to get in touch with me.I'm always open to new projects,
              new ideas, and new opportunities. Have something in mind or just
              want to say hello? Feel free to reach out using the form or the
              contact details below.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>mdnurulislam.eng@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                <span>+880-1634064799</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
            className="space-y-5"
          >
            <div>
              <label className="text-sm">Your Name</label>
              <input
                type="text"
                placeholder="Your Name..."
                className="input input-bordered w-full mt-1 bg-white/10 placeholder-gray-400 text-white"
                required
              />
            </div>

            <div>
              <label className="text-sm">Your Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered w-full mt-1 bg-white/10 placeholder-gray-400 text-white"
                required
              />
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                className="textarea textarea-bordered w-full mt-1 bg-white/10 placeholder-gray-400 text-white"
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-cyan-500 hover:bg-cyan-600 text-white w-full mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
