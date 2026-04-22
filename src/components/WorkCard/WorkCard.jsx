import { useEffect, useState } from "react";
import styles from "./WorkCard.module.css";
import { FiChevronRight } from "react-icons/fi";

export default function WorkCard() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch(() => setProjects([]));
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div>
          <div className={styles.header}>
            <h2>{project.title}</h2>
            <span className={styles.date}>{project.date}</span>
          </div>
          <div className={styles.card}>
            <h3>{project.description}</h3>
            <ul>
              {project.do.map((d) => (
                <li>{d}</li>
              ))}
            </ul>
            {project.url && (
              <div className={styles.url}>
                <FiChevronRight className={styles.icon} />
                <a
                  href="https://tip-calculator-eosin-ten.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.href}
                >
                  {project.url}
                </a>
              </div>
            )}

            <div className={styles.stack}>
              {project.stack.map((s) => (
                <span className={`${styles.tag} ${styles[s]}`}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </span>
              ))}
            </div>
            <div>{project.readme}</div>
          </div>
        </div>
      ))}
    </>
  );
}
