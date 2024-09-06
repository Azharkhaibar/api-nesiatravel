import Router from 'express'
import { getDestinasi, getDestinasiById } from '../handler/destinasi'
const router = Router()

router.get('/destinasi', getDestinasi)
router.get('/destinasi/:id', getDestinasiById)

export default router
