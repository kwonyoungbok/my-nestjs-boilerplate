import { Injectable, Inject } from '@nestjs/common';

import { UserModelService } from '@src/models/user/model.service';
import { CreateUserDto } from '@src/models/user/model.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserModelService')
    private readonly userModelService: UserModelService,
  ) {}

  public async createUser(dto: CreateUserDto) {
    return this.userModelService.create(dto);
  }
}
