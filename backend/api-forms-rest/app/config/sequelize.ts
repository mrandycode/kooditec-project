import { Sequelize } from 'sequelize-typescript'
import { config } from '../config/config'
import CustomerForm from '../db/models/customer-form.model'
import CustomerPlatform from '../db/models/customer-platform.model'
import Platform from '../db/models/platform.model'
// import setupModels from '../db/models/'

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

export const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: true,
    models:[CustomerForm, Platform, CustomerPlatform]
})

export default sequelize
