import { IsString, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly password: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly name: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
