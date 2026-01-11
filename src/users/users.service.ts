import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  users = [
    {
      userId: 1,
      username: 'john_doe',
      password: 'password123',
      name: 'John Doe',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      username: 'jane_smith',
      password: 'securepass',
      name: 'Jane Smith',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      username: 'bob_jones',
      password: 'letmein',
      name: 'Bob Jones',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  create(createUserDto: CreateUserDto) {
    const newUser = {
      userId: this.users.length + 1,
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.userId === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const userIndex = this.users.findIndex((user) => user.userId === id);
    if (userIndex === -1) {
      return null;
    }
    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserDto,
      updatedAt: new Date(),
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((user) => user.userId === id);
    if (userIndex === -1) {
      return null;
    }
    const deletedUser = this.users[userIndex];
    this.users.splice(userIndex, 1);
    return deletedUser;
  }
}
