import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // technologies: FETCH PROJECTS FROM JSON FILE
  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  // technologies: DETAILS MODAL HANDLER
  const handleDetailsClick = (project) => {
    setSelectedProject(project);
    document.getElementById("details_modal").showModal();
  };

  // technologies: GITHUB MODAL HANDLER
  const handleGithubClick = () => {
    document.getElementById("github_modal").showModal();
  };

  return (
    <div
      className="bg-base-100 mt-5 mb-10 max-w-screen-2xl mx-auto md:px-7 lg:px-16 px-2 md:py-1"
      id="projects"
    >
      <div className="max-w-8xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-500 mb-8">
          My Projects
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-gray-200 rounded-2xl shadow-2xl overflow-hidden border"
          >
            {/* Carousel */}
            <div className="md:w-1/2 w-full p-5">
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={3000}
                transitionTime={700}
                showStatus={false}
              >
                {project.images?.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`Slide ${i + 1}`}
                      className="object-cover h-100 w-full shadow-2xl rounded-lg"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full p-6 space-y-4">
              <h3 className="text-xl font-bold text-cyan-600">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>

              <div>
                <h4 className="font-semibold text-gray-800">Key Features:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {project.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="badge badge-outline badge-info text-base font-semibold p-4"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Live Site
                </a>

                <button
                  onClick={() => handleDetailsClick(project)}
                  className="btn btn-sm btn-outline"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* technologies: Project Details Modal */}
        <dialog id="details_modal" className="modal">
          <div className="modal-box bg-white text-black max-w-2xl">
            <h3 className="font-bold text-xl text-cyan-600 mb-3">
              {selectedProject?.title} - Project Overview
            </h3>

            <p className="mb-3 text-gray-800">{selectedProject?.description}</p>

            <div className="mb-3">
              <h4 className="font-semibold text-gray-800">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {selectedProject?.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="badge badge-outline badge-info px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold text-gray-800">Challenges:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {(Array.isArray(selectedProject?.challenges)
                  ? selectedProject?.challenges
                  : [selectedProject?.challenges]
                )?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-3">
              <h4 className="font-semibold text-gray-800">
                Improvements & Future Plans:
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                {(Array.isArray(selectedProject?.improvements)
                  ? selectedProject?.improvements
                  : [selectedProject?.improvements]
                )?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-4 flex-wrap">
              <a
                href={selectedProject?.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Live Site
              </a>

              <button
                onClick={handleGithubClick}
                className="btn btn-success btn-sm"
              >
                GitHub
              </button>
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-outline btn-error btn-sm">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>

        {/* technologies: GitHub Modal */}
        <dialog id="github_modal" className="modal">
          <div className="modal-box bg-white text-black max-w-md">
            <h3 className="font-bold text-xl text-cyan-600 mb-4">
              {selectedProject?.title} - GitHub Repositories
            </h3>

            <div className="space-y-3">
              <div>
                <p className="font-semibold">Client Side:</p>
                {selectedProject?.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    className="btn btn-sm btn-info mt-1"
                    rel="noopener noreferrer"
                  >
                    View Client Repo
                  </a>
                ) : (
                  <p className="text-red-500 text-sm">
                    No client repo available.
                  </p>
                )}
              </div>

              <div>
                <p className="font-semibold">Server Side:</p>
                {selectedProject?.github_server ? (
                  <a
                    href={selectedProject.github_server}
                    target="_blank"
                    className="btn btn-sm btn-success mt-1"
                    rel="noopener noreferrer"
                  >
                    View Server Repo
                  </a>
                ) : (
                  <p className="text-red-500 text-sm">
                    No server repo available.
                  </p>
                )}
              </div>
            </div>

            <div className="modal-action mt-6">
              <form method="dialog">
                <button className="btn btn-outline btn-error">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Projects;
