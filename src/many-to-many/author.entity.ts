import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CityEntity } from './city.entity';

@Entity('COUNTRY')
export class CountryEntity {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'COUNTRY_id_pkey',
  })
  id: string;

  @Column()
  name: string;

  @OneToMany(() => CityEntity, (cityEntity) => cityEntity.country)
  city: CityEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
