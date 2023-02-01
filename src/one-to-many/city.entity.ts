import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import { CountryEntity } from './country.entity';

@Entity('CITY')
export class CityEntity {
  @PrimaryGeneratedColumn('uuid', { primaryKeyConstraintName: 'CITY_id_pkey' })
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => CountryEntity, (countryEntity) => countryEntity.city, {
    nullable: false,
  })
  @JoinColumn({
    name: 'countryId',
    foreignKeyConstraintName: 'CITY_COUNTRY_countryId_fkey',
  })
  country: CountryEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
