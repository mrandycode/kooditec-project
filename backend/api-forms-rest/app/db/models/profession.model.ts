import { Optional } from 'sequelize'
import {
    Model,
    Table,
    AutoIncrement,
    Column,
    PrimaryKey,
    AllowNull,
    CreatedAt,
    UpdatedAt,
    DataType,
    HasMany,
} from 'sequelize-typescript'
import Skill from './skill.model'

export interface ProfessionI {
    id?: number | null
    name?: string
    skills: Skill[]
}

export interface ProfessionCreate extends Optional<ProfessionI, 'id'> {}

@Table({
    tableName: 'professions',
    timestamps: true,
})
export default class Profession extends Model implements ProfessionI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    name?: string

    @HasMany(() => Skill)
    skills!: Skill[]

    @CreatedAt
    @Column({ field: 'created_at' })
    createdDate!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedDate!: Date
}
