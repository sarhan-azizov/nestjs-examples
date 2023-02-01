import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';

import { BookEntity } from './book.entity';
import { AuthorEntity } from './author.entity';

@Entity('BOOK_AUTHOR')
export class BookAuthorEntity {
  @PrimaryColumn('uuid')
  bookId: string;

  @PrimaryColumn('uuid')
  authorId: string;

  @ManyToOne(() => BookEntity, (bookEntity) => bookEntity.authors)
  @JoinColumn([
    {
      name: 'bookId',
      foreignKeyConstraintName: 'BOOK_AUTHOR_bookId_fkey',
    },
  ])
  books: BookEntity[];

  @ManyToOne(() => AuthorEntity, (authorEntity) => authorEntity.books, {
    cascade: true,
  })
  @JoinColumn([
    {
      name: 'authorId',
      foreignKeyConstraintName: 'BOOK_AUTHOR_authorId_fkey',
    },
  ])
  authors: AuthorEntity[];
}
