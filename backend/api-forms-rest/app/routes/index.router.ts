import express from 'express'
import customerForms from './customer-forms.router'
import platform from './platform.router'

const app = express()
const router = express.Router()

app.use('/api-forms', router)
router.use('/customer', customerForms)
router.use('/platform', platform)

export default app
