import {
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    Unique,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Profile } from './profile';

  
 
  @Unique(['email'])
  @Entity({ name: 'users' })
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column('varchar', { nullable: false, length: 100 })
    name: string;
  
    @Column('integer', { nullable: true })
    age: number;

    @Column('varchar', { nullable: false, length: 100 })
    email: string;

    @Column('varchar', { nullable: false, length: 30 })
    password: string;


    @Column({ default: true })
    isActive: boolean;
  
    @CreateDateColumn()
    createdAt: Date;

    // Automatically stores the date when the record is updated
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Profile)
    @JoinColumn() // Specifies ownership and where to put the foreign key
    profile: Profile;

  }

