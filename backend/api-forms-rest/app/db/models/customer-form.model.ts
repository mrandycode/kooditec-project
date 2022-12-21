import { Optional } from 'sequelize'
import {
    Model,
    Table,
    AutoIncrement,
    Column,
    PrimaryKey,
    AllowNull,
    IsEmail,
    HasMany,
    CreatedAt,
    DataType,
    UpdatedAt,
} from 'sequelize-typescript'
import CustomerPlatform from './customer-platform.model'

export interface CustomerFormI {
    id?: number | null
    companyName: string
    contactName: string
    countryId: number
    email: string
    phone: string
    message: string
    platforms: CustomerPlatform[]
    createDate: Date
}

export interface CustomerCreate extends Optional<CustomerFormI, 'id'> {}

@Table({
    tableName: 'customers_forms',
})
export default class CustomerForm extends Model implements CustomerFormI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @Column({ field: 'company_name', comment: 'Name of company customer' })
    companyName!: string

    @AllowNull(false)
    @Column({ field: 'contact_name' })
    contactName!: string

    @AllowNull(false)
    @Column({ field: 'country_id', type: DataType.INTEGER('3') })
    countryId!: number

    @IsEmail
    @AllowNull(false)
    @Column({ type: DataType.STRING(64) })
    email!: string

    @Column({ type: DataType.STRING(50) })
    phone!: string

    @Column({ type: DataType.STRING(250) })
    message!: string 

    @HasMany(() => CustomerPlatform)
    platforms!: CustomerPlatform[]

    @CreatedAt
    @Column({ field: 'create_at', defaultValue: DataType.NOW })
    createDate!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt!: Date
}
