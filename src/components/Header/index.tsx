import styles from "./styles.module.scss";


export function Header() {



  return (
    <div className={`${styles.area} ${styles.header}`}>
      <div className={styles.title}>
        <h1>Links de produtos da Shopee/Aliexpress</h1>
      </div>
      <ul className={styles.circles}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <li key={item} onClick={(e: any) => e.target.style.display = "none"}></li>)
        }
      </ul>
    </div >
  );
}