import { NextApiRequest, NextApiResponse } from "next";
import { sequelize } from "../../services/database";

export default async function Products(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === "GET") {
      const [products] = await sequelize.query(`
        SELECT * FROM products
      `);
  
      return response.json({ products });
    }

    throw true;
  } catch(e) {
    console.log(e);
    return response.json({ message: e });
  }
}