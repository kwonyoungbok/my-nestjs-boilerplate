import { Controller, Get, Post, Body } from '@nestjs/common';

import { UserService } from './controller.service';
import { CreateUserDto } from '@src/models/user/model.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  sayHi() {
    return 'hi';
  }

  @Post('/post')
  createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }
}
