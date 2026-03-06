export default function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1>Поверни їх додому.</h1>
          <p>
            Благодійний фонд «Серце в дії» підтримує українських полонених,
            звільнених з полону та їхні родини.
          </p>

          <div style={styles.buttons}>
            <button style={styles.primary}>Дізнатися більше</button>
            <button style={styles.secondary}>Підтримати</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    backgroundImage: "url('/images/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative" as const,

  },
  overlay: {
    background: "rgba(0,0,0,0.5)",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    paddingTop: "200px",
  },
  content: {
    color: "white",
    padding: "60px",
    maxWidth: "600px",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
      gap: "15px",
    
  },
  primary: {
    padding: "12px 24px",
    background: "transparent",
    border: "1px solid white",
      cursor: "pointer",
     width: "387px",
      height: "76px",
  },
  secondary: {
    padding: "12px 24px",
    background: "#0856B4",
    border: "none",
    color: "white",
      cursor: "pointer",
     width: "387px",
      height: "76px",
  },
};