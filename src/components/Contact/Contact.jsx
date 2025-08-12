import React, { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // <-- Import SweetAlert2

const Contact = () => {
  const form = useRef();

  const leftVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hyskud8",
        "template_ifgx3x9",
        form.current,
        "NI5p4K7Mh6KhxmhlJ"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#06b6d4",
          });
          e.target.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again later.",
            confirmButtonColor: "#06b6d4",
          });
          console.error(error.text);
        }
      );
  };

  return (
    <div className="mt-5 mb-10 max-w-screen-2xl mx-auto md:px-7 lg:px-16 px-2 md:py-1">
      <div
        className="flex items-center justify-center md:px-4 md:py-10 bg-gray-200 rounded-2xl"
        id="contact"
      >
        <div className="max-w-7xl w-full bg-[#1E293B] rounded-2xl shadow-xl border border-cyan-500 p-8 md:p-16 grid md:grid-cols-2 gap-10 text-white">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={rightVariants}
          >
            <h2 className="text-3xl font-bold text-cyan-400">Contact Me</h2>
            <p className="text-gray-300 text-justify">
              Feel free to get in touch with me. I'm always open to new
              projects, new ideas, and new opportunities. Have something in mind
              or just want to say hello? Feel free to reach out using the form
              or the contact details below.
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
          </motion.div>

          {/* Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={leftVariants}
          >
            <h2 className="text-3xl font-bold text-cyan-400">Contact Form</h2>
            <div>
              <label className="text-sm">Your Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name..."
                className="input input-bordered w-full mt-1 bg-white/10 placeholder-gray-400 text-white"
                required
              />
            </div>

            <div>
              <label className="text-sm">Your Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="email@example.com"
                className="input input-bordered w-full mt-1 bg-white/10 placeholder-gray-400 text-white"
                required
              />
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                name="message"
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
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
