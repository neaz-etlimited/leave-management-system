import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@ApiTags('users') // Tag the controller for Swagger
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' }) // Describe the operation
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: User,
  }) // Successful response
  @ApiResponse({ status: 400, description: 'Bad Request.' }) // Error response
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' }) // Describe the operation
  @ApiResponse({ status: 200, description: 'List of users.', type: [User] }) // Successful response with an array of users
  @ApiResponse({ status: 404, description: 'No users found.' }) // Error response
  async findAll() {
    return this.usersService.findAll();
  }
}
