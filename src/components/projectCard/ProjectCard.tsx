import styles from "./ProjectCard.module.css"
import Image from "next/image";

type ProjectCardProps = {
  icon: string;
  title: string;
  number?: string;
  description: string;
  button: string;
};

export default function ProjectCard({
  icon,
  title,
  number,
  description,
  button,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Image src={icon} alt={title} width={439} height={169} />
      </div>

      <h3 className={styles.title}>{title}</h3>

      {number && <div className={styles.number}>{number}</div>}

      <p className={styles.description}>{description}</p>

      <button className={styles.button}>{button}</button>
    </div>
  );
}