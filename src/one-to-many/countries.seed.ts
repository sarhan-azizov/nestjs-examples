import { faker } from '@faker-js/faker';
import { QueryRunner } from 'typeorm';

import { CountryEntity } from './country.entity';

export const countries = [{ id: faker.datatype.uuid(), name: 'Украина' }];

export const countriesSeed = async (
  queryRunner: QueryRunner,
): Promise<void> => {
  await queryRunner.manager.insert(
    CountryEntity,
    countries.map((country) => Object.assign(new CountryEntity(), country)),
  );
};
