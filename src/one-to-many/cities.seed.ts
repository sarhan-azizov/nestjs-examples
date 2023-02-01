import { QueryRunner } from 'typeorm';

import { CountryEntity } from './country.entity';
import { CityEntity } from './city.entity';
import { countries } from './countries.seed';

export const citiesSeed = async (queryRunner: QueryRunner): Promise<void> => {
  const cities: Pick<CityEntity, 'name' | 'country'>[] = [
    {
      name: 'Львов',
      country: Object.assign(new CountryEntity(), { id: countries[0].id }),
    },
    {
      name: 'Киев',
      country: Object.assign(new CountryEntity(), { id: countries[0].id }),
    },
    {
      name: 'Днепр',
      country: Object.assign(new CountryEntity(), { id: countries[0].id }),
    },
    {
      name: 'Харьков',
      country: Object.assign(new CountryEntity(), { id: countries[0].id }),
    },
    {
      name: 'Донецк',
      country: Object.assign(new CountryEntity(), { id: countries[0].id }),
    },
  ];
  await queryRunner.manager.insert(
    CityEntity,
    cities.map((city) => Object.assign(new CityEntity(), city)),
  );
};
