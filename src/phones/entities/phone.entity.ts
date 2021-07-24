import { User } from "src/users/entities/user.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class Phone {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    number: string;

    @Column()
    userId: string;

    @ManyToOne(() => User, user => user.phones)
    user: User;

}   