"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // блокуємо скрол коли меню відкрите
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

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
          <span className={styles.logoText}>
            Благодійний фонд
            <br />
            «Серце в дії» 
          </span>
        </div>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          <a href="#about">Про фонд</a>
          <a href="#projects">Проєкти</a>
          <a href="#help">Допомогти</a>
          <a href="#news">Новини</a>
          <a href="#contacts">Контакти</a>
        </nav>

        {/* Burger button */}
        <button
          className={styles.burger}
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
  className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
  onClick={() => setIsOpen(false)}
/>
      )}

      {/* Slide Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <button
          className={styles.close}
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <a href="#about" onClick={() => setIsOpen(false)}>Про фонд</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Проєкти</a>
        <a href="#help" onClick={() => setIsOpen(false)}>Допомогти</a>
        <a href="#news" onClick={() => setIsOpen(false)}>Новини</a>
        <a href="#contacts" onClick={() => setIsOpen(false)}>Контакти</a>
      </div>
    </header>
  );
}