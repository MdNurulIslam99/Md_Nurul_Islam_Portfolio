import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterText = () => {
  return (
    <div className="  ">
      <h1 className="text-2xl md:text-4xl ">
        <strong>Hello I'm</strong>
        <strong className="px-5">Md Nurul Islam</strong> <br />
        <span className="text-emerald-600 font-bold px-10">
          <Typewriter
            words={[
              "Web Developer",
              "Frontend Developer",
              "Web Designer",
              "MERN Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="...."
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypewriterText;
