import { Injectable, OnModuleInit } from '@nestjs/common';
import { InMemoryDatabase } from './in-memory-database';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SeedingService implements OnModuleInit {
  constructor(private readonly database: InMemoryDatabase) {}

  onModuleInit() {
    this.seed();
  }

  private seed() {
    console.log('seeding initial data');
    const users: User[] = [
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
    this.database.seedUsers(users);
  }
}
