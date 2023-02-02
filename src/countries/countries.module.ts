import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookEntity } from '../many-to-many/book.entity';
import { AuthorEntity } from '../many-to-many/author.entity';
import { CountryEntity } from '../one-to-many/country.entity';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity, AuthorEntity, CountryEntity]),
  ],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}
