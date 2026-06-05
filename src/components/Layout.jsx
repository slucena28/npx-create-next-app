import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Portal Turístico</h1>

        <nav>
          <Link href="/">Início</Link>
          <Link href="/destinos">Destinos</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Portal Turístico</p>
      </footer>
    </>
  );
}
