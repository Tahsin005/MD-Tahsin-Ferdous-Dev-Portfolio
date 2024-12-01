import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import resume from '../assets/resume/MD. Tahsin Ferdous Resume.pdf'

import { CTA } from "../components";
import { experiences, skills, competitive } from "../constants";
import { FaFileDownload } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Tahsin
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          A Computer Science and Engineering major, passionate about full-stack web development. Using Django for backend APIs and HTML, CSS, Tailwind CSS, JavaScript and React for frontend to build scalable web applications.
        </p>
      </div>
      <div className='mt-5 gap-3 flex text-slate-500'>
        <button className="text-black-500 bg-white py-2 pe-2 ps-1 rounded-xl border-slate-500 flex gap-x-1">
        <a href={resume} download='MD. Tahsin Ferdous Resume'>Download Resume!</a><FaFileDownload className="mt-1" />
        </button>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div
              className="w-20 h-20 hover:scale-150 transition-transform duration-300 ease-in-out"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-full flex justify-center items-center bg-white">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 my-4 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Till now I've worked as an intern, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Competitive Programming Milestones</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            From tackling coding challenges to participating in global competitions, here’s my story in numbers and ranks:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {competitive.map((comp, index) => (
              <VerticalTimelineElement
                key={comp.title}
                date={comp.profileName}
                iconStyle={{ background: comp.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={comp.logo}
                      alt={comp.title}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: comp.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className={`text-xl font-poppins font-semibold`}>
                    {comp.title}
                  </h3>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  <li
                    key={`experience-point`}
                    className='text-black-500 font-normal pl-1 text-lg'
                  >
                    {comp.rank}
                  </li>
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
