import CustomerForm, { CustomerCreate } from '../db/models/customer-form.model'
import CustomerPlatform from '../db/models/customer-platform.model'

class CustomerFormService {
    constructor() {}

    async findOne(id: number): Promise<CustomerForm> {
        return (await CustomerForm.findByPk(id, { include: [CustomerPlatform] })
            .then((hrForm) => {
                return hrForm
            })
            .catch((err) => console.error(err))) as CustomerForm
    }

    async find() {
        return CustomerForm.findAll({
            include: [CustomerPlatform],
        })
    }

    async save(customer: CustomerCreate) {
        return await CustomerForm.create(customer, {
            include: [CustomerPlatform],
        })
    }
}

export default CustomerFormService
