import { QueryRunner } from 'typeorm';

import { AuthorEntity } from './author.entity';
import { BookEntity } from './book.entity';
import { countries } from './countries.seed';

export const authorsSeed = async (queryRunner: QueryRunner): Promise<void> => {
  const cities: Pick<BookEntity, 'name' | 'author'>[] = [
    {
      name: 'Львов',
      author: Object.assign(new AuthorEntity(), { id: countries[0].id }),
    },
    {
      name: 'Киев',
      author: Object.assign(new AuthorEntity(), { id: countries[0].id }),
    },
    {
      name: 'Днепр',
      author: Object.assign(new AuthorEntity(), { id: countries[0].id }),
    },
    {
      name: 'Харьков',
      author: Object.assign(new AuthorEntity(), { id: countries[0].id }),
    },
    {
      name: 'Донецк',
      author: Object.assign(new AuthorEntity(), { id: countries[0].id }),
    },
  ];
  await queryRunner.manager.insert(
    BookEntity,
    cities.map((city) => Object.assign(new BookEntity(), city)),
  );
};
