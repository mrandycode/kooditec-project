import HRForm, { HRFormCreate } from '../db/models/hr-form.model'
import HRProfession from '../db/models/hr-profession.model'
import HRSkill from '../db/models/hr-skill.model'

export class HRFormService {
    constructor() {}

    async findOne(id: number): Promise<HRForm> {
        return (await HRForm.findByPk(id, { include: [HRSkill, HRProfession] })
            .then((hrForm) => {
                return hrForm
            })
            .catch((err) => console.error(err))) as HRForm
    }

    async find(): Promise<HRForm[]> {
        return await HRForm.findAll({ include: [HRSkill, HRProfession] })
    }

    async save(hrFormCreate: HRFormCreate): Promise<HRForm> {
        return (await HRForm.create(hrFormCreate, {
            include: [HRSkill, HRProfession],
        })) as HRForm
    }
}

export default HRFormService
