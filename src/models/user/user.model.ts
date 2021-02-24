import { prop } from '@typegoose/typegoose';
import { IsString, IsEmail } from 'class-validator';

export class User {
  @IsString()
  @prop({ required: true })
  id: string;

  @IsString()
  @prop({ required: true })
  password: string;

  @IsString()
  refreshToken: string;

  @IsEmail()
  @prop()
  email: string;

  @IsString()
  @prop()
  name: string;
}

// 핸드폰 번호 관련.. https://stackoverflow.com/questions/58172602/isphonenumber-npm-class-validator-how-to-add-multiple-countries-code
