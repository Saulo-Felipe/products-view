import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import styles from "./styles.module.scss";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function CreateProduct() {
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
          <input type={"file"} {...register("image_url", { required: true })} accept={"image/*"}/>
        </div>

        <div className={styles.formControl}>
          <label>Link para compra</label>
          <input placeholder={"Link da shopee ou aliexpress"} type={"text"} {...register("purchase_link", { required: true })} />
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

        <div className="navigation">
          <div>NAVEGA????O:</div> 
          <Link href={"/"}>Home</Link>
          <Link href={"/delete"}>P??gina de deletar</Link>
        </div>
      </form>

    </div>
  );
}
