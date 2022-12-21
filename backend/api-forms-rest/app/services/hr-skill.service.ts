import HRSkill, { HRSkillCreate } from '../db/models/hr-skill.model'

export class HRSkillService {
    constructor() {}

    async find() {
        return await HRSkill.findAll()
    }

    async save(hrSkill: HRSkillCreate) {
        return await HRSkill.create(hrSkill)
    }
}

export default HRSkillService