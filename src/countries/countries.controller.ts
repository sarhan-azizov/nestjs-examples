import { Controller, Get, Post } from '@nestjs/common';

import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('/')
  getCountry(): Promise<any> {
    return this.countriesService.getCountry();
  }

  @Post('/')
  createCountry(): Promise<any> {
    return this.countriesService.createCountry();
  }
}
