import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AUTHOR')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
