import React from "react";
import { FaCode, FaPencilRuler, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCode className="text-5xl text-cyan-400" />,
    title: "Front-End Development",
    description:
      "Crafting fast, responsive, and modern web apps using React, JavaScript, and CSS. Strong foundation in MERN stack.",
  },
  {
    icon: <FaReact className="text-5xl text-cyan-400 animate-spin-slow" />,
    title: "React Applications",
    description:
      "I create React Applications that are fast and easy to manage. Building scalable single-page apps with React, custom hooks, and state management tools like Context API.",
  },
  {
    icon: <FaPencilRuler className="text-5xl text-cyan-400" />,
    title: "UI/UX Design",
    description:
      "I design simple and user-friendly interfaces using Figma. I focus on making things easy to use and look great.",
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Added title animation variants
const titleVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const MyServices = () => {
  return (
    <div className="bg-gray-200 rounded-2xl shadow-lg py-16 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-black mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={titleVariants}
        >
          My <span className="">Service's</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1E293B] border border-cyan-500 rounded-xl p-8 shadow-md hover:shadow-cyan-500/50 transition duration-300 text-white text-center hover:scale-[1.03]"
              initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              transition={{ delay: index * 0.3 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
