import { Phone } from 'src/phones/entities/phone.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string; 

  @Column()
  lastname: string; 

  @Column()
  email: string; 

  @OneToMany(() => Phone, phone => phone.user, {
    cascade:true, eager: true,  nullable: false,
  })
    phones: Phone[];

}