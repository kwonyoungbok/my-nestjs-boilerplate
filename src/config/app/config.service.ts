import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * 서버와 관련된 환경 변수 가져오는 함수.
 *
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return Number(this.configService.get<number>('app.port'));
  }
}
