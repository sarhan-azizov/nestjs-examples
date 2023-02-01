import { MigrationInterface, QueryRunner } from 'typeorm';
import { booksSeed } from './books.seed';
import { authorsSeed } from './authors.seed';

export class Seeds1673384735839 implements MigrationInterface {
  name = 'Seeds1673384735839';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await authorsSeed(queryRunner);
    await booksSeed(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await Promise.resolve();
  }
}
