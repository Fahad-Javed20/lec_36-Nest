import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class InMemoryDatabase {
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.userId === id);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(id: number, updatedUser: Partial<User>): User | null {
    const userIndex = this.users.findIndex((user) => user.userId === id);
    if (userIndex === -1) {
      return null;
    }
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...updatedUser,
      updatedAt: new Date(),
    };
    return this.users[userIndex];
  }

  deleteUser(id: number): User | null {
    const userIndex = this.users.findIndex((user) => user.userId === id);
    if (userIndex === -1) {
      return null;
    }
    const deletedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return deletedUser;
  }

  seedUsers(users: User[]): void {
    this.users = users;
  }
}
