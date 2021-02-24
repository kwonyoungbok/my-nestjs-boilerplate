import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * app과 관련된 환경 변수 가져오는 함수.
 *
 * @class
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  //   get name(): string {
  //     return this.configService.get<string>('app.name');
  //   }
  //   get env(): string {
  //     return this.configService.get<string>('app.env');
  //   }
  //   get url(): string {
  //     return this.configService.get<string>('app.url');
  //   }

  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }
}
