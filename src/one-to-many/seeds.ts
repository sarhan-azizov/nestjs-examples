import { MigrationInterface, QueryRunner } from 'typeorm';
import { citiesSeed } from './cities.seed';
import { countriesSeed } from './countries.seed';

export class Seeds1673384735839 implements MigrationInterface {
  name = 'Seeds1673384735839';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await countriesSeed(queryRunner);
    await citiesSeed(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.resolve();
  }
}
