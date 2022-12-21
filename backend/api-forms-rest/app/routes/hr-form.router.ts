import { Router, Request, Response } from 'express'
import HRSkill, { HRSkillI } from '../db/models/hr-skill.model'
import HRFormService from '../services/hr-form.service'
import HRSkillService from '../services/hr-skill.service'

const router = Router()
const hrFormService = new HRFormService()
const hrSkillService = new HRSkillService()

router.get('/get-all', async (req: Request, res: Response, next) => {
    try {
        res.json(await hrFormService.find())
    } catch (error) {
        next(error)
    }
})

router.post('/save', async (req: Request, res: Response, next) => {
    try {
        const hr = await hrFormService.save(req.body)
        res.json(hr)
    } catch (error) {
        next(error)
    }
})

router.post('/find-by-id', async (req: Request, res: Response, next) => {
    try {
        const body = req.body
        const id = body.id
        res.json(await hrFormService.findOne(id))
    } catch (error) {
        next(error)
    }
})
export = router
