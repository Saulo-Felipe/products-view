import { NextApiRequest, NextApiResponse } from "next"
import { cloudinary } from "../../services/cloudinary"; 
import { sequelize } from "../../services/database";

export default async function Delete(request: NextApiRequest, response: NextApiResponse) {
  try {
    const { url } = request.body;

    if (request.method == "POST") {
      console.log(url);
      const id = url.split("/")[8].split(".")[0];

      await sequelize.query(`
        DELETE FROM products
        WHERE image_url = '${url}'
      `);

      await cloudinary.uploader.destroy("My uploads/"+id);

      return response.json({ success: true });
    }

    throw true;

  } catch(e) {
    console.log(e);
    return response.json({ message: e });
  }
}