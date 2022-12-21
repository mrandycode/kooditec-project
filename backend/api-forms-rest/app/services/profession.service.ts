import Profession, { ProfessionCreate } from '../db/models/profession.model'

export class ProfessionService {
    constructor() {}

    async find() {
        return await Profession.findAll()
    }

    async save(profession: ProfessionCreate) {
        return await Profession.create(profession).then(() => {})
    }
}

export default ProfessionService
