import Profession, { ProfessionCreate } from '../db/models/profession.model'
import Skill from '../db/models/skill.model'

export class ProfessionService {
    constructor() {}

    async find() {
        return await Profession.findAll({
            include: [Skill],
        })
    }

    async save(profession: ProfessionCreate): Promise<Profession> {
        return (await Profession.create(profession, {
            include: [Skill],
        })) as Profession
    }
}

export default ProfessionService
