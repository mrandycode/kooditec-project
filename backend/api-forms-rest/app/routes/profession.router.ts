import { Router, Request, Response } from 'express'
import ProfessionService from '../services/profession.service'

const router = Router()
const professionService = new ProfessionService()

router.get('/get-all', async (req: Request, res: Response, next) => {
    try {
        res.json(await professionService.find())
    } catch (error) {
        next(error)
    }
})

router.post('/save', async (req: Request, res: Response, next) => {
    try {
        res.json(await professionService.save(req.body))
    } catch (error) {
        next(error)
    }
})

export = router
