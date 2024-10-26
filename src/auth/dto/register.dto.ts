import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MinLength, IsIn } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber(null)
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  department: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsIn(['admin', 'manager', 'employee'])
  role: string;
}
