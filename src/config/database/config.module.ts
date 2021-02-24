import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './config';
import { MongoConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      //  isGlobal: true,
      envFilePath: `.env.${process.env.APP_ENV}`,
      load: [configuration],
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
        MONGO_USE_UNIFIED_TOPOLOGY: Joi.boolean().default(true),
        MONGO_USE_NEW_URL_PARSER: Joi.boolean().default(true),
      }),
    }),
  ],
  providers: [ConfigService, MongoConfigService],
  exports: [ConfigService, MongoConfigService],
})
export class MongoConfigModule {}
