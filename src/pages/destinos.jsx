import Layout from "../components/Layout";
import CardDestino from "../components/CardDestino";
import styles from "../styles/Destinos.module.css";

export default function Destinos() {
  const destinos = [
    {
      nome: "Paris",
      imagem: "/paris.jpg",
    },
    {
      nome: "Rio de Janeiro",
      imagem: "/rio.jpg",
    },
    {
      nome: "Tóquio",
      imagem: "/tokyo.jpg",
    },
    {
      nome: "Roma",
      imagem: "/roma.jpg",
    },
  ];

  return (
    <Layout>
      <h2>Destinos Turísticos</h2>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.nome}
            nome={destino.nome}
            imagem={destino.imagem}
          />
        ))}
      </div>
    </Layout>
  );
}
