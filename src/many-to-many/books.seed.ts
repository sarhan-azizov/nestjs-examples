import { QueryRunner } from 'typeorm';

import { AuthorEntity } from './author.entity';
import { BookEntity } from './book.entity';
import { authors } from './authors.seed';

export const booksSeed = async (queryRunner: QueryRunner): Promise<void> => {
  const books: Pick<BookEntity, 'name' | 'authors'>[] = [
    {
      name: 'Львов',
      authors: [Object.assign(new AuthorEntity(), { id: authors[0].id })],
    },
  ];

  await queryRunner.manager.insert(
    BookEntity,
    books.map((book) => Object.assign(new BookEntity(), book)),
  );
};
