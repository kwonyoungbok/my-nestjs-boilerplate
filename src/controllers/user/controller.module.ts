import { Module } from '@nestjs/common';

import { UserModelModule } from '@src/models/user/model.module';
import { UserController } from './controller';
import { UserService } from './controller.service';

@Module({
  imports: [UserModelModule],
  controllers: [UserController],
  providers: [UserService, UserController],
})
export class UserModule {}
