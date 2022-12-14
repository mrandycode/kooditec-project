import { Router, Request, Response } from 'express'
import PlatformService from '../services/platform.service'

const router = Router()
const platformService = new PlatformService()

router.get('/get-all', async (req: Request, res: Response, next) => {
    try {
        res.json(await platformService.find())
    } catch (error) {
        next(error)
    }
})

router.post('/save', async (req: Request, res: Response, next) => {
    try {
        res.json(await platformService.save(req.body))
    } catch (error) {
        next(error)
    }
})

export default router
