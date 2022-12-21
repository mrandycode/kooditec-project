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
import HRForm from './hr-form.model'
import Profession from './profession.model'

export interface HRProfessionI {
    id?: number | null
    hrId: number
    professionId: number
}

@Table({
    tableName: 'hr_profession',
    timestamps: true,
})
export default class HRProfession extends Model implements HRProfessionI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @ForeignKey(() => HRForm)
    @Column({ field: 'hr_id', unique: 'uniqueHRProfessionIDX01' })
    hrId!: number

    @BelongsTo(() => HRForm)
    HRForm!: HRForm
    
    @Column({
        field: 'profession_id',
        references: { model: Profession, key: 'id' },
        unique: 'uniqueHRProfessionIDX01',
    })
    professionId!: number

    @CreatedAt
    @Column({ field: 'created_at' })
    createdAt!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedAt!: Date
}
