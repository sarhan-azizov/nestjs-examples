import { join } from 'path';
import { DataSource } from 'typeorm';

import { DOTENV } from './configs';
import { Seeds1675282867585 } from './one-to-many/seeds';
import { Seeds1673384735839 } from './many-to-many/seeds';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: DOTENV.database.port,
  username: DOTENV.database.user,
  password: DOTENV.database.password,
  database: DOTENV.database.database,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [Seeds1675282867585, Seeds1673384735839],
});
