import Router from 'express'
import { getPembimbing, getPembimbingById } from '../handler/pembimbing'
const router = Router()

router.get('/pembimbing', getPembimbing)
router.get('/pembimbing/:id', getPembimbingById)

export default router