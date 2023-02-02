import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';

import { AuthorEntity } from './author.entity';

@Entity('BOOK')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => AuthorEntity, {
    cascade: true,
    nullable: false,
  })
  @JoinTable({
    name: 'BOOK_AUTHOR',
    joinColumn: {
      name: 'bookId',
      foreignKeyConstraintName: 'BOOK_AUTHOR_bookId_fkey',
    },
    inverseJoinColumn: {
      name: 'authorId',
      foreignKeyConstraintName: 'BOOK_AUTHOR_authorId_fkey',
    },
  })
  authors: AuthorEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
