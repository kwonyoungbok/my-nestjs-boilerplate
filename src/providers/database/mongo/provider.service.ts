import {
  TypegooseOptionsFactory,
  TypegooseModuleOptions,
} from 'nestjs-typegoose';
import { Inject } from '@nestjs/common';

import { MongoConfigService } from '@src/config/database/config.service';

export class TypegooseConfigService implements TypegooseOptionsFactory {
  constructor(
    @Inject('MongoConfigService')
    private readonly mongoConfigService: MongoConfigService,
  ) {}

  createTypegooseOptions():
    | Promise<TypegooseModuleOptions>
    | TypegooseModuleOptions {
    return {
      uri: this.mongoConfigService.uri,
    };
  }
}
