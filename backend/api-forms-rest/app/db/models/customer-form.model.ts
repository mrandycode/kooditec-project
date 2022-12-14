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
} from 'sequelize-typescript'
import CustomerPlatform from './customer-platform.model'

export interface CustomerFormI {
    id?: number | null
    companyName: string
    contactName: string
    country: number
    email: string
    phone: string
    message: string
    platforms: CustomerPlatform[]
    createDate: Date
}

export interface CustomerCreate extends Optional<CustomerFormI, 'id'> {}

@Table({
    tableName: 'customers_forms',
    timestamps: true,
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
    @Column
    country!: number

    @IsEmail
    @AllowNull(false)
    @Column
    email!: string

    @Column
    phone!: string

    @Column
    message!: string

    @CreatedAt
    @Column({field:'create_at'})
    createDate!: Date

    @HasMany(() => CustomerPlatform)
    platforms!: CustomerPlatform[]
}
