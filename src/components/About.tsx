import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { User, BookOpen, Code } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, index }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1.05,
        speed: 450,
      }}
      className="w-full xs:w-[250px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <div className="text-accent w-16 h-16 flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const services = [
    {
      title: "FULL STACK Devloper ",
      icon: <Code className="w-10 h-10" />,
    },
    {
      title: "BCA Student",
      icon: <BookOpen className="w-10 h-10" />,
    },
    {
      title: "GRAPHIC DESIGNER",
      icon: <User className="w-10 h-10" />,
    },
  ];

  return (
    <section id="about" className="relative w-full min-h-screen mx-auto py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About Me.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a passionate Full stack Developer and current BCA (Bachelor of Computer Applications) student with a focus on creating engaging and interactive web experiences. I specialize in HTML, CSS, JavaScript and React, constantly pushing my boundaries to learn new technologies and improve my skills.
          <br /><br />
          With a strong foundation in computer science principles and a keen eye for design, I strive to create clean, efficient, and user-friendly applications. My academic background in BCA has equipped me with a comprehensive understanding of programming concepts, data structures, and software development methodologies.
          <br /><br />
          When I'm not coding, I enjoy exploring new web technologies, participating in hackathons, and contributing to open-source projects. Let's work together to bring your ideas to life!
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;