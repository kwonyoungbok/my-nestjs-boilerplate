import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './config';
import { S3ConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.APP_ENV}`,
      load: [configuration],
      validationSchema: Joi.object({
        S3_ACCESS_KEY_ID: Joi.string(),
        S3_SECRET_ACCESS_KEY: Joi.string(),
        S3_REGION: Joi.string().default('ap-northeast-2'),
        S3_BUCKET: Joi.string().default('moai-collected-data'),
      }),
    }),
  ],
  providers: [ConfigService, S3ConfigService],
  exports: [ConfigService, S3ConfigService],
})
export class S3ConfigModule {}
