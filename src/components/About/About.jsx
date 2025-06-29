import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const info = [
    { label: "Name", value: "Md Nurul Islam" },
    { label: "Age", value: "25 Years" },
    { label: "Nationality", value: "Bangladeshi" },
    { label: "Study", value: "Daffodil International University" },
    { label: "Degree", value: "B.Sc in CSE" },
    { label: "Location", value: "Dhaka, Bangladesh" },
    { label: "Email", value: "mdnurulislam.eng@gmail.com" },
    { label: "Phone", value: "+880-1634064799" },
    { label: "Languages", value: "Bangla | English | Hindi" },
  ];

  return (
    <div className="bg-gray-200 rounded-2xl shadow-lg py-12 px-4 md:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Personal Details
          </h2>
          <p className="text-gray-500 text-sm font-semibold md:text-base">
            Here’s a quick overview of my background and contact information.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {info.map((item, idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="card-body">
                <h3 className="card-title text-base text-primary uppercase tracking-wide">
                  <strong>{item.label} :</strong>
                </h3>
                <p className="text-lg  font-medium text-gray-700">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
