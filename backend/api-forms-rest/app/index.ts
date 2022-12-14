import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import router from './routes/index.router'
import { config } from './config/config'
import sequelize from './config/sequelize'

const app = express()
app.use(express.json())

dotenv.config()
const port = config.port
sequelize
    .authenticate()
    .then(async () => {
        console.log('Database connected')
        try {
            await sequelize.sync({ force: false })
        } catch (error) {
            console.log(error)
        }
    })
    .catch((e: any) => {
        console.error(e.message)
    })
app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})
