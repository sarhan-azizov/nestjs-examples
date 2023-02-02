import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from '../one-to-many/country.entity';
import { Repository } from 'typeorm';
import { BookEntity } from '../many-to-many/book.entity';
import { AuthorEntity } from '../many-to-many/author.entity';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private countryRepository: Repository<CountryEntity>,
    @InjectRepository(BookEntity)
    private bookRepository: Repository<BookEntity>,
  ) {}

  async getCountry(): Promise<any> {
    const foundCountry = await this.countryRepository.find({
      where: {
        id: 'd975db8d-f0b8-4a1d-aab1-f34d0764a723',
      },
    });

    return foundCountry;
  }

  async createCountry(): Promise<any> {
    const bookEntity = Object.assign(new BookEntity(), {
      name: 'book name',
      authors: [
        Object.assign(new AuthorEntity(), {
          id: '2ba8c0e8-a7bd-444a-99e7-819dfa9c1c95',
        }),
      ],
    });

    return this.bookRepository.save(bookEntity);
  }
}
