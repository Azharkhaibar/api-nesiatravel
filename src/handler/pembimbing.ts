import { Request, Response } from "express";
import sequelizeConnection from "../config/dbConnect";

export const getPembimbing = async (req: Request, res: Response) => {
    try {
        const [getResponse] = await sequelizeConnection.query('SELECT * FROM pembimbing');
        res.status(200).json({
            success: true,
            message: 'berhasil fetch data',
            data: getResponse
        })
    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
}

export const getPembimbingById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    console.log(`Fetching pembimbing with id: ${id}`); 
    const [getResponse] = await sequelizeConnection.query("SELECT * FROM pembimbing WHERE id= ?", {
      replacements: [id],
      type: "SELECT",
    });

    console.log(getResponse); 

    if (!getResponse || (Array.isArray(getResponse) && getResponse.length === 0)) {
      return res.status(404).json({
        success: false, 
        message: `Pembimbing dengan ID ${id} tidak ditemukan`,
      });
    }

    res.status(200).json({
      success: true,
      message: "pembimbing id ditemukan",
      data: getResponse,
    });
  } catch (error) {
    console.error("Error fetching pembimbing:", error); // Tambahkan logging error
    res.status(500).json({ error: "Internal server error" });
  }
};
