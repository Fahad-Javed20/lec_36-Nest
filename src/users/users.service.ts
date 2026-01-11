import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InMemoryDatabase } from 'src/database/in-memory-database';

@Injectable()
export class UsersService {
  constructor(private readonly database: InMemoryDatabase) {}

  create(createUserDto: CreateUserDto) {
    const users = this.database.getUsers();

    const newUser = {
      userId: users.length + 1,
      ...createUserDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.database.addUser(newUser);
    return newUser;
  }

  findAll() {
    return this.database.getUsers();
  }

  findOne(id: number) {
    return this.database.getUserById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const users = this.database.getUsers();
    const userIndex = users.findIndex((user) => user.userId === id);

    if (userIndex === -1) {
      return null;
    }

    const updatedUser = {
      ...users[userIndex],
      ...updateUserDto,
      updatedAt: new Date(),
    };

    this.database.updateUser(id, updatedUser);
    return updatedUser;
  }

  remove(id: number) {
    const users = this.database.getUsers();
    const userIndex = users.findIndex((user) => user.userId === id);

    if (userIndex === -1) {
      return null;
    }

    const deletedUser = users[userIndex];
    this.database.deleteUser(id);
    return deletedUser;
  }
}
