import Country, { CountryCreate } from '../db/models/country.model'

class CountryService {
    constructor() {}

    async findOne(id: number): Promise<Country> {
        return (await Country.findByPk(id)
            .then((hrForm) => {
                return hrForm
            })
            .catch((err) => console.error(err))) as Country
    }

    async find() {
        return await Country.findAll()
    }

    async save(country: CountryCreate) {
        return await Country.create(country)
    }
}

export default CountryService
