import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AppConfigModule } from './config/app/config.module';
// import { S3ConfigModule } from './config/s3/config.module';
// import { MongoConfigModule } from './config/database/config.module';
import { TypegoosePrividerModule } from '@src/providers/database/mongo/provider.module';
import { UserModule } from '@src/controllers/user/controller.module';

@Module({
  imports: [AppConfigModule, TypegoosePrividerModule, UserModule],
  // imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
