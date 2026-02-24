"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>Серце в дії</div>

        <nav
          style={{
            ...styles.nav,
            display: isOpen ? "flex" : "none",
          }}
        >
          <a href="#about">Про фонд</a>
          <a href="#projects">Проєкти</a>
          <a href="#help">Допомогти</a>
          <a href="#news">Новини</a>
          <a href="#contacts">Контакти</a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={styles.button}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: "absolute" as const,
    width: "100%",
    top: 0,
    left: 0,
    padding: "20px 40px",
    zIndex: 1000,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  nav: {
    gap: "20px",
    flexDirection: "column" as const,
    position: "absolute" as const,
    top: "70px",
    right: "40px",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
  },
  button: {
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};