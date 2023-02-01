import { join } from 'path';
import { DataSource } from 'typeorm';

import { DOTENV } from '../configs';
import { Seeds1675282867585 } from './seeds';

import { CityEntity } from './city.entity';
import { CountryEntity } from './country.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: DOTENV.database.port,
  username: DOTENV.database.user,
  password: DOTENV.database.password,
  database: DOTENV.database.database,
  entities: [CityEntity, CountryEntity],
  migrations: [Seeds1675282867585],
});
