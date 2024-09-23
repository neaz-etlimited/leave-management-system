import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { LeaveModule } from './leave/leave.module';
// import { LeaveTypesModule } from './leave-types/leave-types.module';
import { DatabaseModule } from './config/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // This makes the configuration globally available
    }),
    DatabaseModule, // MongoDB connection
    AuthModule,
    UserModule,
    // UsersModule,
    // LeaveModule,
    // LeaveTypesModule,
  ],
})
export class AppModule {}
