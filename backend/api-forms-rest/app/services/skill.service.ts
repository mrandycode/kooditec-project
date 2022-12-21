import Skill, { SkillCreate } from '../db/models/skill.model'

export class SkillService {
    constructor() {}

    async find() {
        return await Skill.findAll()
    }

    async save(skill: SkillCreate) {
        return await Skill.create(skill)
    }
}

export default SkillService
