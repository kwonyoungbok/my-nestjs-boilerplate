import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AppConfigModule } from './config/app/config.module';
import { S3ConfigModule } from './config/s3/config.module';
import { MongoConfigModule } from './config/database/config.module';

@Module({
  imports: [AppConfigModule, S3ConfigModule, MongoConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
