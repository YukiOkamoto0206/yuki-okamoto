import { NextPage } from 'next';
import { Skill } from '../atoms/skill';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiGraphql,
  SiJamstack,
  SiFirebase,
  SiRstudio,
  SiPython,
  SiMongodb,
  SiC,
  SiDocker,
  SiSwift,
} from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

export const Skills: NextPage = () => {
  const size = 64;
  const skills = [
    { skill: 'JavaScript', imageurl: <SiJavascript size={size} /> },
    { skill: 'TypeScript', imageurl: <SiTypescript size={size} /> },
    { skill: 'React', imageurl: <FaReact size={size} /> },
    { skill: 'Next.js', imageurl: <SiNextdotjs size={size} /> },
    { skill: 'Express', imageurl: <SiExpress size={size} /> },
    { skill: 'NestJS', imageurl: <SiNestjs size={size} /> },
    { skill: 'Docker', imageurl: <SiDocker size={size} /> },
    { skill: 'GraphQL', imageurl: <SiGraphql size={size} /> },
    { skill: 'Jamstack', imageurl: <SiJamstack size={size} /> },
    { skill: 'HTML 5', imageurl: <SiHtml5 size={size} /> },
    { skill: 'TailwindCSS', imageurl: <SiTailwindcss size={size} /> },
    { skill: 'CSS 3', imageurl: <SiCss3 size={size} /> },
    { skill: 'Sass', imageurl: <SiSass size={size} /> },
    { skill: 'Firebase', imageurl: <SiFirebase size={size} /> },
    { skill: 'R', imageurl: <SiRstudio size={size} /> },
    { skill: 'Python', imageurl: <SiPython size={size} /> },
    { skill: 'MongoDB', imageurl: <SiMongodb size={size} /> },
    { skill: 'C', imageurl: <SiC size={size} /> },
    { skill: 'Swift', imageurl: <SiSwift size={size} /> },
  ];
  return (
    <div className="flex overflow-x-auto">
      {skills &&
        skills.map((skill) => (
          <Skill key={skill.skill} skill={skill.skill} url={skill.imageurl} />
        ))}
    </div>
  );
};
