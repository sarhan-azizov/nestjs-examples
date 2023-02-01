import { faker } from '@faker-js/faker';
import { QueryRunner } from 'typeorm';

import { AuthorEntity } from './author.entity';

export const countries = [{ id: faker.datatype.uuid(), name: 'Украина' }];

export const countriesSeed = async (
  queryRunner: QueryRunner,
): Promise<void> => {
  await queryRunner.manager.insert(
    AuthorEntity,
    countries.map((country) => Object.assign(new AuthorEntity(), country)),
  );
};
