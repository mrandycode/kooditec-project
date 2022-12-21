import {
    Model,
    Table,
    AutoIncrement,
    Column,
    PrimaryKey,
    ForeignKey,
    CreatedAt,
    UpdatedAt,
    BelongsTo,
} from 'sequelize-typescript'
import CustomerForm from './customer-form.model'
import Platform from './platform.model'

export interface CustomerPlatformI {
    id?: number | null
    customerId: number
    platformId: number
}

@Table({
    tableName: 'customers_platform',
    timestamps: true,
})
export default class CustomerPlatform
    extends Model
    implements CustomerPlatformI
{
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @ForeignKey(() => CustomerForm)
    @Column({ field: 'customer_id', unique: 'uniqueCustomerPlatformIDX01' })
    customerId!: number

    @BelongsTo(() => CustomerForm)
    customerForm!: CustomerForm

    @PrimaryKey
    @Column({
        field: 'platform_id',
        references: { model: Platform, key: 'id' },
        unique: 'uniqueCustomerPlatformIDX01',
    })
    platformId!: number

    @CreatedAt
    @Column({ field: 'created_at' })
    createdAt!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt!: Date
}
