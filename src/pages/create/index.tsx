import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import styles from "./styles.module.scss";
import { cloudinary } from "../../services/cloudinary";
import axios from "axios";
import { useState } from "react";
import { GetServerSideProps } from "next";

export default function createProduct() {
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(params: any) {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", params.image_url[0]);
    formData.append("upload_preset", "my-uploads");
    
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      formData
    );

    const { data: response } = await api.post("/createProduct", {...params, image_url: data.url});

    console.log("resp: ", response);
    
    if (response.success) { 
      alert("Produto cadastrado.");

    } else { 
      alert("Erro ao criar produto");
      console.log(response);
    }

    setLoading(false);
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Cadastrar um produto</h2>

        <div className={styles.formControl}>
          <label>Titulo do produto</label>
          <input type={"text"} placeholder={"Titulo"} {...register("title", { required: true })} />
        </div>

        <div className={styles.formControl}>
          <label>Imagem da capa</label>
          <input type={"file"} {...register("image_url", { required: true })} />
        </div>

        <div className={styles.formControl}>
          <label>Tipo: </label>
          <select {...register("type", { required: true })}>
            <option>1 - Shopee</option>
            <option>2 - Aliexpress</option>
          </select>
        </div>

        <button 
          type={"submit"}
          className={styles.btnSubmit}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Finalizar cadastro"}
        </button>
      </form>
    </div>
  );
}
