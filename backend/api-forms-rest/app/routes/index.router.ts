import express from 'express'
import customerForm from './customer-forms.router'
import platform from './platform.router'
import hrForm from './hr-form.router'
import profession from './profession.router'
import hrSkill from './hr-skill.router'
import skill from './skill.router'
import country from './country.router'

const app = express()
const router = express.Router()

app.use('/api-forms', router)
router.use('/customer', customerForm)
router.use('/platform', platform)
router.use('/hr-forms', hrForm)
router.use('/professions', profession)
router.use('/hr-skills', hrSkill)
router.use('/skills', skill)
router.use('/countries', country)

export default app
