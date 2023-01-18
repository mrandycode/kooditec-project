import { Optional } from 'sequelize'
import {
    AllowNull,
    AutoIncrement,
    Column,
    CreatedAt,
    DataType,
    IsEmail,
    Model,
    PrimaryKey,
    Table,
    UpdatedAt,
    HasOne,
    HasMany,
    Unique,
} from 'sequelize-typescript'
import Country from './country.model'
import HRProfession from './hr-profession.model'
import HRSkill from './hr-skill.model'

export interface HRFormI {
    id?: number | null
    name: string
    lastName: string
    genre: string
    mobile: string
    phone: string
    email: string
    countryId: number
    fileName: string
    hrSkills: HRSkill[]
    hrProfession: HRProfession
}
export interface HRFormCreate extends Optional<HRFormI, 'id'> {}

@Table({
    tableName: 'hr_form',
})
export default class HRForm extends Model implements HRFormI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    name!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(100), field: 'last_name' })
    lastName!: string

    @AllowNull(false)
    @Column({ type: DataType.STRING(1) })
    genre!: string

    @Column({ type: DataType.STRING(50) })
    mobile!: string

    @Column({ type: DataType.STRING(50) })
    phone!: string

    @Unique
    @AllowNull(false)
    @IsEmail
    @Column({ type: DataType.STRING(64) })
    email!: string

    @AllowNull(false)
    @Column({
        field: 'country_id',
        type: DataType.INTEGER('3'),
        references: { model: Country, key: 'id' },
    })
    countryId!: number

    @Unique
    @AllowNull(false)
    @Column({ field: 'file_name', type: DataType.STRING(100) })
    fileName!: string

    @CreatedAt
    @Column({ field: 'create_at', defaultValue: DataType.NOW })
    createDate!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt!: Date

    @HasOne(() => HRProfession)
    hrProfession!: HRProfession

    @HasMany(() => HRSkill)
    hrSkills!: HRSkill[]
}
