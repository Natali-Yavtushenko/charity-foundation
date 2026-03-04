"use client";

import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
       <div className={styles.logoWrapper}>
  <Image
    src="/logo.png"
    alt="Logo"
    width={160}
    height={160}
  />

  <div className={styles.logoText}>
    <span>Благодійний фонд</span>
    <span>«Серце в дії» </span>
  </div>
</div>

        <nav className={styles.nav}>
          <a href="#about">Про фонд</a>
          <a href="#projects">Проєкти</a>
          <a href="#help">Допомогти</a>
          <a href="#news">Новини</a>
          <a href="#contacts">Контакти</a>
        </nav>
      </div>
    </header>
  );
}
