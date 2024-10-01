import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './app.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: { username: string, password: string }): string {
    const { username, password } = body;
    return this.authService.login(username, password);
  }

  @Post('register')
  register(@Body() body: { username: string, password: string }): void {
    const { username, password } = body;
    this.authService.register(username, password);
  }

}