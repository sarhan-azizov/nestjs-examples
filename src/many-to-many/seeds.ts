import { MigrationInterface, QueryRunner } from 'typeorm';
import { booksSeed } from './books.seed';

export class Seeds1675288934655 implements MigrationInterface {
  name = 'Seeds1675288934655';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await booksSeed(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.resolve();
  }
}
