import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
  {projects.map((project) => (
    <div className="lg:w-[400px] w-full hover:scale-110 hover:shadow-slate-300 transition-transform duration-300 ease-in-out" key={project.name}>
      <div className="block-container relative w-full h-[250px] rounded-xl overflow-hidden">
        {/* Use the full size for images */}
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
    </div>
  ))}
</div>


      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
