import { ThemeToggle } from '@/components/ThemeToggle';
import React, { ReactElement } from 'react';
import { 
  SiTypescript,
  SiJavascript,
  SiFirebase ,
  SiReact ,
  SiHtml5 ,
  SiTailwindcss,
  SiVercel,
  SiNextdotjs,
  SiGit,
  SiCss3,
  SiPostgresql,
 } from "react-icons/si";

const Resume: React.FC = () => {

  type Tech = {
    name: string;
    icon: ReactElement;
  }
  type TechExp = Tech[]
  const tech_exp: TechExp = [
    {name: "Next.js", icon: <SiNextdotjs/> },
    {name: "React", icon: <SiReact/> },
    {name: "TypeScript", icon: <SiTypescript/> },
    {name: "Tailwind", icon: <SiTailwindcss/> },
    {name: "JavaScript", icon: <SiJavascript/> },
    {name: "Git", icon: <SiGit/> },
    {name: "HTML", icon: <SiHtml5/> },
    {name: "CSS", icon: <SiCss3/> },
    {name: "Vercel", icon: <SiVercel/> },
    {name: "Firebase", icon: <SiFirebase/> },
    {name: "PostgreSQL", icon: <SiPostgresql/> },
    // {name: "Stripe", icon: <SiStripe/> },
  ]

  type HeadingTwoProps = {
    section_name: string;
  }
  const HeadingTwo = ({section_name}: HeadingTwoProps): ReactElement =>  {
    return (
      <h2 className="text-xl font-extrabold mb-2 border-b-2">
          {section_name}
      </h2>
    )
  }
  
  type Experience = {
    title: string;
    desc: Position;
  }
  type Position = {
    timeandplace: string;
    points: string[];
  }
  const experienceData: Experience[] = [
    {
      title: "Fullstack Next.js Developer",
      desc: 
        {
          timeandplace: "Self Employed · Calgary, AB · 2018 – Present",
          points: [
            "Built production-ready web applications using Next.js, React, TypeScript, and Tailwind CSS.",
            "Designed and deployed responsive, accessible UIs with dynamic content and API integration.",
            "Managed projects end-to-end, from GitHub version control to deployment on Vercel.",

          ]
        }      
    },
    {
      title: "Investment Advisor",
      desc: 
        {
          timeandplace: "National Bank Financial · Calgary, AB · Jan 2017 – Sep 2018",
          points: [
            "Transitioned into advisory role with focus on client acquisition, retention, and education.",
            "Formalized engagement workflows, ensuring repeatable, measurable, and compliant processes.",
            "Built lasting client relationships grounded in transparency and authenticity.",
          ]
        },
      
    },
    {
      title: "Investment Associate",
      desc:
        {
          timeandplace: "National Bank Financial · Calgary, AB · Mar 2015 – Jan 2017",
          points: [
            "Completed all CSI licensing requirements at accelerated pace while supporting advisors.",
            "Educated clients on fee-based fiduciary models and modern portfolio theory.",
            "Building account administration and client onboarding processes from first contact to transfers.",
            "Automated documentation using HTML/CSS, Puppeteer, and headless PDF rendering."
          ]
        },
    },
    
  ]

  return (
    <div className="max-w-3xl mx-auto p-6  font-sans print:p-0 print:max-w-full bg-white dark:bg-slate-950">
      <ThemeToggle />
        
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-black">Jaren Whitehouse</h1>
        <p className="text-2xl">Next.js & React Developer | Copywriter | Content Strategist</p>
        <p className=' text-xl font-light'>
          Calgary, AB | <a href="mailto:jarenwhitehouse@gmail.com" className="underline">jarenwhitehouse@gmail.com</a> | 
          <a href="https://github.com/m4cbeth/warpofolio" className="underline ml-2">GitHub</a> | 
          <a href="https://jarenwhitehouse.com" className="underline ml-2">Portfolio</a>
        </p>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <HeadingTwo section_name={"Summary"} />
        <p className=' font'>
          Full-stack developer fluent in Next.js, React, TypeScript, and Tailwind. 
          Former Investment Professional with 3+ years experience building client acquisition and retention frameworks. 
          I combine financial insight with modern front-end expertise to deliver scalable, polished applications.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <HeadingTwo section_name={"Experience"} />

        {
          experienceData.map((experience) => {
            return (
              <div className="mb-4">
                <h3 className="font text-xl">{experience.title}</h3>
                <p className="text-sm font-light italic">{experience.desc.timeandplace}</p>
                <ul className="list-disc list-inside font-light">
                {experience.desc.points.map((point) => {
                  return (
                    <li>{point}</li>                    
                  )
                })}
                </ul>
              </div>
            )
          })
        }


          {/* <ul className="list-disc list-inside font-extralight">
            <li>Formalized processes into repeatable frameworks ensuring consistency, efficiency, and measurable results.</li>
            <li>Built strong client relationships through structured, reliable workflows.</li>
          </ul> */}

      </section>

      {/* Skills */}
      <section className="mb-6">
        <HeadingTwo section_name={"Technical Skills"} />
        <div className="flex flex-wrap gap-2">
          {tech_exp.map(skill => (
            <div key={skill.name} className="flex gap-1  p-3 rounded bg-slate-800 text-slate-100 dark:bg-blue-950 text-xl">
              <div className="">{skill.icon}</div>
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      {/* <section>
        <HeadingTwo section_name={"Education"} />
        <p className="mb-1">Self-taught and bootcamp-style training in modern web development</p>
        <p>Professional development courses in Tailwind CSS and TypeScript</p>
      </section> */}
      <section>
        <HeadingTwo section_name={"Education"} />

        {/* Formal Education */}
        <div className="mb-4">
          <h3 className="font text-xl">B.A. Sociology, Minor in Psychology </h3>
          <p className="text-sm font-thin italic">University of Calgary · Specialization in Criminology · Graduated with Distinction · 2003 – 2012</p>
        </div>

        {/* Web Development */}
        <div className="mb-2">
          <h3 className="font text-xl">Web Development (Self-Taught 1995-Present)</h3>
          <ul className="list-disc list-inside font-extralight">
            <li>Extensive experience in HTML, CSS, JavaScript, React, Next.js, and TypeScript.</li>
            <li>Backend experience, including Node.js, Express, REST APIs, and both SQL and NoSQL databases.</li>
            <li>Deployed applications on Vercel, Netlify, Render, and Heroku with modern CI/CD workflows.</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Resume;
