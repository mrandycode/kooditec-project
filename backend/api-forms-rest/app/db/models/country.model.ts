import { Optional } from 'sequelize'
import {
    Model,
    Table,
    AutoIncrement,
    Column,
    PrimaryKey,
    AllowNull,
    CreatedAt,
    DataType,
    UpdatedAt,
    Unique,
} from 'sequelize-typescript'

export interface CountryI {
    id?: number | null
    code: string
    name?: string
    currency?: string
    currencySymbol?: string
    createdDate: Date
    updatedDate: Date
}

export interface CountryCreate extends Optional<CountryI, 'id'> {}

@Table({
    tableName: 'countries',
    timestamps: true,
})
export default class Country extends Model implements CountryI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @Unique
    @AllowNull(false)
    @Column({ type: DataType.STRING(4) })
    code!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    name!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(10) })
    currency!: string

    @AllowNull(false)
    @Column({ field: 'currency_symbol', type: DataType.STRING(4) })
    currencySymbol!: string

    @CreatedAt
    @Column({ field: 'created_at' })
    createdDate!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedDate!: Date
}
