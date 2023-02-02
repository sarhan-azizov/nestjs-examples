import { QueryRunner } from 'typeorm';

import { AuthorEntity } from './author.entity';
import { BookEntity } from './book.entity';

export const booksSeed = async (queryRunner: QueryRunner): Promise<void> => {
  const books: Pick<BookEntity, 'name' | 'authors'>[] = [
    Object.assign(new BookEntity(), {
      name: 'Львов',
      authors: [
        Object.assign(new AuthorEntity(), {
          name: 'Сархан',
        }),
      ],
    }),
  ];

  await queryRunner.manager.save(books[0]);
};
