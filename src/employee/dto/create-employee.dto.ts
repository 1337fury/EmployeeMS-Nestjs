import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../auth/roles.enum'; 

export class CreateEmployeeDto {
  @ApiProperty({
	description: 'First name of the employee',
	example: 'Alice',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'Last name of the employee',
    example: 'Admin',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'Unique email address of the employee',
    example: 'alice.admin@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Phone number of the employee',
    example: '+212637278350',
  })
  @IsPhoneNumber('MA')
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({
    description: 'Position of the employee',
    example: 'Administrator',
  })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({
    description: 'Department of the employee',
    example: 'Administration',
  })
  @IsString()
  @IsNotEmpty()
  department: string;

  @ApiProperty({
	description: 'Password of the employee',
	example: 'password',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Role of the employee',
    example: 'admin',
    enum: ['admin', 'manager', 'employee'],
  })
  @IsIn(['admin', 'manager', 'employee'])
  role: Role;
}
