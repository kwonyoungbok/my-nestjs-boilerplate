import { Module } from '@nestjs/common';

import { UserModelModule } from '@src/models/user/user.model.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [UserModelModule],
  controllers: [UserController],
  providers: [UserService, UserController],
})
export class UserModule {}
