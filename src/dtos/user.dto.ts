import { IsString, IsNotEmpty, IsNumber  } from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty({ message: 'Please define a product name' })
  name: string;


  @IsString()
  @IsNotEmpty({ message: 'Please add a password' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Please add email' })
  email: string;

  @IsNumber()
  age: number;
 
}




 
//   @Unique(['email'])
//   @Entity({ name: 'users' })
//   export class User {
//     @PrimaryGeneratedColumn()
//     id: number;
  
//     @Column('varchar', { nullable: false, length: 100 })
//     name: string;
  
//     @Column('integer', { nullable: true })
//     age: number;

//     @Column('varchar', { nullable: false, length: 100 })
//     email: string;

//     @Column('varchar', { nullable: false, length: 30 })
//     password: string;


//     @Column({ default: true })
//     isActive: boolean;
  
//     @CreateDateColumn()
//     createdAt: Date;

//     // Automatically stores the date when the record is updated
//     @UpdateDateColumn()
//     updatedAt: Date;

//     @OneToOne(() => Profile)
//     @JoinColumn() // Specifies ownership and where to put the foreign key
//     profile: Profile;

//   }

