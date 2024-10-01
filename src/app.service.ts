// auth.service.ts
import { Injectable } from '@nestjs/common';
import { AuthRepository } from './app.repository';


@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  login(username: string, password: string): string {
    const isValidUser = this.authRepository.validateUser(username, password);
    if (isValidUser) {
      return 'token-de-autenticacao';
    } else {
      throw Error('Credenciais inválidas');
    }
  }

  register(username: string, password: string): void {
    this.authRepository.addUser(username, password);
  }
}

