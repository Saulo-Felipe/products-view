import styles from "./styles.module.scss";
import { Card } from "../Card";
import { api } from "../../services/api";
import { useEffect, useState, useRef } from "react";

export interface Product {
  id: number;
  image_url: string;
  title: string;
  type: number;
  purchase_link: string;
}

export function Main() {
  const products = useRef<Product[]>([]);
  const [filterProducts, setFilterProdutcts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setLoading(true);
    const { data } = await api.get("/products");
    setLoading(false);

    setFilterProdutcts([ ...data.products ]);
    products.current = data.products;
  }
  
  function searchProduct(searchQuery: string) {
    setFilterProdutcts(products.current.filter(
      item => item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      )
    );
  }
  
  return (
    <div className={styles.content}>
      <div className={styles.inputContainer}>
        <input 
          type={"text"} 
          placeholder={"🔎 Procurar produto"}
          onChange={({target}) => searchProduct(target.value)}
        />
      </div>

      <main className={styles.container}>
        {
          filterProducts.map(item => 
            <Card key={item.id} {...item} />
          )
        }
        {
          filterProducts.length == 0 && !loading ? (
            <div className={styles.noResult}>
              <img src={"/no-result.gif"} />
              <h1>Sem resultados</h1>
            </div>
          ) : ""
        }

      </main>
      { loading ? <div style={{ textAlign: "center" }}>Carregando...</div> : ""}
    </div>
  );
}