import styles from "./styles.module.scss";

export function Card() {
  
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={"/me.jpeg"} />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>
          Lampada automatica de rotação de 20px 
        </div> 
      </div>

      <button className={styles.button}>
        <img src={"/shopee.png"} className={styles.btnImage} />
        <div className={styles.btnText}>Comprar na {"<shopee>"}</div>
      </button>
    </div>
  );
}