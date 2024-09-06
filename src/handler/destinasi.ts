import { Request, Response } from "express";
import sequelizeConnection from "../config/dbConnect";

export const getDestinasi = async (req: Request, res: Response) => {
    try {
        const [getResponse] = await sequelizeConnection.query('SELECT * FROM destinasi');
        if (!getResponse) {
            res.status(400).json({
                success: true,
                message: 'failed to fetch data',
                data: null
            })
        }

        res.status(200).json({
            success: true,
            message: 'berhasil fetch data',
            data: getResponse
        })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getDestinasiById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const [getResponse] = await sequelizeConnection.query('SELECT * FROM destinasi WHERE id= ?', {
            replacements: [id],
            type: 'SELECT'
        })

        console.log(getResponse);
        
        if (!getResponse || (Array.isArray(getResponse) && getResponse.length === 0)) {
            res.status(404).json({
                success: false,
                message: `failed to fecth ${id}`,
                data: null
            })
        }

        res.status(200).json({
            success: true,
            message: `berhasil fetch id ${id}`,
            data: getResponse
        })
    } catch (error) {
         res.status(500).json({ error: "Internal server error" });
    }
}
