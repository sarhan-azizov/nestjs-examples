import * as dotenv from 'dotenv';

dotenv.config();

export const DOTENV = {
  app: {
    port: String(process.env.PORT),
  },
  database: {
    client: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: true,
    synchronize: false,
  },
};
