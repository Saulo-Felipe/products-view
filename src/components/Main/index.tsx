import styles from "./styles.module.scss";
import { Card } from "../Card";


export function Main() {

  return (
    <>
      <div className={styles.inputContainer}>
        <input type={"text"} placeholder={"🔎 Procurar produto"}/>
      </div>

      <main className={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
}