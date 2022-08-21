import { Product } from "../Main";

import styles from "./styles.module.scss";

export function Card({ id, image_url, title, type, purchase_link }: Product) {
  
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.imageContainer}>
          <img src={image_url} />

          <hr />
        </div>

        
        <div className={styles.info}>
          <h3 className={styles.title}>
            {title}
          </h3> 
        </div>
      </div>
      
      <a href={purchase_link} target="__blank">
        <button className={styles.button}>
          <div className={styles.btnText}>Ir para {type == 1 ? "Shopee" : "Aliexpress"}</div>
          <img src={type == 1 ? "/shopee.png" : "/aliexpress.webp"} className={styles.btnImage} />
        </button>
      </a>
    </div>
  );
}