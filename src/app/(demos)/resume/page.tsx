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
    place: string;
    positions: Position[];
  }
  type Position = {
    title: string;
    points: string[];
  }
  const experienceData: Experience[] = [
    {
      place: "NBF",
      positions: [
        {
          title: "asssociate",
          points: [
            "one",
            "two",
            "three",
          ]
        },
        {
          title: "advise",
          points: [
            "one",
            "two",
            "three",
          ]
        },
      ]
    },
    {
      place: "Freelance",
      positions: [
        {
          title: "",
          points: [
            "one",
            "one",
            "one",
          ]
        }
      ]
    }
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
        <p className=' font-light'>
          Full-stack developer fluent in Next.js, React, TypeScript, and Tailwind. 
          Former Investment Professional with 3+ years experience building client acquisition and retention frameworks. 
          I combine financial insight with modern front-end expertise to deliver scalable, polished applications.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <HeadingTwo section_name={"Experience"} />

        {
          experienceData.map((experience, idx) => {
            return (
              <div className="mb-4">
                <h3 className="font text-xl">{experience.place}</h3>
                <p className="text-sm font-thin italic">National Bank Financial · Calgary, AB · Mar 2015 – Sep 2018</p>
              </div>
            )
          })
        }


          <ul className="list-disc list-inside font-extralight">
            <li>Developed and refined client acquisition and onboarding processes from first contact to onboarding.</li>
            <li>Formalized processes into repeatable frameworks ensuring consistency, efficiency, and measurable results.</li>
            <li>Built strong client relationships through structured, reliable workflows.</li>
          </ul>

        <div className="mb-4">
          <h3 className="font text-xl">Freelance Web Developer</h3>
          <p className="text-sm font-thin italic">Self-Employed · Calgary, AB · 2018 – Present</p>
          <ul className="list-disc list-inside font-extralight">
            <li>Built production-ready web applications using Next.js, React, TypeScript, and Tailwind CSS.</li>
            <li>Designed and deployed responsive, accessible UIs with dynamic content and API integration.</li>
            <li>Managed projects end-to-end, including GitHub version control, deployment, and portfolio presentation.</li>
          </ul>
        </div>
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
      <section>
        <HeadingTwo section_name={"Education"} />
        <p className="mb-1">Self-taught and bootcamp-style training in modern web development</p>
        <p>Professional development courses in Tailwind CSS and TypeScript</p>
      </section>
    </div>
  );
};

export default Resume;
