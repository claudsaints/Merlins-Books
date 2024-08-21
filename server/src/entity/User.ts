import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nam: string

    @Column()
    mai: string

    @Column()
    pass: string

}
