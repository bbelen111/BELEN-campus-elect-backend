import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env"
    })
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, PrismaService],
})
export class AppModule {}
