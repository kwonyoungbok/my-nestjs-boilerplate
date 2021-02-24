import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

import { User } from './user.model';
import { CreateUserDto, UpdateUserDto } from './user.model.dto';

@Injectable()
export class UserModelService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }

  async updateById(id: string, updateUserDto: UpdateUserDto): Promise<boolean> {
    const ret = await this.userModel.updateOne({ id }, updateUserDto);
    // 확인해야지

    console.log(ret);
    /**
     *
     */
    if (ret.ok) return true;
    return false;
  }

  async deleteById(id: string): Promise<boolean> {
    const ret = await this.userModel.deleteOne({ id });
    console.log('detele...', ret);
    if (ret.ok) return true;
    return false;
  }
}
