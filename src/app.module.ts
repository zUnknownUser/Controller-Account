import { Module } from '@nestjs/common';
import { AuthService } from './app.service';
import { AuthController } from './app.controller';
import { AuthRepository } from './app.repository';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AppModule {}