import styles from "./styles.module.scss";
import { Card } from "../Card";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

export interface Product {
  id: number;
  image_url: string;
  title: string;
  type: number;
}

export function Main() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    const { data } = await api.get("/products");

    setProducts([ ...data.products ]);
  }

  useEffect(() => {
    getProducts();
  }, []);
  
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