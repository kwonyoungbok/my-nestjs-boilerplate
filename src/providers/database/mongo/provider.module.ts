import { Module } from '@nestjs/common';
import { TypegooseModule, TypegooseModuleOptions } from 'nestjs-typegoose';

import { MongoConfigService } from '@src/config/database/config.service';
import { MongoConfigModule } from '@src/config/database/config.module';

async function useFactory(
  config: MongoConfigService,
): Promise<TypegooseModuleOptions> {
  return {
    uri: config.uri,
  };
}

////////////////////////////////////////////////////////////////////////////////////////

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      imports: [MongoConfigModule],
      useFactory,
      inject: [MongoConfigService],
    }),
  ],
})
export class TypegoosePrividerModule {}
