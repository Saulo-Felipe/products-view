import { NextApiRequest, NextApiResponse } from "next";
import { sequelize } from "../../services/database";


interface CreateProductBody {
  image_url: string;
  title: string;
  type: number | string;
}

export default async function createProduct(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === "POST") {
      let { image_url, title, type }: CreateProductBody = request.body;
      type = Number(String(type)[0]);
      
      await sequelize.query(`
        INSERT INTO products (image_url, title, type)
        VALUES (
          '${image_url}', 
          '${title}', 
          '${type}'
        );
      `);
  
      return response.json({ success: true });
    }
    
    throw true;

  } catch(e) {
    console.log(e);
    return response.json({ error: true, message: e });
  }
}