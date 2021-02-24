import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoConfigService {
  constructor(private configService: ConfigService) {}

  get uri(): string {
    return this.configService.get('mongo.uri');
  }
  get useUnifiedTopology(): boolean {
    return this.configService.get('mongo.useUnifiedTopology');
  }

  get useNewUrlParser(): boolean {
    return this.configService.get('mongo.useNewUrlParser');
  }
}
