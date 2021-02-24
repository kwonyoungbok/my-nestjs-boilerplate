import { Module } from '@nestjs/common';
import { TypegooseModule, TypegooseModuleOptions } from 'nestjs-typegoose';

import { MongoConfigService } from '@src/config/database/config.service';
import { MongoConfigModule } from '@src/config/database/config.module';
import { TypegooseConfigService } from './provider.service';

////////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      imports: [MongoConfigModule],
      useClass: TypegooseConfigService,
    }),
  ],
  providers: [MongoConfigService, TypegooseConfigService],
})
export class TypegoosePrividerModule {}
