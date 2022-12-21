import Platform, { PlatformCreate } from '../db/models/platform.model'

export class PlatformService {
    constructor() {}

    async find() {
        return await Platform.findAll()
    }

    async save(platform: PlatformCreate) {
        return await Platform.create(platform)
    }
}

export default PlatformService
