import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  // Animation Variants
  const projectVariant = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to visible
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="lg:w-[400px] w-full hover:scale-110 hover:shadow-slate-300 transition-transform duration-300 ease-in-out"
            initial="hidden" // Start hidden
            whileInView="visible" // Animate when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% of the element is visible
            variants={projectVariant} // Use the animation variant
          >
            <div className="block-container relative w-full h-[250px] rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Source Code
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
