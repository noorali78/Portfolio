import {  motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
  color: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level, color, index }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1.05,
        speed: 450,
      }}
      className="w-[140px] sm:w-[150px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        viewport={{ once: true }}
        className="bg-tertiary rounded-lg p-4 flex flex-col items-center justify-center"
      >
        <div className="w-16 h-16 mb-3 flex items-center justify-center">
          <div
            className="w-12 h-12 flex items-center justify-center rounded-full"
            style={{ backgroundColor: `${color}33` }} 
            >
            <span className="text-3xl" role="img" aria-label={name}>
              {icon}
            </span>
          </div>
        </div>
        <h3 className="text-white text-[14px] font-bold text-center">{name}</h3>
        <div className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
            viewport={{ once: true }}
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  const frontendSkills  = [
    { name: "HTML", icon: "🌐", level: 100, color: "#E34F26" },
    { name: "CSS", icon: "🎨", level: 90, color: "#1572B6" },
    { name: "JavaScript", icon: "📜", level: 80, color: "#F7DF1E" },
    { name: "React", icon: "⚛️", level: 80, color: "#61DAFB" },
    { name: "Tailwind", icon: "🌊", level: 70, color: "#06B6D4" },
    { name: "Redux", icon: "🔄", level: 60, color : "#fefae0"},
    { name: "Figma", icon :"	🎨", level : 70, color: "#a2d2ff"}, 
    {name : "Node.Js",icon : "🧠", level : 80, color : "#e9edc9"} 
  ];

  const backendSkills = [
    { name: "SQL", icon: "🗃️", level: 65, color: "#4479A1" },
    { name: "C", icon: "🔍", level: 65, color: "#A8B9CC" },
    { name: "C++", icon: "🔧", level: 65, color: "#00599C" },
    {name : "Javascript", icon:"📜",level :80, color : "#f1faee"},
    {name : "MongoDb", icon : "🌿", level : 70, color : "#A8B9CC"}


  ];

  const toolsSkills = [
  
    { name: "GitHub", icon: "🐱", level: 80, color: "#181717" },
    { name: "VS Code", icon: "💻", level: 85, color: "#007ACC" },
  ];

  

  return (
    <section id="skills" className="relative w-full min-h-screen mx-auto py-16 bg-black-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My technical abilities</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Skills.</h2>
        </motion.div>

        <div className="mb-10">
          <h3 className="text-white text-[24px] font-semibold mb-6">Frontend Development</h3>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={skill.name} index={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-white text-[24px] font-semibold mb-6">Backend & Programming</h3>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            {backendSkills.map((skill, index) => (
              <SkillCard key={skill.name} index={index + frontendSkills.length} {...skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white text-[24px] font-semibold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            {toolsSkills.map((skill, index) => (
              <SkillCard key={skill.name} index={index + frontendSkills.length + backendSkills.length} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;