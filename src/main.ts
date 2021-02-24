import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import { S3ConfigService } from './config/s3/config.service';
import { MongoConfigService } from './config/database/config.service';
// https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // pipe 라인도 모듈화 시켜야함..
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const appConfig: AppConfigService = app.get('AppConfigService');
  await app.listen(appConfig.port);
}
bootstrap();
