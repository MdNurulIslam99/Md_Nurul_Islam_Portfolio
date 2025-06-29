import React, { useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const allProjects = useLoaderData();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center text-red-500 py-20 text-xl font-semibold">
        Project not found.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-cyan-600 mb-6">
        {project.title}
      </h1>

      {/* Carousel */}
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={700}
        showStatus={false}
      >
        {project.images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Screenshot ${idx + 1}`}
              className="rounded-xl h-80 object-cover w-full"
            />
          </div>
        ))}
      </Carousel>

      {/* Description */}
      <p className="mt-6 text-gray-700 text-lg">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-2">Tech Stack:</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="badge badge-outline badge-info text-base font-medium px-3 py-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Challenges */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-1">Challenges Faced:</h3>
        <ul className="list-disc list-inside text-gray-600">
          {project.challenges.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Improvements */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-1">
          Improvements & Future Plans:
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          {project.improvements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Live Site
        </a>

        <button onClick={() => setModalOpen(true)} className="btn btn-success">
          GitHub
        </button>

        <button onClick={() => navigate(-1)} className="btn btn-outline">
          Back
        </button>
      </div>

      {/* GitHub Modal */}
      {modalOpen && (
        <dialog id="github_modal" className="modal modal-open">
          <div className="modal-box bg-white text-black">
            <h3 className="font-bold text-xl text-cyan-600 mb-4">
              {project.title} - GitHub Links
            </h3>

            <div className="space-y-3">
              <div>
                <p className="font-semibold">Client Side:</p>
                {project.github ? (
                  <a
                    href={project.github}
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
                {project.github_server ? (
                  <a
                    href={project.github_server}
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

            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-outline btn-error"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ProjectDetails;
