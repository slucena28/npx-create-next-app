import Layout from "../components/Layout";
import CardDestino from "../components/CardDestino";
import styles from "../styles/Destinos.module.css";

export default function Destinos() {
  const destinos = [
    {
      id: 1,
      nome: "Paris",
      imagem: "/paris.jpg",
      descricao: "A cidade luz, famosa pela Torre Eiffel e sua cultura."
    },
    {
      id: 2,
      nome: "Rio de Janeiro",
      imagem: "/rio.jpg",
      descricao: "Conhecida pelo Cristo Redentor e pelas belas praias."
    },
    {
      id: 3,
      nome: "Tóquio",
      imagem: "/tokyo.jpg",
      descricao: "Uma mistura fascinante de tradição e tecnologia."
    },
    {
      id: 4,
      nome: "Roma",
      imagem: "/roma.jpg",
      descricao: "Berço do Império Romano e lar do Coliseu."
    }
  ];

  return (
    <Layout>
      <h2>Destinos Turísticos</h2>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
            descricao={destino.descricao}
          />
        ))}
      </div>
    </Layout>
  );
}
