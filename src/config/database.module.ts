import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService

@Module({
  imports: [
    ConfigModule, // Import ConfigModule to access ConfigService
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule here
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'), // Use ConfigService to get the URI
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
