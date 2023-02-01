import { faker } from '@faker-js/faker';
import { QueryRunner } from 'typeorm';

import { AuthorEntity } from './author.entity';

export const authors = [{ id: faker.datatype.uuid(), name: 'Sarhan Azizov' }];

export const authorsSeed = async (queryRunner: QueryRunner): Promise<void> => {
  await queryRunner.manager.insert(
    AuthorEntity,
    authors.map((author) => Object.assign(new AuthorEntity(), author)),
  );
};
