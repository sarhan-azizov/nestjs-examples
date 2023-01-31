import { NestFactory } from '@nestjs/core';

import { DOTENV } from './configs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(DOTENV.app.port);
}
bootstrap();
