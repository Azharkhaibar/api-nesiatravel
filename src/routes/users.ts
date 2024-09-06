import Router from "express";
import { getKaryawan, getKaryawanById } from "../handler/users";
const router = Router();

router.get("/karyawan", getKaryawan); 
router.get("/karyawan/:id", getKaryawanById); 
export default router;
