import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity('todo')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        type: 'varchar',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci'
    })
    title: string
    @Column({
        type: 'varchar',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci'
    })
    description: string
    @Column()
    dueDate: Date
    @Column({
        type: 'varchar',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci'
    })
    priority: string
    @Column(
    )
    status: number
}
