import { Global, Module } from '@nestjs/common';
import { InMemoryDatabase } from './in-memory-database';
import { SeedingService } from './seeding.service';

@Global()
@Module({
  imports: [],
  providers: [InMemoryDatabase, SeedingService],
  exports: [InMemoryDatabase],
})
export class DatabaseModule {}
