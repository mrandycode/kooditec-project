import { Router, Request, Response } from 'express'
import SkillService from '../services/skill.service'

const router = Router()
const skillService = new SkillService()

router.get('/get-all', async (req: Request, res: Response, next) => {
    try {
        res.json(await skillService.find())
    } catch (error) {
        next(error)
    }
})

router.post('/save', async (req: Request, res: Response, next) => {
    try {
        res.json(await skillService.save(req.body))
    } catch (error) {
        next(error)
    }
})

export = router
