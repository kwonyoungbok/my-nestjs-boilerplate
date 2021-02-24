import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class S3ConfigService {
  constructor(private configService: ConfigService) {}

  get accessKey(): string {
    return this.configService.get('s3.accessKey');
  }

  get secretAccessKey(): string {
    return this.configService.get('s3.secretAccessKey');
  }

  get region(): string {
    return this.configService.get('s3.region');
  }

  get bucket(): string {
    return this.configService.get('s3.bucket');
  }
  
}
