import { useState, useEffect } from "react";
import { Product } from "../../components/Main";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

export default function Delete() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setLoading(true);
    const { data } = await api.get("/products");
    setLoading(false);


    setAllProducts([ ...data.products ]);
  }

  async function deleteProduct(url: string) {
    setLoading(true);
    const { data } = await api.post("/delete", { url });
    setLoading(false);

    if (data.success) {
      alert("Produto deletado com sucesso!");
      getProducts();
    } else {
      alert("Erro ao deletar produto");
      console.log(data);
    }
  }

  return (
    <div className={styles.container}>

      {
        allProducts.map(item => 
          <div key={item.id} className={styles.option}>
            <div className={styles.imageContainer}>
              <img src={item.image_url} />
            </div>

            <div className={styles.title}>{item.title}</div>

            <button
              onClick={() => deleteProduct(item.image_url)}
              disabled={loading}
            >Remover</button>
          </div>
        )
      }
    </div>
  );
}