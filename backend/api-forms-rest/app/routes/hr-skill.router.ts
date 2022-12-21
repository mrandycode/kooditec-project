import { Router, Request, Response } from 'express'
import HRSkillService from '../services/hr-skill.service'

const router = Router()
const hrSkillService = new HRSkillService()

router.get('/get-all', async (req: Request, res: Response, next) => {
    try {
        res.json(await hrSkillService.find())
    } catch (error) {
        next(error)
    }
})

router.post('/save', async (req: Request, res: Response, next) => {
    try {
        res.json(await hrSkillService.save(req.body))
    } catch (error) {
        next(error)
    }
})

export = router
