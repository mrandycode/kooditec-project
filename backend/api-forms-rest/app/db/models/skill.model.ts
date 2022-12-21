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
} from 'sequelize-typescript'

export interface SkillI {
    id?: number | null
    name?: string
}

export interface SkillCreate extends Optional<SkillI, 'id'> {}

@Table({
    tableName: 'skills',
    timestamps: true,
})
export default class Skill extends Model implements SkillI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    name?: string

    @CreatedAt
    @Column({ field: 'created_at' })
    createdDate!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedDate!: Date
}
