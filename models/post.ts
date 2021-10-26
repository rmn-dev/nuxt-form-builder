import {
  Contains,
  IsDate,
  IsEmail,
  IsFQDN,
  IsInt,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Required } from '~/lib/validators';

export class Post {
  @Required()
  @Length(10, 20)
  title!: string;

  @Contains('hello')
  text!: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating!: number;

  @Required()
  @IsEmail()
  email!: string;

  @IsFQDN()
  site!: string;

  @IsDate()
  createDate!: Date;
}
