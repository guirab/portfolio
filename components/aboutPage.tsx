import { Reveal, Card, CardSkills } from "@/components";

export const About = () => {
  const frontEnd = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Framer Motion",
    "TailwindCSS",
    "Redux",
  ];

  const tools = ["Git", "NextJs", "Figma", "Material UI", "Insomnia", "OAuth"];

  const backEnd = ["NodeJs", "MySql", "PostgreSQL"];

  return (
    <div className="flex flex-col px-8 space-y-8 medium:items-center">
      <div className="flex items-start flex-col w-full">
        <h1 className="text-4xl font-bold">About me</h1>
        <h2 className="text-lg">
          I am Full-Stack Developer with great passion for programming and
          innovating.
          <br />
          Always looking for new challenges and opportunities to learn and grow.
        </h2>
      </div>
      <h1 className="text-4xl font-bold">Skills</h1>
      <div className="flex gap-8 justify-center w-full items-center medium:flex-col medium:w-full text-white">
        <CardSkills className="bg-card-frontend" title="FrontEnd">
          {frontEnd.map((skill) => (
            <Reveal key={skill}>
              <Card>{skill}</Card>
            </Reveal>
          ))}
        </CardSkills>
        <CardSkills className="bg-card-tools" title="FrameWorks and Tools">
          {tools.map((skill) => (
            <Reveal key={skill}>
              <Card>{skill}</Card>
            </Reveal>
          ))}
        </CardSkills>
        <CardSkills className="bg-card-backend" title="BackEnd">
          {backEnd.map((skill) => (
            <Reveal key={skill}>
              <Card>{skill}</Card>
            </Reveal>
          ))}
        </CardSkills>
      </div>
    </div>
  );
};
