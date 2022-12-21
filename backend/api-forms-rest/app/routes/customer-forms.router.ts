import { Router, Request, Response } from 'express'
import CustomerFormService from '../services/customer.service'

const router = Router()
const customerFormService = new CustomerFormService()

router.get('/get-all', async (req: Request, res: Response, next) => {
    try {
        res.json(await customerFormService.find())
    } catch (error) {
        next(error)
    }
})

router.post('/save', async (req: Request, res: Response, next) => {
    try {
        res.json(await customerFormService.save(req.body))
    } catch (error) {
        next(error)
    }
})

router.post('/find-by-id', async (req: Request, res: Response, next) => {
    try {
        const body = req.body
        const id = body.id
        res.json(await customerFormService.findOne(id))
    } catch (error) {
        next(error)
    }
})

export default router
