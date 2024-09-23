import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto'; // DTO for user creation
import { User } from '../user/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>, // Inject Mongoose model
  ) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save(); // Save user to the database
  }

  // Find all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec(); // Fetch all users from the database
  }
}
