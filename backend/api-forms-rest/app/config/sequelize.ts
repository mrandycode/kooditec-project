import { Sequelize } from 'sequelize-typescript'
import { config } from '../config/config'
import Country from '../db/models/country.model'
import CustomerForm from '../db/models/customer-form.model'
import CustomerPlatform from '../db/models/customer-platform.model'
import HRForm from '../db/models/hr-form.model'
import HRProfession from '../db/models/hr-profession.model'
import HRSkill from '../db/models/hr-skill.model'
import Platform from '../db/models/platform.model'
import Profession from '../db/models/profession.model'
import Skill from '../db/models/skill.model'

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

export const sequelize = new Sequelize(URI, {
    dialect: 'mysql',
    logging: true,
    models: [
        Country,
        CustomerForm,
        Platform,
        CustomerPlatform,
        Skill,
        Profession,      
        HRSkill,
        HRProfession,
        HRForm
    ],
})

export default sequelize
