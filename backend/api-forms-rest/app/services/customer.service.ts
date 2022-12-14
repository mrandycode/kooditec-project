import CustomerForm, { CustomerCreate } from '../db/models/customer-form.model'
import CustomerPlatform from '../db/models/customer-platform.model'

class CustomerFormService {
    constructor() {}

    async find() {
        return CustomerForm.findAll({
            include: [CustomerPlatform],
        })
    }

    async save(customer: CustomerCreate) {
        return await CustomerForm.create(customer).then(() => {})
    }
}

export default CustomerFormService
