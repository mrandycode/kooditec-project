import { Router, Request, Response } from 'express'
import CountryService from '../services/country.service'

const router = Router()
const countryService = new CountryService()

router.get('/get-all', async (req: Request, res: Response, next) => {
    try {
        res.json(await countryService.find())
    } catch (error) {
        next(error)
    }
})

router.post('/save', async (req: Request, res: Response, next) => {
    try {
        res.json(await countryService.save(req.body))
    } catch (error) {
        next(error)
    }
})

router.post('/find-by-id', async (req: Request, res: Response, next) => {
    try {
        const body = req.body
        const id = body.id
        res.json(await countryService.findOne(id))
    } catch (error) {
        next(error)
    }
})

export default router
