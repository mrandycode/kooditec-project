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
} from 'sequelize-typescript'

export interface PlatformI {
    id?: number | null
    name?: string
}

export interface PlatformCreate extends Optional<PlatformI, 'id'> {}

@Table({
    tableName: 'platforms',
    timestamps: true,
})
export default class Platform extends Model implements PlatformI {
    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @Column
    name?: string

    @CreatedAt
    @Column({ field: 'created_at' })
    createdDate!: Date

    @UpdatedAt
    @Column({ field: 'updated_at' })
    updatedDate!: Date
}
