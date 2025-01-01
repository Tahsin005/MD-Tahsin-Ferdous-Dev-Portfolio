import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import resume from '../assets/resume/MD. Tahsin Ferdous Resume.pdf'

import { CTA } from "../components";
import { experiences, skills, competitive } from "../constants";
import { FaFileDownload } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='font-semibold blue-gradient_text drop-shadow'>
          {" "}
          Tahsin
        </span>{" "}
        👋
      </h1>

      <div className='flex flex-col gap-3 mt-5 text-slate-500'>
        <p>
          A Computer Science and Engineering major, passionate about full-stack web development. Using Django for backend APIs and HTML, CSS, Tailwind CSS, JavaScript and React for frontend to build scalable web applications.
        </p>
      </div>
      <div className='flex gap-3 mt-5 text-slate-500'>
        <button className="flex py-2 bg-white text-black-500 pe-2 ps-1 rounded-xl border-slate-500 gap-x-1">
        <a href={resume} download='MD. Tahsin Ferdous Resume'>Download Resume!</a><FaFileDownload className="mt-1" />
        </button>
      </div>

      <div className="flex flex-col py-10">
        <h3 className="subhead-text">My Skills</h3>

        <div className="flex flex-wrap gap-12 mt-16">
          {skills.map((skill) => (
            <div
              className="w-20 h-20 transition-transform duration-300 ease-in-out hover:scale-150"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="flex items-center justify-center bg-white rounded-full btn-front">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="object-contain w-1/2 my-4 h-1/2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='flex flex-col gap-3 mt-5 text-slate-500'>
          <p>
            Till now I've worked as an intern, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='flex mt-12'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex items-center justify-center w-full h-full'>
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
                  <h3 className='text-xl font-semibold text-black font-poppins'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-base font-medium text-black-500'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 ml-5 space-y-2 list-disc'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='pl-1 text-sm font-normal text-black-500/50'
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
        <div className='flex flex-col gap-3 mt-5 text-slate-500'>
          <p>
            From tackling coding challenges to participating in global competitions, here’s my story in numbers and ranks:
          </p>
        </div>

        <div className='flex mt-12'>
          <VerticalTimeline>
            {competitive.map((comp, index) => (
              <VerticalTimelineElement
                key={comp.title}
                date={comp.profileName}
                iconStyle={{ background: comp.iconBg }}
                icon={
                  <div className='flex items-center justify-center w-full h-full'>
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

                <ul className='my-5 ml-5 space-y-2 list-disc'>
                  <li
                    key={`experience-point`}
                    className='pl-1 text-lg font-normal text-black-500'
                  >
                    {comp.rank}
                  </li>
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="py-16">
      <h3 className='subhead-text'>Days I Code</h3>
        <div className='flex flex-col gap-3 mt-5 text-slate-500'>

        </div>
        <GitHubCalendar
        username="tahsin005"
        colorScheme="light"
      />
      </div>


      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
