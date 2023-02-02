import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DOTENV } from './configs';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DOTENV.database.host,
      port: DOTENV.database.port,
      username: DOTENV.database.user,
      password: DOTENV.database.password,
      database: DOTENV.database.database,
      logging: DOTENV.database.logging,
      synchronize: DOTENV.database.synchronize,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    CountriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
