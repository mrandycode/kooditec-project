import { Router, Request, Response } from 'express'
import http from 'http'
import { HRFormCreate } from '../db/models/hr-form.model'
import constants from '../shared/constants'
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

router.post('/save', async (req, res: Response, next) => {
    try {
        // const { hrForm } = req.params
        console.log(req)

        // const options = constants.UPLOAD_RESUME
        // var postReq = await http.request(options, (response) => {
        //     response.setEncoding('utf8')
        //     let data = ''
        //     response.on('data', (chunk) => {
        //         data += chunk
        //     })

        //     response.on('end', () => {
        //         res.end(data)
        //     })
        // })
        // postReq.write(JSON.stringify(req))
        // postReq.end()

        // res.json(await hrFormService.save(req.body))
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
