import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'The name of the user', example: 'Testing User' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'testuser@gmail.com',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'strongpassword',
    minLength: 6,
  })
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @ApiProperty({
    description: 'The role of the user',
    example: 'user',
    required: false,
  })
  readonly role?: string; // Optional, defaults to 'user'
}
