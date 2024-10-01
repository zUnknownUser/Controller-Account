import * as fs from 'fs';
import * as path from 'path';

export class AuthRepository {
  private readonly filePath = path.resolve(__dirname, '..', 'users.json');

  constructor() {
    this.ensureUsersFileExists();
  }

  private ensureUsersFileExists(): void {
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([]), 'utf8');
    }
  }

  private readUsers(): { username: string, password: string }[] {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      const users = JSON.parse(data);
      if (Array.isArray(users)) {
        return users;
      } else {
        console.error('Invalid users data format:', users);
        return [];
      }
    } catch (error) {
      console.error('Error reading users file:', error);
      return [];
    }
  }

  private writeUsers(users: { username: string, password: string }[]): void {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(users, null, 2), 'utf8');
    } catch (error) {
      console.error('Error writing users file:', error);
    }
  }

  validateUser(username: string, password: string): boolean {
    const users = this.readUsers();
    const user = users.find(user => user.username === username && user.password === password);
    return !!user;
  }

  addUser(username: string, password: string): void {
    const users = this.readUsers();
    users.push({ username, password });
    this.writeUsers(users);
  }
}