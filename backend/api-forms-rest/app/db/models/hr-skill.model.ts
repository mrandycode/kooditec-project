import { Optional } from 'sequelize'
import {
    Model,
    Table,
    AutoIncrement,
    Column,
    PrimaryKey,
    ForeignKey,
    CreatedAt,
    UpdatedAt,
    BelongsTo
} from 'sequelize-typescript'
import HRForm from './hr-form.model'
import Skill from './skill.model'

export interface HRSkillI {
    id?: number | null
    hrId: number
    skillId: number
}
export interface HRSkillCreate extends Optional<HRSkillI, 'id'> {}

@Table({
    tableName: 'hr_skills',
    timestamps: true,
})
export default class HRSkill extends Model implements HRSkillI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @ForeignKey(() => HRForm)
    @Column({ field: 'hr_id', unique: 'uniqueHRSkillsIDX01' })
    hrId!: number

    @BelongsTo(() => HRForm)
    HRForm!: HRForm

    @Column({
        field: 'skill_id',
        references: { model: Skill, key: 'id' },
        unique: 'uniqueHRSkillsIDX01',
    })
    skillId!: number

    @CreatedAt
    @Column({ field: 'created_at' })
    createdAt!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt!: Date
}
