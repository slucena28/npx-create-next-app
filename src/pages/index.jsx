import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h2>Bem-vindo ao Portal Turístico</h2>

        <p>
          Descubra destinos incríveis ao redor do mundo.
        </p>

        <Link href="/destinos" className={styles.botao}>
          Ver Destinos
        </Link>
      </div>
    </Layout>
  );
}
