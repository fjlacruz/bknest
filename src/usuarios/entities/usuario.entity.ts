import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar'})
  firstName: string;

  @Column({type:'varchar'})
  lastName: string;

  @Column({type:'varchar', nullable:false})
  username: string;

  @Column({type:'float'})
  salary: number;

  @Column({type:'int'})
  age: number;
}
