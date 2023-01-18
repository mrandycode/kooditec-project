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
    ForeignKey,
} from 'sequelize-typescript'
import Profession from './profession.model'

export interface SkillI {
    id?: number | null
    name?: string
    professionId: number
}

export interface SkillCreate extends Optional<SkillI, 'id'> {}

@Table({
    tableName: 'skills',
    timestamps: true,
})
export default class Skill extends Model implements SkillI {
    @AutoIncrement
    @PrimaryKey
    @Column({
        unique: 'uniqueSkillProfessionIDX01',
    })
    id?: number

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    name?: string

    @PrimaryKey
    @ForeignKey(() => Profession)
    @Column({
        field: 'profession_id',
        unique: 'uniqueSkillProfessionIDX01',
    })
    professionId!: number

    @CreatedAt
    @Column({ field: 'created_at' })
    createdDate!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedDate!: Date
}
