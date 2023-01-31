import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DOTENV } from './configs';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
