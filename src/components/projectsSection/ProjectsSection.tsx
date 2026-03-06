import styles from "./ProjectsSection.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import { projects } from "../../data/projects";



export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>НАШІ ПРОЄКТИ</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}