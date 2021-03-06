import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './config';
import { AppConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

// https://medium.com/the-crowdlinker-chronicle/creating-config-files-in-nestjs-dcd059ae15e4

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      validationSchema: Joi.object({
        APP_ENV: Joi.string().valid('dev', 'prod', 'test').default('dev'),
        APP_PORT: Joi.number().default(4001),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
