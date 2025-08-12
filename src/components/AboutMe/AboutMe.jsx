import React from "react";
import { FaLaptopCode, FaFutbol, FaHandsHelping } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "framer-motion";

const cardVariantsLeft = {
  hidden: { opacity: 0, x: 100 }, // Start from right for left cards
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

const cardVariantsRight = {
  hidden: { opacity: 0, x: -100 }, // Start from left for right cards
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

const AboutMe = () => {
  return (
    <div className="mt-5 mb-10 max-w-screen-2xl mx-auto md:px-7 lg:px-16 px-2 md:py-1">
      <div className="bg-gray-200 rounded-2xl shadow-lg py-12 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Side Cards - animate from right */}
            <motion.div
              className="bg-base-100 shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 cursor-pointer"
              variants={cardVariantsLeft}
              initial="hidden"
              whileInView="visible"
              // --- CHANGE HERE ---
              // Remove once:true to allow animation on every scroll into view
              viewport={{ amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <GiJourney className="text-blue-500 text-2xl" />
                <h3 className="text-xl font-semibold">My Journey</h3>
              </div>
              <p className="text-gray-600">
                My programming journey started with curiosity about how websites
                work, which soon turned into a passion for building them. I
                began with basic HTML and CSS, learned JavaScript, and then
                progressed to React, Node.js, Express.js, and modern tools like
                Tailwind CSS, DaisyUI, and MambaUI to create responsive and
                user-friendly web applications.
              </p>
            </motion.div>

            {/* Right Side Cards - animate from left */}
            <motion.div
              className="bg-base-100 shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 cursor-pointer"
              variants={cardVariantsRight}
              initial="hidden"
              whileInView="visible"
              // --- CHANGE HERE ---
              viewport={{ amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <MdWork className="text-green-500 text-2xl" />
                <h3 className="text-xl font-semibold">Work I Enjoy</h3>
              </div>
              <p className="text-gray-600">
                I love building responsive, user-friendly applications that
                solve real-world problems. My focus is on clean code, smooth
                user experiences, and scalable solutions.
              </p>
            </motion.div>

            {/* Left Side Cards - animate from right */}
            <motion.div
              className="bg-base-100 shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 cursor-pointer"
              variants={cardVariantsLeft}
              initial="hidden"
              whileInView="visible"
              // --- CHANGE HERE ---
              viewport={{ amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaFutbol className="text-yellow-500 text-2xl" />
                <h3 className="text-xl font-semibold">Hobbies & Interests</h3>
              </div>
              <p className="text-gray-600">
                Outside of coding, I’m passionate about playing football and
                cricket. I also enjoy exploring new tech trends and learning
                emerging tools that push creativity forward.
              </p>
            </motion.div>

            {/* Right Side Cards - animate from left */}
            <motion.div
              className="bg-base-100 shadow-xl rounded-xl p-6 hover:shadow-2xl transition duration-300 cursor-pointer"
              variants={cardVariantsRight}
              initial="hidden"
              whileInView="visible"
              // --- CHANGE HERE ---
              viewport={{ amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaHandsHelping className="text-purple-500 text-2xl" />
                <h3 className="text-xl font-semibold">My Personality</h3>
              </div>
              <p className="text-gray-600">
                I’m curious, optimistic, and detail-oriented. I believe in
                continuous learning and love collaborating with people who share
                a passion for technology and innovation.
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 mt-8 flex flex-col md:flex-row items-center justify-between cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-lg">Let’s Connect!</h4>
              <p>
                I’m always open to exciting collaborations and innovative
                projects. Let’s build something amazing together!
              </p>
            </div>
            <Link
              to="/contact"
              href="#contact"
              className="mt-4 md:mt-0 bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
            >
              Get in Touch →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
