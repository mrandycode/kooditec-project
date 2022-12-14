import { config } from '../config/config'
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

export default {
    development: {
        url: URI,
        dialect: 'mysql',
    },
    production: {
        url: URI,
        dialect: 'mysql',
    },
}
