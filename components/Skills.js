import styles from '../styles/Skills.module.css';
import { FaReact, FaNodeJs, FaHtml5, FaPython, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiFigma, SiCplusplus, SiPhp, SiExpress, SiAngular, SiReact, SiDotnet, SiNextdotjs, SiCanva } from 'react-icons/si';

export default function Skills() {
  const skills = [
    // Osnovne tehnologije
    { name: "HTML & CSS", icon: <FaHtml5 />, description: "The building blocks of the web" },
    { name: "JavaScript", icon: <SiJavascript />, description: "Programming language for web development" },

    // Back-end i baze podataka
    { name: "Node.js", icon: <FaNodeJs />, description: "JavaScript runtime for backend development" },
    { name: "Express.js", icon: <SiExpress />, description: "Web framework for Node.js" },
    { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL database for modern applications" },
    { name: "MySQL", icon: <SiMysql />, description: "Relational database management system" },
    { name: "Microsoft SQL Server", icon: <SiMongodb />, description: "Relational database management system by Microsoft" },

    // Frontend framework i biblioteke
    { name: "React.js", icon: <FaReact />, description: "A library for building user interfaces" },
    { name: "Angular", icon: <SiAngular />, description: "A platform for building single-page applications" },
    { name: "Next.js", icon: <SiNextdotjs />, description: "Framework for React with server-side rendering" },

    // Alati za dizajn i razvoj
    { name: "Figma", icon: <SiFigma />, description: "Tool for UI/UX design and prototyping" },
    { name: "Canva", icon: <SiCanva />, description: "Graphic design platform for creating visuals" },

    // Programski jezici i alati za mobilne aplikacije
    { name: "Python", icon: <FaPython />, description: "High-level programming language for general purposes" },
    { name: "C++", icon: <SiCplusplus />, description: "Language for system-level programming" },
    { name: "PHP", icon: <SiPhp />, description: "A popular server-side scripting language" },
    { name: "React Native (Expo)", icon: <SiReact />, description: "Framework for building mobile apps using React" },

    // Version Control i Git
    { name: "Git & GitHub", icon: <FaGithub />, description: "Version control and collaboration tools" },

    // Cross-platform razvoj
    { name: ".NET MAUI", icon: <SiDotnet />, description: "Cross-platform framework for building native apps" },
  ];

  return (
    <section className={styles.skills} id="skills">
      <h2>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillIcon} data-tooltip={skill.description}>
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
