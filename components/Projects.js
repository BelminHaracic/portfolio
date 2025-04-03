import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Projects.module.css";

// Dynamically import the icons so they only load on the client-side
const FaReact = dynamic(() => import("react-icons/fa").then((mod) => mod.FaReact), { ssr: false });
const FaNodeJs = dynamic(() => import("react-icons/fa").then((mod) => mod.FaNodeJs), { ssr: false });
const SiAngular = dynamic(() => import("react-icons/si").then((mod) => mod.SiAngular), { ssr: false });
const SiMongodb = dynamic(() => import("react-icons/si").then((mod) => mod.SiMongodb), { ssr: false });
const SiExpress = dynamic(() => import("react-icons/si").then((mod) => mod.SiExpress), { ssr: false });

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after the component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      title: "e-Bus",
      description:
        "Web application for bus companies enabling users to buy tickets and administrators to manage users, drivers, and routes.",
      detailedDescription: (
        <>
          🌐 The application provides an administrative environment for managing:
          <br />
          👤 Users (add, edit, delete, activate/deactivate).
          <br />
          👥 Drivers (add, edit, delete, activate/deactivate).
          <br />
          🚍 Bus routes (create, edit, delete routes).
          <br />
          🕒 Defining departure/arrival times and ticket prices.
          <br />
          📊 Viewing statistics on reservations and activities.
        </>
      ),
      image: "/images/1.jpg",
      link: "https://github.com/BelminHaracic/inf_sistem_screenshots_beta.git",
      technologies: [<SiAngular />, <SiMongodb />, <FaNodeJs />, <SiExpress />], // MEAN stack
    },
    {
      title: "Mobile App for Ticket Purchasing",
      description:
        "A mobile application enabling passengers to reserve and purchase tickets, view routes, and validate tickets using QR codes.",
      detailedDescription: (
        <>
          📱 Intuitive app for passengers offering:
          <br />
          🔍 Viewing all available bus routes.
          <br />
          🎫 Reserving tickets and generating QR codes for confirmation.
          <br />
          📜 Viewing reservation history and ticket statuses.
          <br />
          👤 Managing user profiles.
        </>
      ),
      image: "/images/app.jpg",
      link: "https://github.com/BelminHaracic/inf_sistem_screenshots_beta.git",
      technologies: [<FaReact />, <SiMongodb />, <FaNodeJs />, <SiExpress />], // MERN stack
    },
    {
      title: "Driver Mobile App",
      description:
        "A mobile application for drivers to scan passenger QR codes for ticket validation.",
      detailedDescription: (
        <>
          🧑‍✈️ A tool for drivers offering:
          <br />
          📲 Scanning passenger QR codes to validate reservations.
          <br />
          🧾 Viewing passenger details and their reservations.
          <br />
          🚍 Tracking routes and real-time reservation status (number of occupied and available seats).
        </>
      ),
      image: "/images/app2.jpg",
      link: "https://github.com/BelminHaracic/inf_sistem_screenshots_beta.git",
      technologies: [<FaReact />, <SiMongodb />, <FaNodeJs />, <SiExpress />], // MERN stack
    },
    {
      title: "Welcome to the Tourist Website 🌍🌴",
      description:
        "A web application designed to simplify the search for your perfect vacation, offering trip overviews and interactive features.",
      detailedDescription: (
        <>
          🏠 Main Page:
          <br />
          View all trips.
          <br />
          Filter by categories: Europe, Long-Distance Travel, Summer Holidays, etc.
          <br />
          Filter by ratings.
          <br />
          View reserved destinations.
        </>
      ),
      image: "/images/webtravel.jpg",
      link: "https://github.com/BelminHaracic/webtravel_302.git",
      technologies: [<SiAngular />, <FaNodeJs />, <SiMongodb />, <SiExpress />], // MEAN stack
    },
    {
      title: "JoyOfFastDelivery 🚚🍔",
      description:
        "Order food, explore restaurants, and enjoy fast delivery! 🍕🥡",
      detailedDescription: (
        <>
          📱 Intuitive mobile app offering:
          <br />
          🍴 Browse restaurants and view menus.
          <br />
          🛒 Add food to your cart and place orders.
          <br />
          💳 Enter payment details for quick checkout.
          <br />
          🏡 Provide your delivery address for seamless service.
          <br />
          🚀 Enjoy fast delivery and delicious meals!
        </>
      ),
      image: "/images/joy.jpg",
      link: "https://github.com/BelminHaracic/JoyOfFastDelivery-.NET-MAUI.git",
      technologies: [<FaReact />], // .NET MAUI doesn't require the usual web technologies
    },
  ];  

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const getVisibleProjects = () => {
    const leftIndex = (currentIndex - 1 + projects.length) % projects.length;
    const rightIndex = (currentIndex + 1) % projects.length;
    return [
      projects[leftIndex],
      projects[currentIndex],
      projects[rightIndex],
    ];
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.carouselWrapper}>
        <button onClick={prevProject} className={styles.navButton}>
          ←
        </button>
        <div className={styles.carouselContainer}>
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${index === 1 ? styles.current : styles.blurred}`}
            >
              <div className={styles.projectContent}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h3>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {index === 1
                    ? project.detailedDescription
                    : project.description}
                </p>
                <div className={styles.technologies}>
                  {isClient && // Only render icons after client-side rendering
                    project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techIcon}>
                        {tech}
                      </span>
                    ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewButton}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <button onClick={nextProject} className={styles.navButton}>
          →
        </button>
      </div>
    </section>
  );
}
