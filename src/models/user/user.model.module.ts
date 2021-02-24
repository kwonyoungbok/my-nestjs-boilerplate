import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { UserModelService } from './user.model.service';
import { User } from './user.model';

@Module({
  imports: [TypegooseModule.forFeature([User])],
  providers: [UserModelService],
  exports: [UserModelService],
})
export class UserModelModule {}
