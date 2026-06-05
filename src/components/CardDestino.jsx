import styles from "./CardDestino.module.css";

export default function CardDestino({
  nome,
  imagem,
  descricao,
}) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} />

      <div className={styles.conteudo}>
        <h3>{nome}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  );
}
