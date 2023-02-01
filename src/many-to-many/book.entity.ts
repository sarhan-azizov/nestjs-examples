import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CountryEntity } from './country.entity';
import { JoinTable } from 'typeorm/browser';

@Entity('CITY')
export class CityEntity {
  @PrimaryGeneratedColumn('uuid', { primaryKeyConstraintName: 'CITY_id_pkey' })
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => CountryEntity, (countryEntity) => countryEntity.city, {
    nullable: false,
  })
  @JoinTable({
    name: 'CITY_COUNTRY',
    joinColumn: {
      name: 'countryId',
      foreignKeyConstraintName: 'CITY_COUNTRY_countryId_fkey',
    },
    inverseJoinColumn: {
      name: 'cityId',
      foreignKeyConstraintName: 'CITY_COUNTRY_cityId_fkey',
    },
  })
  country: CountryEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
