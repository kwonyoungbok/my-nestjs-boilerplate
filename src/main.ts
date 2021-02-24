import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AppConfigService } from './config/app/config.service';
import { S3ConfigService } from './config/s3/config.service';

// https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const appConfig: AppConfigService = app.get('AppConfigService');
  const s3Config: S3ConfigService = app.get('S3ConfigService');

  console.log(appConfig.port);
  console.log(s3Config.accessKey);
  await app.listen(3000);
}
bootstrap();
