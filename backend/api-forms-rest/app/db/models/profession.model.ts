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

export interface ProfessionI {
    id?: number | null
    name?: string
}

export interface ProfessionCreate extends Optional<ProfessionI, 'id'> {}

@Table({
    tableName: 'professions',
    timestamps: true
})
export default class Profession extends Model implements ProfessionI {
    
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
